import { signOut } from "firebase/auth";
import {auth} from "../Utils/Firebase.js";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Header = () => {

  const navigate = useNavigate();
  const userNameOfSlice = useSelector((store)=>store.user);

  function handleSignOut() {

    signOut(auth) //signOut Api provided by the Firebase
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error")
      });
  }
  return (
    <div className="w-full p-2 bg-gradient-to-b from-black z-10 absolute z-10 flex justify-between  ">
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-40 p-1"
      ></img>

 { userNameOfSlice != null ?(
      <div className="flex justify-center items-center ">
        <img
          src={userNameOfSlice.photoURL}
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
