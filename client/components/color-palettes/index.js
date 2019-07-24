import { useState, useEffect } from "react";
import axios from "axios";

import ColorPalette from "../color-palette";
import { SERVER_URL } from "../../constants";
import "./styles.scss";

const ColorPalettes = () => {
  const [palettes, setPalettes] = useState([]);

  useEffect(() => {
    const fetchPalettes = async () => {
      const { status, data } = await axios.get(`${SERVER_URL}/palettes`);

      if (status === 200) {
        setPalettes(data);
      } else {
        throw new Error("Error connecting to server");
      }
    };

    fetchPalettes();
  }, [setPalettes, axios]);

  const createPalette = async ev => {
    ev.preventDefault();

    const res = await axios.post(`${SERVER_URL}/palettes/create`);
    if (res.status === 200) {
      setPalettes(oldPalettes => [...oldPalettes, res.data]);
    }
  };

  const onDelete = paletteId => {
    setPalettes(oldPalettes =>
      oldPalettes.filter(({ id }) => id !== paletteId)
    );
  };

  return (
    <div className="container">
      <form className="form" onSubmit={createPalette}>
        <button type="submit">Create Palette</button>
      </form>
      <div className="palettes">
        {palettes
          .sort(({ id: a }, { id: b }) => b - a)
          .map(palette => (
            <ColorPalette
              key={palette.id}
              palette={palette}
              onDelete={onDelete}
            />
          ))}
      </div>
    </div>
  );
};

export default ColorPalettes;
