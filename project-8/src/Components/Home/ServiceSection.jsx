import React from "react";
import CountUp from "react-countup";

const ServiceSection = () => {
  return (
    <div className="lg:w-8/10 w-9/10 mx-auto flex flex-col gap-6 items-center lg:py-12">
      <p className="sm:text-3xl text-xl font-semibold">
        We Provide Best Medical Services
      </p>
      <p className="text-center">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4   w-full gap-6 mt-4">
        <div className="flex-1 bg-white p-8 flex flex-col gap-2 rounded-xl">
          <div>
            <img
              className="size-12"
              src="../../../C001-assets/success-doctor.png"
              alt=""
            />
          </div>
          <p className="lg:text-4xl text-xl font-bold">
            <CountUp end={199} duration={7} />+
          </p>
          <p className="lg:text-xl font-semibold text-grey">Total Doctors</p>
        </div>
        <div className="flex-1 bg-white p-8 flex flex-col gap-2 rounded-xl">
          <div>
            <img
              className="size-12"
              src="../../../C001-assets/success-review.png"
              alt=""
            />
          </div>
          <p className="lg:text-4xl text-xl font-bold">
            <CountUp end={467} duration={7} />+
          </p>
          <p className="lg:text-xl font-semibold text-grey">Total Reviews</p>
        </div>
        <div className="flex-1 bg-white p-8 flex flex-col gap-2 rounded-xl">
          <div>
            <img
              className="size-12"
              src="../../../C001-assets/success-patients.png"
              alt=""
            />
          </div>
          <p className="lg:text-4xl text-xl font-bold">
            <CountUp end={1900} duration={7} />+
          </p>
          <p className="lg:text-xl font-semibold text-grey">Patients</p>
        </div>
        <div className="flex-1 bg-white p-8 flex flex-col gap-2 rounded-xl">
          <div>
            <img
              className="size-12"
              src="../../../C001-assets/success-staffs.png"
              alt=""
            />
          </div>
          <p className="lg:text-4xl text-xl font-bold">
            <CountUp end={300} duration={7} />+
          </p>
          <p className="lg:text-xl font-semibold text-grey">Total Stuffs</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
