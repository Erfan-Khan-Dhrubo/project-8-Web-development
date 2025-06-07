import React from "react";
import { useLoaderData } from "react-router";
import ErrorDoctorDetails from "../Components/Doctor Info/errorDoctorDetails";
import ShowDoctorDetails from "../Components/Doctor Info/showDoctorDetails";

const DoctorDetails = () => {
  const { doctorData, params } = useLoaderData();

  return (
    <div>
      {doctorData === undefined ? (
        <ErrorDoctorDetails params={params} />
      ) : (
        <ShowDoctorDetails data={doctorData} />
      )}
    </div>
  );
};

export default DoctorDetails;
