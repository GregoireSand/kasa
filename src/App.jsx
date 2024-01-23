import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/home/Home";
import AccomodationPage from "./pages/accomodation/Accomodation";
import ErrorPage from "./pages/error/Error";
import AboutPage from "./pages/about/About";

const router = createBrowserRouter([
  {path: "/", element: <HomePage />},
  {path: "/accomodation/:id", element: <AccomodationPage />},
  {path: "*", element: <ErrorPage />},
  {path: "/about", element: <AboutPage />},

])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
