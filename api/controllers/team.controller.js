import { Team } from "./../models/index.js";
import { Pokemon } from "./../models/index.js";
import { User } from "./../models/index.js";
import { StatusCodes } from 'http-status-codes';

export async function getAll(_req, res) {

    const teams = await Team.findAll({ attributes: ["name", "description"] });
    return res.status(StatusCodes.OK).json(teams)
}

export async function getById(req, res) {
    const team = await Team.findByPk(req.params.id, {
        include: [{
            model: Pokemon,
            as: "pokemons",
            attributes: ["name"]
        }]
    });
    if (!team) {
        return res.status(StatusCodes.NOT_FOUND).json({ error: "Team not found" });
    }

    return res.json(team)
}

export async function create(req, res) {

    try {
        const team = await Team.create(req.body);
        return res.status(StatusCodes.CREATED).json(team)
    }

    catch (error) {
        if (error.name === "SequelizeUniqueConstraintError") {
            return res.status(StatusCodes.CONFLICT).json({
                error: error.errors[0].message || "Duplicate entry"
            });
        }
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Internal Server Error" });
    }
}

export async function update(req, res) {
    const [updatedCount, updatedTeam] = await Team.update(req.body, {
        where: { id: req.params.id },
        returning: true
    });
    if (updatedCount === 0) {
        return res.status(StatusCodes.NOT_FOUND).json({ error: "Team not found" });
    }
    const updatedItem = updatedTeam[0];
    res.status(StatusCodes.OK).json(updatedItem)
}

export async function addPokemon(req, res) {

    const { pokemonId } = req.query;
    const pokemonToAdd = await Pokemon.findByPk(pokemonId);

    if (!pokemonToAdd) {
        res.status(StatusCodes.NOT_FOUND).json({ error: "Pokemon not found" })
    }

    const team = await Team.findByPk(req.params.id, {
        where: { id: req.params.id },
        include: [{
            model: Pokemon,
            as: "pokemons"
        }]
    });

    const addedPokemon = await team.addPokemon(pokemonToAdd)

    res.status(StatusCodes.OK).json({ addedPokemon, team })
}

export async function deletePokemon(req, res) {

    const { pokemonId } = req.query;
    const pokemonToDelete = await Pokemon.findByPk(pokemonId);

    if (!pokemonToDelete) {
        res.status(StatusCodes.NOT_FOUND).json({ error: "Pokemon not found" })
    }

    const team = await Team.findByPk(req.params.id, {
        where: { id: req.params.id },
        include: [{
            model: Pokemon,
            as: "pokemons"
        }]
    });

    if (!team) {
        res.status(StatusCodes.NOT_FOUND).json({ error: "Team not found" })
    }

    team.removePokemon(pokemonToDelete)

    res.status(StatusCodes.NO_CONTENT).end();

}

export async function deleteById(req, res) {
    const deletedCount = await Team.destroy({ where: { id: req.params.id } });
    if (deletedCount === 0) {
        return res.status(StatusCodes.NOT_FOUND).json({ error: "Team not found" });
    }
    res.status(StatusCodes.NO_CONTENT).end();
}
