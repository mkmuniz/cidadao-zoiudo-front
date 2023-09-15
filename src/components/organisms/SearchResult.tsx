import FiltersSearchResult from "../molecules/SearchResult/Filters";
import ResultHeader from "../molecules/SearchResult/Header";

export default function SearchResult({ props }: any) {
    return <>
        <div className="w-full h-full">
            <div className="border rounded border-white m-6">
                <ResultHeader props={...props} />
                <FiltersSearchResult />
            </div>
        </div>
    </>;
};