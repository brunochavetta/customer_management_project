import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';

export function TableRow({ item, onEdit, onDelete }) {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.id}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.first_name}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.last_name}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.email}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.gender}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.country}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.ip_address}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(item)}
            className="p-1 text-blue-600 hover:text-blue-800"
          >
            <Pencil className="h-4 w-4" />
          </button>
          <button
            onClick={() => onDelete(item.id)}
            className="p-1 text-red-600 hover:text-red-800"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}