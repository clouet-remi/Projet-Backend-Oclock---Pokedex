import express from "express"; 
import { register, login, getMyTeam } from "./../controllers/auth.controller.js";
import { validateAuthFields } from "../middlewares/auth.middleware.js";
import { validateId } from "./../middlewares/common.middleware.js";

const router = express.Router(); 

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             username: johndoe
 *             password: mySecurePassword
 *     responses:
 *       201:
 *         description: User successfully registered
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               username: johndoe
 *       409:
 *         description: Username already exists
 *       500:
 *         description: Internal server error
 */
router.post("/register", validateAuthFields, register);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Authenticate a user and return a JWT token
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             username: johndoe
 *             password: mySecurePassword
 *     responses:
 *       200:
 *         description: User authenticated
 *         content:
 *           application/json:
 *             example:
 *               token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *               user:
 *                 id: 1
 *                 username: johndoe
 *                 role: user
 *                 created_at: 2024-01-01T10:00:00.000Z
 *                 updated_at: 2024-01-01T10:00:00.000Z
 *       401:
 *         description: Invalid username or password
 *       500:
 *         description: Internal server error
 */
router.post("/login", validateAuthFields, login);

/**
 * @swagger
 * /auth/{id}/myTeams:
 *   get:
 *     summary: Retrieve all teams of a user with their pokemons
 *     tags:
 *       - Auth
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: User identifier
 *     responses:
 *       200:
 *         description: User teams retrieved
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               username: johndoe
 *               teams:
 *                 - name: Team Rocket
 *                   pokemons:
 *                     - name: Pikachu
 *                     - name: Mewtwo
 *       400:
 *         description: Invalid id
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.get("/:id/myTeams", validateId, getMyTeam)

export default router; 