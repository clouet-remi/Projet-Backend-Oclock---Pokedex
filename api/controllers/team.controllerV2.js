import { Team } from "./../models/index.js";
import { Pokemon } from "./../models/index.js";
import { User } from "./../models/index.js";
import { StatusCodes } from 'http-status-codes';

export async function getMyTeams(req, res) {

    const userId = req.user.user_id;

    const teams = await Team.findAll({
        where: { user_id: userId },
        attributes: ["name", "description"]
    });
    return res.status(StatusCodes.OK).json(teams)
}

export async function getTeamById(req, res) {

    const userId = req.user.user_id;
    const teamId = req.params.id;

    const team = await Team.findOne({
        where: { user_id: userId, id: teamId },
        include: [{
            model: Pokemon,
            as: "pokemons",
            attributes: ["name"],
        }]
    });

    if (!team) {
        return res.status(StatusCodes.NOT_FOUND).json({ error: "Team not found" });
    }

    return res.json(team)
}

export async function createOwnTeam(req, res) {

    const id = req.user.user_id;
    const user = await User.findByPk(id);

    try {
        const team = await Team.create(req.body);
        await user.addTeam(team)
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

export async function updateTeamById(req, res) {

    const userId = req.user.user_id;
    const teamId = req.params.id;

    const [updatedCount, updatedTeam] = await Team.update(req.body, {
        where: { id: teamId, user_id: userId },
        returning: true
    });
    if (updatedCount === 0) {
        return res.status(StatusCodes.NOT_FOUND).json({ error: "Team not found" });
    }
    const updatedItem = updatedTeam[0];
    res.status(StatusCodes.OK).json(updatedItem)
}

export async function appendPokemon(req, res) {

    const userId = req.user.user_id;
    const teamId = req.params.id;
    const { pokemonId } = req.query;
    const pokemonToAdd = await Pokemon.findByPk(pokemonId);

    if (!pokemonToAdd) {
        res.status(StatusCodes.NOT_FOUND).json({ error: "Pokemon not found" })
    }

    const team = await Team.findOne({
        where: { user_id: userId, id: teamId },
        include: [{
            model: Pokemon,
            as: "pokemons",
            attributes: ["name"],
        }]
    });

    if (!team) {
        return res.status(StatusCodes.NOT_FOUND).json({ error: "Team not found" });
    }

    const addedPokemon = await team.addPokemon(pokemonToAdd)

    res.status(StatusCodes.OK).json({ addedPokemon, team })
}

export async function removePokemon(req, res) {

    const userId = req.user.user_id;
    const teamId = req.params.id;
    const { pokemonId } = req.query;
    const pokemonToDelete = await Pokemon.findByPk(pokemonId);

    if (!pokemonToDelete) {
        res.status(StatusCodes.NOT_FOUND).json({ error: "Pokemon not found" })
    }

    const team = await Team.findOne({
        where: { user_id: userId, id: teamId },
        include: [{
            model: Pokemon,
            as: "pokemons",
            attributes: ["name"],
        }]
    });

    if (!team) {
        res.status(StatusCodes.NOT_FOUND).json({ error: "Team not found" })
    }

    team.removePokemon(pokemonToDelete)

    res.status(StatusCodes.NO_CONTENT).end();
}

export async function removeTeam(req, res) {

    const userId = req.user.user_id;
    const teamId = req.params.id;

    const deletedCount = await Team.destroy({ where: { user_id: userId, id: teamId } });
    if (deletedCount === 0) {
        return res.status(StatusCodes.NOT_FOUND).json({ error: "Team not found" });
    }
    res.status(StatusCodes.NO_CONTENT).end();
}