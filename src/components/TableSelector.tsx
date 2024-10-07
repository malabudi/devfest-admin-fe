import React, { useState } from 'react';

const tables = [
  "Developers",
  "Facilitators",
  "Organizers",
  "Speakers",
  "Sponsors",
  "Assets",
  "Sessions"
];

const TableSelector: React.FC = () => {
  const [selectedTable, setSelectedTable] = useState<string>("");

  const handleTableChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTable(event.target.value);
  };

  return (
    <div>
      <h2>Select Table to View/Edit</h2>
      {tables.map((table) => (
        <div key={table}>
          <input
            type="radio"
            id={table}
            name="table"
            value={table}
            checked={selectedTable === table}
            onChange={handleTableChange}
          />
          <label htmlFor={table}>{table}</label>
        </div>
      ))}
    </div>
  );
};

export default TableSelector;
