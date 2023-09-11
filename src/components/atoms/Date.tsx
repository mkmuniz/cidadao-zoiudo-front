"use client"

import React, { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';

export default function DatePicker() {
    const [value, setValue]: any = useState({
        startDate: null,
        endDate: null
    });

    const handleValueChange = (newValue: any) => {
        setValue(newValue);
    };

    return <>
        <div>
            <span>
                Período:
            </span>
            <Datepicker 
            inputClassName="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder={"Selecione o período de datas"} 
            value={value} 
            onChange={handleValueChange} />
        </div>
    </>
};