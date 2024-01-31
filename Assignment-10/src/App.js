import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";
import RestaurantPage from "./RestaurantPage";
import Login from "./Login";
import Footer from "./Footer";
import UserContext from "../utils/UserContext";


const Groceries = lazy(()=> import("./Groceries"))

const AppLayout = () => {
  return (
    <UserContext.Provider value={"hii"}>

    <div className="appLayout text-center">
      <Header />
      <Outlet />
      <Footer/>
    </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant",
        element: <RestaurantPage />,
      },
      {
        path: "/groceries",
        element: <Suspense fallback={<h1>hey am still loading</h1>}><Groceries /></Suspense>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router={appRouter} />);
