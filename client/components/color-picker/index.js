import ColorPickerInput from "./color-picker-input";
import "./styles.scss";

const ColorPicker = ({ color, onChange }) => {
  const onValueChange = key => val => {
    onChange({ ...color, [key]: val });
  };

  const { r, g, b } = color;

  const SWATCH_STYLE = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`
  };

  return (
    <div className="picker">
      <div className="swatch" style={SWATCH_STYLE} />
      <div className="inputs-wrapper">
        <form className="inputs">
          <ColorPickerInput
            label="r"
            value={color.r}
            onChange={onValueChange("r")}
          />
          <ColorPickerInput
            label="g"
            value={color.g}
            onChange={onValueChange("g")}
          />
          <ColorPickerInput
            label="b"
            value={color.b}
            onChange={onValueChange("b")}
          />
        </form>
      </div>
    </div>
  );
};

export default ColorPicker;
