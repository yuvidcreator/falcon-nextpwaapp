
// import { CalendarIcon, HeartIcon, ShieldExclamationIcon, SearchIcon, CreditCardIcon, UserGroupIcon } from '@heroicons/react/outline'
import { FaCalendar, FaCreditCard, FaHeart, FaSearch, FaShieldAlt } from 'react-icons/fa'
import { MdSupportAgent } from 'react-icons/md'




const WhatMakeUs = () => {

    const features = [
        {
            name: "On Delivery", 
            icon: FaCalendar,
        },
        { 
            name: "Most Trusted", 
            icon: FaHeart,
        },
        { 
            name: "Secure", 
            icon: FaShieldAlt,
        },
        { 
            name: "Easy to Track", 
            icon: FaSearch,
        },
        { 
            name: "Flexible Payment", 
            icon: FaCreditCard,
        },
        { 
            name: "24/7 Support", 
            icon: MdSupportAgent,
        },
    ]

    return (
        <div className="mx-auto w-full max-w-7xl bg-gray-50 text-gray-800">
        {/* CONTAINER */}
        <div className="relative flex flex-col-reverse md:flex-row items-center">

            {/* :FEATURES */}
            <dl className="relative py-6 w-full md:w-1/2 lg:w-3/5 grid grid-cols-6 gap-4 bg-red-600 md:bg-transparent">
                {features.map((feature) => {
                    const Icon = feature.icon
                        return(
                        <div className="col-span-3 sm:col-span-2 md:col-span-3 lg:col-span-2 flex flex-col justify-center items-center" key={feature.name}>
                            <Icon className="flex-shrink-0 w-12 h-12 text-white md:text-red-600" />
                            <dt className="lg:text-lg text-red-200 md:text-current font-semibold">{feature.name}</dt>
                        </div>
                    )
                })}
            </dl>

            
            {/* :TITLES */}
            <div className="relative py-10 px-4 w-full md:w-1/2 lg:w-2/5 flex flex-col space-y-6 md:bg-red-600 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold capitalize tracking-wide">
                <span className="block">What make us</span>
                <span className="block text-red-600 md:text-white">The prefered choice</span>
            </h2>
            <p className="text-sm sm:text-base md:text-red-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos corporis minima facere a nemo, ab perspiciatis illum dolorum id voluptate, praesentium laborum molestias rem consectetur inventore vel repellendus. Temporibus, laudantium!</p>
            </div>

        </div>
        </div>
    )
}

export default WhatMakeUs
