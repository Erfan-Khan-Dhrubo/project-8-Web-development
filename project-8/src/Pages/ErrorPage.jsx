import React from "react";
import { Link } from "react-router";
import Navbar from "../Components/Navbar";

const ErrorPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-9/10 mx-auto flex flex-col gap-8 items-center min-h-screen justify-center">
        <img
          src="../../C001-assets/page not found.jpg"
          alt=""
          className="h-80  object-cover"
        />
        <h4 className="text-3xl font-bold">404 - Page Not Found</h4>
        <p className="text-grey text-center">
          Oops! The page you are looking for does not exist
        </p>
        <Link to={"/"} className="btn bg-btnBlue text-white rounded-xl">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
