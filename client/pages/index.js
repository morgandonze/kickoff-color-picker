import { useState, useEffect } from "react";
import ColorPicker from "../components/color-picker";
import Palette from "../components/palette";
import { SERVER_URL } from "../constants";
import axios from "axios";
import "./styles.scss";

const Home = () => {
  const [colors, setColors] = useState(null);
  const [currentSwatch, setSwatch] = useState(0);

  useEffect(() => {
    const fetchPalette = async () => {
      setColors(initColors)

      const { status, data } = await axios.get(`${SERVER_URL}/palette`);

      if (status === 200) {
        const { palette } = data;
        const _colors = palette.split(",");
        setColors(_colors);
      }
    };

    fetchPalette();
  }, [setColors, axios]);

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

    await axios.put(url, {
      id: 1,
      palette: colors.join(","),
    });
  };

  if (!colors) return null;

  return (
    <div style={{ padding: 20 }}>
      <ColorPicker
        onChangeColor={onChangeColor}
        color={colors[currentSwatch]}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: 10,
        }}
      >
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
