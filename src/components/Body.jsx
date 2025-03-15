import Login from "./Login.jsx";
import Browse from "./Browse.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import {createBrowserRouter,RouterProvider} from "react-router-dom";

const Body = () =>{


    const AppRouter = createBrowserRouter([

        {
            path:"/",
            element: <Login/>
        },

        {

            path:"/browse",
            element: <Browse/>
        }
    ]);
    return(

        <>
            <Header/>
            <RouterProvider router={AppRouter}></RouterProvider>
            <Footer/>
        </>
    );
}

export default Body;