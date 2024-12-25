import React from 'react';

export function TableFilters({ filters, onFilterChange }) {
  return (
    <div className="grid grid-cols-7 gap-4 p-4 border-b border-gray-200">
      {Object.keys(filters).map((field) => (
        <input
          key={field}
          type="text"
          placeholder={`Filter ${field.replace('_', ' ')}`}
          value={filters[field]}
          onChange={(e) => onFilterChange(field, e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ))}
    </div>
  );
}