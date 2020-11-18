import { useState, useEffect } from "react";
import ColorPicker from "../components/color-picker";
import Palette from "../components/palette";
import { SERVER_URL } from "../constants";
import axios from "axios";
import "./styles.scss";

const Home = () => {
  const initColors = ["#ba189d", "#6effff", "#ffff72"];
  const [currentSwatch, setSwatch] = useState(0);
  const [colors, setColors] = useState(initColors);

  const onFocusSwatch = (swatchNumber) => () => {
    setSwatch(swatchNumber);
  };

  const onChangeColor = async (color) => {
    const colorsDup = colors.slice();
    colorsDup.splice(currentSwatch, 1, color);
    setColors(colorsDup);
  };

  const saveColors = async () => {
    const url = `${SERVER_URL}/palette`;
    console.log(url);

    // await axios.get("/palette")
    await axios.post(url, {
      palette: colors.join(","),
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <ColorPicker
        onChangeColor={onChangeColor}
        color={colors[currentSwatch]}
      />
      <div style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}>
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

      <div>
        <button onClick={saveColors}>Save Palette</button>
      </div>
    </div>
  );
};

export default Home;
