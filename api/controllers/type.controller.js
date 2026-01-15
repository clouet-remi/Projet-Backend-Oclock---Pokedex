import { Type, Pokemon } from "../models/index.js";
import { StatusCodes } from "http-status-codes";

export async function getAll(_req, res) {

    const types = await Type.findAll();
    return res.status(StatusCodes.OK).json(types)
}


export async function getById(req, res) {
    const type = await Type.findByPk(req.params.id, {
        include: [{
            model: Pokemon,
            as: "pokemons",
            attributes: ["name"]
        }]
    });
    if (!type) {
        return res.status(StatusCodes.NOT_FOUND).json({ error: "Type not found" });
    }

    return res.json(type)
}