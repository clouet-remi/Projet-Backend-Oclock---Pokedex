import express from "express";
import {
    getMyTeams,
    getTeamById,
    createOwnTeam,
    updateTeamById,
    appendPokemon,
    removePokemon,
    removeTeam
} from "../controllers/team.controllerV2.js";
import { validateId } from "../middlewares/common.middleware.js";
import { validateTeamUpdate } from "../middlewares/team.middleware.js";

const router = express.Router();

// Nouvelles routes pour gérer le bonus ou les équipes ne sont plus communes entre les visiteurs

/**
 * @swagger
 * /teamsv2/me:
 *   get:
 *     summary: Retrieve all teams of the authenticated user
 *     tags:
 *       - Team
 *     responses:
 *       200:
 *         description: List of teams owned by the user
 *         content:
 *           application/json:
 *             example:
 *               - name: My Fire Team
 *                 description: Team focused on fire pokemons
 */
router.get("/me", getMyTeams);

/**
 * @swagger
 * /teamsv2/get/{id}:
 *   get:
 *     summary: Retrieve a team by its id
 *     tags:
 *       - Team
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Team identifier
 *     responses:
 *       200:
 *         description: Team found
 *         content:
 *           application/json:
 *             example:
 *               id: 3
 *               name: Elite Team
 *               pokemons:
 *                 - name: Pikachu
 *                 - name: Mewtwo
 *       400:
 *         description: Invalid id
 *       404:
 *         description: Team not found
 */
router.get("/get/:id", validateId, getTeamById);


/**
 * @swagger
 * /teamsv2/new:
 *   post:
 *     summary: Create a new team for the authenticated user
 *     tags:
 *       - Team
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             name: Electric Squad
 *             description: Fast and powerful pokemons
 *     responses:
 *       201:
 *         description: Team successfully created
 *         content:
 *           application/json:
 *             example:
 *               id: 5
 *               name: Electric Squad
 *               description: Fast and powerful pokemons
 *       409:
 *         description: Team name already exists
 *       500:
 *         description: Internal server error
 */
router.post("/new", createOwnTeam);

/**
 * @swagger
 * /teamsv2/update/{id}:
 *   patch:
 *     summary: Update a team by its id
 *     tags:
 *       - Team
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Team identifier
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             name: Updated Team Name
 *             description: Updated description
 *     responses:
 *       200:
 *         description: Team successfully updated
 *       400:
 *         description: Invalid id or invalid data
 *       404:
 *         description: Team not found
 */
router.patch("/update/:id", validateId, validateTeamUpdate, updateTeamById);

// Id du pokemon à préciser en req.query avec pokemonId
/**
 * @swagger
 * /teamsv2/{id}/newPokemon:
 *   patch:
 *     summary: Add a pokemon to a team
 *     tags:
 *       - Team
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Team identifier
 *       - in: query
 *         name: pokemonId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Pokemon identifier to add
 *     responses:
 *       200:
 *         description: Pokemon successfully added to the team
 *       404:
 *         description: Team or Pokemon not found
 */
router.patch("/:id/newPokemon", appendPokemon);

/**
 * @swagger
 * /teamsv2/{id}/removePokemon:
 *   delete:
 *     summary: Remove a pokemon from a team
 *     tags:
 *       - Team
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Team identifier
 *       - in: query
 *         name: pokemonId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Pokemon identifier to remove
 *     responses:
 *       204:
 *         description: Pokemon successfully removed from the team
 *       404:
 *         description: Team or Pokemon not found
 */
router.delete("/:id/removePokemon", removePokemon);


/**
 * @swagger
 * /teamsv2/remove/{id}:
 *   delete:
 *     summary: Delete a team by its id
 *     tags:
 *       - Team
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Team identifier
 *     responses:
 *       204:
 *         description: Team successfully deleted
 *       400:
 *         description: Invalid id
 *       404:
 *         description: Team not found
 */
router.delete("/remove/:id", validateId, removeTeam);


export default router; 