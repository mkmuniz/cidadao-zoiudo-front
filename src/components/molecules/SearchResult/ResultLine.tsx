export default function ResultLine({ item }: any) {
    console.log(item);
    return <>
        <div className="rounded border-white w-6/7 border-x border-y m-6">
            <span className="text-2xl font-spacemono m-6">Convênio: {item.convenio} </span>
            <p className="font-spacemono m-12">Modalidade: {item.modalidade} </p>
            <p className="font-spacemono m-12">Situação: {item.situacao} </p>
            <p className="font-spacemono m-12">Preponente: {item.preponente} </p>
            <p className="font-spacemono m-12">Órgão: {item.orgao} </p>
            <p className="font-spacemono m-12">Objeto de convênio: {item.objetoConvenio} </p>
            <p className="font-spacemono m-12">Dados Bancários: </p>
            <p className="font-spacemono m-12">Data de proposta: {item.dataLimite} </p>
            <p className="font-spacemono m-12">Data limite: {item.dataLimite}</p>
        </div>
    </>;
};