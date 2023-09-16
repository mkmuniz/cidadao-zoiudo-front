import FiltersSearchResult from "../molecules/SearchResult/Filters";
import ResultHeader from "../molecules/SearchResult/Header";
import ResultTable from "./ResultTable";

export default function Table({ headerData, resultData }: any) {
    return <>
        <div className="w-full h-full">
            <div className="border rounded border-white m-6">
                <ResultHeader props={...headerData} />
                <FiltersSearchResult />
                <ResultTable data={resultData} />
            </div>
        </div>
    </>;
};