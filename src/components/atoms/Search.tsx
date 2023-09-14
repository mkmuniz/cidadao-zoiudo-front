import { fetchCompanies } from "@/api/companies";
import React, { useEffect, useState } from "react";

export default function SearchButton(info: any) {
    const [companies, setCompanies] = useState();

    const fetchCompaniesData = async () => {
        const data = await fetchCompanies({state: info.state, city: info.city, pages: info.pages});

        setCompanies(data);
    };

    console.log(companies);

    return <>
        <button onClick={() => fetchCompaniesData()} className="bg-standard text-white font-bold py-2 px-4 rounded sm:w-3/6 md:w-2/6 lg:w-1/6 w-4/6">
            Pesquisar
        </button>
    </>;
};