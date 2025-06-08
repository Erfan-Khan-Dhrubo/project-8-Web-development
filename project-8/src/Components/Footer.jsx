import React from "react";
import { NavLink } from "react-router";
import { Facebook, Linkedin, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-white">
      <footer className="flex flex-col items-center p-12 gap-8">
        <div className="flex items-center gap-2">
          <img className="w-8 h-8" src="../../C001-assets/logo.png" alt="" />
          <p className="font-bold text-2xl">DocTalk</p>
        </div>
        <div className="grid sm:grid-cols-4 grid-cols-2 w-4/10  middle text-grey ">
          <NavLink className={" flex justify-center py-1"} to={"/"}>
            Home
          </NavLink>
          <NavLink className={" flex justify-center py-1"} to={"/MyBookings"}>
            My-Bookings
          </NavLink>
          <NavLink className={" flex justify-center py-1"} to={"/Blogs"}>
            Blogs
          </NavLink>
          <NavLink className={" flex justify-center py-1"} to={"/ContactUs"}>
            Contact Us
          </NavLink>
        </div>
        <div className="border-t-2 border-gray-300 w-3/4"></div>
        <div className="flex justify-center items-center gap-8">
          <a
            className="p-1 rounded-full border-2"
            href="https://www.facebook.com/"
            target="_blank"
          >
            <Facebook />
          </a>
          <a
            className="p-1 rounded-full border-2"
            href="https://www.linkedin.com/"
            target="_blank"
          >
            <Linkedin />
          </a>
          <a
            className="p-1 rounded-full border-2"
            href="https://www.youtube.com/"
            target="_blank"
          >
            <Youtube />
          </a>
          <a
            className="p-1 rounded-full border-2"
            href="https://x.com/"
            target="_blank"
          >
            <Twitter />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
