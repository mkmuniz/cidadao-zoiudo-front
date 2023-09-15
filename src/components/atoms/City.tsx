"use client"

import { getCities } from "@/api/cities";
import { useState, useEffect } from "react";

export default function City({ state, getCity }: any) {
    const [cities, setCities]: any = useState([]);

    useEffect(() => {
        const fetchCities = async () => {
            const res: any = await getCities(state);

            setCities(res.body);
        };

        fetchCities();
    }, [state]);

    return <>
        <div className="relative w-full">
            <div className="z-40 relative">
                <select id="cities" onChange={(e: any) => getCity(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Escolha uma cidade</option>
                    {cities.map((city: any) => {
                        return <option key={city.id} value={city.nome}>{city.nome}</option>
                    })}
                </select>
            </div>
            <div className="z-30 absolute inset-0 w-5/6 h-full bg-white transition duration-200 ease-out transform translate-x-1 translate-y-1 rounded border-white border-x border-y group-hover:-translate-x-0 group-hover:-translate-y-0">
            </div>
        </div>
    </>
}