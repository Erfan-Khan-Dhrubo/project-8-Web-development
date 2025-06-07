import React from "react";
import Banner from "../Components/Home/Banner";
import DoctorSection from "../Components/Home/DoctorSection";
import { useLoaderData } from "react-router";
import ServiceSection from "../Components/Home/ServiceSection";

const Home = () => {
  const data = useLoaderData();

  return (
    <div className="flex flex-col gap-12">
      <Banner></Banner>
      <DoctorSection data={data}></DoctorSection>
      <ServiceSection></ServiceSection>
    </div>
  );
};

export default Home;
