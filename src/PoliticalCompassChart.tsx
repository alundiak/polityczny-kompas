import React from "react";
import {
  ScatterChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Scatter,
  LabelList,
  ReferenceLine,
  // Polygon,
  // Customized,
  ReferenceArea,
} from "recharts";
import { mergedData } from "./data/getData";
// import mergedData from "./data/data.json";
// import { SymbolType } from "recharts/types/util/types";

interface Person {
  name: string;
  x: number;
  y: number;
  type: string;
}

const getColorByType = (type: string): string => {
  switch (type) {
    case "presidential-candidate":
      return "#FFD700"; // Gold
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

const myPoliticalEdges = {
  x1: 1, // I Right
  y1: 1, // II Authoritarian
  x2: -2, // III Left
  y2: -4, // IV Libertarian
};

// const myPoliticalRectangle = "2,2 -2,2 -2,-2 2,-2";

const PoliticalCompassChart: React.FC = () => {
  const processedData = mergedData as Person[];

  return (
    <div style={{ width: 600, height: 600, position: "relative" }}>
      <ScatterChart
        width={600}
        height={600}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
      >
        {/* Grid lines with dimmed color */}
        <CartesianGrid
          stroke="#e0e0e0"
          strokeDasharray="3 3"
          // fill="white"
        />

        {/* Bolder ReferenceLines for X=0 and Y=0 */}
        <ReferenceLine x={0} stroke="#000" strokeWidth={3} />
        <ReferenceLine y={0} stroke="#000" strokeWidth={3} />

        <XAxis
          type="number"
          dataKey="x"
          domain={[-5, 5]}
          tickCount={11}
          ticks={[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]}
          axisLine={false}
        />
        <YAxis
          type="number"
          dataKey="y"
          domain={[-5, 5]}
          tickCount={11}
          ticks={[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]}
          axisLine={false}
        />

        <Tooltip />

        {/*
        <Scatter name="People" data={processedData} fill="#8884d8">
          <LabelList dataKey="name" position="top" style={{ fontSize: 16 }} />
        </Scatter>
        */}

        {/*
        <Scatter
          name="People"
          data={processedData}
          isAnimationActive={false}
          shape="square" // even this doesn't work
        >
          <LabelList dataKey="name" position="top" style={{ fontSize: 12 }} />
        </Scatter>
        */}

        {processedData.map((entry, index) => (
          <Scatter
            isAnimationActive={false}
            key={index}
            name={entry.name}
            data={[entry]}
            fill={getColorByType(entry.type)}
            // shape={getShapeByType(entry.type)}
            // shape={"square"}
          >
            <LabelList dataKey="name" position="top" style={{ fontSize: 12 }} />
          </Scatter>
        ))}

        {/* <Customized
          component={
            <Polygon
              points={myPoliticalRectangle}
              fill="red"
              stroke="#FFD700"
              strokeWidth={3}
            />
          }
        /> */}

        <ReferenceArea
          x1={myPoliticalEdges.x1}
          x2={myPoliticalEdges.x2}
          y1={myPoliticalEdges.y1}
          y2={myPoliticalEdges.y2}
          stroke="grey"
          strokeOpacity={1}
        />
      </ScatterChart>

      {/* Axis labels */}
      {/* Left label (on the left side of the chart) */}
      <div
        style={{
          position: "absolute",
          top: "47.5%",
          left: "35px",
          transform: "translateY(-50%)",
          fontWeight: "bold",
          fontSize: "20px",
          color: "#1E90FF",
        }}
      >
        Left
      </div>

      {/* Right label (on the right side of the chart) */}
      <div
        style={{
          position: "absolute",
          top: "47.5%",
          right: "-15px",
          transform: "translateY(-50%)",
          fontWeight: "bold",
          fontSize: "20px",
          color: "#FF4500",
        }}
      >
        Right
      </div>

      {/* Authoritarianism label (on top side of the chart) */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "54.5%",
          transform: "translateX(-50%)",
          fontWeight: "bold",
          fontSize: "20px",
          color: "#8B0000",
        }}
      >
        Authoritarianism
      </div>

      {/* Libertarianism label (on bottom side of the chart) */}
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "54.5%",
          transform: "translateX(-50%)",
          fontWeight: "bold",
          fontSize: "20px",
          color: "#32CD32",
        }}
      >
        Libertarianism
      </div>
    </div>
  );
};

export default PoliticalCompassChart;
