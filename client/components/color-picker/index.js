import { useState, useEffect } from "react";

const ChannelSlider = (props) => {
  const { color, onChange, value } = props;

  return (
    <div>
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

  const redHex = red.toString(16).padStart(2, '0')
  const greenHex = green.toString(16).padStart(2, '0')
  const blueHex = blue.toString(16).padStart(2, '0')
  const hexColor = `#${redHex}${greenHex}${blueHex}`
  
  console.log(hexColor)

  return (
    <div>
      <div style={{
          height: 100,
          width: 100,
          backgroundColor: hexColor
      }} />
      <ChannelSlider color="Red" onChange={colorChangeHandler(setRed)} value={red} />
      <ChannelSlider color="Green" onChange={colorChangeHandler(setGreen)} value={green} />
      <ChannelSlider color="Blue" onChange={colorChangeHandler(setBlue)} value={blue} />
    </div>
  );
};

export default ColorPicker;
