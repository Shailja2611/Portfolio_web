const PunchDots = ({ style }) => (
  <div
    style={{
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      gap: 50,
      alignItems: "center",
      ...style,
    }}
  >
    {Array.from({ length: 8 }).map((_, i) => (
      <div
        key={i}
        style={{
          width: 15,
          height: 15,
          borderRadius: "50%",
          border: "2px solid rgb(21,20,20)",
          background: "rgb(116,114,114)",
          boxShadow: "inset 1px 1px 3px #bdb8b8",
        }}
      />
    ))}
  </div>
);

export default PunchDots;
