import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/home/Home";
import ErrorPage from "../pages/error/Error";
import AboutPage from "../pages/about/About";
import AccomodationPage from "../pages/accomodation/Accomodation"

function Router(){
  const router = createBrowserRouter([
    {path: "/", element: <HomePage />},
    {path: "/accomodation/:id", element: <AccomodationPage />},
    {path: "*", element: <ErrorPage />},
    {path: "/about", element: <AboutPage />},
  
  ])

    return(
      <RouterProvider router={router}/>
    )}

export default Router