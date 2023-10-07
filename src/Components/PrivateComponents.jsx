import { Outlet } from "react-router-dom";

// import { Navigate } from "react-router-dom";
function PrivateComponents() {
    return ( <>
    <Outlet/>
    </> );
}

export default PrivateComponents;