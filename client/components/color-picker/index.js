const ChannelSlider = (props) => {
  const { color, onChange } = props;
  console.log(color)

  return (
    <div>
      <label>
        {color}:
        <input name={color} type="range" onChange={onChange} />
      </label>

    </div>
  );
};

const ColorPicker = () => {
  const colorChangeHandler = (color) => (event) => {
    console.log(color, event.nativeEvent)
  }

  return (
    <div>
      <div></div>
      <ChannelSlider color="Red" onChange={colorChangeHandler("red")}/>
      <ChannelSlider color="Green" onChange={colorChangeHandler("green")}/>
      <ChannelSlider color="Blue" onChange={colorChangeHandler("blue")}/>
    </div>
  );
};

export default ColorPicker;
