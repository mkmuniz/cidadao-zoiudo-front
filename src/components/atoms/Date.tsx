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
        <div className="relative w-full">
            <div className="z-40 relative">
                <Datepicker
                    inputClassName="w-full border-x border-y border-white text-white placeholder-white text-sm rounded-lg p-2.5 bg-black"
                    placeholder={"Selecione o período de busca"}
                    value={value}
                    onChange={handleValueChange} />
            </div>
            <div className="z-30 absolute inset-0 w-full h-full bg-white transition duration-200 ease-out transform translate-x-1 translate-y-1 rounded border-white border-x border-y group-hover:-translate-x-0 group-hover:-translate-y-0">
            </div>
        </div>
    </>
};