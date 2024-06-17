import React from "react";
import "./wahl.css";
import images from "../../assets/anleitung/images";

const Wahl = () => {
  const steps = [
    { image: images[0], text: "Text für Bild 1" },
    { image: images[1], text: "Text für Bild 2" },
    { image: images[2], text: "Text für Bild 3" },
    { image: images[3], text: "Text für Bild 4" },
    { image: images[4], text: "Text für Bild 5" },
    { image: images[5], text: "Text für Bild 6" },
    { image: images[6], text: "Text für Bild 7" },
  ];

  return (
    <div className="jg__wahl">
      {steps.map((step, index) => (
        <div key={index} className="jg__wahl-step">
          <img
            src={step.image}
            alt={`Step ${index + 1}`}
            className="jg__wahl-image"
          />
          <p className="jg__wahl-text">{step.text}</p>
        </div>
      ))}
    </div>
  );
};
export default Wahl;
