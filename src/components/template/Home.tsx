'use client'

import { useState } from "react";
import SearchSection from "../molecules/SearchSection";
import Apresentation from "../organisms/Apresentation";
import SearchResult from "../organisms/SearchResult";

export default function HomeTemplate() {
    const [searchData, setSearchData] = useState({});

    const getDataAboutSearch = (values: any) => {
        setSearchData(values);
    };

    return <>
        <Apresentation />
        <SearchSection getDataAboutSearch={getDataAboutSearch} />
        <SearchResult props={{...searchData}} />
    </>;
};