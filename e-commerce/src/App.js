import React from 'react'
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import './app.scss'
  


function App() {

  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
  
  return (
    <div className='app'>
         <RouterProvider router={router} />
    </div>
  );
}

export default App;
