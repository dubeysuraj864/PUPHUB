import Button from "../Components/Button";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";


function AdminSignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  const handleSubmit = async () => {
    let result = await fetch("https://puphub-backend.onrender.com/admin-sign-up", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    localStorage.setItem("admin", JSON.stringify(result));
    navigate("/admin-login");
  };

  useEffect(()=>{
    const auth = localStorage.getItem("admin");
    if(auth){
      navigate("/admin-login");
    }
  },[navigate])

  return (
    <>
      <div className="sign-up flex justify-center items-center flex-col border mx-auto py-10 md:w-[400px]">
        <h1 className="text-5xl text-center my-10 font-semibold text-[#F1C21B]">
          Admin <br />Register
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
             <span className="underline flex justify-start">
            <Link className="text-left" to="/sign-up ">
              {" "}
              Register as an User!
            </Link>
          </span>
          <button
            onClick={handleSubmit}
            className="h-[10vh] w-full cursor-pointer"
          >
            {" "}
            <Button text="Register" />
          </button>
        </form>
      
      </div>
    </>
  );
}

export default AdminSignUp;
