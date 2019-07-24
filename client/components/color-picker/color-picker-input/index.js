import { useState } from "react";

import "./styles.scss";

const ColorPickerInput = ({ label, value, onChange }) => {
  const [inputValue, setInputValue] = useState(value);

  return (
    <div className="input-wrapper">
      <label className="input-label">{label}: </label>
      <div className="input">
        <input
          type="number"
          min="0"
          max="255"
          value={inputValue}
          onChange={ev => setInputValue(ev.target.value)}
          onBlur={() => onChange(inputValue)}
        />
      </div>
    </div>
  );
};

export default ColorPickerInput;
