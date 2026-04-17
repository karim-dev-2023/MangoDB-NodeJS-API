require("dotenv").config();
require("./src/config/db");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const findAllPokemon = require("./src/routes/pokemon-route.js");
const User = require("./src/routes/user-route.js");
const createFirstUser = require("./src/db/create-first-user.js");
const authMdlr = require("./src/middlewares/auth.js");

createFirstUser.createFirstUser();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/login", User.userLogin);

app.use(authMdlr);

// Définition des routes Pokemon
app.get("/api/pokemons", findAllPokemon.findAllPokemon);
app.get("/api/pokemons/:id", findAllPokemon.findPokemonByPk);
app.post("/api/pokemons", findAllPokemon.createPokemon);
app.put("/api/pokemons/:id", findAllPokemon.updatePokemon);
app.delete("/api/pokemons/:id", findAllPokemon.deletePokemon);

app.use((req, res, next) => res.json({ message: "Not found" }));

app.listen(8000, () => {
  console.log("Serveur lancé sur http://localhost:8000");
});
