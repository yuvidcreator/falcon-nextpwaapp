import axios from 'axios';
import { useQuery } from 'react-query'; // userQuery used for basic datafetching 
import { useState } from 'react';
import TrackPackageDetail from '../components/GetPackageDetails';
// import GradientText from '../components/GradientText'
import Link from 'next/link';
// import Tracker from '../components/Tracker'


type trackingType = {
    id: number,
    package_no: string,
    consignor: string,
    consignee_name: string,
    consignee_address: string,
    forwarding_associate: string,
    delivery_date: string,
    pickup_date: string,
    pod: string,
    account_no: string,
    proof: string,
    reciepts: string,
    status: string,
    tracking_updates: any
}


type updateType = {
    update_note: string,
    updation_datetime: string
}



const Tracking = () => {

    const [packageNo, setPackageNo] = useState("");

    const submitHandler = (e: any) => {
        e.preventDefault();

        if (packageNo==="") {
            console.log("Please Enter Package no.")
        } else {
            console.log(packageNo);
            const userInputPackageNo = {
                packageNo
            };
            return (
                <>
                    {/* <Tracker /> */}
                    <TrackPackageDetail package_no={packageNo} />
                </>
            )
        }
    }

    // const fetchData = () => { return axios.post("/api/tracking") }

    // const {isLoading, data, error, isFetching, refetch} = useQuery(
    //     'super-heros', 
    //     fetchData,
    // )

    // const packageData = data?.data.data

    // console.log(packageData);


    // const newCustDateTime = (x: any) => {
    //     if (packageData.delivery_date !== null) {
    //         const formatDateTime = new Intl.DateTimeFormat('en-GB', { 
    //             dateStyle: 'medium', 
    //             timeStyle: 'short' 
    //         }).format(x);
    
    //         return formatDateTime;
    //     } else {
    //         return null;
    //     }
    // }

    return (
        <>
            {/* <div className="flex justify-center items-center text-center min-h-screen">
                <GradientText text={"Following are the Details of Consignment(s):"} />
            </div>
            <br /> */}
            {/* <div className="flex justify-center items-center">
                <GradientText text={"Following are the Details of Consignment(s):"} />
            </div> */}

            <section className="px-4 py-32 mx-auto max-w-7xl mb-32 mt-4 lg:mt-32">
                <div className="w-full mx-auto text-left sm:w-11/12 xl:w-8/12 md:text-center">
                    <h1 className="mb-3 text-3xl font-bold text-gray-900 lg:text-5xl md:leading-tight lg:font-extrabold">A secure, faster way for Delivery.</h1>
                    <p className="mb-6 text-lg text-gray-600 md:text-xl md:leading-normal">
                    We’re on a mission to bring transparency to couriers & shipping. We charge as little as possible, and we always show you upfront. No hidden fees. No bad exchange rates. No surprises.
                    </p>
                    <form 
                        className="grid w-full grid-cols-1 gap-3 pt-1 mx-auto mb-8 lg:grid-cols-6 md:w-7/12"
                        onSubmit={submitHandler}
                    >
                        <label className="col-auto lg:col-span-3 text-center items-center">
                            <span className="sr-only">Track Your Package</span>
                            {/* <input
                                type="text"
                                name="packageNo"
                                value={packageNo} 
                                onChange={(e)=>setPackageNo(e.target.value)}
                                pattern="[a-zA-Z0-9]{1,20}"
                                title="Package No must be in digits (0 to 9) or alphabets (a to z) or (A to Z)."
                                className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-blue-800 font-light text-black border mt-0 form-input form-input-lg"
                            /> */}

                            <input 
                                className="w-full bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-blue-800 font-light text-black border mt-0 form-input form-input-lg"
                                type="text" 
                                placeholder="Enter Package No..." 
                                name="packageNo"
                                value={packageNo} 
                                onChange={(e)=>setPackageNo(e.target.value)}
                                pattern="[a-zA-Z0-9]{1,20}"
                                title="Package No must be in digits (0 to 9) or alphabets (a to z) or (A to Z)."
                            />
                        </label>
                        {/* <button className="w-full col-auto btn btn-primary btn-lg lg:col-span-2" type="submit"></button> */}
                        <button
                            className="w-full col-auto rounded-md bg-blue-800 py-2 px-8 lg:col-span-2 font-semibold shadow-lg shadow-pink-500/20 transition-all duration-300 hover:-translate-y-[2px] hover:bg-black hover:shadow-blue-800/20 text-white text-center items-center"
                        >
                            Track
                        </button>
                    </form>
                    {/* <div className="flex flex-col justify-start mb-3 space-x-0 space-y-2 text-xs text-gray-600 md:flex-row md:justify-center md:space-x-8 md:space-y-0">
                        <div className="flex items-center">
                            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1 text-green-600">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            On Time Delivery
                        </div>
                        <div className="flex items-center">
                            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1 text-green-600">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            All India Shipping
                        </div>
                        <div className="flex items-center">
                            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1 text-green-600">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            Cancel anytime
                        </div>
                    </div> */}
                </div>
            </section>

            <div className='flex mt-12 justify-center items-center'>
                <div className="">
                    {/* {
                        packageData ? (
                                <p>Found</p>
                        ) : (
                            <p>No Data found</p>
                        )
                    } */}
                </div>
            </div>
        </>
    )
}

export default Tracking