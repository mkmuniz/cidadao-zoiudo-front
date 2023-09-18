import ResultLine from "../molecules/SearchResult/ResultLine";

export default function ResultTable({ data, filters }: any) {
    let arrayPage: any = [];

    if (filters) {
        arrayPage = data.body.slice(0, filters.itensPerPage)
    };

    return <>
        {arrayPage.map((item: any) => {
            return <ResultLine item={item} />
        })}
    </>;
};