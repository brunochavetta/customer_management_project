import React from 'react';
import { ArrowUpDown } from 'lucide-react';

export function TableHeader({ fields, sortField, sortDirection, onSort }) {
  return (
    <thead className="bg-gray-50">
      <tr>
        {fields.map((field) => (
          <th
            key={field}
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
            onClick={() => onSort(field)}
          >
            <div className="flex items-center gap-2">
              {field.replace('_', ' ')}
              <ArrowUpDown className="h-4 w-4" />
            </div>
          </th>
        ))}
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Actions
        </th>
      </tr>
    </thead>
  );
}