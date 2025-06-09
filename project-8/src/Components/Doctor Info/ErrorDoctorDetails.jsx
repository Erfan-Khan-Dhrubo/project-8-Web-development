import React from "react";
import { Link } from "react-router";
import { CirclePlus } from "lucide-react";

const errorDoctorDetails = ({ params }) => {
  //console.log(location);
  return (
    <div className="w-9/10 mx-auto flex flex-col gap-8 items-center min-h-[60vh] justify-center">
      <h4 className="text-3xl font-bold text-center">No Doctor Found</h4>
      <p className="text-grey text-center">
        No Doctor Found with this registration No.
      </p>
      <p className="text-grey flex gap-2">
        <CirclePlus /> {params.doctorId}
      </p>
      <Link to={"/"} className="btn bg-btnBlue text-white rounded-xl">
        View All Doctor
      </Link>
    </div>
  );
};

export default errorDoctorDetails;
