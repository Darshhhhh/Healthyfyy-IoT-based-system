import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { useUserAuth } from "../context/UserAuthContext";

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
            <div className="dropdown">
              <button className="dropbtn">
                {user.email.slice(0, -10)}
                <img
                  id="arrow"
                  style={{ marginLeft: "5px" }}
                  src="https://img.icons8.com/ios-glyphs/15/ffffff/sort-down.png"
                  alt=""
                />
              </button>
              <div className="dropdown-content">
                <Link to="#">My Profile</Link>
                <Link to="#">Settings</Link>
                <Link onClick={handleLogout} style={{ padding: "0px" }}>
                  <Link to="/">Log Out</Link>
                </Link>
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
