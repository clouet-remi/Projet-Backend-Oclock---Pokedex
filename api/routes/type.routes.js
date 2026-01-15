import express from "express";
import { getAll, getById } from "../controllers/type.controller.js";
import { validateId } from "../middlewares/common.middleware.js";

const router = express.Router();

/**
 * @swagger
 * /types/getAll:
 *   get:
 *     summary: Retrieve the list of all pokemon types
 *     tags:
 *       - Type
 *     responses:
 *       200:
 *         description: List of all types found
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 name: Fire
 *               - id: 2
 *                 name: Water
 */
router.get("/getAll", getAll);

/**
 * @swagger
 * /types/{id}:
 *   get:
 *     summary: Retrieve a type by its id with associated pokemons
 *     tags:
 *       - Type
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Type identifier
 *     responses:
 *       200:
 *         description: Type found
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               name: Fire
 *               pokemons:
 *                 - name: Charmander
 *                 - name: Vulpix
 *       400:
 *         description: Invalid id
 *       404:
 *         description: Type not found
 */
router.get("/:id", validateId, getById);

export default router; 