import { Outlet, useNavigate } from "react-router-dom";

function PrivateComponents() {
  const navigate = useNavigate();
  const auth = localStorage.getItem("auth");
  const user = localStorage.getItem("user")
  return <>{auth || user ? <Outlet /> : navigate("/login")}</>;
}

export default PrivateComponents;
