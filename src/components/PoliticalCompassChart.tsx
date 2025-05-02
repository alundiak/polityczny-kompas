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
  ReferenceArea,
  // Legend,
} from "recharts";

import AxisLabels from "./AxisLabels";
import {
  getColorByType,
  getDataPointFillByType,
  getDataPointStyleByType,
  getShapeByType,
  myPoliticalEdges,
} from "../common/helpers";
import { DataKind, PoliticalCompassChartProps } from "../common/models";

const PoliticalCompassChart: React.FC<PoliticalCompassChartProps> = (props) => {
  const mapper = (scatterId: DataKind) => {
    // Note. YES, <Scatter> should rendered DIRECTLY as child under <ScatterChart>
    // If to extract this chunk of code into dedicated component, then code will NOT render!
    return (
      <Scatter
        name={`${scatterId}-people`}
        data={props.data[scatterId]}
        fill={getColorByType(scatterId)}
        shape={getShapeByType(scatterId)}
        isAnimationActive={false}
      >
        <LabelList
          fill={getDataPointFillByType(scatterId)}
          dataKey="name"
          position="top"
          style={getDataPointStyleByType(scatterId)}
          // formatter={() => "only-text-formatting"}
        />
      </Scatter>
    );
  };

  return (
    <div style={{ width: 800, height: 800, position: "relative" }}>
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

        {props.scattersIds.map(mapper)}

        {/* works, but need to redesign kompas */}
        {/* <Legend /> */}

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
