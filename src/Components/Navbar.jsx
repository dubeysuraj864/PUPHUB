import Logo from "../Images/logo.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
import Logout from "../Components/Logout";
import { RiMenu5Fill } from "react-icons/ri";
import { IoArrowBackCircle } from "react-icons/io5";

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
      <div className="navbar overflow-hidden ">
        <nav
          className="text-3xl md:text-sm flex md:justify-around justify-between 
        items-center uppercase p-4"
        >
          <div className="logo">
            <img src={Logo} className="w-44" alt="logo" />
          </div>
       

          <>
            {toggle ? (
              <>
                <div
                  className="nav-links group w-screen h-screen absolute text bg-[#ffffff] md:w-auto md:bg-transparent
            md:static  md:normal flex flex-col items-center 
           justify-center py-10 px-0 space-y-6 md:space-y-0 top-[0px] left-[0px] text-center
            md:block transition-all  z-20"
                >
                  <IoArrowBackCircle
                    onClick={() => setToggle(!toggle)}
                    className="text-5xl absolute left-4 top-4"
                  />

                  <Link to="/">Our Services</Link>
                  <Link to="/">About Us</Link>
                  <Link to="/products">Products</Link>
                  <Link to="/">Pet Care</Link>
                  <Link to="/">Contact</Link>
                  <div className=" md:flex gap-y-2 gap-4">
                    <Link to="/login">
                      <Button text="Sign In" />
                    </Link>
                    <Link to="/sign-up">
                      <Button text="Register" />
                    </Link>
                  </div>
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
              <div className="hidden md:flex md: gap-4">
                <Link to="/login">
                  <Button text="Sign In" />
                </Link>
                <Link to="/sign-up">
                  <Button text="Register" />
                </Link>
              </div>
            )}
          </div>
          <div className="menu group  ">
            <RiMenu5Fill
              onClick={() => setToggle(!toggle)}
              className=" md:hidden block "
            />
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
