"use client"

import { useState } from "react";
import City from "../atoms/City";
import DatePicker from "../atoms/Date";
import State from "../atoms/State";

export default function SearchSection() {
    const [params, setParams] = useState({
        UF: "0",
        city: ""
    });

    const getCity = (value: any) => {
        setParams({ ...params, city: value })
    };

    const getState = (props: any) => {
        setParams({ ...params, UF: props.UF })
    };

    console.log(params);

    return <>
        <div className="font-spacemono grid">
            <span className="text-3xl m-6">
                Comece a fiscalizar
            </span>
            <span className="text-xl m-6">
                In tempor ultrices lectus a posuere. Vivamus gravida metus lorem, eget facilisis arcu finibus nec. Ut et lacus tincidunt, faucibus elit nec, interdum diam. Sed at elementum libero, eget consectetur elit. Proin elementum nulla sit amet nisi consequat, id aliquam leo efficitur. Phasellus sit amet enim placerat, pulvinar neque eget, faucibus massa.
                Morbi id orci imperdiet odio facilisis dictum. Donec rhoncus arcu vestibulum ante sollicitudin, sed posuere orci varius.
                Nulla lacinia enim id ipsum blandit, ut bibendum dui varius. Pellentesque feugiat lobortis auctor.
            </span>
            <div className="grid grid-cols-3 m-6">
                <div>
                    <State getState={getState} />
                </div>
                <div>
                    <City state={params.UF} getCity={getCity} />
                </div>
                <div>
                    <DatePicker />
                </div>
            </div>
        </div>
    </>;
};