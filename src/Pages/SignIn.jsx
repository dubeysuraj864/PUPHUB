import GoogleLogin from "@matheusluizn/react-google-login";
import { useNavigate } from "react-router-dom";

const clientId =
  "686135361204-cv439itq3ekoc8j6fi5i2e3fgbjg9tjk.apps.googleusercontent.com";
function SignIn() {
  const navigate = useNavigate();
  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! Current User: ", res.profileObj);
    localStorage.setItem("auth", JSON.stringify(res.profileObj));
    console.log(res.profileObj.name);
    navigate("/");
    window.location.reload(true);
  };
  const onFailure = (res) => {
    console.log("LOGIN FAILURE! res ", res);
  };
  return (
    <>
      <div className="sign-in flex justify-center">
        <GoogleLogin
          className="px-10"
          clientId={clientId}
          buttonText="Continue with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
     
      </div>
    </>
  );
}

export default SignIn;
