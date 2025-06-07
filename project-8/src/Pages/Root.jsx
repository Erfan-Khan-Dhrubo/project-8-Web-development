import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Outlet, useNavigation } from "react-router-dom";
import Spinner from "../Components/Spinner";

const Root = () => {
  const navigation = useNavigation();

  return (
    <div className="flex flex-col gap-8">
      <Navbar />

      {/* Show spinner while loading */}
      {navigation.state === "loading" && <Spinner />}

      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
