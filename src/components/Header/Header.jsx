import React, { useState } from 'react';

export default function Header() {
    const [nav_is_visible, set_nav_is_visible] = useState(false);
    const nav_visibility_handler = () => {
        set_nav_is_visible((curr_state) => {
            return !curr_state;
        });
    };

    return (
        <div>
            <header className="bg-white border-b-2">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" >
                    <div className="flex flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="font-semibold font-dm-serif-display text-3xl">RealUni</span>
                        </a>
                    </div>

                    <div className="lg:hidden items-center justify-end">
                        <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={nav_visibility_handler}>
                            <span className="sr-only">Open menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>

                    <div className="hidden lg:flex gap-x-12">
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900 border-b-2 border-transparent transition duration-300 hover:border-b-2 hover:border-emerald-600">Comunidad</a>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900 border-b-2 border-transparent transition duration-300 hover:border-b-2 hover:border-indigo-500">Universidades</a>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900 border-b-2 border-transparent transition duration-300 hover:border-b-2 hover:border-rose-600">Realidades</a>
                    </div>

                    <div className="hidden lg:flex flex-1 justify-end md:opacity-100 opacity-0">
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Iniciar Sesion <span aria-hidden="true">&rarr;</span></a>
                    </div>
                </nav>


                    <div className={`transition-all duration-200 ease-linear fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-4 py-5 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ${!nav_is_visible ? 'opacity-0' : 'opacity-100'}`}>
                        <div className="flex items-center justify-end">
                            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={nav_visibility_handler}>
                                <span className="sr-only">Close menu</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Comunidad</a>
                                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Universidades</a>
                                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Realidades</a>
                                </div>
                                <div className="py-6">
                                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Iniciar Sesion</a>
                                </div>
                            </div>
                        </div>
                    </div>

            </header>
        </div>
    )
}
