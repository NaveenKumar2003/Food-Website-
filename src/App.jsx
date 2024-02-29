import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Order from "./components/Order";
import Login from "./components/Login";
import ResDetails from "./components/ResDetails";
import Menu from "./components/Menu";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

const Project = () => {
  return (
    <>
      <Header />
      <Outlet />
     
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Project />,
    children: [
      {
        path: "/", // Render Home as the default child route
        element: <Home />
      },
      
      {
        path: "/about",
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      
      {
        path: '/restaurants/:resId',
        element: <ResDetails />
      },
      {
        path: '/menu',
        element: <Menu />
      },
      {
        path: '/order',
        element: <Order />
      },
      {
        path: '/login',
        element: <Login />
      },
    ]
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
