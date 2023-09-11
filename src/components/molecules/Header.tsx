import React from "react"

export default function Header() {
    return <>
        <div className="bg-banner w-screen h-full font-spacemono">
            <div className="sm:p-32 p-12 grid gap-4">
                <span className="sm:text-6xl text-3xl">WEB SCRAPER DE<br />FISCALIZAÇÃO</span>
                <span className="sm:text-3xl text-xl">Utilizando automação para fiscalizar o governo</span>
            </div>
        </div>
    </>
};