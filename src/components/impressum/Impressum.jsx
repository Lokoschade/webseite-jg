import React from "react";
import "./impressum.css";

const Impressum = () => {
  return (
    <div className="jg__impressum">
      <p>Jamila Gränzer</p>
      <p>Postfach 1102</p>
      <p>21366 Dahlenburg</p>

      <h2>Kontakt</h2>
      <p>
        E-Mail:{" "}
        <a href="mailto:jamila.b.d.graenzer@student.hs-anhalt.de">
          jamila.b.d.graenzer@student.hs-anhalt.de
        </a>
      </p>

      <h2>Redaktionell verantwortlich</h2>
      <p>Jamila Gränzer</p>
      <p>Postfach 1102</p>
      <p>21366 Dahlenburg</p>
      <p>
        E-Mail:{" "}
        <a href="mailto:jamila.b.d.graenzer@student.hs-anhalt.de">
          jamila.b.d.graenzer@student.hs-anhalt.de
        </a>
      </p>

      <p>
        Quelle:{" "}
        <a href="https://www.e-recht24.de/impressum-generator.html">
          https://www.e-recht24.de/impressum-generator.html
        </a>
      </p>
    </div>
  );
};

export default Impressum;
