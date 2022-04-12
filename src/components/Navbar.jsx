import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as IoIcons from "react-icons/io";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext, BiSearchAlt } from "react-icons";
import { Form, FormControl, Button } from "react-bootstrap";
import Home from "../Pages/Home";
import { useUserAuth } from "../context/UserAuthContext";
// import { BrowserRouter as useNavigate } from "react-router";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const { logOut, user } = useUserAuth();

  const handleLogout = async () => {
    try {
      await logOut();
      history.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const showSidebar = () => setSidebar(!sidebar);
  const history = useHistory();

  function handleClick() {
    history.push("/Home");
  }
  function loginpage() {
    history.push("/");
  }
  return (
    <>
      <IconContext.Provider id="icon" value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <h2 id="nav_text" onClick={handleClick}>
            Healthyfyy
          </h2>
          <div className="searchbar">
            {/* <button className="btn">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="35px"
                viewBox="0 0 24 24"
                width="35px"
                fill="#FFFFFF"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" />
              </svg>
            </button> */}
            <div class="dropdown">
              <button class="dropbtn">
                {user.email}
                <img
                  style={{ marginLeft: "5px" }}
                  src="https://img.icons8.com/ios-glyphs/15/ffffff/sort-down.png"
                />
              </button>
              <div class="dropdown-content">
                <a href="#">My Profile</a>
                <a href="#">Settings</a>

                <a onClick={handleLogout} style={{ padding: "0px" }}>
                  <Link to="/">Log In</Link>
                </a>
              </div>
            </div>
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
