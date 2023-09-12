"use client"

import fetch from "node-fetch";
import { useEffect, useState } from "react"
import { getStates } from "@/api/states";

export default function State({ getState }: any) {
    const [states, setStates]: any = useState();

    useEffect(() => {
        const fetchStates = async () => {
            const res: any = await getStates();

            setStates(res.body);
        };

        fetchStates();
    }, []);

    return <>
        <select id="states" onChange={(e) => getState({ UF: e.target.value })} className="bg-gray-50 w-5/6 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Escolha um Estado</option>
            {states && states.map((state: any) => {
                return <option key={state.id} value={state.id}>{state.sigla} - {state.nome}</option>
            })}
        </select>
    </>
};