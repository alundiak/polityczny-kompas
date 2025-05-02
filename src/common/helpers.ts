import { CSSProperties } from "react";
import { SymbolType } from "recharts/types/util/types";

import poland2025 from "../data/poland2025.json";
import polandOther from "../data/polandOther.json";
import world from "../data/world.json";
import america from "../data/america.json";
import europe from "../data/europe.json";
import ukraine from "../data/ukraine.json";
import russia from "../data/russia.json";

import { DataKind, Person } from "./models";

export const mergedData = [
  ...poland2025,
  ...polandOther,
  ...world,
  ...america,
  ...europe,
  ...russia,
  ...ukraine,
];

export const mainData = {
  poland2025,
  polandOther,
  world,
  america,
  europe,
  russia,
  ukraine,
};

export function findSameCoordinates(data: Person[]) {
  const coordMap = new Map<string, Person[]>();

  data.forEach((person) => {
    const key = `${person.x},${person.y}`;
    if (!coordMap.has(key)) {
      coordMap.set(key, []);
    }
    coordMap.get(key)!.push(person);
  });

  const duplicates: Person[] = [];

  coordMap.forEach((people) => {
    if (people.length > 1) {
      console.log(`Duplicate coordinates for: `, people[0], people[1]);
      duplicates.push(...people);
    }
  });

  return duplicates;
}

export const leftColumnData: DataKind[] = [
  "america",
  "europe",
  "ukraine",
  "russia",
];

export const rightColumnData: DataKind[] = ["poland2025", "polandOther"];

export const DEFAULT_SCATTERS_IDS: DataKind[] = ["poland2025", "polandOther"];

export const getLabelFromKey = (scatterId: DataKind): string => {
  switch (scatterId) {
    case "poland2025":
      return "Poland (2025)";

    case "polandOther":
      return "Poland (other)";

    case "america":
      return "America";

    case "europe":
      return "Europe";

    case "ukraine":
      return "Ukraine";

    default:
      return scatterId;
  }
};

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

// const myPoliticalRectangle = [
//   { x: 1, y: 1 }, // I (Right-Authoritarian)
//   { x: -2, y: 1 }, // II (Left-Authoritarian)
//   { x: -2, y: -3 }, // III (Left-Libertarian)
//   { x: 1, y: -3 }, // IV (Right-Libertarian)
// ];

export const myPoliticalEdges = {
  x1: 1, // I Right
  y1: 1, // II Authoritarian
  x2: -2, // III Left
  y2: -3, // IV Libertarian
};
