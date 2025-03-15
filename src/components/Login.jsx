import{useState} from "react";
const Login = () => {

    const [isSignInForm,setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {

        setIsSignInForm(!isSignInForm);

    };

  return (
    <div className="relative">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web_tall_panel/IN-en-20250303-TRIFECTA-perspective_8d2f60cf-007f-4f25-99b0-7c0b77f38bc1_large.jpg"
        alt="login_background_img"
      />

      <div className="w-96 p-10 bg-[#030405] bg-opacity-80 absolute top-28 left-1/3">

        <h2 className="text-white mb-7 text-3xl text-bold font-bold">{!isSignInForm ? "Sign In" : "Sign Up"}</h2>

        <form className="flex flex-col gap-4">
        {isSignInForm && <input
            type="text"
            placeholder="Enter Full Name..."
            className="w-full h-11 p-2 bg-transparent text-white placeholder-[#B9B8B8] border-solid border-2 border-[#606060] rounded-md"
          />}

          <input
            type="text"
            placeholder="Enter email..."
            className="w-full h-11 p-2 bg-transparent text-white placeholder-[#B9B8B8] border-solid border-2 border-[#606060] rounded-md"
          />

          
          <input
            type="password"
            placeholder="Enter Password..."
            className="w-full h-11 p-2 bg-transparent text-white placeholder-[#B9B8B8] border-solid border-2 border-[#606060] rounded-md"
          />
          
          <button className=" w-full bg-[#E50914] p-2 text-white rounded-md">
            {!isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p
           className="text-white text-sm mt-1 p-2 cursor-pointer "
           onClick={toggleSignInForm}>
            {!isSignInForm ? "New to Netflix?Sign up now." : "Already a user? Sign in now."}
            </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
