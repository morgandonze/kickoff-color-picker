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

  const redHex = color.slice(1,3)
  const greenHex = color.slice(3,5)
  const blueHex = color.slice(5,7)

  const channels = {
    red: redHex,
    green: greenHex,
    blue: blueHex,
  }

  const currentHex = () => {
    return `#${channels.red}${channels.green}${channels.blue}`
  }

  const colorChangeHandler = (event) => {
    const target = event.nativeEvent.target 
    const value = target.value
    const name = target.name
    
    const hex = parseInt(value).toString(16)
    channels[name] = hex
    onChangeColor(currentHex())
  };

  return (
    <div style={{ marginBottom: 10, display: "flex", flexDirection: "row" }}>
      <div>
        <div
          style={{
            height: 100,
            width: 100,
            backgroundColor: color,
          }}
        />
        {color}
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
