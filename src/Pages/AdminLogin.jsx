import { useNavigate, Link } from "react-router-dom";
import Button from "../Components/Button";
import { useState, useEffect } from "react";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = await fetch("https://puphub-backend.onrender.com/admin-login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let adminResult = await result.json();

    console.warn(adminResult.email);

    if (adminResult.admin) {
      localStorage.setItem("admin", JSON.stringify(adminResult.admin));
      window.location.reload(true);
      navigate("/admin-products");
    } else {
      alert("Please enter correct details...");
    }
  };
  useEffect(() => {
    const auth = localStorage.getItem("admin");
    if (auth) {
      navigate("/admin-products");
    } else {
    }
  }, [navigate]);
  return (
    <>
      <div className="sign-in flex justify-center items-center flex-col border mx-auto py-10 w-[400px]">
        <h1 className="text-5xl my-10 font-semibold text-[#F1C21B]">
          Admin Login
        </h1>
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
            <Link className="text-left" to="/login ">
              {" "}
              Login as an User!
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
      </div>
    </>
  );
}

export default AdminLogin;
