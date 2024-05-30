import React from "react";
import "./vorstellung.css";
import jamila from "../../assets/Kandidaturfoto.png";
import { useTranslation } from "react-i18next";

const Vorstellung = () => {
  const { t } = useTranslation();
  return (
    <div className="jg__vorstellung" id="vorstellung">
      <div className="jg__vorstellung-content">
        <h1 className="gradient__text">{t("vorstellung.ueberschrift")}</h1>
        <h2>{t("vorstellung.untertitel")}</h2>
        <p>{t("vorstellung.absatz1")}</p>
        <p>{t("vorstellung.absatz2")}</p>
        <p>{t("vorstellung.absatz3")}</p>
      </div>
      <div className="jg__vorstellung-image">
        <img src={jamila} alt="Jamila" />
      </div>
    </div>
  );
};

export default Vorstellung;
