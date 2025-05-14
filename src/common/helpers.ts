import { CSSProperties } from "react";
import { SymbolType } from "recharts/types/util/types";

import poland2025Json from "../data/poland2025.json";
import polandOtherJson from "../data/polandOther.json";
import world from "../data/world.json";
import america from "../data/america.json";
import uk from "../data/uk.json";
import scandinavia from "../data/scandinavia.json";
import baltics from "../data/baltics.json";
import europe from "../data/europe.json";
import ukraineJson from "../data/ukraine.json";
import russia from "../data/russia.json";
import lang from "../data/lang.json";

import { CompassData, DataKind, Person } from "./models";

const setFlag = (flag: string) => {
  return (item: Person) => ({
    ...item,
    flag,
  });
};

const poland2025 = poland2025Json.map(setFlag("🇵🇱"));
const polandOther = polandOtherJson.map(setFlag("🇵🇱"));
const ukraine = ukraineJson.map(setFlag("🇺🇦"));

export const mainData: CompassData = {
  poland2025,
  polandOther,
  world,
  america,
  uk,
  scandinavia,
  baltics,
  europe,
  russia,
  ukraine,
  lang,
};

export const mergedData: Person[] = Object.values(mainData).flat();

export function findSameCoordinates(data: Person[]): Person[] {
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
  "world",
  "america",
  "uk",
  "scandinavia",
  "baltics",
  "europe",
  "ukraine",
  "russia",
];

export const rightColumnData: DataKind[] = [
  "poland2025",
  "polandOther",
  // "lang",
];

export const DEFAULT_SCATTERS_IDS: DataKind[] = ["poland2025", "polandOther"];

export const getLabelFromKey = (scatterId: DataKind): string => {
  switch (scatterId) {
    case "poland2025":
      return "🇵🇱Poland (2025)";

    case "polandOther":
      return "🇵🇱Poland (other)";

    case "world":
      return "World";

    case "america":
      return "America";

    case "scandinavia":
      return "Scandinavia";

    case "baltics":
      return "Baltics";

    case "uk":
      return "UK";

    case "europe":
      return "Europe";

    case "ukraine":
      return "🇺🇦Ukraine";

    case "russia":
      return "🇷🇺russia";

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
    case "lang":
    case "poland2025":
      return { fontSize: 20, fill: "blue" };

    case "polandOther":
      return { fontSize: 14 };

    default:
      return { fontSize: 14 };
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
  x1: 1.5, // I Right
  y1: 1, // II Authoritarian
  x2: -2, // III Left
  y2: -3, // IV Libertarian
};

// Programming Languages
export const myProgrammingEdges = {
  x1: -0.5, // I Right
  y1: -2.5, // II Authoritarian
  x2: 3.5, // III Left
  y2: -4.5, // IV Libertarian
};
