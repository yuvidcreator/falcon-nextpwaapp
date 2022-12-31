import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Tab } from "@headlessui/react";
import toast from "react-hot-toast";
import Spinner from "../components/common/Spinner";
import { FROMAPI_URL, FROMBACK_URL } from "../utils";
import Link from "next/link";
import ProgerssBar from "../components/ProgerssBar";



type updateType = {
    location: string,
    update_note: string,
    updation_datetime: string
}


const categories = [
    {
        id: 1,
        title: "Shipment Details"
    },
    {
        id: 2,
        title: "Status & Scan"
    }
]


const NewTracker = () => {

    const [packageNo, setPackageNo] = useState("");

    const getPackage = () => { return axios.get(`${FROMAPI_URL}/v1/tracking/${packageNo}/`) }

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
    }

    const packageData = data?.data

    console.log(packageData)

    const clickButtonHandler = (e: any) => {
        e.preventDefault();

        if (packageNo==="") {
            toast.error(
                `Please Enter Package no.`, {
                position: "bottom-center",
            });
        } else {
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
        <div className="">
            <section className="px-4 py-32 mx-auto max-w-7xl mt-4">
                <div className="w-full mx-auto text-left sm:w-11/12 xl:w-8/12 md:text-center">
                    <h1 className="mb-4 text-3xl font-bold text-gray-900 lg:text-5xl md:leading-tight lg:font-extrabold">
                        Track Your Package
                    </h1>
                    <p className="text-lg text-gray-600 md:text-xl md:leading-normal">
                        This website shows real-time tracking updates. Our teams also proactively track each shipment to ensure safe & time-bound deliveries.
                    </p>
                    <p className="mb-8 text-lg text-gray-600 md:text-xl md:leading-normal">
                        Please enter a Valid Package Number to get Real time Tracking.
                    </p>
                    <form 
                        className="grid w-full grid-cols-1 gap-3 pt-1 mx-auto lg:grid-cols-6 md:w-7/12"
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
                    </form>
                </div>
            </section>

            <section>
                <div>
                    {
                        packageData ? (
                            isSuccess ? (
                                <div className="mb-8 text-lg text-gray-600 md:text-xl text-center items-center justify-center">
                                    <h2 className="text-xl font-semibold text-black">Following are the Details of Consignment(s):</h2>

                                    <div className="mt-24 mb-24">
                                        <ProgerssBar status={packageData.package.shipment_progress} comment={packageData.package.status} />
                                    </div>

                                    <Tab.Group>
                                        <Tab.List className="flex justify-center p-4">
                                            {categories.map((category) => (
                                                <Tab
                                                    key={category.id}
                                                    id={category.title}
                                                    className={({ selected }) =>
                                                        `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-medium outline-none md:py-4 md:px-6 md:text-base ${
                                                        selected
                                                            ? "borderGradient bg-[#09438f] text-white"
                                                            : "border-b-2 border-[#09438f] text-[#09438f]"
                                                        }`
                                                    }
                                                >
                                                    {category.title}
                                                </Tab>
                                            ))}
                                        </Tab.List>
                                        <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4 text-sm text-black p-4">
                                            <Tab.Panel className="tabPanel">
                                                <table className="w-full text-sm text-left text-black border" key={packageData.package.id}>
                                                    <tr className="border-b border">
                                                        <th scope="row" className="border-b border-t border-[#dddde4] py-2 px-6 whitespace-nowrap">
                                                            Package No:
                                                        </th>
                                                        <td className="border-b border-t border-[#dddde4] py-2 px-6 bg-blue-700 text-white">
                                                            {packageData.package.package_no}
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border">
                                                        <th scope="row" className="border-b border-t border-[#dddde4] py-2 px-6 whitespace-nowrap">
                                                            Consignor:
                                                        </th>
                                                        <td className="border-b border-t border-[#dddde4] py-2 px-6 bg-blue-700 text-white">
                                                            {packageData.package.consignor}
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border">
                                                        <th scope="row" className="border-b border-t border-[#dddde4] py-2 px-6 whitespace-nowrap">
                                                            Consignee Name:
                                                        </th>
                                                        <td className="border-b border-t border-[#dddde4] py-2 px-6 bg-blue-700 text-white">
                                                            {packageData.package.consignee_name}
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border">
                                                        <th scope="row" className="border-b border-t border-[#dddde4] py-2 px-6 whitespace-nowrap">
                                                            Consignee Address:
                                                        </th>
                                                        <td className="border-b border-t border-[#dddde4] py-2 px-6 bg-blue-700 text-white">
                                                            {packageData.package.consignee_address}
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border">
                                                        <th scope="row" className="border-b border-t border-[#dddde4] py-2 px-6 whitespace-nowrap">
                                                            Forwarding Associate:
                                                        </th>
                                                        <td className="border-b border-t border-[#dddde4] py-2 px-6 bg-blue-700 text-white">
                                                            {packageData.package.forwarding_associate}
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border">
                                                        <th scope="row" className="border-b border-t border-[#dddde4] py-2 px-6 whitespace-nowrap">
                                                            Pickup Date:
                                                        </th>
                                                        <td className="border-b border-t border-[#dddde4] py-2 px-6 bg-blue-700 text-white">
                                                            {newCustDateTime(new Date(packageData.package.pickup_date))}
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border">
                                                        <th scope="row" className="border-b border-t border-[#dddde4] py-2 px-6 whitespace-nowrap">
                                                            From
                                                        </th>
                                                        <td className="border-b border-t border-[#dddde4] py-2 px-6 bg-blue-700 text-white">
                                                            {packageData.package.package_from}
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border">
                                                        <th scope="row" className="border-b border-t border-[#dddde4] py-2 px-6 whitespace-nowrap">
                                                            To
                                                        </th>
                                                        <td className="border-b border-t border-[#dddde4] py-2 px-6 bg-blue-700 text-white">
                                                            {packageData.package.package_to}
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border">
                                                        <th scope="row" className="border-b border-t border-[#dddde4] py-2 px-6 whitespace-nowrap">
                                                            Reciept:
                                                        </th>
                                                        <td className="text-white py-2 px-6 bg-blue-700 underline border-b border-t border-[#dddde4]">
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
                                                </table>
                                            </Tab.Panel>

                                            <Tab.Panel className="tabPanel">
                                                {
                                                    <table className="w-full text-sm text-left text-black">
                                                        <thead className="text-xs uppercase border-b border">
                                                            <tr>
                                                                <th scope="col" className="py-2 px-6">
                                                                    Location
                                                                </th>
                                                                <th scope="col" className="py-2 px-6 bg-blue-100 ">
                                                                    Status
                                                                </th>
                                                                <th scope="col" className="py-2 px-6 bg-blue-700 text-white">
                                                                    Updated Timestamp
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {packageData.updates.map((item: updateType) => {
                                                                return (
                                                                    <>
                                                                        <tr className="border-b border" key={item.update_note}>
                                                                            <th scope="row" className="border-b border-t border-[#dddde4] py-2 px-6 whitespace-nowrap">
                                                                                {item.location}
                                                                            </th>
                                                                            <td className="border-b border-t border-[#dddde4] py-2 px-6 bg-blue-100 ">
                                                                                {item.update_note}
                                                                            </td>
                                                                            <td className="border-b border-t border-[#dddde4] py-2 px-6 bg-blue-700 text-white">
                                                                                {newCustDateTime(new Date(item.updation_datetime))}
                                                                            </td>
                                                                        </tr>
                                                                    </>
                                                                )
                                                            })}
                                                        </tbody>
                                                    </table>
                                                }
                                            </Tab.Panel>
                                        </Tab.Panels>
                                    </Tab.Group>
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
        </div>
    )
}

export default NewTracker