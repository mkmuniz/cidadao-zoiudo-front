import ResultLine from "../molecules/SearchResult/ResultLine";

export default function ResultTable({ data }: any) {
    return <>
        {data.body.map((item: any) => {
            return <ResultLine item={item} />
        })};
    </>;
};