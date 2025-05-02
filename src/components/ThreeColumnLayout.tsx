import React, { useState } from "react";
import PoliticalCompassChart from "./PoliticalCompassChart";
import data from "../data/getData";

import "./threeColumnLayout.css";
import { findSameCoordinates } from "./helpers";
import { CompassData } from "./models";

findSameCoordinates(data as CompassData);

const ThreeColumnLayout: React.FC = () => {
  // Note. Renders twice.
  // console.log("ThreeColumnLayout");

  const [showPoland2025, setShowPoland2025] = useState(true);
  const [showOtherPoland, setShowOtherPoland] = useState(true);

  return (
    <div className="wrapper">
      <div className="column">
        <label>
          <input type="checkbox" /> USA
        </label>
        <label>
          <input type="checkbox" /> Europe
        </label>
      </div>

      <div className="centerColumn">
        <PoliticalCompassChart
          data={data}
          showPoland2025={showPoland2025}
          showOtherPoland={showOtherPoland}
        />
      </div>

      <div className="column">
        <label>
          <input
            type="checkbox"
            checked={showPoland2025}
            onChange={() => {
              setShowPoland2025((previous) => !previous);
            }}
          />
          Poland (2025)
        </label>
        <label>
          <input
            type="checkbox"
            checked={showOtherPoland}
            onChange={() => {
              setShowOtherPoland((previous) => !previous);
            }}
          />{" "}
          Poland (other)
        </label>
        <label>
          <input type="checkbox" /> Ukraine
        </label>
        <label>
          <input type="checkbox" /> russia
        </label>
      </div>
    </div>
  );
};

export default ThreeColumnLayout;
