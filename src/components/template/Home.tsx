'use client'

import { useState } from "react";
import SearchSection from "../molecules/SearchSection";
import Apresentation from "../organisms/Apresentation";
import Table from "../organisms/Table";

export default function HomeTemplate() {
    const [searchData, setSearchData] = useState({});
    const [dataResult, setData] = useState();

    const getDataAboutSearch = (values: any) => {
        setSearchData(values);
    };

    const getDataSearchResult = (values: any) => {
        setData(values);
    };

    return <>
        <div className="bg-black">
            <Apresentation />
            <SearchSection getDataAboutSearch={getDataAboutSearch} getDataSearchResult={getDataSearchResult} />
            <Table headerData={{ ...searchData }} resultData={dataResult} />
        </div>
    </>;
};