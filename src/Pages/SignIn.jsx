import GoogleLogin from "@matheusluizn/react-google-login";
import { useNavigate, Link } from "react-router-dom";
import Button from "../Components/Button";
import { useState, useEffect } from "react";

const clientId =
  "686135361204-cv439itq3ekoc8j6fi5i2e3fgbjg9tjk.apps.googleusercontent.com";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const onSuccess = (res) => {
    // console.log("LOGIN SUCCESS! Current User: ", res.profileObj);
    localStorage.setItem("auth", JSON.stringify(res.profileObj));
    console.log(res.profileObj.imageUrl);
    navigate("/");
    window.location.reload(true);
  };
  const onFailure = (res) => {
    console.log("LOGIN FAILURE! res ", res);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();

    if (result.user) {
      localStorage.setItem("user", JSON.stringify(result.user));
      window.location.reload(true);
      navigate("/");
    } else {
      alert("Please enter correct details...");
    }
  };
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    } else {
    }
  }, [navigate]);
  return (
    <>
      <div className="sign-in flex justify-center items-center flex-col border mx-auto py-10 w-[400px]">
        <h1 className="text-5xl my-10 font-semibold text-[#F1C21B]">SIGN IN</h1>
        <form
          action=""
          className="justify-center items-center flex  flex-col space-y-3"
        >
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

          <span className="underline flex justify-start">
            <Link className="text-left" to="/admin-login ">
              {" "}
              Login as an Admin!
            </Link>
          </span>

          <button
            onClick={handleSubmit}
            className="h-[10vh] w-full cursor-pointer"
          >
            <Button text="Login" />
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

export default SignIn;
