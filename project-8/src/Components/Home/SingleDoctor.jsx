import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const SingleDoctor = ({ singleDoctor, index, showAll }) => {
  const {
    image,
    experience,
    name,
    education,
    specialty,
    registration_number,
    id,
  } = singleDoctor;

  const [hide, setHide] = useState(false);

  const checkHide = () => {
    if (index + 1 > 6 && !showAll) {
      setHide(true);
    } else {
      setHide(false);
    }
  };

  useEffect(() => {
    checkHide(); // Calls function when page reloads
  }, [showAll]);

  return (
    <div className="h-full">
      <div
        className={`h-full p-6 rounded-2xl bg-base-100 shadow-sm ${
          hide ? "hidden" : ""
        }`}
      >
        <figure className="pb-8">
          <img
            className="rounded-2xl object-fill"
            src={image}
            alt="Doctor Picture"
          />
        </figure>
        <div className="flex flex-col gap-3">
          <div className="flex gap-6">
            <div className="py-1 px-2 rounded-3xl text-btnGreen border border-btnGreen font-medium bg-btnGreenBg">
              Available
            </div>
            <div className="py-1 px-2 rounded-3xl text-btnBlue border border-btnBlue font-medium bg-btnBlueBg">
              {experience} Experience
            </div>
          </div>
          <p className="text-xl font-semibold">{name}</p>
          <p className="text-grey">
            {education}, {specialty}
          </p>
          <div className="w-full border-t-2 border-dotted border-gray-300"></div>
          <div className="flex items-center gap-4 flex-grow">
            <div className="rounded-full flex justify-center items-center border w-4 h-4 text-xs text-grey">
              R
            </div>
            <div className="text-grey">Reg No: {registration_number}</div>
          </div>
          <Link
            className="border btn border-btnBlue text-lg text-btnBlue rounded-3xl py-1 font-medium"
            to={`/doctor/${id}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleDoctor;
