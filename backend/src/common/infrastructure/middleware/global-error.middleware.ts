import { ProblemDetails } from "@common/primitives/problem-detailts";
import { Request, Response, NextFunction } from "express";

export const globalErrorHandler = (
	err: any,
	req: Request,
	res: Response,
	_next: NextFunction,
) => {
	console.error(`[Unhandled Error] en ${req.method} ${req.originalUrl}:`, err);

	const statusCode = err.status || err.statusCode || 500;

	res.setHeader("Content-Type", "application/problem+json");

	const problemDetails = ProblemDetails.create(
		statusCode === 500
			? "https://tu-api.com/errors/internal-server-error"
			: `https://tu-api.com/errors/error-${statusCode}`,
		statusCode === 500 ? "Internal Server Error" : err.name || "Error",
		statusCode,
		statusCode === 500
			? "Ha ocurrido un error inesperado en el servidor."
			: err.message,
		req.originalUrl,
		[],
	);

	return res.status(statusCode).json(problemDetails);
};
