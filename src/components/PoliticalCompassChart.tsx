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
import data from "../data/getData";
import AxisLabels from "./AxisLabels";
import { getColorByType, myPoliticalEdges } from "./helpers";

interface Person {
  name: string;
  x: number;
  y: number;
}

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

      <AxisLabels />
    </div>
  );
};

export default PoliticalCompassChart;
