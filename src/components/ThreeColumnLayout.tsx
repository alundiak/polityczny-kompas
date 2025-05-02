import React, { useState } from "react";

import PoliticalCompassChart from "./PoliticalCompassChart";
import data from "../data/getData";
import { DEFAULT_SCATTERS_IDS, findSameCoordinates } from "./helpers";
import { CompassData, DataKind } from "./models";

import "./threeColumnLayout.css";

findSameCoordinates(data as CompassData);

const ThreeColumnLayout: React.FC = () => {
  // Note. Renders twice.
  // console.log("ThreeColumnLayout");

  const [scattersIds, setScattersIds] = useState<Set<DataKind>>(
    new Set(DEFAULT_SCATTERS_IDS)
  );

  const toggleCheckbox = (key: DataKind) => {
    setScattersIds((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  return (
    <div className="wrapper">
      <div className="column">
        <label>
          <input
            type="checkbox"
            checked={scattersIds.has("america")}
            onChange={() => {
              toggleCheckbox("america");
            }}
          />
          America
        </label>
        <label>
          <input
            type="checkbox"
            checked={scattersIds.has("europe")}
            onChange={() => {
              toggleCheckbox("europe");
            }}
          />
          Europe
        </label>
        <label>
          <input
            type="checkbox"
            checked={scattersIds.has("ukraine")}
            onChange={() => {
              toggleCheckbox("ukraine");
            }}
          />
          Ukraine
        </label>
        <label>
          <input
            type="checkbox"
            checked={scattersIds.has("russia")}
            onChange={() => {
              toggleCheckbox("russia");
            }}
          />
          russia
        </label>
      </div>

      <div className="centerColumn">
        <PoliticalCompassChart
          data={data}
          scattersIds={Array.from(scattersIds)}
        />
      </div>

      <div className="column">
        <label>
          <input
            type="checkbox"
            checked={scattersIds.has("poland2025")}
            onChange={() => {
              toggleCheckbox("poland2025");
            }}
          />
          Poland (2025)
        </label>
        <label>
          <input
            type="checkbox"
            checked={scattersIds.has("polandOther")}
            onChange={() => {
              toggleCheckbox("polandOther");
            }}
          />
          Poland (other)
        </label>
      </div>
    </div>
  );
};

export default ThreeColumnLayout;
