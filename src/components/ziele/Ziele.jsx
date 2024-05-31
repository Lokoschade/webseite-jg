import React from "react";
import "./ziele.css";
import { useTranslation } from "react-i18next";

const Ziele = () => {
  const { t } = useTranslation();
  return (
    <div className="jg__ziele section__margin" id="ziele">
      <div className="jg__ziele-text">
        <p>{t("ziele.text1")}</p>
      </div>
    </div>
  );
};

export default Ziele;
