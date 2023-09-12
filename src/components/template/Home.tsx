import SearchSection from "../molecules/SearchSection";
import Apresentation from "../organisms/Apresentation";
import SearchResult from "../organisms/SearchResult";

export default function HomeTemplate() {
    return <>
        <Apresentation />
        <SearchSection />
        <SearchResult />
    </>;
};