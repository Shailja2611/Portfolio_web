const DotGrid = ({ style }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(5, 10px)",
      gridTemplateRows: "repeat(5, 10px)",
      gap: "10px",
      width: "max-content",
      margin: "50px",
      zIndex: 2,
      position: "absolute",
      ...style,
    }}
  >
    {Array.from({ length: 25 }).map((_, i) => (
      <div
        key={i}
        style={{
          width: 5,
          height: 5,
          background: "#CA6180",
          borderRadius: "50%",
          opacity: 0.8,
        }}
      />
    ))}
  </div>
);

export default DotGrid;
