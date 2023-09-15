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
        <div className="relative w-full">
            <div className="z-40 relative">
                <select id="states" onChange={(e) => getState({ UF: e.target.value })} className="z-40 bg-gray-50 w-5/6 border-spacing-11 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500">
                    <option selected>Escolha um Estado</option>
                    {states && states.map((state: any) => {
                        return <option key={state.id} value={state.id}>{state.sigla} - {state.nome}</option>
                    })}
                </select>
            </div>
            <div className="z-30 absolute inset-0 w-5/6 h-full bg-white transition duration-200 ease-out transform translate-x-1 translate-y-1 rounded border-white border-x border-y group-hover:-translate-x-0 group-hover:-translate-y-0">
            </div>
        </div>
    </>
};