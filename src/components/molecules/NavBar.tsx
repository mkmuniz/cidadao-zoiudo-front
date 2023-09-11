import Image from "next/image";
import React from "react";
import Link from  "next/link";

export default function NavBar() {
    return <>
        <div className="w-full h-12 bg-standard">
            <Link href="#">
                <Image src="/img/logo.png" width={100} height={100} alt="Logo" className="ml-6" />
            </Link>
        </div>
    </>;
};