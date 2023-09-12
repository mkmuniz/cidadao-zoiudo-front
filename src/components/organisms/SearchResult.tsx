import FiltersSearchResult from "../molecules/SearchResult/Filters";
import ResultHeader from "../molecules/SearchResult/Header";

export default function SearchResult() {
    return <>
        <div className="w-full h-full">
            <div className="border rounded border-white m-6">
                <ResultHeader />
                <FiltersSearchResult />
            </div>
        </div>
    </>;
};