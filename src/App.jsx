import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import SignIn from "./Pages/SignIn";
import PrivateComponents from "./Components/PrivateComponents";
import SignUp from "./Pages/SignUp";
import Logout from "./Components/Logout";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import Products from "./Pages/Products";
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

  return (
    <div className="App overflow-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<PrivateComponents />}>
            <Route path="/" element={<Welcome />} />
            <Route path="/products" element={<Products />} />
          </Route>
          <Route path="/login" element={<SignIn />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
