import React from "react";
import "./footer.css";
import { useTranslation } from "react-i18next";
import hsa_logo from "../../assets/hsa_logo_platzhalter.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="jg__footer section__padding">
      <div className="jg__footer-links">
        <div className="jg__footer-links_logo">
          <img src={hsa_logo} alt="Hochschule Anhalt" />
          <p>{t("footer.createdBy")}</p>
        </div>
        <div className="jg__footer-links_div"></div>
        <div className="jg__footer-links_div">
          <h4>{t("footer.ueberschrift")}</h4>
          <p>
            <NavLink to="/impressum">{t("footer.impressum")}</NavLink>
          </p>
          <p>
            <NavLink to="/datenschutz">{t("footer.daten")}</NavLink>
          </p>
          <p>
            {t("footer.bild")}{" "}
            <a href="https://www.roletschek.at/">Ralf Roletschek</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
