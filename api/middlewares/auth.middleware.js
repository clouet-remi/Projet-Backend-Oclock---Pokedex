import Joi from "joi";
import { checkBody } from "../utils/common.util.js";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";

export function validateAuthFields(req, res, next) {
    const authSchema = Joi.object({
        username: Joi.string().min(1).required(),
        password: Joi.string().min(8).regex(/[0-9]/).regex(/[a-z]/).regex(/[A-Z]/).required(),
    });
    checkBody(authSchema, req.body, res, next)
}

export function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ error: "Authorization token missing or invalid" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; 
    next();
  } catch (error) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ error: "Invalid or expired token" });
  }
}
