import React from "react";
import "./footer.css";
import logo from "../../assets/logo_w.png";

const Footer = () => {
  return (
    <div className="jg__footer section__padding">
      <div className="jg__footer-links">
        <div className="jg__footer-links_logo">
          <img src={logo} alt="Jamila Gränzer" />
          <p>Diese Webseite wurde von Friederike Ratteit erstellt.</p>
        </div>
        <div className="jg__footer-links_div">
          <h4>Links</h4>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>Sonstige</p>
        </div>
        <div className="jg__footer-links_div">
          <h4>Kontakt</h4>
          <p>Hier ihre Email einfügen</p>
        </div>
        <div className="jg__footer-links_div">
          <h4>Wichtige Dinge</h4>
          <p>Impressum</p>
          <p>Rechtliches</p>
          <p>Cookies</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
