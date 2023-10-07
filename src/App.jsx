import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import SignIn from "./Pages/SignIn";
import PrivateComponents from "./Components/PrivateComponents";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <div className="App overflow-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<PrivateComponents />}>
            <Route path="/" element={<Welcome />} />
          </Route>
          <Route path="/Login" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
