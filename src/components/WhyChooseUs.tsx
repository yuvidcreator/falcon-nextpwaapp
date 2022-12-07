import Image from 'next/image'
import { FaCarSide } from 'react-icons/fa'
import {MdLocalOffer, MdLocalShipping, MdSupportAgent} from 'react-icons/md'


const WhyChooseUs = () => {
    return (
        <>
            <div className="w-full bg-white text-gray-700">
                {/* CONTAINER */}
                <div className="mx-auto space-x-8 py-10 px-4 w-full max-w-7xl grid grid-cols-2">

                    {/* :ILLUSTRATION */}
                    <div className="order-2 lg:order-1 col-span-1 lg:row-span-2 relative w-full hidden sm:block">
                        <Image 
                            src="/images/images/about_img01.png" 
                            alt="" 
                            className="absolute top-0 left-0 w-full h-full object-contain" 
                            width={500}
                            height={500}
                        />
                    </div>

                    {/* :TITLE */}
                    <div className="order-1 lg:order-2 col-span-full sm:col-span-1 row-span-1 mb-8 w-11/12 space-y-4 text-center sm:text-left">
                        <h2 className="text-3xl md:text-4xl font-semibold">Why Choose Us?</h2>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam impedit eius at ipsam? Maiores, laudantium adipisci ut reprehenderit quos vitae exercitationem quae laborum, nesciunt explicabo ex omnis praesentium aut mollitia.
                        </p>
                    </div>

                    {/* :FEATURES */}
                    <dl className="order-3 col-span-full lg:col-span-1 row-span-1 w-full grid grid-cols-4 gap-6 justify-center items-center text-center md:mt-16">
                        {/* ::Feature 1 -> Aiport Car */}
                        <div className="col-span-full sm:col-span-2 md:col-span-1 lg:col-span-full w-full flex flex-col lg:flex-row">
                            {/* Icon */}
                            <span className="flex-shrink-0 mx-auto lg:mx-0 p-2 w-full sm:w-auto max-w-xs inline-flex justify-center items-center rounded-xl bg-sky-500">
                                {/* <img src="https://fancytailwind.com/static/afffb3a658c3c8c44226dd67749cc14d/navette.svg" alt="" className="w-10 lg:w-14 h-10 lg:h-14" /> */}
                                <FaCarSide className="w-10 lg:w-14 h-10 lg:h-14 text-white" />
                                <dt className="ml-2 sm:hidden text-white font-semibold">Airport Car</dt>
                            </span>
                            <div className="lg:ml-4 mx-auto max-w-sm inline-flex flex-col text-center lg:text-left">
                                {/* Feature title */}
                                <dt className="hidden sm:block font-semibold">Airport Car</dt>
                                {/* Description */}
                                <dd className="mt-2 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit ipsam quas corporis architecto odio laborum.</dd>
                            </div>
                        </div>

                        {/* ::Feature 2 -> 24/7 Support */}
                        <div className="col-span-full sm:col-span-2 md:col-span-1 lg:col-span-full w-full flex flex-col lg:flex-row">
                            {/* Icon */}
                            <span className="flex-shrink-0 mx-auto lg:mx-0 p-2 w-full sm:w-auto max-w-xs inline-flex justify-center items-center rounded-xl bg-teal-500">
                                {/* <img src="https://fancytailwind.com/static/9f0b7f6a642e938ba3068ac5ce6ac20e/call-center.svg" alt="" className="w-10 lg:w-14 h-10 lg:h-14" /> */}
                                <MdSupportAgent className="w-10 lg:w-14 h-10 lg:h-14 text-white" />
                                <dt className="ml-2 sm:hidden text-white font-semibold">24/7 Support</dt>
                            </span>
                            <div className="lg:ml-4 mx-auto max-w-sm inline-flex flex-col text-center lg:text-left">
                                {/* Feature title */}
                                <dt className="hidden sm:block font-semibold">24/7 Support</dt>
                                {/* Description */}
                                <dd className="mt-2 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit ipsam quas corporis architecto odio laborum.</dd>
                            </div>
                        </div>

                        {/* ::Feature 3 -> Special Discount  */}
                        <div className="col-span-full sm:col-span-2 md:col-span-1 lg:col-span-full w-full flex flex-col lg:flex-row">
                            {/* Icon */}
                            <span className="flex-shrink-0 mx-auto lg:mx-0 p-2 w-full sm:w-auto max-w-xs inline-flex justify-center items-center rounded-xl bg-yellow-800">
                                {/* <img src="https://fancytailwind.com/static/92386a40e6ef929c5952951e1d383538/discount-hand.svg" alt="" className="w-10 lg:w-14 h-10 lg:h-14" /> */}
                                <MdLocalOffer className="w-10 lg:w-14 h-10 lg:h-14 text-white" />
                                <dt className="ml-2 sm:hidden text-white font-semibold">Special Offers</dt>
                            </span>
                            <div className="lg:ml-4 mx-auto max-w-sm inline-flex flex-col text-center lg:text-left">
                                {/* Feature title */}
                                <dt className="hidden sm:block font-semibold">Special Discount</dt>
                                {/* Description */}
                                <dd className="mt-2 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit ipsam quas corporis architecto odio laborum.</dd>
                            </div>
                        </div>

                        {/* ::Feature 4 -> Tour Guide */}
                        <div className="col-span-full sm:col-span-2 md:col-span-1 lg:col-span-full w-full flex flex-col lg:flex-row mb-8">
                            {/* Icon */}
                            <span className="flex-shrink-0 mx-auto lg:mx-0 p-2 w-full sm:w-auto max-w-xs inline-flex justify-center items-center rounded-xl bg-yellow-400">
                                {/* <img src="https://fancytailwind.com/static/056c3d882450dcc75bda09bea770f67b/tour-guide.svg" alt="" className="w-10 lg:w-14 h-10 lg:h-14" /> */}
                                <MdLocalShipping className="w-10 lg:w-14 h-10 lg:h-14 text-white" />
                                <dt className="ml-2 sm:hidden text-white font-semibold">Delivery Tracking</dt>
                            </span>
                            <div className="lg:ml-4 mx-auto max-w-sm inline-flex flex-col text-center lg:text-left">
                                {/* Feature title */}
                                <dt className="hidden sm:block font-semibold">Delivery Tracking</dt>
                                {/* Description */}
                                <dd className="mt-2 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit ipsam quas corporis architecto odio laborum.</dd>
                            </div>
                        </div>
                    </dl>
                </div>
            </div>
        </>
    )
}

export default WhyChooseUs