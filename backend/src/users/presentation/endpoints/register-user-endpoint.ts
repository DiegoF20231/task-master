import { RegisterUserCommand } from "@users/application/use-cases/register-user/register-user-command";
import { RegisterUserCommandHandler } from "@users/application/use-cases/register-user/register-user-command-handler";
import { Request, Response } from "express";
export class RegisterUserEndpoint {
	public constructor(private readonly handler: RegisterUserCommandHandler) {}

	public handle = async (req: Request, res: Response) => {
		const { username, email, password } = req.body;

		const command = new RegisterUserCommand(email, password, username);
		const result = await this.handler.handle(command);
		if (!result.isSuccess) {
			return res.status(400).json({ error: result.error });
		}
		return res.status(201).json({ message: "User registered successfully" });
	};
}
