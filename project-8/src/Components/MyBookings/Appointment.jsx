import React, { Suspense } from "react";
import ShowAppointments from "./ShowAppointments";
import { BarChart, Bar, XAxis, YAxis } from "recharts";
import Chart from "./Chart";

const Appointment = ({ appointments, data }) => {
  return (
    <div className="w-9/10 mx-auto flex flex-col gap-16">
      {/* Showing Chart */}
      <Chart appointments={appointments} data={data}></Chart>

      <div className="flex flex-col items-center gap-4">
        <h4 className="font-bold sm:text-3xl text-2xl text-center">
          My Today Appointments
        </h4>
        <p className="text-grey text-center">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </p>
        <div className="flex flex-col gap-4 w-full">
          <Suspense fallback={<span>Loading ......</span>}>
            {data.map((singleAppointment, index) => {
              for (const doctor of appointments) {
                if (singleAppointment.id === doctor) {
                  return (
                    <ShowAppointments
                      key={index}
                      singleAppointment={singleAppointment}
                    ></ShowAppointments>
                  );
                }
              }
            })}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
