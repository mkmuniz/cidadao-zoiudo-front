import ResultLine from "../molecules/SearchResult/ResultLine";

export default function ResultTable({ data, filters, page}: any) {
    let arrayPage: any = [];

    if (filters) {
        if (page) {
            arrayPage = data.body.slice(1 * page, Number(page) + Number(filters.itensPerPage));
        } else {
            arrayPage = data.body.slice(0, filters.itensPerPage)
        };
    };

    return <>
        {arrayPage.map((item: any) => {
            return <ResultLine item={item} />
        })}
    </>;
};