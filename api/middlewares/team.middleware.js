import Joi from "joi";
import { checkBody } from "../utils/common.util.js";

export function validateTeamCreation(req, res, next) {
    const createTeamschema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required()
    });
    checkBody(createTeamschema, req.body, res, next);
}

export function validateTeamUpdate(req, res, next) {
    const createTeamschema = Joi.object({
        name: Joi.string(),
        description: Joi.string()
    });
    checkBody(createTeamschema, req.body, res, next);
}

