import { body, ValidationChain } from "express-validator";

export const loginUserCommandValidator: ValidationChain[] = [
	body("email").notEmpty().withMessage("Email is required").bail(),
	body("password").notEmpty().withMessage("Password is required").bail(),
];
