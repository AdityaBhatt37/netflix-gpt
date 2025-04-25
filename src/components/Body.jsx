import Login from "./Login.jsx";
import Browse from "./Browse.jsx";
import Footer from "./Footer.jsx";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import {useEffect} from 'react';


// import { useNavigate } from "react-router-dom";
/*useNavigate is hook used to direct navigation to the component*/

const Body = () => {
  

    // const navigate = useNavigate();
  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,

    },

    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

 
  return (
    <>
      {/* <Header /> */}
      <RouterProvider router={AppRouter}></RouterProvider>
      <Footer />
    </>
  );
};

export default Body;
