import React from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";

const ShowAppointments = ({ singleAppointment }) => {
  const { name, education, specialty, fee, id } = singleAppointment;

  const cancelAppointment = () => {
    const appointmentsIds = localStorage.getItem("doctorIds");
    const storedIds = JSON.parse(appointmentsIds);

    const updateData = storedIds.filter((item) => item !== id);

    const dataStringified = JSON.stringify(updateData);
    localStorage.setItem("doctorIds", dataStringified);
    toast("Appointment Cancels");
  };
  return (
    <div className="flex flex-col bg-white w-full sm:p-8 p-4 rounded-xl gap-4">
      <div className="flex flex-col sm:flex-row  sm:justify-between sm:items-center">
        <div>
          <p className="text-xl font-bold">{name}</p>
          <p className="text-grey">
            {education} - {specialty}
          </p>
        </div>
        <div>
          <p className="text-grey">Appointment Fee : {fee} + Vat</p>
        </div>
      </div>
      <div className="w-full border-t-2 border-dotted border-gray-300"></div>

      <Link
        to={"/MyBookings"}
        onClick={cancelAppointment}
        className="btn bg-white border border-red-500 text-red-500"
      >
        Cancel Appointment
      </Link>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default ShowAppointments;
