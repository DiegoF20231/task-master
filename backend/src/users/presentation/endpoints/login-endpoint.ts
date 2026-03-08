import { LoginUserCommand } from "@users/application/use-cases/login/login-user-command";
import { LoginUserCommandHandler } from "@users/application/use-cases/login/login-user-command-handler";
import { Request, Response } from "express";
export class LoginUserEndpoint {
	public constructor(private readonly handler: LoginUserCommandHandler) {}
	public handle = async (req: Request, res: Response) => {
		const { email, password } = req.body;
		const command = new LoginUserCommand(email, password);
		const result = await this.handler.handle(command);
		if (!result.isSuccess) {
			return res.status(400).json({ error: result.error });
		}
		return res.status(200).json({ token: result.value });
	};
}
