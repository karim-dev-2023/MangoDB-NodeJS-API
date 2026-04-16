const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mn_db_user:1844@cluster0.bhix0hm.mongodb.net/pokemons')
.then(() => console.log("✅ Connecté à MongoDB"))
.catch(err => console.error("❌ Erreur MongoDB :", err));

module.exports = mongoose;