import { CommandHandler } from "@common/abstractions/messaging/cqrs";
import { Result } from "@common/primitives/result";
import { PasswordHasher } from "@users/application/abstractions/authentication/password-hasher.interface";
import { TokenGenerator } from "@users/application/abstractions/authentication/token-generator.interface";
import { UserErrors } from "@users/domain/user-errors";
import { UserRepository } from "@users/domain/user-repository.interface";
import { LoginUserCommand } from "./login-user-command";
import { LoginUserResponse } from "./login-user-response";

export class LoginUserCommandHandler
	implements CommandHandler<LoginUserCommand, Result<LoginUserResponse>>
{
	public constructor(
		private readonly userRepository: UserRepository,
		private readonly passwordHasher: PasswordHasher,
		private readonly tokenGenerator: TokenGenerator,
	) {}

	public async handle(
		command: LoginUserCommand,
	): Promise<Result<LoginUserResponse>> {
		const user = await this.userRepository.findByEmail(command.email);

		if (!user) {
			return Result.fail(UserErrors.InvalidCredentials);
		}

		const match = await this.passwordHasher.compare(
			command.password,
			user.password,
		);

		if (!match) {
			return Result.fail(UserErrors.InvalidCredentials);
		}

		const token = this.tokenGenerator.generate({
			sub: user.userId,
			email: user.email,
		});

		const response = new LoginUserResponse(
			token,
			user.userId,
			user.email,
			user.username,
		);

		return Result.success(response);
	}
}
