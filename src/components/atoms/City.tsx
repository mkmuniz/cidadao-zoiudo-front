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
        <label htmlFor="countries_disabled" className="block mb-2 text-sm font-spacemono text-gray-900 dark:text-white">Cidade:</label>
        <select id="countries_disabled" onChange={(e: any) => getCity(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Escolha uma cidade</option>
            {cities.map((city: any) => {
                return <option key={city.id} value={city.nome}>{city.nome}</option>
            })}
        </select>
    </>
}