import React, { Suspense, useEffect, useState } from "react";
import Day from "./Day";
import { Link } from "react-router";
import { TriangleAlert } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";

const ShowDoctorDetails = ({ data }) => {
  const [haveAppointment, setHaveAppointment] = useState(false);

  //console.log(data);
  const {
    image,
    name,
    specialty,
    education,
    profile,
    workplace,
    registration_number,
    fee,
    available_days,
    id,
    designation,
  } = data;

  const checkAppointment = () => {
    const appointmentsIds = localStorage.getItem("doctorIds");
    const storedIds = JSON.parse(appointmentsIds);

    for (const item of storedIds) {
      if (item === id) {
        setHaveAppointment(true);
      }
    }
  };

  const showAlert = () => {
    haveAppointment ? toast("Appointment already scheduled for today") : "";
  };

  useEffect(() => {
    checkAppointment();
  }, [id]);

  return (
    <div className="w-9/10 mx-auto flex flex-col gap-8">
      <div className="bg-white md:p-16 p-4 rounded-2xl text-center flex flex-col gap-6">
        <h4 className="sm:text-3xl text-2xl font-bold">
          Doctor’s Profile Details
        </h4>
        <p className="text-grey">{profile}</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-12 bg-white md:p-12 sm:-8 p-4 rounded-2xl">
        <div className="flex-1/2 flex items-center">
          <img className="rounded-2xl" src={image} alt="" />
        </div>
        <div className="flex flex-1/2 flex-col justify-between gap-4 p-4 flex-grow">
          <p className="sm:text-3xl text-2xl font-bold">{name}</p>
          <div className="text-lg text-grey flex flex-col gap-1">
            <p>{education}</p>
            <p>
              {specialty}, {designation}
            </p>
          </div>
          <div className="text-lg flex flex-col gap-1">
            <p className="text-grey">Working at </p>
            <p className="font-bold">{workplace}</p>
          </div>
          <div className="w-full border-t-2 border-dotted border-gray-300"></div>
          <div className="flex items-center gap-4">
            <div className="rounded-full flex justify-center items-center border w-4 h-4 text-xs text-grey">
              R
            </div>
            <div className="text-grey">Reg No: {registration_number}</div>
          </div>
          <div className="w-full border-t-2 border-dotted border-gray-300"></div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="font-bold">Availability: </p>
            <div className="flex items-center gap-4">
              <Suspense fallback={<span>Loading ......</span>}>
                {available_days.map((day, index) => (
                  <Day day={day} key={index}></Day>
                ))}
              </Suspense>
            </div>
          </div>
          <div>
            <span className="font-bold">Consultation Fee:</span>{" "}
            <span className="text-btnBlue font-bold">{fee} </span>
            <span className="text-grey">(incl. Vat) </span>
            <span className="text-btnBlue">Per consultation</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-16 rounded-2xl text-center flex flex-col gap-8">
        <div>
          <h4 className="font-bold text-2xl">Book an Appointment</h4>
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-full border-t-2 border-dotted border-gray-300"></div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
            <p className="text-lg font-bold">Availability</p>
            <div className="border border-btnGreen text-btnGreen bg-btnGreenBg rounded-3xl py-1 px-2 text-sm">
              Doctor Available Today
            </div>
          </div>
          <div className="w-full border-t-2  border-gray-300"></div>
          <div className="flex items-center gap-2 bg-lightYellow text-yellow py-1 px-4 rounded-3xl">
            <TriangleAlert size={16} />
            <p>
              {" "}
              Due to high patient volume, we are currently accepting
              appointments for today only. We appreciate your understanding and
              cooperation.
            </p>
          </div>
        </div>
        <div>
          <Link
            to={!haveAppointment ? "/MyBookings" : "#"}
            onClick={showAlert}
            state={{ data }}
            className="btn w-full  text-white bg-btnBlue rounded-3xl text-lg"
          >
            Book Appointment Now
          </Link>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default ShowDoctorDetails;
