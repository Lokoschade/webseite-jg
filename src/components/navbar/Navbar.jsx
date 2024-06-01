import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Language from "../language/Language";
import logo from "../../assets/logo_w.png";
import "./navbar.css";
import { useTranslation } from "react-i18next";
import { NavHashLink } from "react-router-hash-link";

const Navbar = () => {
  const { t } = useTranslation();
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="jg__navbar">
      <div className="jg__navbar-links">
        <div className="jg__navbar-links_logo">
          <NavHashLink to="/">
            <img src={logo} alt="logo" />
          </NavHashLink>
        </div>
        <div className="jg__navbar-links_container">
          <p>
            <NavHashLink to="/#vorstellung">
              {t("navbar.vorstellung")}
            </NavHashLink>
          </p>
          <p>
            <NavHashLink to="/#problem">{t("navbar.problem")}</NavHashLink>
          </p>
          <p>
            <NavHashLink to="/#ziele">{t("navbar.ziele")}</NavHashLink>
          </p>
          <p>
            <NavHashLink to="/#stimmen">{t("navbar.stimmen")}</NavHashLink>
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
                <a href="#vorstellung">{t("navbar.vorstellung")}</a>
              </p>
              <p>
                <a href="#problem">{t("navbar.problem")}</a>
              </p>
              <p>
                <a href="#ziele">{t("navbar.ziele")}</a>
              </p>
              <p>
                <a href="#stimmen">{t("navbar.stimmen")}</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
