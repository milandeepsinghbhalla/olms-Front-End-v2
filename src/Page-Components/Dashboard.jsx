import { useEffect, useState } from "react"
import AdminDashboard from "../Components/AdminDashboard"
import CarrierDashboard from "../Components/CarrierDashboard"
import ShipperDashboard from "../Components/ShipperDashboard"
import links from "../assets/Util/links"

const Dashboard = ()=>{

    const roleToDasboardMapping =  {
        admin: <AdminDashboard />,
        carrier: <CarrierDashboard />,
        shipper: <ShipperDashboard />
    }
    let Default = <h1>You are not authorized to view this page login first...!!</h1>
    
    let [gotRoleFlag, setGotRoleFlag] = useState(false);
    let [RenderedDashboard, setRenderedDashboard] = useState(null);
    const getRole = async ()=>{
        if(localStorage.getItem('userToken')){
            try{

                let getRoleResponse = await fetch(links.backendUrl + '/get-role',{
                    headers: {
                        Accept: 'application/json',
                        Authorization: localStorage.getItem('userToken'),
                    }
                })
    
                if(getRoleResponse<200 || getRoleResponse>299){
                    let errorResult = await getRoleResponse.json()
                    let myError = {
                        ...errorResult,
                        message: errorResult.message
                    }
                    throw myError;
                }
                let getRoleResult = await getRoleResponse.json();
                setGotRoleFlag(true)
                setRenderedDashboard(roleToDasboardMapping[getRoleResult.role])
            }
            catch (err){
                console.log('dashboar error---',err);
                alert(err.message);
            }

        }
        else{
            alert('Login to view this page....!!!')
        }
    }
    useEffect(()=>{
        getRole().then();
    },[])
    return (
        <>
        {gotRoleFlag? RenderedDashboard: Default}
        </>
    )
}

export default Dashboard;