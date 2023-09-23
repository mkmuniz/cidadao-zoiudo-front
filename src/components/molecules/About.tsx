import React from "react"

export default function About() {

    return <>
        <div className="grid font-spacemono bg-black">
            <div className="sm:p-6 p-3">
                <span className="text-xl">
                O AgentesDev, por meio de voluntários, criou uma solução tecnológica para tornar a fiscalização governamental acessível a todos. Através da nossa ferramenta de automação, todos podem investigar licitações no portal da transparência do governo, expondo contas bancárias idênticas entre diferentes empresas e contribuindo para combater o crime de empresas fantasmas.                </span>
            </div>
            <div className="bg-standard w-full h-full sm:p-6 p-3">
                <span className="text-xl text-black">
                Sua participação ativa é essencial para tornar nossa ferramenta eficaz. O Brasil possui mais de 5.000 cidades, tornando a tarefa de fiscalização algo monumental. Além disso, estamos empenhados em expandir o projeto, criando novas ferramentas de fiscalização. Junte-se a nós nessa missão de combate à corrupção!                </span>
            </div>
        </div>
    </>
};