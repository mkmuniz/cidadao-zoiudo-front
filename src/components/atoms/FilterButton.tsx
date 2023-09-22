import { fetchCompanies } from "@/api/companies";
import React from "react";

export default function FilterButton({ options, getFilter, setOpen }: any) {
    return <>
        <button className=" text-black font-bold relative py-2 px-4 w-2/5" onClick={() => { getFilter({ fieldsFilter: { ...options } }), setOpen(false) }}>
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 rounded border-white border-x border-y group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className={`absolute inset-0 w-full h-full bg-standard transition-colors border-2 rounded border-standard`}></span>
            <span className="relative font-spacemono">Filtrar</span>
        </button>
    </>;
};