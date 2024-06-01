import React from "react";
import "./footer.css";
import hsa_logo from "../../assets/hsa_logo_platzhalter.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="jg__footer section__padding">
      <div className="jg__footer-links">
        <div className="jg__footer-links_logo">
          <img src={hsa_logo} alt="Hochschule Anhalt" />
          <p>Diese Webseite wurde von Friederike Ratteit erstellt.</p>
        </div>
        <div className="jg__footer-links_div">
          <h4>Links</h4>
          <p>Social Media</p>
          <p>Social Media</p>
          <p>Social Media</p>
        </div>
        <div className="jg__footer-links_div">
          <h4>Wichtige Dinge</h4>
          <p>
            <NavLink to="/impressum/">Impressum</NavLink>
          </p>
          <p>
            <NavLink to="/datenschutz/">Datenschutzerklärung</NavLink>
          </p>
          <p>
            Bild des Köthener Ratke-Gebäudes von{" "}
            <a href="https://www.roletschek.at/">Ralf Roletschek</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
