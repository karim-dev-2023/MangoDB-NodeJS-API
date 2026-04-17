const mongoose = require('mongoose');
const seedPokemon = require("../seeders/pokemonSeeder.js"); 

mongoose.connect('mongodb+srv://mn_db_user:1844@cluster0.bhix0hm.mongodb.net/pokemons')
.then(async () => {
  console.log("✅ Connecté à MongoDB");

  await seedPokemon();

})
.catch(err => console.error("❌ Erreur MongoDB :", err));

module.exports = mongoose;