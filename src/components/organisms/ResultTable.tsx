import ResultLine from "../molecules/SearchResult/ResultLine";

export default function ResultTable({ data }: any) {
    return <>
        {data.map(() => {
            return <ResultLine />
        })};
    </>;
};