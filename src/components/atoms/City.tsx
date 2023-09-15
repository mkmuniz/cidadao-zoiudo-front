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
                <select id="cities" onChange={(e: any) => getCity(e.target.value)} className="z-40 bg-black border-y border-x w-5/6 border-spacing-11 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500">
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