import { useState } from "react";
import axios from "axios";

import { SERVER_URL } from "../../constants";
import ColorPicker from "../color-picker";
import "./styles.scss";

const ColorPalette = ({ palette: initialPalette, onDelete }) => {
  const [palette, setPalette] = useState(initialPalette);

  const setColor = idx => color => {
    setPalette(oldPalette => {
      oldPalette.colors[idx] = color;
      return { ...oldPalette };
    });

    axios.put(`${SERVER_URL}/colors/${palette.colors[idx].id}/update`, {
      ...color
    });
  };

  const deletePalette = () => {
    onDelete(palette.id);

    axios.delete(`${SERVER_URL}/palettes/${palette.id}/destroy`);
  };

  return (
    <div className="palette">
      <form onSubmit={deletePalette}>
        <button type="submit">Delete</button>
      </form>
      {palette.colors.map((color, idx) => (
        <ColorPicker key={idx} color={color} onChange={setColor(idx)} />
      ))}
    </div>
  );
};

export default ColorPalette;
