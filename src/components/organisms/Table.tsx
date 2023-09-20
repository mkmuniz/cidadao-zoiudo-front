import { useState } from "react";
import FiltersSearchResult from "../molecules/SearchResult/Filters";
import ResultHeader from "../molecules/SearchResult/Header";
import ResultTable from "./ResultTable";
import Pagination from "../molecules/SearchResult/Pagination";

export default function Table({ headerData, resultData }: any) {
    const [filters, useFilters]: any = useState({});

    let list = [];

    if (resultData) {
        list = resultData.body.slice(0, resultData.body.length / filters.itensPerPage);
    }

    const getFilters = (value: any) => {
        useFilters({ ...filters, ...value });
    };

    return <>
        <div className="w-full h-full">
            <div className="border rounded border-white m-6">
                <ResultHeader props={...headerData} />
                <FiltersSearchResult getFilters={getFilters} />
                {resultData ? <ResultTable data={resultData} filters={filters} /> : <></>}
                {
                    resultData ? <Pagination data={list} /> : <></>
                }
            </div>
        </div>
    </>;
};