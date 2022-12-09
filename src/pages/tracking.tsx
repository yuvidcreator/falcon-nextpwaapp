import { useState } from 'react';
import { useQuery } from 'react-query'; // userQuery used for basic datafetching 
import axios from 'axios';
import { FROMAPI_URL, FROMBACK_URL } from '../utils';
import Link from 'next/link';
import { toast } from 'react-toastify';
import Spinner from '../components/common/Spinner';
// import TrackingDetails from '../components/Tracking/TrackingDetails';
// import Spinner from '../common/Spinner';
// import TrackPackageDetail from '../components/GetPackageDetails';
// import GradientText from '../components/GradientText'
// import Link from 'next/link';
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

type packageType = {
    packageNo: string;
}



const Tracking = () => {

    const [packageNo, setPackageNo] = useState("");

    const getPackage = () => { return axios.get(`${FROMAPI_URL}/v1/tracking/${packageNo}/`) }

    // emulates a fetch (useQuery expects a Promise)
    // const getPackage = () => {
    //     return new Promise(resolve => {
    //     resolve(axios.get(`https://backend.falconcourierservice.com/api/v1/tracking/${packageNo}/`));
    //     });
    // };

    const {isLoading, data, error, isFetching, isSuccess, isError, failureCount, refetch} = useQuery(
        'package', 
        getPackage,
        {
            // cacheTime: 5000,
            // staleTime: 30000
            // refetchOnMount: true, //true by default
            refetchOnWindowFocus: true, //by default true --> for using refetch fn for on click event
            // refetchInterval: 3000,
            // refetchIntervalInBackground: true,
            enabled: false  //--> for using refetch fn for on click event
        }
    )

    if (isLoading || isFetching) {
        return (
            // <h2 className="flex justify-center items-center text-center text-lg text-black font-semibold min-h-screen">Loading...</h2>
            <div className="flex justify-center items-center text-center min-h-screen">
                <Spinner />
            </div>
        )
    }

    if (error instanceof Error) {
        return <h2 className="flex justify-center items-center text-center text-lg text-black font-semibold min-h-screen space-x-2">Requested Package Number not Found. Please Reload the Page.</h2>
        // return <h2 className="flex justify-center items-center text-center text-lg text-black font-semibold mt-52">{error.message}</h2>
        // return (
        //     <>
        //         <div className="flex justify-center items-center text-center p-8 mt-36 text-md text-black font-semibold">
        //             <h2>Requested Package No not Found. <br />Please Reload Page and Enter Valid Package No.</h2>
        //         </div>
        //         <div className="flex justify-center items-center text-center mb-16 text-md">
        //             <Link
        //                 href={"/tracking"}
        //                 passHref
        //                 className="w-15/16 col-auto rounded-md bg-black py-2 px-8 lg:col-span-2 font-semibold shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-[2px] hover:bg-blue-800 hover:shadow-blue-800/20 text-white text-center items-center"
        //             >
        //                 Go Back
        //             </Link>
        //         </div>
        //     </>
        // )
        // toast.error(error.message);
        // setPackageNo("");
    }

    // console.log(failureCount)
    // if (isError) {
    //     toast.error("Entered Package Not found.");
    // }

    const packageData = data?.data

    // console.log(packageData)

    const clickButtonHandler = (e: any) => {
        e.preventDefault();

        if (packageNo==="") {
            // console.log("Please Enter Package no.")
            toast.warn("Please Enter Package no.")
            // return (
            //     <h2 className="flex justify-center text-center items-center font-medium text-lg mt-52">Please Enter Package No.</h2>
            // )
        } else {
            // console.log(packageNo);
            refetch();
        }
    }

    const newCustDateTime = (x: any) => {
        if (packageData.package.delivery_date !== null || packageData.updates.updation_datetime !== null) {
            const formatDateTime = new Intl.DateTimeFormat('en-GB', { 
                dateStyle: 'medium', 
                timeStyle: 'short' 
            }).format(x);
    
            return formatDateTime;
        } else {
            return null;
        }
    }

    return (
        <>
            <section className="px-4 py-32 mx-auto max-w-7xl mt-4 lg:mt-16">
                <div className="w-full mx-auto text-left sm:w-11/12 xl:w-8/12 md:text-center">
                    <h1 className="mb-3 text-3xl font-bold text-gray-900 lg:text-5xl md:leading-tight lg:font-extrabold">A secure, faster way for Delivery.</h1>
                    <p className="mb-6 text-lg text-gray-600 md:text-xl md:leading-normal">
                    We’re on a mission to bring transparency to couriers & shipping. We charge as little as possible, and we always show you upfront. No hidden fees. No bad exchange rates. No surprises.
                    </p>
                    <form 
                        className="grid w-full grid-cols-1 gap-3 pt-1 mx-auto mb-2 lg:grid-cols-6 md:w-7/12"
                        // onSubmit={submitHandler}
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
                                // onChange={({ target: { value } }) => setPackageNo(value)}
                                pattern="[a-zA-Z0-9]{1,50}"
                                title="Package No must be in digits (0 to 9) or alphabets (a to z) or (A to Z)."
                            />
                        </label>
                        <button
                            className="w-full col-auto rounded-md bg-black py-2 px-8 lg:col-span-2 font-semibold shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-[2px] hover:bg-blue-800 hover:shadow-blue-800/20 text-white text-center items-center"
                            onClick={clickButtonHandler}
                        >
                            Track
                        </button>
                        {/* {
                            isError ? <h2 className="text-center justify-center items-center">Entered Package Not found.</h2> : <></>
                        } */}
                    </form>
                </div>
            </section>

            <section className="px-4 mx-auto max-w-7xl mb-32">
                <div className="w-full mx-auto text-left sm:w-11/12 xl:w-8/12 md:text-center">
                    {
                        packageData ? (
                            isSuccess ? (
                                <div className="mb-6 text-lg text-gray-600 md:text-xl md:leading-normal">
                                    <h2 className="mb-6 text-xl font-semibold text-black">Following are the Details of Consignment(s):</h2>

                                    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                                        <table className="w-full text-sm text-left text-black">
                                            <thead className="text-xs uppercase border-b border">
                                                <tr>
                                                    <th scope="col" className="py-4 px-6">
                                                        Details
                                                    </th>
                                                    <th scope="col" className="py-4 px-6 bg-blue-700 text-white">
                                                        Tracking Details
                                                    </th>
                                                </tr>
                                            </thead>

                                            <tbody key={packageData.package.id}>
                                                <tr className="border-b border">
                                                    <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
                                                        Package No:
                                                    </th>
                                                    <td className="py-4 px-6 bg-blue-700 text-white">
                                                        {packageData.package.package_no}
                                                    </td>
                                                </tr>
                                                <tr className="border-b border">
                                                    <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
                                                        Consignor:
                                                    </th>
                                                    <td className="py-4 px-6 bg-blue-700 text-white">
                                                        {packageData.package.consignor}
                                                    </td>
                                                </tr>
                                                <tr className="border-b border">
                                                    <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
                                                        Consignee Name:
                                                    </th>
                                                    <td className="py-4 px-6 bg-blue-700 text-white">
                                                        {packageData.package.consignee_name}
                                                    </td>
                                                </tr>
                                                <tr className="border-b border">
                                                    <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
                                                        Consignee Address:
                                                    </th>
                                                    <td className="py-4 px-6 bg-blue-700 text-white">
                                                        {packageData.package.consignee_address}
                                                    </td>
                                                </tr>
                                                <tr className="border-b border">
                                                    <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
                                                        Forwarding Associate:
                                                    </th>
                                                    <td className="py-4 px-6 bg-blue-700 text-white">
                                                        {packageData.package.forwarding_associate}
                                                    </td>
                                                </tr>
                                                <tr className="border-b border">
                                                    <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
                                                        Account No:
                                                    </th>
                                                    <td className="py-4 px-6 bg-blue-700 text-white">
                                                        {packageData.package.account_no}
                                                    </td>
                                                </tr>
                                                <tr className="border-b border">
                                                    <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
                                                        Proof:
                                                    </th>
                                                    <td className="py-4 px-6 bg-blue-700 text-white">
                                                        {packageData.package.proof}
                                                    </td>
                                                </tr>
                                                <tr className="border-b border">
                                                    <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
                                                        P.O.D.:
                                                    </th>
                                                    <td className="py-4 px-6 bg-blue-700 text-white">
                                                        {packageData.package.pod}
                                                    </td>
                                                </tr>
                                                <tr className="border-b border">
                                                    <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
                                                        Pickup Date:
                                                    </th>
                                                    <td className="py-4 px-6 bg-blue-700 text-white">
                                                        {newCustDateTime(new Date(packageData.package.pickup_date))}
                                                    </td>
                                                </tr>

                                                {
                                                    packageData.updates.map((item: updateType) => {
                                                        return (
                                                            <>
                                                                <tr className="border-b border" key={item.update_note}>
                                                                    <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
                                                                        Note:
                                                                    </th>
                                                                    <td className="py-4 px-6 bg-blue-700 text-white">
                                                                        {item.update_note}
                                                                    </td>
                                                                </tr>
                                                                <tr className="border-b border" key={item.updation_datetime}>
                                                                    <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
                                                                        Updation Date:
                                                                    </th>
                                                                    <td className="py-4 px-6 bg-blue-700 text-white">
                                                                        {newCustDateTime(new Date(item.updation_datetime))}
                                                                    </td>
                                                                </tr>
                                                            </>
                                                        )
                                                    })
                                                }
                                                <tr className="border-b border">
                                                    <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
                                                        Delivery Status:
                                                    </th>
                                                    <td className="py-4 px-6 bg-blue-700 text-white">
                                                        {packageData.package.status}
                                                    </td>
                                                </tr>
                                                <tr className="border-b border">
                                                    <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
                                                        Delivery Date:
                                                    </th>
                                                    {
                                                        packageData.package.delivery_date ? (
                                                            <td className="py-4 px-6 bg-blue-700 text-white">
                                                                {newCustDateTime(new Date(packageData.package.delivery_date))}
                                                            </td>
                                                        ) : (
                                                            <td className="py-4 px-6 bg-blue-700 text-white">
                                                            </td>
                                                        )
                                                    }
                                                </tr>
                                                <tr className="border-b border">
                                                    <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
                                                        Reciept:
                                                    </th>
                                                    <td className="py-4 px-6 bg-blue-700 text-white underline">
                                                        {
                                                            packageData.package.reciepts ? (
                                                                <Link 
                                                                    href={`${FROMBACK_URL}${packageData.package.reciepts}`} 
                                                                    passHref 
                                                                    target={"_blank"}
                                                                    className="font-bold text-md"
                                                                >
                                                                    Click to See Reciept
                                                                </Link>
                                                            ) : (
                                                                <> </>
                                                            )
                                                        }
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                ) : (
                                    <p className="text-black text-md">No Records found...</p>
                                )
                        ) : (
                            <></>
                        )
                    }
                </div>
            </section>
        </>
    )
}

export default Tracking