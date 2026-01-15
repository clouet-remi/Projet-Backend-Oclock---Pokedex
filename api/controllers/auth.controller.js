import { User } from "../models/user.model.js";
import { Role } from "../models/role.model.js";
import { Team } from "../models/team.model.js";
import { Pokemon } from "../models/pokemon.model.js";
import { StatusCodes } from "http-status-codes";
import argon2 from 'argon2';
import jwt from "jsonwebtoken";

export async function register(req, res) {
    const { username, password } = req.body;

    try {
        const hashedPassword = await argon2.hash(password);
        const userRole = await Role.findOne({ where: { name: "user" } });
        const user = await User.create({
            username,
            password: hashedPassword,
            role_id: userRole.id,
        });
        res.status(StatusCodes.CREATED).json({ id: user.id, username: user.username });
    } catch (error) {
        if (error.name === "SequelizeUniqueConstraintError") {
            return res.status(StatusCodes.CONFLICT).json({ error: "Internal Server Error" });
        }
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Internal Server Error" });
    }
}

export async function login(req, res) {

    const { username, password } = req.body;

    try {
        const user = await User.findOne({ where: { username } });

        const checkedPassword = await argon2.verify(user.password, password);

        if (!user || !checkedPassword) {
            return res.status(StatusCodes.UNAUTHORIZED).json({ error: "Invalid username or password" });
        }

        const token = jwt.sign({ user_id: user.id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });

        res.status(StatusCodes.OK).json({
            token, user: {
                id: user.id,
                role: user.role,
                username: user.username,
                created_at: user.created_at,
                updated_at: user.updated_at
            }
        });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
}

export async function getMyTeam(req, res) {
    try {
        const user = await User.findByPk(req.params.id, {
            attributes: ["id", "username"],
            include: [{
                model: Team, as: "teams",
                attributes: ["name"],
                include: [
                    {
                        model: Pokemon, as: "pokemons",
                        attributes: ["name"]
                    }
                ]
            }]
        });

        if (!user) {
            return res
                .status(StatusCodes.NOT_FOUND)
                .json({ error: "User not found" });
        }

        res.status(StatusCodes.OK).json(user);
    } catch (error) {
        res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ error: "Internal Server Error" });
    }
}
