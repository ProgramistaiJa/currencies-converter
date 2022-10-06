import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Form from "./components/views/Form/Form";
import ErrorPage from "./components/views/Error/Error";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Form />,
      errorElement: <ErrorPage />,
    },
  ]);

export default function App() {
    return (
        <>
          <RouterProvider router={router} />
        </>
        
    );
}