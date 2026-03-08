import { ProblemDetails } from "@common/primitives/problem-detailts";
import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export const validateRequestMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		const problemDetails = ProblemDetails.create(
			"https://example.com/validation-error",
			"Validation Error",
			422,
			"One or more validation errors occurred.",
			req.originalUrl,
			errors.array().map((error) => {
				return {
					field: error.type === "field" ? error.path : error.type,
					message: error.msg,
				};
			}),
		);

		return res.status(422).json(problemDetails);
	}

	next();
};
