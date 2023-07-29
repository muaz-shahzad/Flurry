import React, { useState, useEffect } from "react";
import logosvg from "../../assets/images/logo.svg";
import logolightmodesvg from "../../assets/images/logo-light-mode.svg";
import "../../assets/style/style.css";

const Header = () => {
  const [theme, setTheme] = useState("dark-theme");
  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    let header = document.getElementById("header");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        header.style.background = "#1a1a1a";
        header.style.borderBottom = "1px solid #303030";
      } else {
        header.style.background = "transparent";
        header.style.borderBottom = "0px solid #303030";
      }
    });
  });
  return (
    <div>

      <header
        id="header"
        className="header header-wrapper clearfix element_to_stick sticky"
      >
        <div className="layer"></div>
        <div className="container">
          <div className="logo">
            <a href="#">
              <img src={logosvg} alt="" height="34px" className="dark" />
              <img
                src={logolightmodesvg}
                alt=""
                width="140"
                height="35"
                className="light"
              />
            </a>
          </div>
          <ul className="top_menu">
            <li onChange={toggleTheme}>
              <span className="color_mode_bt">
                <input id="theme_toggle" type="checkbox" name="theme_toggle" />
                <label for="theme_toggle"></label>
              </span>
            </li>
            <li>
              <a href="#0" className="btn_access text-decoration-none">
                Log In
              </a>
            </li>
          </ul>

          <a href="#0" className="open_close">
            <i className="bi bi-list text-decoration-none"></i>
            <span>Menu</span>
          </a>
          <nav className="main-menu">
            <div id="header_menu">
              <a href="#0" className="open_close">
                <i className="bi bi-x"></i>
              </a>
              <a href="index.html" className="logo_menu">
                <img
                  src="img/logo-placeholder.png"
                  data-src="img/logo.svg"
                  alt=""
                  width="120"
                  height="30"
                  className="dark lazy"
                />
                <img
                  src="img/logo-placeholder.png"
                  data-src="img/logo-light-mode.svg"
                  alt=""
                  width="120"
                  height="30"
                  className="light lazy"
                />
              </a>
            </div>
            <ul>
              <li className="submenu">
                <a href="/" className="show-submenu text-decoration-none">
                  Home
                </a>
              </li>
              <li className="submenu">
                <a href="#0" className="show-submenu text-decoration-none">
                  Explore
                </a>
              </li>
              <li className="submenu">
                <a href="#0" className="show-submenu text-decoration-none">
                  Pages
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
