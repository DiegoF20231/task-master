import usersRouter from "@users/presentation/user-router";
import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import cors from "cors";
import { globalErrorHandler } from "./middleware/global-error.middleware";

export function createApp(): Express {
	const app = express();

	app.use(helmet());
	app.use(cors());
	app.use(express.json());
	app.use(cookieParser());
	app.use(morgan("dev"));

	app.get("/health", (_req: Request, res: Response) => {
		res.json({ status: "ok", timestamp: new Date().toISOString() });
	});
	app.use("/api/auth", usersRouter);

	app.use(globalErrorHandler);
	return app;
}
