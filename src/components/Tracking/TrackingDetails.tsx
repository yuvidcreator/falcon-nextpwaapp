import { useQuery } from 'react-query'; // userQuery used for basic datafetching 
import axios from 'axios';
import Spinner from '../common/Spinner';
import Link from 'next/link';


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
}


type updateType = {
    update_note: string;
    updation_datetime: string;
}


type packageType = {
    package: string;
}


const BACKEND_API_URL = process.env.FALCON_API
const BACK_URL = process.env.BACKEND_URL
// const BACKEND_API_URL = "http://170.187.252.177/api"
// const LOCAL_BACKEND_API = "http://localhost:8000/api"
// const LOCAL_BACKEND = "http://localhost:8000/"




const TrackingDetails = (props: packageType) => {

    // console.log(props.package);
    
    const fetchData = () => { return axios.get(`${BACKEND_API_URL}/v1/tracking/${props.package}/`) }
    // const fetchData = () => { return axios.get(`http://localhost:8000/api/v1/tracking/${props.package}/`) }

    const {isLoading, data, error, isFetching, refetch} = useQuery(
        'super-heros', 
        fetchData,
        {
            // cacheTime: 5000,
            // staleTime: 30000
            // refetchOnMount: true, //true by default
            // refetchOnWindowFocus: true, //by default true
            // refetchInterval: 2000,
            // refetchIntervalInBackground: true,
            // enabled: false
        }
    )

    if (isLoading || isFetching) {
        return (
            <h2 className="flex justify-center items-center text-center text-lg text-black font-semibold">Loading...</h2>
            // <Spinner />
        )
    }

    if (error instanceof Error) {
        return <h2 className="flex justify-center items-center text-center text-lg text-black font-semibold">{error.message}</h2>
    }

    // console.log(data?.data)
    
    const packageData = data?.data
    console.log(packageData)

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
        <section>
            {/* <p>Package No: {packageData.package.package_no}</p>
            <p>Consignor: {packageData.package.consignor}</p>
            <p>Consignee Name: {packageData.package.consignee_name}</p>
            <p>Consignee Address: {packageData.package.consignee_address}</p>
            <p>Account No: {packageData.package.account_no}</p>
            <p>Forwarding Associate: {packageData.package.forwarding_associate}</p>
            <p>Proof: {packageData.package.proof}</p>
            <p>P.O.D.: {packageData.package.pod}</p>
            <p>Status: {packageData.package.status}</p>
            <p>Pickup Date: {newCustDateTime(new Date(packageData.package.pickup_date))}</p>
            {
                packageData.package.delivery_date ? <p>Delivery Date: {newCustDateTime(new Date(packageData.package.delivery_date))}</p> : <p>Delivery Date: </p>
            }
            <br />
            {
                packageData.updates.map((item: updateType) => {
                    return (
                        <>
                            <div key={item.update_note}>
                                <p>Note: {item.update_note}</p>
                                <p>Updation Date: {newCustDateTime(new Date(item.updation_datetime))}</p>
                            </div>
                        </>
                    )
                })
            }
            <br />
            <p>Reciept: {packageData.package.reciepts}</p>
            <br /> */}

            <h2 className="mb-6 text-xl font-semibold text-black">Following are the Details of Consignment(s):</h2>

            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-black">
                    <thead className="text-xs uppercase border-b border">
                        <tr>
                            <th scope="col" className="py-4 px-6">
                                Pakcage Details
                            </th>
                            <th scope="col" className="py-4 px-6 bg-red-600 text-white">
                                Tracking Details
                            </th>
                        </tr>
                    </thead>

                    <tbody key={packageData.package.id}>
                        <tr className="border-b border">
                            <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
                                Package No:
                            </th>
                            <td className="py-4 px-6 bg-red-600 text-white">
                                {packageData.package.package_no}
                            </td>
                        </tr>
                        <tr className="border-b border">
                            <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
                                Consignor:
                            </th>
                            <td className="py-4 px-6 bg-red-600 text-white">
                                {packageData.package.consignor}
                            </td>
                        </tr>
                        <tr className="border-b border">
                            <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
                                Consignee Name:
                            </th>
                            <td className="py-4 px-6 bg-red-600 text-white">
                                {packageData.package.consignee_name}
                            </td>
                        </tr>
                        <tr className="border-b border">
                            <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
                                Consignee Address:
                            </th>
                            <td className="py-4 px-6 bg-red-600 text-white">
                                {packageData.package.consignee_address}
                            </td>
                        </tr>
                        <tr className="border-b border">
                            <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
                                Forwarding Associate:
                            </th>
                            <td className="py-4 px-6 bg-red-600 text-white">
                                {packageData.package.forwarding_associate}
                            </td>
                        </tr>
                        <tr className="border-b border">
                            <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
                                Account No:
                            </th>
                            <td className="py-4 px-6 bg-red-600 text-white">
                                {packageData.package.account_no}
                            </td>
                        </tr>
                        <tr className="border-b border">
                            <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
                                Proof:
                            </th>
                            <td className="py-4 px-6 bg-red-600 text-white">
                                {packageData.package.proof}
                            </td>
                        </tr>
                        <tr className="border-b border">
                            <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
                                P.O.D.:
                            </th>
                            <td className="py-4 px-6 bg-red-600 text-white">
                                {packageData.package.pod}
                            </td>
                        </tr>
                        <tr className="border-b border">
                            <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
                                Pickup Date:
                            </th>
                            <td className="py-4 px-6 bg-red-600 text-white">
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
                                            <td className="py-4 px-6 bg-red-600 text-white">
                                                {item.update_note}
                                            </td>
                                        </tr>
                                        <tr className="border-b border" key={item.updation_datetime}>
                                            <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
                                                Updation Date:
                                            </th>
                                            <td className="py-4 px-6 bg-red-600 text-white">
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
                            <td className="py-4 px-6 bg-red-600 text-white">
                                {packageData.package.status}
                            </td>
                        </tr>
                        <tr className="border-b border">
                            <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
                                Delivered Date:
                            </th>
                            {
                                packageData.package.delivery_date ? (
                                    <td className="py-4 px-6 bg-red-600 text-white">
                                        {newCustDateTime(new Date(packageData.package.delivery_date))}
                                    </td>
                                ) : (
                                    <td className="py-4 px-6 bg-red-600 text-white">
                                    </td>
                                )
                            }
                        </tr>
                        <tr className="border-b border">
                            <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
                                Reciept:
                            </th>
                            <td className="py-4 px-6 bg-red-600 text-white">
                                {
                                    packageData.package.reciepts ? (
                                        <Link 
                                            href={`${BACK_URL}/${packageData.package.reciepts}`} 
                                            passHref 
                                            target={"_blank"}
                                            className="font-semibold text-lg"
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
        </section>
    )
}

export default TrackingDetails