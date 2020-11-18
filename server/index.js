const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const knex = require("knex")(require("./knexfile"));

const PORT = 4000;

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3000" }));

knex.on("query", ({ sql }) => console.log(sql));

app.get("/greeting", async (_, res) => {
  const [greeting] = await knex("greetings").limit(1);

  res.send(JSON.stringify(greeting));
});

app.get("/palette", async (_, res) => {
  const [palette] = await knex("palettes").limit(1);
  res.send(JSON.stringify(palette));
});

app.post("/palette", async (req, res) => {
  try {
    const palette = req.body.palette
    await knex("palettes").insert([{ palette: palette }]);
    res.send(JSON.stringify(palette));
  } catch (e) {
    console.log(e);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
