import React from "react";

const Banner = () => {
  return (
    <div className="w-9/10 mx-auto bg-banner md:p-12 p-4 border-3 border-white rounded-md flex flex-col gap-8  items-center">
      <h3 className="lg:text-5xl md:text-3xl text-xl font-semibold text-center">
        Dependable Care, Backed by Trusted <br className="lg:flex hidden" />
        Professionals.
      </h3>
      <p className="text-center">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience. Whether it's a
        <br className="xl:flex hidden" />
        routine checkup or urgent consultation, book appointments in minutes and
        receive quality care you can trust.
      </p>
      <div className="flex md:gap-6 gap-2">
        <input
          type="text"
          placeholder="Search any doctor..."
          className="input rounded-3xl lg:w-[600px] md:w-[500px] sm:w-[400px] "
        />
        <button className="btn text-white bg-btnBlue rounded-3xl lg:w-34">
          Search Now
        </button>
      </div>
      <div className="flex xl:flex-row flex-col gap-6">
        <img
          className="xl:h-80 object-fill rounded-2xl"
          src="../../../C001-assets/banner-img-1.png"
          alt=""
        />
        <img
          className="xl:h-80 object-fill rounded-2xl"
          src="../../../C001-assets/banner-img-2.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
