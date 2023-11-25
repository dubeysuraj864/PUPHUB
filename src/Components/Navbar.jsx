import Logo from "../Images/logo.png";
import Menu from "../Images/Group-9.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
import Logout from "../Components/Logout";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const auth = JSON.parse(localStorage.getItem("auth"));
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
    window.location.reload(true);
  };
  return (
    <>
      <div className="navbar ">
        <nav
          className="text-3xl md:text-sm flex md:justify-around justify-between 
        items-center p-4 space-x-4 uppercase"
        >
          <div className="logo">
            <img src={Logo} className="w-44" alt="logo" />
          </div>
          <div className="menu group" onClick={(e) => setToggle(!toggle)}>
            <img src={Menu} className="w-12 md:hidden block" alt="logo" />
          </div>
          {auth || user ? (
            <>
              {toggle ? (
                <>
                  <div
                    className="nav-links group-[]: pr-6 bg-[#F1C21B] md:w-auto md:bg-transparent
           w-[100vw] space-x-4 md:static absolute md:normal flex flex-col items-center 
           justify-center py-10 px-0 space-y-6 md:space-y-0 top-[100px] -left-[16px] text-center
            md:block transition-all z-20"
                  >
                    <Link to="/">Our Services</Link>
                    <Link to="/">About Us</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/">Pet Care</Link>
                    <Link to="/">Contact</Link>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="nav-links group-[]: pr-6 bg-[#F1C21B] md:w-auto md:bg-transparent
           w-[100vw] space-x-4 md:static absolute md:normal flex flex-col items-center 
           justify-center py-10 px-0 space-y-6 md:space-y-0 top-[100px] -left-[1600px] text-center
            md:block transition-all"
                  >
                    <Link to="/">Our Services</Link>
                    <Link to="/">About Us</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/">Pet Care</Link>
                    <Link to="/">Contact</Link>
                  </div>
                </>
              )}
            </>
          ) : null}

          <div className="user-sign space-x-4 flex justify-center items-center md:flex">
            {auth || user ? (
              <>
                <span className="mr-2 flex justify-center items-center">
                  {auth ? (
                    <>
                      {auth.name}{" "}
                      <img
                        src={auth.imageUrl}
                        className="w-[50px] mx-10 rounded-full"
                        alt=""
                      />
                    </>
                  ) : (
                    <>{user.name}</>
                  )}
                </span>

                {auth ? (
                  <>
                    {" "}
                    <Logout />
                  </>
                ) : (
                  <button onClick={logout} className="text-lg">
                    Logout
                  </button>
                )}
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button text="Sign In" />
                </Link>
                <Link to="/sign-up">
                  <Button text="Register" />
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
