import React from "react";
import "./ziele.css";
import { useTranslation } from "react-i18next";

const Ziele = () => {
  const { t } = useTranslation();
  return (
    <div className="jg__ziele section__padding" id="ziele">
      <div className="jg__ziele-text">
        <p>{t("ziele.text")}</p>
      </div>
      <div className="jg__ziele-pos">
        <div className="jg__ziele-pos__item">
          <h2>{t("ziele.ueberschrift1")}</h2>
          <p>{t("ziele.text1")}</p>
        </div>
        <div className="jg__ziele-pos__gap"></div>
        <div className="jg__ziele-pos__item">
          <h2>{t("ziele.ueberschrift2")}</h2>
          <p>{t("ziele.text2")}</p>
        </div>
      </div>
      <div className="jg__ziele-subtext">
        <p>{t("ziele.subtext")}</p>
        <p>{t("ziele.subtext2")}</p>
      </div>
    </div>
  );
};

export default Ziele;
