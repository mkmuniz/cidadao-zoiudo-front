import { fetchCompanies } from "@/api/companies";
import React, { useState } from "react";

export default function SearchButton({ info, getDataSearchResult, isButtonDisabled, isLoading }: any ) {
    const [loadingStatus, setLoadingStatus] = useState(false);

    const fetchCompaniesData = async () => {
        try {
            isLoading(true);
            setLoadingStatus(true);
            const data = await fetchCompanies({ UF: info.UF, state: info.state, city: info.city, pages: info.pages, datePeriod: info.datePeriod });

            if (data) {
                getDataSearchResult(data);
            };

            isLoading(false);
            setLoadingStatus(false);
        } catch (err: any) {
            return err;
        };
    };

    return <>
        <button disabled={loadingStatus ? false : isButtonDisabled} onClick={() => fetchCompaniesData()} className=" text-black font-bold relative py-2 px-4 sm:w-3/6 md:w-2/6 lg:w-1/6 w-4/6">
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 rounded border-white border-x border-y group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className={`absolute inset-0 w-full h-full ${isButtonDisabled || loadingStatus ? 'bg-black' : 'bg-standard transition-colors'} ${loadingStatus ? 'bg-black pointer-events-none' : 'bg-standard transition-colors'} border-2 rounded border-standard`}></span>
            <span className="relative font-spacemono">BUSCAR</span>
        </button>
    </>;
};