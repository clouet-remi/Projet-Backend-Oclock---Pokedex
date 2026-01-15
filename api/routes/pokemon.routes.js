import express from "express";
import { getAll, getById, addVote, deleteOneVote, getByName, compareTwoPokemons } from "../controllers/pokemon.controller.js";
import { validateId } from "../middlewares/common.middleware.js";

const router = express.Router();

/**
 * @swagger
 * /pokemons/getAll:
 *   get:
 *     summary: Retrieve the entire list of pokemons
 *     tags:
 *       - Pokemon
 *     responses:
 *       200:
 *         description: List of all Pokemons found
 *         content:
 *           application/json:
 *             example:
 *               - id: 25
 *                 name: Pikachu
 *               - id: 150
 *                 name: Mewto
 */
router.get("/getAll", getAll);

/**
 * @swagger
 * /pokemons/{id}:
 *   get:
 *     summary: Retrieve a Pokemon by its id
 *     tags:
 *       - Pokemon
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Pokemon identifier
 *     responses:
 *       200:
 *         description: Pokemon found
 *         content:
 *           application/json:
 *             example:
 *               id: 150
 *               name: Mewtwo
 *       400:
 *         description: Invalid id
 *       404:
 *         description: Pokemon not found
 */
router.get("/:id", validateId, getById);

/**
 * @swagger
 * /pokemons/addVote/{id}:
 *   post:
 *     summary: Add a vote for a Pokemon by its id
 *     tags:
 *       - Pokemon
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Pokemon identifier
 *     responses:
 *       201:
 *         description: Vote successfully created
 *         content:
 *           application/json:
 *             example:
 *               id: 42
 *               user_id: 3
 *               pokemon_id: 150
 *       400:
 *         description: Invalid id
 *       404:
 *         description: Pokemon not found
 */
router.post("/addVote/:id", validateId, addVote);

/**
 * @swagger
 * /pokemons/deleteVote/{id}:
 *   delete:
 *     summary: Delete the last vote of the authenticated user for a Pokemon
 *     tags:
 *       - Pokemon
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Pokemon identifier
 *     responses:
 *       204:
 *         description: Vote successfully deleted
 *       400:
 *         description: Invalid id
 *       404:
 *         description: Pokemon or vote not found
 */
router.delete("/deleteVote/:id", validateId, deleteOneVote);

/**
 * @swagger
 * /pokemons/getByName:
 *   post:
 *     summary: Retrieve a pokemon by its name
 *     tags:
 *       - Pokemon
 *     parameters:
 *       - in: query
 *         name: pokemonName
 *         required: true
 *         schema:
 *           type: string
 *         description: Name of the pokemon to search
 *     responses:
 *       200:
 *         description: Pokemon found
 *         content:
 *           application/json:
 *             example:
 *               id: 25
 *               name: Pikachu
 *       404:
 *         description: Pokemon not found
 */
router.post("/getByName", getByName);

/**
 * @swagger
 * /pokemons/compare:
 *   post:
 *     summary: Compare two pokemons by their names
 *     tags:
 *       - Pokemon
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             pokemonOne: Pikachu
 *             pokemonTwo: Mewtwo
 *     responses:
 *       200:
 *         description: Both pokemons found
 *         content:
 *           application/json:
 *             example:
 *               firstPokemon:
 *                 id: 25
 *                 name: Pikachu
 *               secondPokemon:
 *                 id: 150
 *                 name: Mewtwo
 *       404:
 *         description: One or both pokemons not found
 */
router.post("/compare", compareTwoPokemons);

export default router; 