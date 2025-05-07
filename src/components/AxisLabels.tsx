const AxisLabels: React.FC = () => {
  return (
    <>
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
          top: "-10px",
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
    </>
  );
};

export default AxisLabels;
