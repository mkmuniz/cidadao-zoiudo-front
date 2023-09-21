export default function ResultLine({ item }: any) {
    return <>
        <div className="rounded border-white w-6/7 border-x border-y m-6">
            <span className="text-2xl font-spacemono m-6">Convênio: {item.convenio} </span>
            <p className="font-spacemono m-2 ml-6">Modalidade: {item.modalidade} </p>
            <p className="font-spacemono m-2 ml-6">Situação: {item.situacao} </p>
            <p className="font-spacemono m-2 ml-6">Preponente: {item.preponente} </p>
            <p className="font-spacemono m-2 ml-6">Órgão: {item.orgao} </p>
            <p className="font-spacemono m-2 ml-6">Objeto de convênio: {item.objetoConvenio} </p>
            <p className="font-spacemono m-2 ml-6">Dados Bancários: </p>
            <p className="font-spacemono m-2 ml-6">Data de proposta: {item.dataLimite} </p>
            <p className="font-spacemono m-2 ml-6">Data limite: {item.dataLimite}</p>
        </div>
    </>;
};