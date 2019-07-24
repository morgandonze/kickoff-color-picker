const express = require("express");
const bodyParser = require("body-parser");
const db = require("knex")(require("./knexfile"));

const PORT = 4000;

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => res.send(JSON.stringify({ hello: "world" })));

app.listen(PORT, () => {
  console.log(`Kudos Maps Server listening on port ${PORT}!`);
});
