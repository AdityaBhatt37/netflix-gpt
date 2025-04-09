import Login from "./Login.jsx";
import Browse from "./Browse.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import {useEffect} from 'react';
import { createBrowserRouter, RouterProvider, useActionData } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../Utils/Firebase.js";
import {useDispatch} from 'react-redux';
import {addUser,removeUser} from '../Utils/Redux/userSlice.jsx';

// import { useNavigate } from "react-router-dom";
/*useNavigate is hook used to direct navigation to the component*/

const Body = () => {

    const dispatch = useDispatch();

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

  useEffect(() => {
   
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const{ uid,email,displayName,photoURL} = user; //this api give us all the information of user object.
        // dispatch(addUser({ uid: uid , email: email, displayName: displayName, photoURL: photoURL })); //dispatching an action
        //navigate("/browse"); //cant use navigate here because body is not child of <RouterProvider/> 
        
      } else {
        // User is signed out
        // ...
       // navigate("/");
       dispatch(removeUser());

      }
    });
     
  }, []);

  return (
    <>
      {/* <Header /> */}
      <RouterProvider router={AppRouter}></RouterProvider>
      <Footer />
    </>
  );
};

export default Body;
