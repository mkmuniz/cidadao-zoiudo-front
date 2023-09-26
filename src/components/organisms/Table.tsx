'use client'

import React, { useState } from "react";
import FiltersSearchResult from "../molecules/SearchResult/Filters";
import ResultHeader from "../molecules/SearchResult/Header";
import ResultTable from "./ResultTable";
import Pagination from "../molecules/SearchResult/Pagination";
import Loading from "../atoms/Loading";

export default function Table({ headerData, resultData, isSearching }: any) {
    const [filters, useFilters] = useState({
        itensPerPage: 3
    });
    const [currentPage, setCurrentPage] = useState(1);

    let list: any = [];

    const getCurrentPage = (value: any) => {
        setCurrentPage(value);
    };

    const GetFilters = (value: any) => {
        useFilters({ ...filters, ...value });
    };

    if (resultData) {
        list = resultData.body.slice(0, resultData.body.length / filters.itensPerPage);
    };

    return <>
        <div className="w-full h-full bg-black mb-6">
            <div className="border rounded border-white mx-6 mt-6 bg-black">
                <ResultHeader props={...headerData} />
                <FiltersSearchResult getFilters={GetFilters} />
                {isSearching ? <div className="w-full flex justify-center mt-6 mb-6"> <Loading /> </div> : <>
                    {resultData ? <ResultTable data={resultData} filters={filters} page={currentPage} /> : <>
                        <div className="w-full flex items-center justify-center bg-black">
                            <span className="font-spacemono text-2xl text-center text-white">Sem resultados</span>
                        </div>
                    </>}
                </>}
            </div>
            {isSearching ? <></> : <>{resultData ? <><Pagination data={list} getCurrentPage={getCurrentPage} /></> : <></>}</>}
        </div>
    </>;
};