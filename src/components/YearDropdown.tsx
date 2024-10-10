"use client";

import React, { FC, useEffect, useState } from 'react';
import styles from '../styles/Dropdown.module.css';

interface YearDropdownProps {
    startYear: number;
    onChange: (value: string) => void;
    value: string;
}

const YearDropdown: FC<YearDropdownProps> = ({ startYear, onChange, value }) => {
    const [years, setYears] = useState<number[]>([]);
    let selectedDefaultValue = 0;
    useEffect(() => {
        const currentYear = new Date().getFullYear();
        const yearsArray = Array.from({ length: currentYear - startYear + 1 }, (_, i) => startYear + i);
        setYears(yearsArray);
    }, [startYear]);

    return (
        <div className={styles.selectContainer}>
            <h1 className="font-size: 26px;" >Year</h1>
        <select
            className={styles.select} 
            value={value}
            onChange={(e) => onChange(e.target.value)}
            >
                <option value={selectedDefaultValue} disabled>Select Year</option>
            {years.map((year) => (
                <option key={year} value={year.toString()}>
                    {year}
                </option>
            ))}</select>
        </div>
    );
};

export default YearDropdown;
