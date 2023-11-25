import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Logout from "./Components/Logout";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import Products from "./Pages/Products";
import AdminLogin from "./Pages/AdminLogin";
import AdminAddProduct from "./Pages/AdminAddProduct";
import AdminSignUp from "./Pages/AdminSignUp";
import AdminNav from "./Components/AdminNav";
import AdminProducts from "./Pages/AdminProducts";
import AdminProductUpdate from "./Pages/AdminProductUpdate";
import NotFoundPage from "./Pages/NotFoundPage";

const clientId =
  "686135361204-cv439itq3ekoc8j6fi5i2e3fgbjg9tjk.apps.googleusercontent.com";
function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  // var accessToken = gapi.auth.getToken().access_token;

  const admin = localStorage.getItem("admin");
  // const user = localStorage.getItem("user");

  return (
    <div className="App overflow-hidden">
      <BrowserRouter>
        {admin ? <AdminNav /> : <Navbar />}

        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="*" element={<NotFoundPage/>} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-sign-up" element={<AdminSignUp />} />
          <Route path="/admin-products" element={<AdminProducts />} />
          <Route path="/admin-add-product" element={<AdminAddProduct />} />
          <Route path="/admin-product-update/:id" element={<AdminProductUpdate />}/>
          <Route path="/logout" element={<Logout />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
