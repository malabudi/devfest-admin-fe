"use client";

import YearDropdown from '@/components/YearDropdown';
import { useState, useEffect } from 'react';

const Home = () => {
  const [selectedYear, setSelectedYear] = useState<string>('');
  const currentYear = new Date().getFullYear();

  // Set the current year as default when the component loads
  useEffect(() => {
    setSelectedYear(currentYear.toString());
  }, [currentYear]);

  const handleDropdownChange = (value: string) => {
    setSelectedYear(value);
  };

  return (
      <YearDropdown startYear={2023} onChange={handleDropdownChange} value={selectedYear} />
  );

  
};

export default Home;
