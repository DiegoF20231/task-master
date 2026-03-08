import { AppError } from "@common/primitives/error";

export class UserErrors {
	public static readonly UserAleadyExists = new AppError(
		"User with this email already exists",
		"USER_ALREADY_EXISTS",
	);

	public static readonly UserNotFound = new AppError(
		"User not found",
		"USER_NOT_FOUND",
	);

	public static readonly InvalidCredentials = new AppError(
		"Invalid email or password",
		"INVALID_CREDENTIALS",
	);
}
