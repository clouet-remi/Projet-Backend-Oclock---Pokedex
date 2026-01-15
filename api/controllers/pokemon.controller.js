import { Pokemon, Type, Vote } from "../models/index.js";
import { StatusCodes } from "http-status-codes";

export async function getAll(_req, res) {

    const pokemons = await Pokemon.findAll({ attributes: ["name"] });
    return res.status(StatusCodes.OK).json(pokemons)
}

export async function getById(req, res) {
    const pokemon = await Pokemon.findByPk(req.params.id, {
        include: [{
            model: Type,
            as: "types",
            attributes: ["name"]
        }]
    });
    if (!pokemon) {
        return res.status(StatusCodes.NOT_FOUND).json({ error: "Pokemon not found" });
    }

    return res.json(pokemon)
}

export async function addVote(req, res) {
    const userId = req.user.user_id;
    const pokemonId = req.params.id;
    const reqToSend = { pokemon_id: pokemonId, user_id: userId }

    const pokemon = await Pokemon.findByPk(pokemonId)

    if (!pokemon) {
        return res.status(StatusCodes.NOT_FOUND).json({ error: "Pokemon not found" });
    }

    const vote = await Vote.create(reqToSend);
    return res.status(StatusCodes.CREATED).json(vote)
}

export async function deleteOneVote(req, res) {
    const userId = req.user.user_id;
    const pokemonId = req.params.id;

    const pokemon = await Pokemon.findByPk(pokemonId)

    if (!pokemon) {
        return res.status(StatusCodes.NOT_FOUND).json({ error: "Pokemon not found" });
    }

    const lastVote = await Vote.findOne({
        order: [["id", "DESC"]],
        where: { user_id: userId, pokemon_id: pokemonId }
    })

    if (!lastVote) {
        return res.status(StatusCodes.NOT_FOUND).json({ error: "Vote not found" });
    }

    const deletedCount = await lastVote.destroy();
    if (deletedCount === 0) {
        return res.status(StatusCodes.NOT_FOUND).json({ error: "Team not found" });
    }
    res.status(StatusCodes.NO_CONTENT).end();
}

export async function getByName(req, res) {

    let pokemonName = req.query.pokemonName;
    pokemonName = pokemonName.slice(0, 1).toUpperCase() + pokemonName.slice(1).toLowerCase();

    const pokemon = await Pokemon.findOne({
        where: { name: pokemonName }
    });
    if (!pokemon) {
        return res.status(StatusCodes.NOT_FOUND).json({ error: "Pokemon not found" });
    }

    return res.json(pokemon)
}

export async function compareTwoPokemons(req, res) {

    const { pokemonOne, pokemonTwo } = req.body;

    const firstPokemon = await Pokemon.findOne({
        where: { name: pokemonOne }
    });

    const secondPokemon = await Pokemon.findOne({
        where: { name: pokemonTwo }
    });

    if (!(firstPokemon && secondPokemon)) {
        return res.status(StatusCodes.NOT_FOUND).json({ error: "Pokemons not found" });
    }

    const pokemons = { firstPokemon, secondPokemon }

    res.status(StatusCodes.OK).json(pokemons)

}