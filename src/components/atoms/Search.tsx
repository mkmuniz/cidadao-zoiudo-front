import { fetchCompanies } from "@/api/companies";
import React, { useEffect, useState } from "react";

export default function SearchButton(props: any) {
    const [companies, setCompanies] = useState();

    const fetchCompaniesData = async () => {
        const data = await fetchCompanies({ state: props.info.state, city: props.info.city, pages: props.info.pages });

        setCompanies(data);
    };

    return <>
        <button disabled={props.isButtonDisabled} onClick={() => fetchCompaniesData()} className=" text-black font-bold relative py-2 px-4 sm:w-3/6 md:w-2/6 lg:w-1/6 w-4/6">
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 rounded border-white border-x border-y group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-standard border-2 rounded border-standard"></span>
            <span className="relative font-spacemono">BUSCAR</span>
        </button>
    </>;
};