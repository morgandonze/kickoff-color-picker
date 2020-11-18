const Palette = (props) => {
  const { color, onPress, isActive } = props;
  const swatchWidth = 35;
  const swatchStyle = {
    height: swatchWidth,
    width: swatchWidth,
    marginRight: 5,
    backgroundColor: color || "#bdbdbd",
    border: isActive ? "2px solid black" : "1px solid #cbcbcb",
  };

  return (
    <div
      style={swatchStyle}
      onClick={onPress}
    ></div>
  );
};

export default Palette;
