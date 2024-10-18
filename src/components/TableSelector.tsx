import React from 'react';

const tables = [
  'Developers',
  'Facilitators',
  'Organizers',
  'Speakers',
  'Sponsors',
  'Assets',
  'Sessions',
];

interface TableSelectorProps {
  selectedTable: string;
  onTableChange: (table: string) => void;
}

const TableSelector: React.FC<TableSelectorProps> = ({ selectedTable, onTableChange }) => {
  const handleTableChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onTableChange(event.target.value);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="space-y-6">
        <h2 className="text-lg font-bold text-center">Select Table to View/Edit</h2>
        {tables.map((table) => (
          <div key={table} className="flex items-center">
            <input
              type="radio"
              id={table}
              name="table"
              value={table}
              checked={selectedTable === table}
              onChange={handleTableChange}
              className="h-4 w-4 accent-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer"
              />
            <label
              htmlFor={table}
              className="ml-3 block text-sm font-medium text-gray-700"
            >
              {table}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableSelector;
