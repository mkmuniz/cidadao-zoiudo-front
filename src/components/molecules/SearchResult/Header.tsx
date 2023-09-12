import React from "react";
import TitleResultHeader from "../../atoms/ResultHeader/Title";
import InformationsResultHeader from "../../atoms/ResultHeader/Informations";

export default function ResultHeader() {
    return <>
        <div className="grid grid-cols-1">
            <TitleResultHeader />
            <InformationsResultHeader />
        </div>
    </>;
};