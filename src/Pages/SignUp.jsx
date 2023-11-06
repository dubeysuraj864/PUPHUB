import Button from "../Components/Button";
import GoogleLogin from "@matheusluizn/react-google-login";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const clientId =
  "686135361204-cv439itq3ekoc8j6fi5i2e3fgbjg9tjk.apps.googleusercontent.com";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const handleSubmit = async () => {
    let result = await fetch("https://puphub-backend.onrender.com/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    localStorage.setItem("user", JSON.stringify(result));
    navigate("/login");
  };

  useEffect(()=>{
    const auth = localStorage.getItem("user");
    if(auth){
      navigate("/")
    }
  },[navigate])

  return (
    <>
      <div className="sign-up flex justify-center items-center flex-col border mx-auto py-10 w-[400px]">
        <h1 className="text-5xl my-10 font-semibold text-[#F1C21B]">
          Register
        </h1>
        <form
          action=""
          className="justify-center items-center flex  flex-col space-y-3"
        >
          <input
            type="text"
            className="border p-2"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="border p-2"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="border p-2"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="h-[10vh] w-full cursor-pointer"
          >
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
    </>
  );
}

export default SignUp;
