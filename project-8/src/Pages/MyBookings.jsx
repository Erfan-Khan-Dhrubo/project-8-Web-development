import React, { useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router";
import { ToastContainer, toast } from "react-toastify";

import { Divide } from "lucide-react";
import ErrorAppointment from "../Components/MyBookings/ErrorAppointment";
import Appointment from "../Components/MyBookings/Appointment";

const MyBookings = () => {
  const location = useLocation(); // getting the id of doctor
  //console.log(location);
  const data = useLoaderData(); // loading whole data

  const [appointments, setAppointments] = useState([]);

  const getInfoFromLocalStorage = () => {
    const appointmentsIds = localStorage.getItem("doctorIds");
    // console.log(appointmentsIds);

    if (appointmentsIds !== null) {
      const storedIds = JSON.parse(appointmentsIds);
      return storedIds;
    }
    //console.log("a");
    return [];
  };

  const checkingIdExist = () => {
    const storeData = getInfoFromLocalStorage();
    if (location.state === null) {
      return storeData;
    }
    toast(`Appointment scheduled for ${location.state.data.name} today`);
    const doctorId = location.state.data.id;
    for (const doctor of storeData) {
      if (doctor === doctorId) {
        return storeData;
      }
    }
    const newStoreData = [...storeData, doctorId];
    return newStoreData;
  };

  const updateLocalStorage = () => {
    const updateData = checkingIdExist();
    const dataStringified = JSON.stringify(updateData);
    localStorage.setItem("doctorIds", dataStringified);
    return updateData;
  };

  useEffect(() => {
    const info = updateLocalStorage();
    setAppointments(info);
  }, [location]);

  return (
    <div>
      {appointments.length === 0 ? (
        <ErrorAppointment></ErrorAppointment>
      ) : (
        <Appointment data={data} appointments={appointments}></Appointment>
      )}
      <ToastContainer />
    </div>
  );
};

export default MyBookings;
