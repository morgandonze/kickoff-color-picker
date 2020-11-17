import { useState, useEffect } from "react";

const ChannelSlider = (props) => {
  const { color, onChange, value } = props;

  return (
    <div style={{ width: 200 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <label>
          {color}:
          <input
            name={color}
            type="range"
            onChange={onChange}
            min={0}
            max={255}
            value={value}
          />
        </label>
      </div>
    </div>
  );
};

const ColorPicker = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const colorChangeHandler = (setter) => (event) => {
    const value = event.nativeEvent.target.value;
    setter(parseInt(value));
  };

  const redHex = red.toString(16).padStart(2, "0");
  const greenHex = green.toString(16).padStart(2, "0");
  const blueHex = blue.toString(16).padStart(2, "0");
  const hexColor = `#${redHex}${greenHex}${blueHex}`;

  return (
    <div style={{ marginBottom: 10, display: "flex", flexDirection: "row" }}>
      <div>
        <div
          style={{
            height: 100,
            width: 100,
            backgroundColor: hexColor,
          }}
        />
        {hexColor}
      </div>
      <div>
        <ChannelSlider
          color="Red"
          onChange={colorChangeHandler(setRed)}
          value={red}
        />
        <ChannelSlider
          color="Green"
          onChange={colorChangeHandler(setGreen)}
          value={green}
        />
        <ChannelSlider
          color="Blue"
          onChange={colorChangeHandler(setBlue)}
          value={blue}
        />
      </div>
    </div>
  );
};

export default ColorPicker;
