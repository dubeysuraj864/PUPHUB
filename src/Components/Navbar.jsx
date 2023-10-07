import Logo from "../Images/logo.png";
import Menu from "../Images/Group-9.png";
import { Link, Outlet } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";

function Navbar() {
  const [toggle, setToggle] = useState(false);
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
                <Link to="/">Products</Link>
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
                <Link to="/">Products</Link>
                <Link to="/">Pet Care</Link>
                <Link to="/">Contact</Link>
              </div>
            </>
          )}

          <div className="user-sign  items-center space-x-4 hidden md:flex">
            <Link to="/">
              <Button text="Sign In" />
            </Link>
            <Link to="/">
              <Button text="Register" />
            </Link>
          </div>
        </nav>
      </div>

      <Outlet />
    </>
  );
}

export default Navbar;