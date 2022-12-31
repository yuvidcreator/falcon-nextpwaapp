import React from 'react'

interface ShipmentStatus {
    status: string,
    comment: string
}

const ProgerssBar = ({status, comment}: ShipmentStatus) => {
    // console.log(status)
    // console.log(comment)
    return (
        <>
            <div className="w-11/12 lg:w-2/6 mx-auto">
                <div className="bg-gray-200 h-1 flex items-center justify-between">
                    {/* <div className="w-1/3 bg-indigo-700 h-1 flex items-center">
                        <div className="flex flex-col mb-8">
                            <p className="text-sm mb-2">Package Picked</p>

                            <div className="bg-indigo-700 h-6 w-6 rounded-full shadow flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M5 12l5 5l10 -10" />
                                </svg>
                            </div>
                        </div>
                    </div> */}

                    {
                        (status === "Package Picked") ? (
                            <>
                                <div className="w-1/3 flex justify-between bg-indigo-700 h-1 items-center relative">
                                <div className="flex flex-col mb-8">
                                    <p className="text-sm mb-2">Package Picked</p>

                                    <div className="bg-indigo-700 h-6 w-6 rounded-full shadow flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M5 12l5 5l10 -10" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="bg-green-400 h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3 relative animate-ping">
                                    <div className="h-3 w-3 bg-indigo-700 rounded-full" />
                                </div>
                                <div className="absolute right-0 -mr-2">
                                    <div className="relative bg-white shadow-lg px-2 py-1 rounded mt-16 -mr-6 animate-bounce">
                                        <svg className="absolute top-0 -mt-1 w-full right-0 left-0" width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                <g id="Progress-Bars" transform="translate(-322.000000, -198.000000)" fill="#FFFFFF">
                                                    <g id="Group-4" transform="translate(310.000000, 198.000000)">
                                                        <polygon id="Triangle" points="20 0 28 8 12 8" />
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        <p className="text-indigo-700 text-xs font-bold">{comment}</p>
                                    </div>
                                </div>
                                </div>
                                <div className="w-1/3 flex justify-end">
                                    <div className="bg-green-600 h-6 w-6 rounded-full shadow" />
                                </div>
                            </>
                        ) : (
                            <></>
                        )
                    }

                    {
                        (status === "Shipped") ? (
                            <>
                                <div className="w-full flex justify-between bg-indigo-700 h-1 items-center relative">
                                    <div className="flex flex-col mb-8">
                                        <p className="text-sm mb-2">Package Picked</p>

                                        <div className="bg-indigo-700 h-6 w-6 rounded-full shadow flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex flex-col mb-8">
                                        <p className="text-sm mb-2">Shipped</p>

                                        <div className="bg-indigo-700 h-6 w-6 rounded-full shadow flex items-center justify-center -ml-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="bg-green-400 h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3 relative animate-ping">
                                        <div className="h-3 w-3 bg-indigo-700 rounded-full" />
                                    </div>
                                    <div className="absolute right-0 -mr-2">
                                        <div className="relative bg-white shadow-lg px-2 py-1 rounded mt-16 -mr-6 animate-bounce">
                                            <svg className="absolute top-0 -mt-1 w-full right-0 left-0" width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                    <g id="Progress-Bars" transform="translate(-322.000000, -198.000000)" fill="#FFFFFF">
                                                        <g id="Group-4" transform="translate(310.000000, 198.000000)">
                                                            <polygon id="Triangle" points="20 0 28 8 12 8" />
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                            <p className="text-indigo-700 text-xs font-bold">{comment}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/3 flex justify-end">
                                    <div className="bg-green-600 h-6 w-6 rounded-full shadow" />
                                </div>
                            </>
                        ) : (
                            <></>
                        )
                    }

                    {
                        (status === "Out for Delivery") ? (
                            <>
                                <div className="w-full flex justify-between bg-indigo-700 h-1 items-center relative">
                                    <div className="flex flex-col mb-8">
                                        <p className="text-sm mb-2">Package Picked</p>

                                        <div className="bg-indigo-700 h-6 w-6 rounded-full shadow flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex flex-col mb-8">
                                        <p className="text-sm mb-2">Shipped</p>

                                        <div className="bg-indigo-700 h-6 w-6 rounded-full shadow flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex flex-col mb-8">
                                        <p className="text-sm mb-2">Out for Delivery</p>

                                        <div className="bg-indigo-700 h-6 w-6 rounded-full shadow flex items-center justify-center ml-12">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="bg-green-400 h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3 relative animate-ping">
                                        <div className="h-3 w-3 bg-indigo-700 rounded-full" />
                                    </div>
                                    <div className="absolute right-0 -mr-2">
                                        <div className="relative bg-white shadow-lg px-2 py-1 rounded mt-16 -mr-6 animate-bounce">
                                            <svg className="absolute top-0 -mt-1 w-full right-0 left-0" width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                    <g id="Progress-Bars" transform="translate(-322.000000, -198.000000)" fill="#FFFFFF">
                                                        <g id="Group-4" transform="translate(310.000000, 198.000000)">
                                                            <polygon id="Triangle" points="20 0 28 8 12 8" />
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                            <p className="text-indigo-700 text-xs font-bold">{comment}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/3 flex justify-end">
                                    <div className="bg-green-600 h-6 w-6 rounded-full shadow" />
                                </div>
                            </>
                        ) : (
                            <></>
                        )
                    }

                    {
                        (status === "Delivered") ? (
                            <div className="w-full flex justify-between bg-indigo-700 h-1 items-center relative">
                                <div className="flex flex-col mb-8">
                                    <p className="text-sm mb-2">Package Picked</p>

                                    <div className="bg-indigo-700 h-6 w-6 rounded-full shadow flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M5 12l5 5l10 -10" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex flex-col mb-8">
                                    <p className="text-sm mb-2">Shipped</p>

                                    <div className="bg-indigo-700 h-6 w-6 rounded-full shadow flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M5 12l5 5l10 -10" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex flex-col mb-8">
                                    <p className="text-sm mb-2">Out for Delivery</p>

                                    <div className="bg-indigo-700 h-6 w-6 rounded-full shadow flex items-center justify-center ml-12">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M5 12l5 5l10 -10" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex flex-col mb-8">
                                    <p className="text-sm mb-2">Delivered</p>

                                    <div className="bg-indigo-700 h-6 w-6 rounded-full shadow flex items-center justify-center ml-12">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M5 12l5 5l10 -10" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default ProgerssBar