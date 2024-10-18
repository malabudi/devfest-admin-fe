import React from 'react';

interface YearSelectorProps {
  selectedYear: number | null;
  onYearChange: (year: number) => void;
}

const generateYears = (startYear: number, endYear: number) => {
  const years = [];
  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }
  return years;
};

const YearSelector: React.FC<YearSelectorProps> = ({ selectedYear, onYearChange }) => {
  const years = generateYears(2023, 2030); //To change or add more or less years, change the start and end year here.

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onYearChange(parseInt(event.target.value));
  };

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-64">
        <label htmlFor="year-select" className="block text-lg font-medium text-gray-700 mb-2">
          Year
        </label>
        <select
          id="year-select"
          className="block w-full py-2 pl-3 pr-10 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg rounded-lg shadow-lg"
          value={selectedYear ?? ""}
          onChange={handleYearChange}
        >
          <option value="" disabled>
            Select Year
          </option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default YearSelector;
