import Link from "next/link";
import { useState } from "react";

export default function Pagination({ data, getCurrentPage }: any) {
    const displayPageCount = 5;
    const totalPages = data.length;
    const [currentPage, setCurrentPage] = useState(1);

    let pages = [];

    getCurrentPage(currentPage);

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    let start = Math.max(1, currentPage - displayPageCount);
    let end = Math.min(totalPages, currentPage + displayPageCount);


    if (currentPage <= displayPageCount) {
        end = Math.min(totalPages, displayPageCount * 2 + 1);
    };

    if (currentPage >= totalPages - displayPageCount) {
        start = Math.max(1, totalPages - displayPageCount * 2);
    };

    return <>
        <nav aria-label="Page navigation example" className="m-6">
            <ul className="flex items-center justify-center -space-x-px h-8 text-sm">
                <li>
                    <Link scroll={false} href="#" className="flex items-center justify-center px-3 h-8 leading-tight rounded-r-lg" onClick={() => {
                        if (currentPage > 1) {
                            setCurrentPage(Number(currentPage) - 1)
                        };
                    }}>
                        <span className="sr-only">Previous</span>
                        <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                        </svg>
                    </Link>
                </li>
                {start > 1 && (
                    <li>
                        <span className="px-3 h-8">...</span>
                    </li>
                )}
                {
                    pages.slice(start - 1, end).map((page: number) => {
                        return <>
                            <li key={page} className={`flex items-center justify-center px-3 h-8 ${page === currentPage ?'bg-standard rounded text-black font-spacemono' : ''}`}>
                                <Link href={'/'} onClick={() => setCurrentPage(page)} scroll={false}>
                                    {page}
                                </Link>
                            </li>
                        </>
                    })}
                {end < totalPages && (
                    <li>
                        <span className="px-3 h-8">...</span>
                    </li>
                )}
                <li>
                    <Link scroll={false} href="#" className="flex items-center justify-center px-3 h-8 leading-tight rounded-r-lg" onClick={() => {
                        if (currentPage < totalPages) {
                            setCurrentPage(Number(currentPage) + 1)
                        }
                    }}>
                        <span className="sr-only">Next</span>
                        <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                        </svg>
                    </Link>
                </li>
            </ul>
        </nav>
    </>;
};