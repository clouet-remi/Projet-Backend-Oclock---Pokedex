import express from "express";
import {
    getAll,
    getById,
    create,
    update,
    addPokemon,
    deletePokemon,
    deleteById
} from "../controllers/team.controller.js";
import { validateId } from "../middlewares/common.middleware.js";
import { validateTeamCreation, validateTeamUpdate } from "../middlewares/team.middleware.js";

const router = express.Router();

// Anciennes routes avant le bonus de l'autorisation
router.get("/getAll", getAll);
router.get("/search/:id", validateId, getById);
router.post("/", validateTeamCreation, create);
router.patch("/:id", validateId, validateTeamUpdate, update)
// Id du pokemon à préciser en req.query avec pokemonId
router.patch("/:id/addPokemon", addPokemon)
router.delete("/:id/deletePokemon", deletePokemon)
router.delete("/:id", validateId, deleteById)


export default router; 