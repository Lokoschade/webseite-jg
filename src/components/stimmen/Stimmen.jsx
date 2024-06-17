import React from "react";
import "./stimmen.css";
import { useTranslation } from "react-i18next";
import { Feature } from "../../components";
import Sven from "../../assets/stimmen/Sven Drews.jpeg";
import Letafat from "../../assets/stimmen/Letafat Guliyeva.jpeg";
import Hashem from "../../assets/stimmen/Hashem.jpeg";
import Sara from "../../assets/stimmen/Sara.jpeg";
import Anon from "../../assets/stimmen/person.png";

const Stimmen = () => {
  const { t } = useTranslation();
  return (
    <div className="jg__stimmen section__margin" id="stimmen">
      <div className="jg__stimmen-heading">
        <h1 className="gradient__text">{t("stimmen.ueberschrift")}</h1>
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
          imgUrl={Hashem}
          name="Hashem M."
          fb="Angewandte Informatik FB5"
          text={t("stimmen.hashem")}
        />
        <Feature
          imgUrl={Sara}
          name="Sara safari B."
          fb="Molecular biotechnology (master) FB7"
          text={t("stimmen.sara")}
        />
        <Feature
          imgUrl={Anon}
          name="J. S."
          fb="Angewandte Informatik FB5"
          text={t("stimmen.anon")}
        />
        <Feature
          imgUrl={Anon}
          name="Ammar H. A."
          fb="Master biomedical Engineering FB6"
          text={t("stimmen.anon2")}
        />
        <Feature
          imgUrl={Anon}
          name="Lucas R."
          fb="Angewandte Informatik FB5"
          text={t("stimmen.lucas")}
        />
      </div>
    </div>
  );
};

export default Stimmen;
