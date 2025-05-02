import React, { useState } from "react";

import { DEFAULT_SCATTERS_IDS } from "../common/helpers";
import { DataKind } from "../common/models";
import {
  mergedData,
  mainData,
  findSameCoordinates,
  leftColumnData,
  rightColumnData,
} from "../common/helpers";
import PoliticalCompassChart from "./PoliticalCompassChart";
import LabeledCheckbox from "./LabeledInput";

import "./threeColumnLayout.css";

findSameCoordinates(mergedData);

const ThreeColumnLayout: React.FC = () => {
  // Note. Renders twice because of StrictMode.

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

  const mapperPredicate = (scatterId: DataKind) => {
    return (
      <LabeledCheckbox
        key={`checkbox-for-${scatterId}`}
        scatterId={scatterId}
        isChecked={scattersIds.has(scatterId)}
        onChangeHandler={() => toggleCheckbox(scatterId)}
        label={scatterId}
      />
    );
  };

  return (
    <div className="wrapper">
      <div className="column left">{leftColumnData.map(mapperPredicate)}</div>

      <div className="centerColumn">
        <PoliticalCompassChart
          data={mainData}
          scattersIds={Array.from(scattersIds)}
        />
      </div>

      <div className="column right">{rightColumnData.map(mapperPredicate)}</div>
    </div>
  );
};

export default ThreeColumnLayout;
