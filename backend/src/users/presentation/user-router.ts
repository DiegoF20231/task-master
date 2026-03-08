import { Router } from "express";

import { LoginUserCommandHandler } from "@users/application/use-cases/login/login-user-command-handler";
import { loginUserCommandValidator } from "@users/application/use-cases/login/login-user-command-validator";

import { RegisterUserCommandHandler } from "@users/application/use-cases/register-user/register-user-command-handler";
import { registerUserCommandValidator } from "@users/application/use-cases/register-user/register-user-command-validator";
import { JwtTokenGenerator } from "@users/infrastructure/security/jwt-token-generator";
import { BCryptPasswordHasher } from "@users/infrastructure/security/bcrypt-password-hasher";
import { DrizzleUserRepository } from "@users/infrastructure/database/drizzle-user-repository";
import { RegisterUserEndpoint } from "./endpoints/register-user-endpoint";
import { validateRequestMiddleware } from "@common/infrastructure/middleware/validate-request.middleware";
import { LoginUserEndpoint } from "./endpoints/login-endpoint";
import { UserRepository } from "@users/domain/user-repository.interface";
import { PasswordHasher } from "@users/application/abstractions/authentication/password-hasher.interface";
import { TokenGenerator } from "@users/application/abstractions/authentication/token-generator.interface";

const usersRouter = Router();

const userRepository: UserRepository = new DrizzleUserRepository();

const passwordHasher: PasswordHasher = new BCryptPasswordHasher();

const tokenGenerator: TokenGenerator = new JwtTokenGenerator();

const loginUserCommandHandler = new LoginUserCommandHandler(
	userRepository,
	passwordHasher,
	tokenGenerator,
);

const registerUserCommandHandler = new RegisterUserCommandHandler(
	userRepository,
	passwordHasher,
);

const loginUserEndpoint = new LoginUserEndpoint(loginUserCommandHandler);

const registerUserEndpoint = new RegisterUserEndpoint(
	registerUserCommandHandler,
);

usersRouter.post(
	"/login",
	loginUserCommandValidator,
	validateRequestMiddleware,
	loginUserEndpoint.handle,
);

usersRouter.post(
	"/register",
	registerUserCommandValidator,
	validateRequestMiddleware,
	registerUserEndpoint.handle,
);

export default usersRouter;
