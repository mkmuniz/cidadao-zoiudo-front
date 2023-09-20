export default function Pagination({ data }: any) {
    return <>
        <nav aria-label="Page navigation example" className="m-6">
            <ul className="flex items-center justify-center -space-x-px h-8 text-sm">
                <li>
                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight rounded-r-lg">
                        <span className="sr-only">Previous</span>
                        <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                        </svg>
                    </a>
                </li>
                {
                    data.map((_: any, index: any) => {
                        return <>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 dark:hover:text-white">{index + 1}</a>
                            </li>
                        </>
                    })}
                <li>
                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight rounded-r-lg">
                        <span className="sr-only">Next</span>
                        <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                        </svg>
                    </a>
                </li>
            </ul>
        </nav>
    </>;
};