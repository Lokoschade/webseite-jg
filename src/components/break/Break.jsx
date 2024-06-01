import React from "react";
import "./break.css";
import { useTranslation } from "react-i18next";

const Break = () => {
  const { t } = useTranslation();
  return (
    <div className="jg__break section__padding">
      <div className="jg__break-content">
        <h1>{t("break.zitat")}</h1>
      </div>
    </div>
  );
};

export default Break;
