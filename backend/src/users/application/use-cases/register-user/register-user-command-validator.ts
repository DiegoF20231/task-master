import { body, type ValidationChain } from "express-validator";

export const registerUserCommandValidator: ValidationChain[] = [
	body("username").notEmpty().withMessage("Username is required").bail(),

	body("email")
		.notEmpty()
		.withMessage("Email is required")
		.bail()
		.isEmail()
		.withMessage("Invalid email format")
		.bail(),

	body("password")
		.notEmpty()
		.withMessage("Password is required")
		.bail()
		.isLength({ min: 6 })
		.withMessage("Password must be at least 6 characters long"),
];
