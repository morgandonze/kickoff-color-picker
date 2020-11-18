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

const ColorPicker = (props) => {
  const { onChangeColor, color } = props;

  if (!color) return null;

  const redHex = color.slice(0,2);
  const greenHex = color.slice(2,4);
  const blueHex = color.slice(4,6);

  const channels = {
    red: redHex,
    green: greenHex,
    blue: blueHex,
  };

  const colorChangeHandler = (event) => {
    const { value, name } = event.nativeEvent.target;
    const hex = parseInt(value).toString(16).padStart(2, "0");
    channels[name] = hex;

    onChangeColor(`${channels.red}${channels.green}${channels.blue}`);
  };

  return (
    <div style={{ marginBottom: 10, display: "flex", flexDirection: "row" }}>
      <div>
        <div
          style={{
            height: 100,
            width: 100,
            backgroundColor: `#${color}`,
            border: "2px solid #cbcbcb",
          }}
        />
        {`#${color}`}
      </div>
      <div>
        <ChannelSlider
          color="red"
          onChange={colorChangeHandler}
          value={parseInt(channels.red, 16)}
        />
        <ChannelSlider
          color="green"
          onChange={colorChangeHandler}
          value={parseInt(channels.green, 16)}
        />
        <ChannelSlider
          color="blue"
          onChange={colorChangeHandler}
          value={parseInt(channels.blue, 16)}
        />
      </div>
    </div>
  );
};

export default ColorPicker;
