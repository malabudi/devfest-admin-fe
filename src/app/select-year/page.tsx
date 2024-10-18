"use client"; 

import React, { useState } from 'react';
import YearSelector from '../../components/YearSelector';
import TableSelector from '../../components/TableSelector';

const SelectYearPage: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedTable, setSelectedTable] = useState<string>("");

  // Handler for year change
  const handleYearChange = (year: number) => {
    setSelectedYear(year);
  };

  // Handler for table change
  const handleTableChange = (table: string) => {
    setSelectedTable(table);
  };

  const handleViewEdit = () => {
    console.log(`Viewing/Editing ${selectedTable} for year ${selectedYear}`);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-20 px-6">
      <h1 className="text-4xl font-bold text-center mb-4">Select Year and Data</h1>
      
      <div className="w-full max-w-xs">
        <YearSelector selectedYear={selectedYear} onYearChange={handleYearChange} />
      </div>

      <div className="w-full max-w-xs mt-4">
        <TableSelector selectedTable={selectedTable} onTableChange={handleTableChange} />
      </div>

      <button 
        className="bg-green-500 text-white w-96 rounded py-1 mt-4" 
        type="submit"
        onClick={handleViewEdit}
        disabled={!selectedYear || !selectedTable}
      >
        View/Edit Table
      </button>
    </div>
  );
};

export default SelectYearPage;