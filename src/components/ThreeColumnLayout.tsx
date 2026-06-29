import React, { useState } from "react";

import {
  DEFAULT_SCATTERS_IDS,
  findSameCoordinates,
  leftColumnData,
  mainData,
  mergedData,
  rightColumnData,
} from "../common/helpers";
import LabeledCheckbox from "./LabeledInput";
import PoliticalCompassChart from "./PoliticalCompassChart";

import "./threeColumnLayout.css";
import WarningMessage from "./WarningMessage";

const duplicateCoordinates = findSameCoordinates(mergedData);

const ThreeColumnLayout: React.FC = () => {
  // Note. Renders twice because of StrictMode.

  const [showAndrii, setShowAndrii] = useState(false);
  const [showAndriiLang, setShowAndriiLang] = useState(false);

  const [scattersIds, setScattersIds] = useState<Set<string>>(
    new Set(DEFAULT_SCATTERS_IDS),
  );

  const toggleCheckbox = (key: string) => {
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

  const mapperPredicate = (scatterId: string) => {
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
      <div className="column left">
        {leftColumnData.map(mapperPredicate)}
        <br />
        <label className="flex items-center">
          <input
            className="h-5 w-5"
            type="checkbox"
            name={"show-andrii"}
            checked={showAndrii}
            onChange={() => setShowAndrii(!showAndrii)}
          />
          &nbsp;{" "}
          <span className="bg-green-100 dark:bg-green-900">Andrii LUNDIAK</span>
        </label>
      </div>

      <div className="centerColumn">
        <PoliticalCompassChart
          data={mainData}
          scattersIds={Array.from(scattersIds)}
          showAndrii={showAndrii}
          showAndriiLang={showAndriiLang}
        />
      </div>

      <div className="column right">
        {rightColumnData.map(mapperPredicate)}

        <br />
        <label className="flex items-center">
          <input
            className="h-5 w-5"
            type="checkbox"
            name={"show-andrii-lang"}
            checked={showAndriiLang}
            onChange={() => setShowAndriiLang(!showAndriiLang)}
          />
          &nbsp;{" "}
          <span className="bg-red-100 dark:bg-red-900">Andrii LUNDIAK</span>
        </label>
      </div>
      {duplicateCoordinates.length > 0 && (
        <WarningMessage duplicateCoordinates={duplicateCoordinates} />
      )}
    </div>
  );
};

export default ThreeColumnLayout;
