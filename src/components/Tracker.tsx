import { useQuery } from 'react-query'; // userQuery used for basic datafetching 
import axios from 'axios';
import Spinner from './common/Spinner';


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


// const BACKEND_API_URL = process.env.FALCON_API
// const BACKEND_API_URL = "http://170.187.252.177/api"


const fetchData = () => { return axios.get('http://170.187.252.177/api/v1/tracking/') }

const Tracker = () => {

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
            // <h2>Loading...</h2>
            <Spinner />
        )
    }

    if (error instanceof Error) {
        return <h2>{error.message}</h2>
    }

    // console.log(data?.data)
    
    const packageData = data?.data.data
    // console.log(packageData.data)

    const newCustDateTime = (x: any) => {
        if (packageData.delivery_date !== null) {
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
            {/* <div>Following are the Details of Consignment(s):</div> */}
            
                {
                    packageData.map((item: trackingType) => {
                        return (
                            <>
                                <div key={item.id}>
                                    <p>Package No: {item.package_no}</p>
                                    <p>Consignor: {item.consignor}</p>
                                    <p>Consignee Name: {item.consignee_name}</p>
                                    <p>Consignee Address: {item.consignee_address}</p>
                                    <p>Pickup Date: {newCustDateTime(new Date(item.pickup_date))}</p>
                                    {
                                        item.delivery_date ? <p>Delivery Date: {newCustDateTime(new Date(item.delivery_date))}</p> : <p>Delivery Date: </p>
                                    }
                                    {/* <p>Delivery Date: {newCustDateTime(new Date(item.delivery_date))}</p> */}
                                    {/* <p>Delivery Date: {item.delivery_date}</p> */}
                                    <p>Proof: {item.proof}</p>
                                    <p>Status: {item.status}</p>
                                    {
                                        item.tracking_updates.map((tu: updateType)=>{
                                            return (
                                                <div key={tu.update_note}>
                                                    <p>Note: {tu.update_note}</p>
                                                    <p>Updation Date: {newCustDateTime(new Date(tu.updation_datetime))}</p>
                                                    {/* <p>Updation Date: {tu.updation_datetime}</p> */}
                                                </div>
                                            )
                                        })
                                    }
                                    <p>Receipts: {item.reciepts}</p>
                                </div>
                            </>
                        )
                    })
                }

                <br />
        </>
    )
}

export default Tracker