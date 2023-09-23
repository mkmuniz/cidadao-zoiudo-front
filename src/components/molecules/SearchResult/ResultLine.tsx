export default function ResultLine({ item, filters }: any) {
    return <>
        {filters.fieldsFilter ?
            <div className="rounded border-white w-6/7 border-x border-y sm:m-6 m-3">
                <span className="text-2xl font-spacemono m-6">Convênio: {item.convenio} </span>
                {filters.fieldsFilter.todos ? <>
                    <p className="font-spacemono m-2 ml-6">Modalidade: {item.modalidade} </p>
                    <p className="font-spacemono m-2 ml-6">Situação: {item.situacao} </p>
                    <p className="font-spacemono m-2 ml-6">Preponente: {item.preponente} </p>
                    <p className="font-spacemono m-2 ml-6">Órgão: {item.orgao} </p>
                    <p className="font-spacemono m-2 ml-6">Objeto de convênio: {item.objetoConvenio} </p>
                    <p className="font-spacemono m-2 ml-6">Dados Bancários: </p>
                    <ul className="font-spacemono ml-44">
                        <li>
                            Banco: {item.dadosBancarios.banco}
                        </li>
                        <li>
                            Agência & Conta: {item.dadosBancarios.agencia}
                        </li>
                    </ul>
                    <p className="font-spacemono m-2 ml-6">Data de proposta: {item.dataLimite} </p>
                    <p className="font-spacemono m-2 ml-6">Data limite: {item.dataLimite}</p>
                </>
                    :
                    <>
                        {filters.fieldsFilter.modalidade ? <p className="font-spacemono m-2 ml-6">Modalidade: {item.modalidade} </p> : <> </>}
                        {filters.fieldsFilter.situacao ? <p className="font-spacemono m-2 ml-6">Situação: {item.situacao} </p> : <> </>}
                        {filters.fieldsFilter.preponente ? <p className="font-spacemono m-2 ml-6">Preponente: {item.preponente} </p> : <></>}
                        {filters.fieldsFilter.orgao ? <p className="font-spacemono m-2 ml-6">Órgão: {item.orgao} </p> : <></>}
                        {filters.fieldsFilter.objetoConvenio ? <p className="font-spacemono m-2 ml-6">Objeto de convênio: {item.objetoConvenio} </p> : <></>}
                        {filters.fieldsFilter.dadosBancarios ?
                            <>
                                <p className="font-spacemono m-2 ml-6">Dados Bancários: </p>
                                <ul className="font-spacemono ml-44">
                                    <li>
                                        Banco: {item.dadosBancarios.banco}
                                    </li>
                                    <li>
                                        Agência & Conta: {item.dadosBancarios.agencia}
                                    </li>
                                </ul>
                            </> : <></>}
                        {filters.fieldsFilter.dataProposta ? <p className="font-spacemono m-2 ml-6">Data de proposta: {item.dataLimite} </p> : <></>}
                        {filters.fieldsFilter.dataLimite ? <p className="font-spacemono m-2 ml-6">Data limite: {item.dataLimite}</p> : <></>}
                    </>
                }
            </div> : <>
                <div className="rounded border-white w-6/7 border-x border-y m-6">
                    <span className="text-2xl font-spacemono m-6">Convênio: {item.convenio} </span>
                    <p className="font-spacemono m-2 ml-6">Modalidade: {item.modalidade} </p>
                    <p className="font-spacemono m-2 ml-6">Situação: {item.situacao} </p>
                    <p className="font-spacemono m-2 ml-6">Preponente: {item.preponente} </p>
                    <p className="font-spacemono m-2 ml-6">Órgão: {item.orgao} </p>
                    <p className="font-spacemono m-2 ml-6">Objeto de convênio: {item.objetoConvenio} </p>
                    <p className="font-spacemono m-2 ml-6">Dados Bancários: </p>
                    <ul className="font-spacemono sm:ml-44 ml-20">
                        <li>
                            Banco: {item.dadosBancarios.banco}
                        </li>
                        <li>
                            Agência & Conta: {item.dadosBancarios.agencia}
                        </li>
                    </ul>
                    <p className="font-spacemono m-2 ml-6">Data de proposta: {item.dataLimite} </p>
                    <p className="font-spacemono m-2 ml-6">Data limite: {item.dataLimite}</p>
                </div>
            </>
        }
    </>;
};