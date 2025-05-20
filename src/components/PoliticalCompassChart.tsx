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
  ResponsiveContainer,
  // Legend,
} from "recharts";
// import { ScatterPointItem } from "recharts/types/cartesian/Scatter";

import {
  getColorByType,
  getDataPointFillByType,
  getDataPointStyleByType,
  // getShapeByType,
  myPoliticalEdges,
  myProgrammingEdges,
} from "../common/helpers";
import { DataKind, PoliticalCompassChartProps } from "../common/models";
import AxisLabels from "./AxisLabels";
import ShapeAsFlagSvg from "./ShapeAsFlagSvg";

const PoliticalCompassChart: React.FC<PoliticalCompassChartProps> = (props) => {
  const mapper = (scatterId: DataKind) => {
    // Note. YES, <Scatter> should rendered DIRECTLY as child under <ScatterChart>
    // If to extract this chunk of code into dedicated component, then code will NOT render!

    // Unfortunately, it's kinda not possible to implement conditional proper code here (ReCharts API TypeScript restriction)
    // TBD/MAYBE someday
    // const shapeValue = (item: ScatterPointItem) => {
    //   if (item.payload?.flag) {
    //     return <ShapeAsFlagSvg data={item} />;
    //   } else {
    //     return getShapeByType(scatterId);
    //   }
    // };

    return (
      <Scatter
        name={`${scatterId}-people`}
        data={props.data[scatterId]}
        fill={getColorByType(scatterId)}
        // shape={getShapeByType(scatterId)} // works
        // shape={shapeValue} // does NOT work
        shape={<ShapeAsFlagSvg />} // works, but requires to have `item.payload.flag` always
        isAnimationActive={false}
      >
        <LabelList
          fill={getDataPointFillByType(scatterId)}
          dataKey="lastName"
          position="top"
          style={getDataPointStyleByType(scatterId)}
          // formatter={() => "only-text-formatting"}
        />
      </Scatter>
    );
  };

  return (
    // <div style={{ width: "100%", height: "100%" }}>
    <div style={{ width: 800, height: 800, position: "relative" }}>
      <ResponsiveContainer>
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

          {props.showAndrii && (
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
              className="politics"
            />
          )}

          {props.showAndriiLang && (
            <ReferenceArea
              x1={myProgrammingEdges.x1}
              x2={myProgrammingEdges.x2}
              y1={myProgrammingEdges.y1}
              y2={myProgrammingEdges.y2}
              isFront={false}
              fill="lightcoral"
              fillOpacity={0.1}
              stroke="lightcoral"
              strokeOpacity={0.5}
              className="languages"
            />
          )}
        </ScatterChart>
      </ResponsiveContainer>

      <AxisLabels />
    </div>
  );
};

export default PoliticalCompassChart;
