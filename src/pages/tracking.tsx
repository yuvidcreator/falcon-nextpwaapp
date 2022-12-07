import { useState } from 'react';
// import axios from 'axios';
// import { useQuery } from 'react-query'; // userQuery used for basic datafetching 
// import TrackPackageDetail from '../components/GetPackageDetails';
// import GradientText from '../components/GradientText'
// import Link from 'next/link';
// import Tracker from '../components/Tracker'
import TrackingDetails from '../components/Tracking/TrackingDetails';


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

type packageType = {
    packageNo: string;
}



const Tracking = () => {

    const [packageNo, setPackageNo] = useState("");

    const submitHandler = (e: any) => {
        e.preventDefault();

        if (packageNo==="") {
            console.log("Please Enter Package no.")
        } else {
            console.log(packageNo);

            return (
                <>
                    {/* <Tracker package={packageNo} /> */}
                    <TrackingDetails package={packageNo}  />
                </>
            )
        }
    }

    return (
        <>
            {/* <div className="flex justify-center items-center text-center min-h-screen">
                <GradientText text={"Following are the Details of Consignment(s):"} />
            </div>
            <br /> */}
            {/* <div className="flex justify-center items-center">
                <GradientText text={"Following are the Details of Consignment(s):"} />
            </div> */}

            <section className="px-4 py-32 mx-auto max-w-7xl mb-4 mt-4 lg:mt-32">
                <div className="w-full mx-auto text-left sm:w-11/12 xl:w-8/12 md:text-center">
                    <h1 className="mb-3 text-3xl font-bold text-gray-900 lg:text-5xl md:leading-tight lg:font-extrabold">A secure, faster way for Delivery.</h1>
                    <p className="mb-6 text-lg text-gray-600 md:text-xl md:leading-normal">
                    We’re on a mission to bring transparency to couriers & shipping. We charge as little as possible, and we always show you upfront. No hidden fees. No bad exchange rates. No surprises.
                    </p>
                    <form 
                        className="grid w-full grid-cols-1 gap-3 pt-1 mx-auto mb-2 lg:grid-cols-6 md:w-7/12"
                        onSubmit={submitHandler}
                    >
                        <label className="col-auto lg:col-span-3 text-center items-center">
                            <span className="sr-only">Track Your Package</span>
                            <input 
                                className="w-full bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-blue-800 font-normal text-black border mt-0 form-input form-input-lg"
                                type="text" 
                                placeholder="Enter Package No..." 
                                name="packageNo"
                                value={packageNo} 
                                onChange={(e)=>setPackageNo(e.target.value)}
                                pattern="[a-zA-Z0-9]{1,20}"
                                title="Package No must be in digits (0 to 9) or alphabets (a to z) or (A to Z)."
                            />
                        </label>
                        <button
                            className="w-full col-auto rounded-md bg-black py-2 px-8 lg:col-span-2 font-semibold shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-[2px] hover:bg-blue-800 hover:shadow-blue-800/20 text-white text-center items-center"
                        >
                            Track
                        </button>
                    </form>
                </div>
            </section>

            <section className="px-4 py-4 mx-auto max-w-7xl mb-32">
                <div className="w-full mx-auto text-left sm:w-11/12 xl:w-8/12 md:text-center">
                    {
                        packageNo ? (
                            <div className="mb-6 text-lg text-gray-600 md:text-xl md:leading-normal">
                                <TrackingDetails package={packageNo}  />
                            </div>
                        ) : (
                            <p className="text-black text-md">No Records found...</p>
                        )
                    }
                </div>
            </section>
        </>
    )
}

export default Tracking