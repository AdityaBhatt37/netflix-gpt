## Login.jsx Logic notes and Body.jsx Lecture 1


```js
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
  
  const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isSignInForm, setIsSignInForm] = useState(true);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);


    const [errorMsg, setErrorMsg] = useState(null);
    
    
    const toggleSignInForm = () => {
      setIsSignInForm(!isSignInForm);
    };


    const handleButtonClick = () => {

      //form validation
      const message = checkValidateData(
        email.current.value,
        password.current.value
      );
      setErrorMsg(message);

      if (message) return; //if(message(means error))then return from this function

      if (!isSignInForm) { //if not a signInForm then -:
        //Sign-up Logic

        createUserWithEmailAndPassword( //SignUp user with email and Password Api of Firebase
          auth, //Api required Auth
          email.current.value, //Api required email value
          password.current.value // Api required the password value
        )
          .then((userCredential) => { //runs if my signUp si success

            const user = userCredential.user;//If my signup is success it gives us user object
                                            //This user object give us the access token etc..
                                            //denotes that success full of signup
                                             // this automatically signUp us to firebase.

          

            updateProfile(auth.currentUser, { //use of the updateProfile Api and (currentUser is user).
              displayName: name.current.value,
              photoURL: "https://avatars.githubusercontent.com/u/142151739?v=4&size=64",

            }).then(() => {
              // Profile updated!
               const{ uid,email,displayName,photoURL} = auth.currentUser; //auth.currentUser give us the updated user object because the above user is not the updated one. 
               dispatch(addUser({ uid: uid , email: email, displayName: displayName, photoURL: photoURL })); //dispatching an action again from here with the updated user object values.
              navigate("/browse")//Navigate to "/browse" if profile Updated success
            }).catch((error) => {
              // An error occurred
              setErrorMsg(error.message);
            });

            navigate("/browse");//Navigate to "/browse" if SignUp success
            console.log(user);//consoling the user object

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
            console.log(user);
            navigate("/browse"); //navigate to /browse if SignIn Success
            return alert("sucessfull sign IN ");  
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMsg(errorCode+" "+errorMessage);
          });
      }
    };


    return (
      <>
      <Header/>
      <div className="relative ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web_tall_panel/IN-en-20250303-TRIFECTA-perspective_8d2f60cf-007f-4f25-99b0-7c0b77f38bc1_large.jpg"
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
```


## Body.jsx Code

```js
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
        // navigate("/browse"); //cant use navigate here because body is not child of <RouterProvider/> 
        
      } else {
        // User is signed out
        // ...
         dispatch(removeUser());//first dispatch an action
       // navigate("/"); //then back to login page
      

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
```