import React, { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Language from "../language/Language";
import logo from "../../assets/logo_w.png";
import "./navbar.css";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { t } = useTranslation();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarBackground(true);
    } else {
      setNavbarBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <div
      className={`jg__navbar ${navbarBackground ? "navbar__background" : ""}`}
    >
      <div className="jg__navbar-links">
        <div className="jg__navbar-links_logo">
          <HashLink to="/">
            <img src={logo} alt="logo" />
          </HashLink>
        </div>
        <div className="jg__navbar-links_container">
          <p>
            <HashLink to="/#vorstellung">{t("navbar.vorstellung")}</HashLink>
          </p>
          <p>
            <HashLink to="/#problem">{t("navbar.problem")}</HashLink>
          </p>
          <p>
            <HashLink to="/#ziele">{t("navbar.ziele")}</HashLink>
          </p>
          <p>
            <HashLink to="/#stimmen">{t("navbar.stimmen")}</HashLink>
          </p>
          <p>
            <NavLink to="/wahlanleitung">{t("navbar.wahl")}</NavLink>
          </p>
        </div>
      </div>
      <div className="jg__navbar-lang">
        <Language />
      </div>
      <div className="jg__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="jg__navbar-menu_container scale-up-center">
            <div className="jg__navbar-menu_container-links">
              <p>
                <HashLink to="/#vorstellung">
                  {t("navbar.vorstellung")}
                </HashLink>
              </p>
              <p>
                <HashLink to="/#problem">{t("navbar.problem")}</HashLink>
              </p>
              <p>
                <HashLink to="/#ziele">{t("navbar.ziele")}</HashLink>
              </p>
              <p>
                <HashLink to="/#stimmen">{t("navbar.stimmen")}</HashLink>
              </p>
              <p>
                <NavLink to="/wahlanleitung/">{t("navbar.wahl")}</NavLink>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
