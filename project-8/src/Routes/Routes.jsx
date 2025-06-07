import React from "react";

import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import DoctorDetails from "../Pages/DoctorDetails";
import MyBookings from "../Pages/MyBookings";
import Blogs from "../Pages/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("/doctor.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/doctor/:doctorId",
        loader: async ({ params }) => {
          const response = await fetch("/doctor.json");
          const doctors = await response.json();

          const Id = doctors.findIndex(
            (doctor) => doctor.id === params.doctorId
          );

          return { doctorData: doctors[Id], params };
        },
        Component: DoctorDetails,
      },
      {
        loader: () => fetch("/doctor.json"),
        path: "/MyBookings",
        Component: MyBookings,
      },

      {
        loader: () => fetch("/blogs.json"),
        path: "/Blogs",
        Component: Blogs,
      },
    ],
  },
]);
