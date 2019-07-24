const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const knex = require("knex")(require("./knexfile"));

const PORT = 4000;

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3000" }));

knex.on("query", ({ sql }) => console.log(sql));

const buildRandomColorValue = () => Math.floor(Math.random() * 256);

const buildRandomColor = () => ({
  r: buildRandomColorValue(),
  g: buildRandomColorValue(),
  b: buildRandomColorValue()
});

app.get("/greeting", async (_, res) => {
  const [greeting] = await knex("greetings").limit(1);

  res.send(JSON.stringify(greeting));
});

app.get("/palettes", async (_, res) => {
  const palettes = await knex("palettes");
  const colors = await knex("colors");

  const colorsByPaletteId = {};

  colors.forEach(color => {
    colorsByPaletteId[color.palette_id] =
      colorsByPaletteId[color.palette_id] || [];
    colorsByPaletteId[color.palette_id].push(color);
  });

  palettes.forEach(palette => {
    palette.colors = colorsByPaletteId[palette.id];
  });

  res.send(JSON.stringify(palettes));
});

app.post("/palettes/create", async (_, res) => {
  const [id] = await knex("palettes")
    .insert({})
    .returning("*");
  const [palette] = await knex("palettes").where({ id });

  palette.colors = [];

  for (let idx = 0; idx < 5; idx++) {
    const [colorId] = await knex("colors")
      .insert({
        palette_id: palette.id,
        ...buildRandomColor()
      })
      .returning("*");

    const [color] = await knex("colors").where({ id: colorId });
    palette.colors.push(color);
  }

  res.send(JSON.stringify(palette));
});

app.put("/colors/:id/update", async (req, res) => {
  const { r, g, b } = req.body;
  await knex("colors")
    .where({ id: req.params.id })
    .update({ r, g, b });

  res.send(JSON.stringify({}));
});

app.listen(PORT, () => {
  console.log(`Kudos Maps Server listening on port ${PORT}!`);
});
