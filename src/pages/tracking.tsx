import axios from 'axios';
import { useQuery } from 'react-query'; // userQuery used for basic datafetching 
import { useState } from 'react';
import TrackPackageDetail from '../components/GetPackageDetails';
import GradientText from '../components/GradientText'
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

    const fetchData = () => { return axios.post("/api/tracking") }

    const {isLoading, data, error, isFetching, refetch} = useQuery(
        'super-heros', 
        fetchData,
    )

    const packageData = data?.data.data

    // console.log(packageData);


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
            {/* <div className="flex justify-center items-center text-center min-h-screen">
                <GradientText text={"Following are the Details of Consignment(s):"} />
            </div>
            <br /> */}
            <div className="flex justify-center items-center">
                <GradientText text={"Following are the Details of Consignment(s):"} />
            </div>

            <div className='flex mt-12 justify-center items-center'>
                <form onSubmit={submitHandler}>
                    <label>Enter Package No:</label>
                    <input
                        type="text"
                        name="packageNo"
                        value={packageNo} 
                        onChange={(e)=>setPackageNo(e.target.value)}
                        pattern="[a-zA-Z0-9]{1,20}"
                        title="Package No must be in digits (0 to 9) or alphabets (a to z) or (A to Z)."
                    />

                    <button type="submit">Submit</button>
                </form>

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