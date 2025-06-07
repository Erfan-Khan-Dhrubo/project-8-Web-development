import React from "react";
import { Link } from "react-router";

const ErrorAppointment = () => {
  return (
    <div className="w-9/10 mx-auto flex flex-col gap-8 items-center min-h-[60vh] justify-center">
      <h4 className="text-3xl font-bold">
        You Have not Booked any appointment yet
      </h4>
      <p className="text-grey">
        Our platform connects you with verified experienced doctors across
        various specialities
      </p>
      <Link to={"/"} className="btn bg-btnBlue text-white rounded-xl">
        Book an Appointment
      </Link>
    </div>
  );
};

export default ErrorAppointment;
