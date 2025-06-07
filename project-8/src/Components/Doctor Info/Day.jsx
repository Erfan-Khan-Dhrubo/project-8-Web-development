import React from "react";

const Day = ({ day }) => {
  return (
    <div>
      <p className="border border-yellow rounded-3xl py-1 px-2 text-yellow bg-lightYellow">
        {day}
      </p>
    </div>
  );
};

export default Day;
