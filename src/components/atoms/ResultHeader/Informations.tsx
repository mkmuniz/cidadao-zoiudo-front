import React from "react";

export default function InformationsResultHeader({ props }: any) {
    return <>
        <span className="font-spacemono m-6">
            [{props.city} - {props.state}] no período de [dd/mm/aa] até [dd/mm/aa].
        </span>
    </>;
};