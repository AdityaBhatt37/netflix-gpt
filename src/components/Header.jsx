import { signOut } from "firebase/auth";
import {auth} from "../Utils/Firebase.js";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import {useEffect} from 'react';
import { onAuthStateChanged } from "firebase/auth";
import {useDispatch} from 'react-redux';
import {addUser,removeUser} from '../Utils/Redux/userSlice.jsx';
import { NetFlix_log } from "../Utils/constants.js";

const Header = () => {

  const navigate = useNavigate();
  const user_NameOfSlice = useSelector((store)=>store.user);
  const dispatch = useDispatch();
  function handleSignOut() {

    signOut(auth) //signOut Api provided by the Firebase
      .then(() => {
        // Sign-out successful.
       })
      .catch((error) => {
        // An error happened.
        navigate("/error")
      });
  }

  useEffect(() => {
   
   const unsubscribed =  onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        //https://firebase.google.com/docs/reference/js/auth.user
        const{ uid,email,displayName,photoURL} = user; //this api give us all the information of user object.
        dispatch(addUser({ 
          uid: uid , 
          email: email, 
          displayName: displayName, 
          photoURL: photoURL })
        ); //dispatching an action
       
        navigate("/browse")
      } else {
        // User is signed out
        // ...
       dispatch(removeUser());
       navigate("/")
     

      }
    }); 

    //unsubscribed when the component unmounts.
    return () => unsubscribed();
     
  }, []);



  return (
    <div className="w-full p-2 bg-gradient-to-b from-black z-10 absolute z-10 flex justify-between  ">
      <img
        src={NetFlix_log}
        alt="logo"
        className="w-40 p-1"
      ></img>

 { user_NameOfSlice != null ?(
      <div className="flex justify-center items-center ">
        <img
          src={user_NameOfSlice.photoURL}
        //   "https://i.pinimg.com/564x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg"
          alt="logo"
          className="w-20 h-20 p-3 "
        ></img>

        <button
          className=" w-25  bg-red-700 text-white p-3 rounded-lg"
          onClick={handleSignOut}
        >
          Log Out
        </button>
      </div>):null}
    </div>
  );
};

export default Header;
