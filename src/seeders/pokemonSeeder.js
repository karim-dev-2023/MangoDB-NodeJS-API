const Pokemon = require("../models/Pokemon.js");

const pokemons = [
  { name: "Pikachu", type: "Electrik", level: 25, hp: 100 },
  { name: "Salamèche", type: "Feu", level: 18, hp: 90 },
  { name: "Carapuce", type: "Eau", level: 16, hp: 95 },
  { name: "Bulbizarre", type: "Plante", level: 20, hp: 110 }
];

async function seedPokemon() {
  const count = await Pokemon.countDocuments();

  // On évite de dupliquer les données à chaque lancement du serveur
  if (count === 0) {
    console.log("Seeding Pokémon...");
    await Pokemon.insertMany(pokemons);
    console.log("Pokémon ajoutés !");
  } else {
    console.log("Pokémon déjà existants");
  }
}

module.exports = seedPokemon;