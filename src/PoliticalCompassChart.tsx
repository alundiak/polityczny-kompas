import React, { useState } from "react";
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
  // Legend,
} from "recharts";
import data from "./data/getData";
// import { SymbolType } from "recharts/types/util/types";

interface Person {
  name: string;
  x: number;
  y: number;
}

const getColorByType = (type: string): string => {
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

const myPoliticalEdges = {
  x1: 1, // I Right
  y1: 1, // II Authoritarian
  x2: -2, // III Left
  y2: -3, // IV Libertarian
};

// const myPoliticalRectangle = "2,2 -2,2 -2,-2 2,-2";

const PoliticalCompassChart: React.FC = () => {
  const [showPoland2025, setShowPoland2025] = useState(true);
  const [showOtherPoland, setShowOtherPoland] = useState(true);
  const [showWorld, setShowWorld] = useState(true);

  // TBD
  const dummy = () => {
    setShowPoland2025(true);
    setShowOtherPoland(true);
    setShowWorld(true);
  };

  return (
    <div
      style={{ width: 800, height: 800, position: "relative" }}
      onClick={() => {
        dummy();
      }}
    >
      <ScatterChart
        width={800}
        height={800}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
      >
        {/* Grid lines with lighter color */}
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

        {showPoland2025 && (
          <Scatter
            name="People-Poland-2025"
            data={data.poland2025 as Person[]}
            // fill="#8884d8"
            fill={getColorByType("presidential-candidate")}
            // shape="square"
            isAnimationActive={false}
          >
            <LabelList
              fill="black"
              dataKey="name"
              position="top"
              style={{ fontSize: 20 }}
            />
          </Scatter>
        )}

        {showOtherPoland && (
          <Scatter
            name="Other-Poland-People"
            data={data.polandOther as Person[]}
            // fill={getColorByType("polish-politician")}
            fill="grey"
            // shape="square"
            isAnimationActive={false}
          >
            <LabelList dataKey="name" position="top" style={{ fontSize: 12 }} />
          </Scatter>
        )}

        {showWorld && (
          <Scatter
            name="World-People"
            data={data.world as Person[]}
            // fill={getColorByType("world-politician")}
            fill="grey"
            // shape="square"
            isAnimationActive={false}
          >
            <LabelList dataKey="name" position="top" style={{ fontSize: 12 }} />
          </Scatter>
        )}

        {/* works, but need to redesign kompas */}
        {/* <Legend /> */}

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

        {/* {processedData.map((entry, index) => (
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
        ))} */}

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
          isFront={false}
          fill="green"
          fillOpacity={0.1}
          stroke="green"
          strokeOpacity={0.5}
        />
      </ScatterChart>

      {/* Axis labels */}

      <div
        style={{
          position: "absolute",
          top: "47.5%",
          left: "25px",
          transform: "translateY(-50%)",
          fontWeight: "bold",
          fontSize: "20px",
          // color: "#1E90FF",
        }}
      >
        {/* (on the left side of the chart) */}
        Left
      </div>

      <div
        style={{
          position: "absolute",
          top: "47.5%",
          right: "-40px",
          transform: "translateY(-50%)",
          fontWeight: "bold",
          fontSize: "20px",
          // color: "#FF4500",
        }}
      >
        {/* on the right side of the chart) */}
        Right
      </div>

      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "54.5%",
          transform: "translateX(-50%)",
          fontWeight: "bold",
          fontSize: "20px",
          // color: "#8B0000",
        }}
      >
        {/* (on top side of the chart) */}
        Authoritarianism
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "5px",
          left: "54.5%",
          transform: "translateX(-50%)",
          fontWeight: "bold",
          fontSize: "20px",
          // color: "#32CD32",
        }}
      >
        {/* (on bottom side of the chart) */}
        Libertarianism
      </div>
    </div>
  );
};

export default PoliticalCompassChart;
