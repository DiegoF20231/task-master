import { Command } from "@common/abstractions/messaging/cqrs";
import { Result } from "@common/primitives/result";
import { RegisterUserResponse } from "./register-user-response";

export class RegisterUserCommand extends Command<Result<RegisterUserResponse>> {
	public constructor(
		public readonly username: string,
		public readonly email: string,
		public readonly password: string,
	) {
		super();
	}
}
