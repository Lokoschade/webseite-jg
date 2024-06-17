import React from "react";
import "./wahl.css";
import images from "../../assets/anleitung/images";
import { useTranslation } from "react-i18next";

const Wahl = () => {
  const { t } = useTranslation();

  return (
    <div className="jg__wahl">
      <p className="jg__wahl-text">{t("wahl.step1")}</p>
      <img src={images[0]} alt="Step1" className="jg__wahl-image" />
      <p className="jg__wahl-text">{t("wahl.step2")}</p>
      <img src={images[1]} alt="Step2" className="jg__wahl-image" />
      <p className="jg__wahl-text">{t("wahl.step3")}</p>
      <img src={images[2]} alt="Step3" className="jg__wahl-image" />
      <p className="jg__wahl-text">{t("wahl.step4")}</p>
      <p className="jg__wahl-text">{t("wahl.step5_1")}</p>
      <p className="jg__wahl-text">{t("wahl.step5_2")}</p>
      <img src={images[3]} alt="Step4" className="jg__wahl-image" />
      <p className="jg__wahl-text">{t("wahl.step5_21")}</p>
      <img src={images[4]} alt="Step5" className="jg__wahl-image" />
      <p className="jg__wahl-text">{t("wahl.step5_22")}</p>
      <img src={images[5]} alt="Step6" className="jg__wahl-image" />
      <p className="jg__wahl-text">{t("wahl.step5_23")}</p>
      <img src={images[6]} alt="Step7" className="jg__wahl-image" />
      <p className="jg__wahl-text">{t("wahl.step6")}</p>
      <p className="jg__wahl-text">{t("wahl.step7")}</p>
      <p className="jg__wahl-text">{t("wahl.hinweis")}</p>
    </div>
  );
};
export default Wahl;
