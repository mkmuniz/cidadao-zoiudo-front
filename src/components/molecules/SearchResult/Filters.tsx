import ItensPerPage from "@/components/atoms/ResultFilters/ItensPerPage";

export default function FiltersSearchResult() {
    return <>
        <div className="grid grid-cols-3 justify-items-center">
            <ItensPerPage />
        </div>
    </>;
};