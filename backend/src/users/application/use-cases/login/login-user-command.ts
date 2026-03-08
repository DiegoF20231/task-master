import { Command } from "@common/abstractions/messaging/cqrs";
import { Result } from "@common/primitives/result";
import { LoginUserResponse } from "./login-user-response";

export class LoginUserCommand extends Command<Result<LoginUserResponse>> {
	public constructor(
		public readonly email: string,
		public readonly password: string,
	) {
		super();
	}
}
