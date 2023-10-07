import { Outlet,useNavigate } from "react-router-dom";

function PrivateComponents() {
const navigate = useNavigate();
    const auth = localStorage.getItem('auth')
    return ( <>

    {
     auth  ?  <Outlet/> : navigate("/login")
    }
   
    </> );
}

export default PrivateComponents;