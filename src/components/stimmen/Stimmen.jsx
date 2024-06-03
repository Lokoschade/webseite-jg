import React from "react";
import "./stimmen.css";
import { useTranslation } from "react-i18next";
import { Feature } from "../../components";
import Sven from "../../assets/stimmen/Sven Drews.jpeg";
import Letafat from "../../assets/stimmen/Letafat Guliyeva.jpeg";
import Anon from "../../assets/stimmen/person.png";

const Stimmen = () => {
  const { t } = useTranslation();
  return (
    <div className="jg__stimmen section__margin">
      <div className="jg__stimmen-heading">
        <h1 className="gradient__text">Stimmen für Jamila</h1>
      </div>
      <div className="jg__stimmen-container">
        <Feature
          imgUrl={Sven}
          name="Sven D."
          fb="Online Kommunikation (Master) FB2"
          text={t("stimmen.sven")}
        />
        <Feature
          imgUrl={Letafat}
          name="Latafat Guliyeva"
          fb="Molecular Biotechnology (Master's) FB7"
          text={t("stimmen.latafat")}
        />
        <Feature
          imgUrl={Anon}
          name="Anonym"
          fb="J.S. FB5"
          text={t("stimmen.sven")}
        />
      </div>
    </div>
  );
};

export default Stimmen;
