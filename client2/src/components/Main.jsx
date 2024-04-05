/* eslint-disable react/prop-types */
// routes

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import Header from "../components/Header";
import PrivateRoute from "../components/PrivateRoute";

const Main = (props) => {
  return (
    <>
      <div className=" h-screen  " style={{ background: props.theme.body2 }}>
        <BrowserRouter>
          {/* header */}
          <Header theme={props.theme} />
          <Routes>
            <Route path="/" element={<Home theme={props.theme} />} />
            <Route path="/about" element={<About theme={props.theme} />} />
            <Route path="/sign-in" element={<SignIn theme={props.theme} />} />
            <Route path="/sign-up" element={<SignUp theme={props.theme} />} />

            <Route element={<PrivateRoute />}>
              <Route
                path="/profile"
                element={<Profile theme={props.theme} />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default Main;
