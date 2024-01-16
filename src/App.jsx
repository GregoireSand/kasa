import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/home/Home";
import ProductsPage from "./pages/products/Products";
import ErrorPage from "./pages/error/Error";
import AboutPage from "./pages/about/About";

const router = createBrowserRouter([
  {path: "/", element: <HomePage />},
  {path: "/products", element: <ProductsPage />},
  {path: "*", element: <ErrorPage />},
  {path: "/about", element: <AboutPage />},

])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
