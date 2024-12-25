import React, { useState } from 'react';
import { TableHeader } from '../Table/TableHeader';
import { TableRow } from '../Table/TableRow';
import { TableFilters } from '../Table/TableFilters';
import { Pagination } from '../Table/Pagination';
import { useTableSort } from '../../hooks/useTableSort';
import { useTableFilter } from '../../hooks/useTableFilter';
import { useTablePagination } from '../../hooks/useTablePagination';

export function CustomerTable({ customers, isLoading, onEdit, onDelete }) {
  const [filters, setFilters] = useState({
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    country: '',
    ip_address: '',
  });

  const { filteredData, handleFilterChange } = useTableFilter(customers, filters, setFilters);
  const { sortedData, sortField, sortDirection, handleSort } = useTableSort(filteredData);
  const {
    paginatedData,
    currentPage,
    rowsPerPage,
    totalPages,
    setCurrentPage,
    setRowsPerPage,
  } = useTablePagination(sortedData);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <TableFilters filters={filters} onFilterChange={handleFilterChange} />

      <div className="overflow-x-auto">
        <table className="w-full">
          <TableHeader
            fields={Object.keys(filters)}
            sortField={sortField}
            sortDirection={sortDirection}
            onSort={handleSort}
          />
          <tbody className="bg-white divide-y divide-gray-200">
            {isLoading ? (
              <tr>
                <td colSpan={8} className="px-6 py-4 text-center">Loading...</td>
              </tr>
            ) : (
              paginatedData.map((item) => (
                <TableRow
                  key={item.id}
                  item={item}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              ))
            )}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        rowsPerPage={rowsPerPage}
        totalResults={sortedData.length}
        onPageChange={setCurrentPage}
        onRowsPerPageChange={(rows) => {
          setRowsPerPage(rows);
          setCurrentPage(1);
        }}
      />
    </div>
  );
}
