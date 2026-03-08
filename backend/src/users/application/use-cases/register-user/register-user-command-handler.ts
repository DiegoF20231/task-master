import { CommandHandler } from "@common/abstractions/messaging/cqrs";
import { RegisterUserCommand } from "./register-user-command";
import { Result } from "@common/primitives/result";
import { RegisterUserResponse } from "./register-user-response";
import { PasswordHasher } from "@users/application/abstractions/authentication/password-hasher.interface";
import { UserRepository } from "@users/domain/user-repository.interface";
import { User } from "@users/domain/user";
import { UserErrors } from "@users/domain/user-errors";

export class RegisterUserCommandHandler
	implements CommandHandler<RegisterUserCommand, Result<RegisterUserResponse>>
{
	public constructor(
		private readonly userRepository: UserRepository,
		private readonly passwordHasher: PasswordHasher,
	) {}

	public async handle(
		command: RegisterUserCommand,
	): Promise<Result<RegisterUserResponse>> {
		const existingUser = await this.userRepository.findByEmail(command.email);

		if (existingUser) {
			return Result.fail(UserErrors.UserAleadyExists);
		}

		const hashedPassword = await this.passwordHasher.hash(command.password);
		const newUser = User.create(
			crypto.randomUUID(),
			command.name,
			command.email,
			hashedPassword,
		);

		await this.userRepository.save(newUser);

		return Result.success(new RegisterUserResponse(newUser.userId));
	}
}
