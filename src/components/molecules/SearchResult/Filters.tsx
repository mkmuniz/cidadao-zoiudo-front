import ItensByTypes from "@/components/atoms/ResultFilters/ItensByType";
import ItensDuplicated from "@/components/atoms/ResultFilters/ItensDuplicated";
import ItensPerPage from "@/components/atoms/ResultFilters/ItensPerPage";

export default function FiltersSearchResult({ getFilters }: any) {
    return <>
        <div className="border-t-2 border-white border-b-2">
            <div className="grid grid-cols-3 justify-items-center pt-6 pb-6">
                <ItensPerPage getFilter={getFilters} />
                <ItensByTypes />
                <ItensDuplicated getFilter={getFilters}/>
            </div>
        </div>
    </>;
};