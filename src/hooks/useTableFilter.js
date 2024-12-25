import { useCallback } from 'react';

export function useTableFilter(data, filters, setFilters) {
  const handleFilterChange = useCallback((field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  }, []);

  const filteredData = data.filter((item) => {
    return Object.entries(filters).every(([key, value]) => {
      if (!value) return true;
      return item[key]?.toString().toLowerCase().includes(value.toLowerCase());
    });
  });

  return { filteredData, handleFilterChange };
}