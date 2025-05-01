import React from "react";
import { mergedData } from "./data/getData";

import "./compass.css";

interface Person {
  name: string;
  x: number;
  y: number;
  type: string;
}

const PoliticalCompass: React.FC = () => {
  const renderCompass = (x: number, y: number) => {
    // Scale -5 do 5
    return (
      <div
        className="compass-point"
        style={{
          left: `${50 + (x / 5) * 40}%`,
          top: `${50 - (y / 5) * 40}%`,
        }}
      />
    );
  };

  return (
    <div className="compass-container">
      <h2>Polityczny Kompas</h2>
      <div className="compass">
        {/* <div className="region top-left">Lewica</div>
        <div className="region top-right">Prawica</div>
        <div className="region bottom-left">Libertarianizm</div>
        <div className="region bottom-right">Autorytaryzm</div> */}

        {mergedData.map((person: Person, index) => (
          <div
            key={index}
            className="person"
            style={{
              position: "absolute",
              left: `${50 + (person.x / 5) * 40}%`,
              top: `${50 - (person.y / 5) * 40}%`,
              color: "black",
              fontSize: "12px",
            }}
          >
            <div className="person-label">{person.name}</div>
            {renderCompass(person.x, person.y)}
          </div>
        ))}
      </div>

      <div className="left-label">Lewica</div>
      <div className="right-label">Prawica</div>
      <div className="top-label">Autorytaryzm</div>
      <div className="bottom-label">Libertarianizm</div>
    </div>
  );
};

export default PoliticalCompass;
