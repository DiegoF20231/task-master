import usersRouter from "@users/presentation/router";
import express, { Express, Request, Response } from "express";
import morgan from "morgan";

export function createApp(): Express {
	const app = express();

	app.use(express.json());
	app.use(morgan("dev"));
	app.use("api/auth", usersRouter);
	app.get("/health", (_req: Request, res: Response) => {
		res.json({ status: "ok", timestamp: new Date().toISOString() });
	});

	return app;
}
