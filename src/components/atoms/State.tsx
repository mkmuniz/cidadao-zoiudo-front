"use client"

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
        <div className="relative w-full text-white">
            <div className="z-40 relative">
                <select id="states" onChange={(e) => getState(JSON.parse(e.target.value))} className="z-40 bg-black border-y border-x w-5/6 border-spacing-11 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400text-white">
                    <option selected>Escolha um Estado</option>
                    {states && states.sort((a: any, b: any) => {
                        const stateA = a.nome.toLowerCase();
                        const stateB = b.nome.toLowerCase();

                        if (stateA < stateB) {
                            return -1;
                        } else if (stateA > stateB) {
                            return 1;
                        } else {
                            return 0;
                        }
                    }).map((state: any) => {
                        return <option key={state.id} value={JSON.stringify({ UF: state.sigla, state: state.nome })}>{state.sigla} - {state.nome}</option>
                    })}
                </select>
            </div>
            <div className="z-30 absolute inset-0 w-5/6 h-full bg-white transition duration-200 ease-out transform translate-x-1 translate-y-1 rounded border-white border-x border-y group-hover:-translate-x-0 group-hover:-translate-y-0">
            </div>
        </div>
    </>
};