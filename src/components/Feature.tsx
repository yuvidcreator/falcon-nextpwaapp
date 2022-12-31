import React from 'react'
import { FaCpanel, FaUserTag } from 'react-icons/fa'
import { MdBadge, MdGraphicEq } from 'react-icons/md'


const Feature = () => {
    return (
        <>
            <div className="relative mx-auto py-10 w-full max-w-7xl bg-black text-white">

            {/* :BACKGROUND IMAGE */}
            <img 
                src="https://fancytailwind.com/static/desk1-140bf499b28a2cb49eb3dd6959781d2e.jpg" 
                alt="" 
                className="absolute top-0 left-0 w-full h-full object-cover opacity-50" 
            />

                {/* :MAIN CONTAINER */}
                <div className="relative w-full flex flex-col lg:flex-row justify-center items-center">

                    {/* ::TITLE CONTAINER */}
                    <div className="flex-shrink-0 mx-auto mb-10 px-4 text-center lg:text-left">
                        {/* :::Title */}
                        <h2 className="text-2xl sm:text-4xl lg:text-5xl text-white text-opacity-80 font-rubik tracking-wider space-y-3">
                            <span className="block">Get Right <b className="text-white">Solutions</b></span>
                            <span className="block">for your <b className="text-white">Business</b></span>
                        </h2>

                        {/* :::Bottom line */}
                        <span className="mt-5 mx-auto lg:mx-0 w-32 h-1.5 block rounded-3xl bg-white" />
                    </div>

                    {/* ::FEATURES CONTAINER */}
                    <dl className="flex-grow-0 px-4 grid grid-cols-4 gap-4">

                        {/* :::Feature 1 -> Expertise */}
                        <div className="col-span-full sm:col-span-2 md:col-span-1 lg:col-span-2 mx-auto py-5 px-2.5 w-full max-w-xs flex flex-col justify-center items-center space-y-2 rounded-sm border-2 border-gray-100 sm:border-blue-300 lg:border-gray-100 bg-black bg-opacity-80 text-center">
                            {/* Icon */}
                            <span className="w-14 h-14 inline-flex justify-center items-center rounded-full bg-gray-100 sm:bg-blue-300 lg:bg-gray-100">
                                <FaCpanel className="w-10 h-10 text-blue-300 sm:text-white lg:text-blue-300" />
                            </span>
                            {/* Feature name */}
                            <dt className="lg:text-lg font-rubik font-bold uppercase tracking-widest">Expertise</dt>
                            {/* Description */}
                            <dd className="py-2 text-xs lg:text-sm text-gray-50 text-opacity-60">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, eos, fuga aliquid magnam harum quidem doloribus ratione. 
                            </dd>
                        </div>

                        {/* :::Feature 2 -> Leadership */}
                        <div className="col-span-full sm:col-span-2 md:col-span-1 lg:col-span-2 mx-auto py-5 px-2.5 w-full max-w-xs flex flex-col justify-center items-center space-y-2 rounded-sm border-2 border-blue-300 sm:border-gray-100 lg:border-blue-300 bg-black bg-opacity-80 text-center">
                            {/* Icon */}
                            <span className="w-14 h-14 inline-flex justify-center items-center rounded-full bg-blue-300 sm:bg-gray-100 lg:bg-blue-300">
                                <MdBadge className="w-10 h-10 text-white sm:text-blue-300 lg:text-white" />
                            </span>
                            {/* Feature name */}
                            <dt className="lg:text-lg font-rubik font-bold uppercase tracking-widest">Leadership</dt>
                            {/* Description */}
                            <dd className="py-2 text-xs lg:text-sm text-gray-50 text-opacity-60">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, eos, fuga aliquid magnam harum quidem doloribus ratione.
                            </dd>
                        </div>

                        {/* :::Feature 3 -> Careers */}
                        <div className="col-span-full sm:col-span-2 md:col-span-1 lg:col-span-2 mx-auto py-5 px-2.5 w-full max-w-xs flex flex-col justify-center items-center space-y-2 rounded-sm border-2 border-gray-100 md:border-blue-300 bg-black bg-opacity-80 text-center">
                            {/* Icon */}
                            <span className="w-14 h-14 inline-flex justify-center items-center rounded-full bg-gray-100 md:bg-blue-300">
                                <MdGraphicEq className="w-10 h-10 text-blue-300 md:text-white" />
                            </span>
                            {/* Feature name */}
                            <dt className="lg:text-lg font-rubik font-bold uppercase tracking-widest">Careers</dt>
                            {/* Description */}
                            <dd className="py-2 text-xs lg:text-sm text-gray-50 text-opacity-60">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, eos, fuga aliquid magnam harum quidem doloribus ratione.
                            </dd>
                        </div>

                        {/* :::Feature 4 -> Partnership */}
                        <div className="col-span-full sm:col-span-2 md:col-span-1 lg:col-span-2 mx-auto py-5 px-2.5 w-full max-w-xs flex flex-col justify-center items-center space-y-2 rounded-sm border-2 border-blue-300 md:border-gray-100 bg-black bg-opacity-80 text-center">
                            {/* Icon */}
                            <span className="w-14 h-14 inline-flex justify-center items-center rounded-full bg-blue-300 md:bg-gray-100">
                                <FaUserTag className="w-10 h-10 text-white md:text-blue-300" />
                            </span>
                            {/* Feature name */}
                            <dt className="lg:text-lg font-rubik font-bold uppercase tracking-widest">Partnership</dt>
                            {/* Description */}
                            <dd className="py-2 text-xs lg:text-sm text-gray-50 text-opacity-60">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, eos, fuga aliquid magnam harum quidem doloribus ratione.
                            </dd>
                        </div>

                    </dl>
                </div>
            </div>
        </>
    )
}

export default Feature