// import { SymbolType } from "recharts/types/util/types";

import { CompassData } from "./models";

export const getColorByType = (type: string): string => {
  switch (type) {
    case "presidential-candidate":
      // return "#8884d8"; // #FFD700 => Gold
      return "blue";
    case "polish-politician":
      return "#32CD32"; // Lime Green
    case "world-politician":
      return "#1E90FF"; // Dodger Blue
    default:
      return "#8884d8"; // Default color
  }
};

// const getShapeByType = (type: string): SymbolType => {
//   switch (type) {
//     case "presidential-candidate":
//       return "circle" as SymbolType;
//     case "polish-politician":
//       return "square" as SymbolType;
//     case "world-politician":
//       return "diamond" as SymbolType;
//     default:
//       return "circle" as SymbolType;
//   }
// };

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
