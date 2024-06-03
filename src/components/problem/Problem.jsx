import React from "react";
import "./problem.css";
import { useTranslation } from "react-i18next";

const Problem = () => {
  const { t } = useTranslation();
  return (
    <div className="jg__problem section__margin" id="problem">
      <div className="jg__problem-card">
        <div className="jg__problem-card__heading">
          <h1 className="gradient__text">{t("problem.ueberschrift")}</h1>
        </div>
        <div className="jg__problem-card__container">
          <div className="jg__problem-card__container-item">
            <div />
            <p>{t("problem.punkt1")}</p>
          </div>
          <div className="jg__problem-card__container-item">
            <div />
            <p>{t("problem.punkt2")}</p>
          </div>
          <div className="jg__problem-card__container-item">
            <div />
            <p>{t("problem.punkt3")}</p>
          </div>
        </div>
      </div>
      <div className="jg__problem-break">
        <p>{t("problem.break")}</p>
      </div>
      <div className="jg__problem-card">
        <div className="jg__problem-card__heading">
          <h1 className="gradient__text">{t("problem.ueberschrift2")}</h1>
        </div>
        <div className="jg__problem-card__container">
          <div className="jg__problem-card__container-item">
            <div />
            <p>{t("problem.punkt2_1")}</p>
          </div>
          <div className="jg__problem-card__container-item">
            <div />
            <p>{t("problem.punkt2_2")}</p>
          </div>
          <div className="jg__problem-card__container-item">
            <div />
            <p>{t("problem.punkt2_3")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem;
