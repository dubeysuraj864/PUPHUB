import Button from "../Components/Button";
import GoogleLogin from "@matheusluizn/react-google-login";
import { useNavigate } from "react-router-dom";

const clientId =
  "686135361204-cv439itq3ekoc8j6fi5i2e3fgbjg9tjk.apps.googleusercontent.com";

function SignUp() {
    const navigate = useNavigate();
  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! Current User: ", res.profileObj);
    localStorage.setItem("auth", JSON.stringify(res.profileObj));
    navigate("/");
    window.location.reload(true);
  };
 
  const onFailure = (res) => {
    console.log("LOGIN FAILURE! res ", res);
  };
    return ( <>
    <div className="sign-up flex justify-center items-center flex-col border mx-auto py-10 w-[400px]">
    <h1 className="text-5xl my-10 font-semibold text-[#F1C21B]">Register</h1>
        <form
          action=""
          className="justify-center items-center flex  flex-col space-y-3"
        >
          <input type="text" className="border p-2" placeholder="Email" />
          <input
            type="password"
            className="border p-2"
            placeholder="Password"
          />
          <button type="submit" className="h-[10vh] w-full cursor-pointer">
            {" "}
            <Button text="Register" />
          </button>

        
        </form>
        <hr className="border-1 w-1/2 my-6" />
        <GoogleLogin
          className="px-10 border"
          clientId={clientId}
          buttonText="Continue with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
    </div>
    </> );
}

export default SignUp;