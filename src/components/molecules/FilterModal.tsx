'use client'

import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import FilterButton from '../atoms/FilterButton'

export default function FilterByType({ getFilter }: any) {
    const [open, setOpen] = useState(false)
    const [options, setOptions] = useState({
        todos: false,
        modalidade: false,
        proponente: false,
        situacao: false,
        orgao: false,
        categorias: false,
        objetoConvenio: false,
        dadosBancarios: false,
        dataProposta: false,
        dataLimite: false
    });

    return (
        <>
            <div className="text-black font-bold relative py-2 px-4 w-4/5 text-center">
                <Link
                    href={'/'}
                    scroll={false}
                    onClick={() => setOpen(true)}
                >
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 rounded border-white border-x border-y group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className={`absolute inset-0 w-full h-full bg-standard transition-colors border-2 rounded border-standard`}></span>
                    <span className="relative font-spacemono">Campos</span>
                </Link>
            </div>

            <Transition appear show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-40 overflow-y-auto"
                    onClose={() => setOpen(false)}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="my-8 inline-block w-full max-w-md transform font-spacemono overflow-hidden rounded-2xl bg-black text-white border-standard border-2 p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg leading-6 text-white mb-6"
                                >
                                    Selecione os campos
                                </Dialog.Title>
                                <div className="flex items-center">
                                    <input id="default-checkbox" type="checkbox" checked={options.todos} onChange={() => {
                                        if (options.todos) setOptions({ ...options, todos: false });
                                        else setOptions({ ...options, todos: true });
                                    }} className="w-4 h-4 bg-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2" />
                                    <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium rounded text-white">Todos</label>
                                </div>
                                <div className="flex items-center">
                                    <input id="default-checkbox" type="checkbox" checked={options.modalidade} onChange={() => {
                                        if (options.modalidade) setOptions({ ...options, modalidade: false });
                                        else setOptions({ ...options, modalidade: true });
                                    }} className="w-4 h-4 bg-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2" />
                                    <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium rounded text-white">Modalidade</label>
                                </div>
                                <div className="flex items-center">
                                    <input checked={options.situacao} onChange={() => {
                                        if (options.situacao) setOptions({ ...options, situacao: false });
                                        else setOptions({ ...options, situacao: true });
                                    }} id="checked-checkbox" type="checkbox" className="w-4 h-4 bg-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2" />
                                    <label htmlFor="checked-checkbox" className="ml-2 text-sm font-medium dark:text-gray-300">Situação</label>
                                </div>
                                <div className="flex items-center">
                                    <input id="default-checkbox" type="checkbox" checked={options.proponente} onChange={() => {
                                        if (options.proponente) setOptions({ ...options, proponente: false });
                                        else setOptions({ ...options, proponente: true });
                                    }} className="w-4 h-4 bg-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2" />
                                    <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium dark:text-gray-300">Proponente</label>
                                </div>
                                <div className="flex items-center">
                                    <input id="checked-checkbox" type="checkbox" checked={options.orgao} onChange={() => {
                                        if (options.orgao) setOptions({ ...options, orgao: false });
                                        else setOptions({ ...options, orgao: true });
                                    }} className="w-4 h-4 bg-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2" />
                                    <label htmlFor="checked-checkbox" className="ml-2 text-sm font-medium dark:text-gray-300">Órgão</label>
                                </div>
                                <div className="flex items-center">
                                    <input id="default-checkbox" type="checkbox" checked={options.categorias} onChange={() => {
                                        if (options.categorias) setOptions({ ...options, categorias: false });
                                        else setOptions({ ...options, categorias: true });
                                    }} className="w-4 h-4 bg-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2" />
                                    <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium dark:text-gray-300">Categorias</label>
                                </div>
                                <div className="flex items-center">
                                    <input id="checked-checkbox" type="checkbox" checked={options.objetoConvenio} onChange={() => {
                                        if (options.objetoConvenio) setOptions({ ...options, objetoConvenio: false });
                                        else setOptions({ ...options, objetoConvenio: true });
                                    }} className="w-4 h-4 bg-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2" />
                                    <label htmlFor="checked-checkbox" className="ml-2 text-sm font-medium dark:text-gray-300">Objeto de Convênio</label>
                                </div>
                                <div className="flex items-center">
                                    <input id="default-checkbox" type="checkbox" checked={options.dadosBancarios} onChange={() => {
                                        if (options.dadosBancarios) setOptions({ ...options, dadosBancarios: false });
                                        else setOptions({ ...options, dadosBancarios: true });
                                    }} className="w-4 h-4 bg-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2" />
                                    <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium dark:text-gray-300">Dados bancários</label>
                                </div>
                                <div className="flex items-center">
                                    <input id="checked-checkbox" type="checkbox" checked={options.dataProposta} onChange={() => {
                                        if (options.dataProposta) setOptions({ ...options, dataProposta: false });
                                        else setOptions({ ...options, dataProposta: true });
                                    }} className="w-4 h-4 bg-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2" />
                                    <label htmlFor="checked-checkbox" className="ml-2 text-sm font-medium dark:text-gray-300">Data da Proposta</label>
                                </div>
                                <div className="flex items-center">
                                    <input id="checked-checkbox" type="checkbox" checked={options.dataLimite} onChange={() => {
                                        if (options.dataLimite) setOptions({ ...options, dataLimite: false });
                                        else setOptions({ ...options, dataLimite: true });
                                    }} className="w-4 h-4 bg-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2" />
                                    <label htmlFor="checked-checkbox" className="ml-2 text-sm font-medium dark:text-gray-300">Data Limite</label>
                                </div>
                                <div className="w-full flex items-center justify-center">
                                    <FilterButton options={options} getFilter={getFilter} setOpen={setOpen} />
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}