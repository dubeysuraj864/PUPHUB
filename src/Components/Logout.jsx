import { GoogleLogout } from "@matheusluizn/react-google-login";
import { useNavigate } from "react-router-dom";
const clientId =
  "686135361204-cv439itq3ekoc8j6fi5i2e3fgbjg9tjk.apps.googleusercontent.com";
function Logout() {

  const onSuccess = (res) => {
    localStorage.clear();
    console.log("LOGOUT SUCCESSFULLY!");
    navigate("/login");
    window.location.reload(true);
  };

  const navigate = useNavigate();

  // const onFailure = (res) => {
  //     console.log("LOGIN FAILURE! res ", res)
  // }
  return (
    <>
      <div className="sign-in">
        <div className="sign-in flex justify-center">
          <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
            value="Reload Page"
          />
        </div>
      </div>
    </>
  );
}

export default Logout;
