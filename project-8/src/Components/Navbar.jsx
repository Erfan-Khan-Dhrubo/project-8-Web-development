import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="">
      <div className="navbar bg-background w-9/10 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li className="middle text-3xl">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li className="middle">
                <NavLink to={"/MyBookings"}>My-Bookings</NavLink>
              </li>
              <li className="middle">
                <NavLink to={"/Blogs"}>Blogs</NavLink>
              </li>
              <li className="middle">
                <NavLink to={"/ContactUs"}>Contact Us</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-4">
              <img
                className="w-10 h-10"
                src="../../C001-assets/logo.png"
                alt=""
              />
              <p className="font-bold text-2xl">Phudu</p>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="middle">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="middle">
              <NavLink to={"/MyBookings"}>My-Bookings</NavLink>
            </li>
            <li className="middle">
              <NavLink to={"/Blogs"}>Blogs</NavLink>
            </li>
            <li className="middle">
              <NavLink to={"/ContactUs"}>Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn text-white bg-btnBlue rounded-3xl">Emergency</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
