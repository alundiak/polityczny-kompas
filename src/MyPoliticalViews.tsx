import React from "react";
import { Polygon } from "recharts";
import { Coordinate } from "recharts/types/util/types";

const MyPoliticalViews: React.FC = () => {
  const myPoliticalCoordinates: Coordinate[] = [
    { x: 2, y: 2 },
    { x: -2, y: 2 },
    { x: -2, y: -2 },
    { x: 2, y: -2 },
  ];

  return (
    <Polygon
      points={myPoliticalCoordinates}
      fill="red"
      stroke="#FFD700"
      strokeWidth={3}
    />
  );
};

export default MyPoliticalViews;
