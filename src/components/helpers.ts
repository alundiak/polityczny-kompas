import { CSSProperties } from "react";
import { SymbolType } from "recharts/types/util/types";
import { CompassData, DataKind } from "./models";

export const DEFAULT_SCATTERS_IDS: DataKind[] = ["poland2025", "polandOther"];

export const getColorByType = (scatterId: DataKind): string => {
  switch (scatterId) {
    case "poland2025":
      return "blue";

    case "polandOther":
      return "grey";

    default:
      return "grey";
  }
};

export const getShapeByType = (scatterId: DataKind): SymbolType => {
  switch (scatterId) {
    case "poland2025":
    case "polandOther":
      return "circle" as SymbolType;

    default:
      return "square" as SymbolType;
  }
};

export const getDataPointStyleByType = (scatterId: DataKind): CSSProperties => {
  switch (scatterId) {
    case "poland2025":
      return { fontSize: 20 };

    case "polandOther":
      return { fontSize: 12 };

    default:
      return { fontSize: 12 };
  }
};

export const getDataPointFillByType = (scatterId: DataKind): string => {
  switch (scatterId) {
    case "poland2025":
      return "black";

    default:
      return "";
  }
};

export function findSameCoordinates(data: CompassData) {
  Object.entries(data).forEach(([group, people]) => {
    people.forEach((current, index, array) => {
      const previous = array[index - 1];
      if (previous && previous.x === current.x && previous.y === current.y) {
        console.log(`Group: ${group}, Duplicate Person:`, current);
      }
    });
  });
}

// const myPoliticalRectangle = [
//   { x: 2, y: 2 }, // I (Right-Authoritarian)
//   { x: -2, y: 2 }, // II (Left-Authoritarian)
//   { x: -2, y: -2 }, // III (Left-Libertarian)
//   { x: 2, y: -2 }, // IV (Right-Libertarian)
// ];

export const myPoliticalEdges = {
  x1: 1, // I Right
  y1: 1, // II Authoritarian
  x2: -2, // III Left
  y2: -3, // IV Libertarian
};

// const myPoliticalRectangle = "2,2 -2,2 -2,-2 2,-2";
