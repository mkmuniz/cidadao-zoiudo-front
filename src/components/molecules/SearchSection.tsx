"use client"

import { useState } from "react";
import City from "../atoms/City";
import DatePicker from "../atoms/Date";
import State from "../atoms/State";
import SearchButton from "../atoms/Search";
import { format } from "date-fns";

export default function SearchSection({ getDataSearchResult, getDataAboutSearch }: any) {
    const [params, setParams]: any = useState({
        UF: null,
        city: null,
        state: null,
        datePeriod: {
            startDate: null,
            endDate: null
        },
    });

    let button = false;

    const getCity = (value: any) => {
        setParams({ ...params, city: value });
        getDataAboutSearch({ ...params, city: value });
    };

    const getState = (value: any) => {
        setParams({ ...params, UF: value.UF, state: value.state });
        getDataAboutSearch({ ...params, UF: value.UF, state: value.state });
    };

    const getDatePeriod = (value: any) => {
        const startDate = new Date(value.datePeriod.startDate);
        const endDate = new Date(value.datePeriod.endDate);

        const formatStartDate = format(startDate, 'dd-MM-yyyy');
        const formatEndDate = format(endDate, 'dd-MM-yyyy');

        setParams({
            ...params, datePeriod: {
                startDate: formatStartDate,
                endDate: formatEndDate
            }
        });
        getDataAboutSearch({
            ...params, datePeriod: {
                startDate: formatStartDate,
                endDate: formatEndDate
            }
        });
    };

    if (!params.UF || !params.city || !params.datePeriod.startDate) button = true;

    return <>
        <div className="font-spacemono grid bg-black text-white">
            <span className="text-3xl sm:m-6 m-3">
                Comece a fiscalizar
            </span>
            <span className="text-xl sm:m-6 m-3">
                Escolha um estado, uma cidade, e o período de Início de Vigência. Nossa ferramenta irá abrir seu navegador padrão sozinha, pesquisar pelas licitações, e trazer os resultados abaixo. Isso pode levar alguns minutos. Para ver apenas licitações com contas bancárias idênticas, selecione essa opção nos filtros.
            </span>
            <div className="grid grid-cols-3 sm:m-6 m-3">
                <div className="flex items-center">
                    <State getState={getState} />
                </div>
                <div className="flex items-center">
                    <City state={params.UF} getCity={getCity} />
                </div>
                <div className="flex items-center">
                    <DatePicker getDate={getDatePeriod} />
                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                <SearchButton info={params} isButtonDisabled={button} getDataSearchResult={getDataSearchResult} />
            </div>
        </div>
    </>;
};