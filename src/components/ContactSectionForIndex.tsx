
import Link from 'next/link'
import React from 'react'
// import { DeviceMobileIcon, LocationMarkerIcon, MailIcon } from '@heroicons/react/outline'
import { FaEnvelopeOpen, FaLocationArrow, FaMobile } from 'react-icons/fa'

const Contact1 = () => {
    return (
        <div className="relative mx-auto py-10 px-4 w-full max-w-7xl bg-gray-50">
            <div className="mx-auto max-w-5xl">

                {/* :DOTS BACKGROUND */}
                <div>
                    {/* ::Dots 1 */}
                    <span className="absolute top-0 left-0 hidden md:block opacity-10">
                        <svg width={250} height={600} fill="none" viewBox="0 0 250 600" aria-hidden="true">
                        <pattern id="pattern-rectangles" x={0} y={0} width={40} height={40} patternUnits="userSpaceOnUse">
                            <rect x={0} y={0} width={10} height={10} className="text-blue-500" fill="currentColor" />
                        </pattern>
                        <rect width={250} height={600} fill="url(#pattern-rectangles)" />
                        </svg>
                    </span>
                    {/* ::Dots 2 */}
                    <span className="absolute bottom-0 right-0 opacity-20">
                        <svg width={300} height={300} fill="none" viewBox="0 0 300 300" aria-hidden="true">
                        <pattern id="pattern-circles" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
                            <circle id="pattern-circle" cx="10" cy="10" r="5" className="fill-current text-blue-500" />
                        </pattern>
                        <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
                        </svg>
                    </span>
                </div>
                


                {/* :MAIN CONTAINER */}
                <div className="relative space-y-2">

                {/* ::Title */}
                <h2 className="text-center text-3xl lg:text-5xl font-bold">Contact Us</h2>

                {/* ::Some Text */}
                <p className="mx-auto py-2 max-w-3xl text-center text-base text-gray-600">Falcon Couriers provides businesses across Canada with responsible delivery at a competitive price. There’s a Falcon to our delivery standards that you won’t find anywhere else.</p>

                {/* ::Infos Container */}
                {/* <div className="flex flex-wrap justify-between items-center text-base">
                    <div className="m-2.5 inline-flex items-center">
                        <Link href={"https://goo.gl/maps/koo5FUkvREdNxi8n8"} passHref>
                            <FaLocationArrow className="mr-2 w-6 h-6 text-blue-500" />
                            <p className="text-gray-600 font-semibold">Sant Tukaram Nagar, Pimpri Colony, <br />Pimpri, Pune - 411017</p>
                        </Link>
                    </div>
                    <div className="m-2.5 inline-flex items-center">
                        <Link href={"tel:+919623995499"} passHref>
                            <FaMobile className="mr-2 w-6 h-6 text-blue-500" />
                            <p className="text-gray-600 font-semibold">+91-962-399-5499</p>
                        </Link>
                    </div>
                    <div className="m-2.5 inline-flex items-center">
                        <Link href={"mailto:info@falconcourierservice.com"} passHref>
                            <FaEnvelopeOpen className="mr-2 w-6 h-6 text-blue-500"  />
                            <p className="text-gray-600 font-semibold">info@falconcourierservice.com</p>
                        </Link>
                    </div>
                </div> */}

                </div>



                {/* :MAP CONTAINER */}
                <div className="relative mt-16 rounded border-2 border-gray-200">
                {/* Embed Google map */}
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60495.36271119727!2d73.7479231!3d18.6208612!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b85fd0b98d8b%3A0xbc1a08164608f320!2sFALCON%20COURIERS%20%26CARGO%26LOGISTICS!5e0!3m2!1sen!2sin!4v1670385721737!5m2!1sen!2sin" 
                    title="map" 
                    scrolling="no" 
                    frameBorder="0"
                    width="100%" 
                    height="450" 
                    className="" 
                    loading="lazy"
                />
                </div>

            </div>
        </div>
    )
}

export default Contact1
