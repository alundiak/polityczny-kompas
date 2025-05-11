import { ScatterPointItem } from "recharts/types/cartesian/Scatter";

import "./shapeAsFlag.css";

//  maybe
// interface ShapeAsFlagSvgProps {
//   data: ScatterPointItem;
// }

const ShapeAsFlagSvg = (data: ScatterPointItem) => {
  console.log(data);
  return (
    <text
      // don't use data.x and .data.y
      x={data.cx}
      y={data.cy}
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={14}
    >
      {data?.payload?.flag}
    </text>
  );
};

export default ShapeAsFlagSvg;
