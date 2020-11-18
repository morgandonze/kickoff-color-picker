import { useState } from "react";
import ColorPicker from "../components/color-picker";
import Palette from "../components/palette";
import "./styles.scss";

const Home = () => {
  const initColors = ["#000000", "#ffffff", "#ffffff"];
  const [currentSwatch, setSwatch] = useState(0);
  const [colors, setColors] = useState(initColors);

  const onFocusSwatch = (swatchNumber) => () => {
    setSwatch(swatchNumber);
  };

  const onChangeColor = (color) => {
    const colorsDup = colors.map(x => x)
    colorsDup.splice(currentSwatch, 1, color)
    setColors(colorsDup)
  };

  return (
    <div style={{ padding: 20 }}>
      <ColorPicker onChangeColor={onChangeColor} />
      <div style={{ display: "flex", flexDirection: "row" }}>
        {colors.map((color, index) => {
          return (
            <Palette
              color={color}
              isActive={currentSwatch == index}
              onPress={onFocusSwatch(index)}
              key={`color-${index}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
