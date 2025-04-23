  import { useState, useRef } from "react";
  import { checkValidateData } from "../Utils/Validate";
  import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
  import { auth } from "../Utils/Firebase.js"; //we calls the auth in Firebase.js 
                                               //because when ever we call an Firebase Api
                                              //we need the auth again and again so we just
                                              //calls it ones inside the Firebase.js file

  import {useNavigate} from "react-router";
  /*useNavigate is hoot used for direct navigation*/

  import { useDispatch } from "react-redux";

  import Header from "./Header.jsx";
  import { addUser } from "../Utils/Redux/userSlice.jsx";

  import { Login_background_img } from "../Utils/constants.js";

  import {Profile_photo_of_header} from "../Utils/constants.js";


  
  const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isSignInForm, setIsSignInForm] = useState(true);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);


    const [errorMsg, setErrorMsg] = useState(null);
    
    
    
    const handleButtonClick = () => {

      //form validation
      const message = checkValidateData(
        email.current.value,
        password.current.value
      );
      setErrorMsg(message);

      if (message) return; //if (message(means error)) then return from this function

      if (!isSignInForm) { //if not a signInForm then -:
        //Sign-up Logic

        createUserWithEmailAndPassword( //SignUp user with email and Password Api of Firebase
          auth, //Api required Auth
          email.current.value, //Api required email value
          password.current.value // Api required the password value
        )
          .then((userCredential) => { //runs if my signUp is success
            
            const user = userCredential.user;//If my signup is success it gives us user object
                                            //This user object give us the access token etc..
                                            //denotes that success full of signup
                                             // this automatically signUp us to firebase.

          

           updateProfile(user, { //use of the updateProfile Api.
              displayName: name.current.value,
              photoURL: Profile_photo_of_header,

            }).then(() => {

              // 👇 Wait for Firebase to reload the latest user profile
             // await auth.currentUser.reload();
              // Profile updated!
                const{ uid,email,displayName,photoURL} = auth.currentUser; //auth.currentUser give us the updated user object because the above user is not the updated one. 
               dispatch(addUser({ 
                 uid: uid ,
                 email: email, 
                 displayName: displayName, 
                 photoURL: photoURL })); //dispatching an action again from here with the updated user object values.
                 navigate("/browse")//Navigate to "/browse" if profile Updated success
                        
             
             
            }).catch((error) => {
              // An error occurred
              setErrorMsg(error.message);
            });

            //navigate("/browse");//Navigate to "/browse" if SignUp success
            //console.log(user);//consoling the user object

          })
          .catch((error) => { //If there is any error in the signUp this error object give us errors
            const errorCode = error.code; //code information of the Error(ex-404)
            const errorMessage = error.message; //message information of the Error
            setErrorMsg(errorCode + " " + errorMessage);//setting the error message to errorMsg state which is created by us.

          });

      } else {
        //Sign-in Logic

        signInWithEmailAndPassword( //Api for the SignIn in the firebase.
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => { //runs when signIn success
        
            const user = userCredential.user;
            // console.log(user);
            //navigate("/browse"); //navigate to /browse if SignIn Success
            // return alert("sucessfull sign IN ");  
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMsg(errorCode+" "+errorMessage);
          });
      }
    };


    const toggleSignInForm = () => {
      setIsSignInForm(!isSignInForm);
    };



    return (
      <>
      <Header/>
      <div className="relative "> 
        <img
          src= {Login_background_img}
          alt="login_background_img"
        />

        <div className="w-96 p-10 bg-[#030405] bg-opacity-80 absolute top-28 left-1/3">
          <h2 className="text-white mb-7 text-3xl text-bold font-bold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>

          {/* creation of the login form */}
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()} 
          >
            {!isSignInForm && (
              <input
                type="text"
                ref={name}
                placeholder="Enter Full Name..."
                className="w-full h-11 p-2 bg-transparent text-white placeholder-[#B9B8B8] border-solid border-2 border-[#606060] rounded-md"
              />
            )}

            <input
              ref={email}
              type="text"
              placeholder="Enter email..."
              className="w-full h-11 p-2 bg-transparent text-white placeholder-[#B9B8B8] border-solid border-2 border-[#606060] rounded-md"
            />

            <input
              ref={password}
              type="password"
              placeholder="Enter Password..."
              className="w-full h-11 p-2 bg-transparent text-white placeholder-[#B9B8B8] border-solid border-2 border-[#606060] rounded-md"
            />

            <p className="text-red-500">{errorMsg}</p>

            <button
              className=" w-full  bg-[#E50914] p-2 text-white rounded-md"
              onClick={handleButtonClick}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>

            <p
              className="text-white text-sm mt-1 p-2 cursor-pointer "
              onClick={toggleSignInForm}
            >
              {isSignInForm
                ? "New to Netflix?Sign up now."
                : "Already a user? Sign in now."}
            </p>
          </form>
        </div>
      </div>
      </>
    );
  };

  export default Login;
