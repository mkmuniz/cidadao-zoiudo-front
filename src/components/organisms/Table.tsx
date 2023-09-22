'use client'

import React, { useState } from "react";
import FiltersSearchResult from "../molecules/SearchResult/Filters";
import ResultHeader from "../molecules/SearchResult/Header";
import ResultTable from "./ResultTable";
import Pagination from "../molecules/SearchResult/Pagination";

export default function Table({ headerData, resultData }: any) {
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
        <div className="w-full h-full">
            <div className="border rounded border-white m-6">
                <ResultHeader props={...headerData} />
                <FiltersSearchResult getFilters={GetFilters} />
                {resultData ? <ResultTable data={resultData} filters={filters} page={currentPage} /> : <>
                    <div className="w-full flex items-center justify-center">
                        <span className="font-spacemono text-2xl text-center">Sem resultados</span>
                    </div>
                </>}
                {
                    resultData ? <Pagination data={list} getCurrentPage={getCurrentPage} /> : <></>
                }
            </div>
        </div>
    </>;
};