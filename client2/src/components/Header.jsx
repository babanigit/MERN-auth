/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import  { useState, useContext } from "react";
import { SetThemeContext } from "../App";


export default function Header(props) {
  const { currentUser } = useSelector((state) => state.user);

  const [currTheme, setCurrTheme] = useState(props.theme.name);

  const setT = useContext(SetThemeContext);



  function changeTheme() {
    

    if (currTheme === "light") {
      setT("dark");
      // localStorage.setItem("theme", "dark");
      setCurrTheme("dark");
    } else {
      setT("light");
      // localStorage.setItem("theme", "light");
      setCurrTheme("light");
    }

  }

  return (
    <div
    style={{background: props.theme.body, color:props.theme.text}}
    className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold">Auth App</h1>
        </Link>
        <ul className="flex gap-4">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.profilePicture}
                alt="profile"
                className="h-7 w-7 rounded-full object-cover"
              />
            ) : (
              <li>Sign In</li>
            )}
          </Link>

          <button onClick={changeTheme}>
          {props.theme.name === "light" ? "dark" : "Light"}
          </button>
        </ul>
      </div>
    </div>
  );
}
