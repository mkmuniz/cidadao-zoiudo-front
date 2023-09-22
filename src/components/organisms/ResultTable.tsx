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
        {filters.itensDuplicated ? arrayPage.filter((item: any) => {
            for (let i = 0; i < arrayPage.length;i++) {
                const isDuplicated = item.dadosBancarios.conta === arrayPage[i].dadosBancarios.conta && 
                item.dadosBancarios.agencia === arrayPage[i].dadosBancarios.agencia && 
                item.convenio !== arrayPage[i].convenio;

                if (isDuplicated) {
                    return item;
                };
            };
        }).map((item: any, index: any) => {
            return <ResultLine item={item} filters={filters} key={index} />
        }): arrayPage.map((item: any, index: any) => {
            return <ResultLine item={item} filters={filters} key={index} />
        })}
    </>;
};