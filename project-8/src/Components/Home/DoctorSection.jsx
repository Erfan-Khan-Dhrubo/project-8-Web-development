import React, { Suspense } from "react";
import SingleDoctor from "./SingleDoctor";
import { useState } from "react";

const DoctorSection = ({ data }) => {
  const [showAll, setShowAll] = useState(false);

  const checkShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="xl:w-8/10 w-9/10 mx-auto flex flex-col gap-8 items-center">
      <h4 className="text-3xl font-semibold">Our Best Doctors</h4>
      <p className="text-center">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience. Whether it's a
        <br className="lg:flex hidden" />
        routine checkup or urgent consultation, book appointments in minutes and
        receive quality care you can trust.
      </p>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-stretch gap-8 w-full ">
        <Suspense fallback={<span>Loading ......</span>}>
          {data.map((singleDoctor, index) => (
            <SingleDoctor
              key={singleDoctor.id}
              singleDoctor={singleDoctor}
              index={index}
              showAll={showAll}
            ></SingleDoctor>
          ))}
        </Suspense>
      </div>
      <button
        className="bg-btnBlue btn text-white rounded-3xl"
        onClick={checkShowAll}
      >
        {showAll ? "View Less Doctors" : "View All Doctors"}
      </button>
    </div>
  );
};

export default DoctorSection;
