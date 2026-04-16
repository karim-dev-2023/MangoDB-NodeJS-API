const PokemonModel = require("../models/Pokemon");

const findAllPokemon = async (req, res) => {
  try {
    const pokemons = await PokemonModel.find();
    console.log(pokemons);
    res.json(pokemons);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};

const findPokemonByPk = async (req, res) => {
  try {
    const pokemon = await PokemonModel.findById(req.params.id);
    res.json(pokemon);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};

const createPokemon = async (req, res) => {
  try { 
    const pokemon = await PokemonModel.create(req.body); 
    res.json(pokemon);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};

const updatePokemon = async (req, res) => {
    try {
        const pokemon = await PokemonModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        console.log(req.params.id);
        res.json(pokemon);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
};
    
const deletePokemon = async (req, res) => {
    try {
        const pokemon = await PokemonModel.findByIdAndDelete(req.params.id);
        res.json(pokemon);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
};

module.exports = {
  findAllPokemon,
  findPokemonByPk,
  createPokemon,
  updatePokemon,
  deletePokemon
};
