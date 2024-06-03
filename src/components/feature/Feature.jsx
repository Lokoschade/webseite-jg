import React from "react";
import "./feature.css";

const Feature = ({ imgUrl, name, fb, text }) => {
  return (
    <div className="jg__features-container__feature">
      <div className="jg__feature-container__feature-pic">
        <img src={imgUrl} alt="person" />
      </div>
      <div className="jg__feature-container__feature-info">
        <p>{name}</p>
        <p>{fb}</p>
      </div>
      <div className="jg__features-container__feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
