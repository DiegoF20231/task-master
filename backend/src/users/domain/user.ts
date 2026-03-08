export class User {
	public readonly userId: string;
	public readonly username: string;
	public readonly email: string;
	public readonly password: string;

	private constructor(
		userId: string,
		username: string,
		email: string,
		password: string,
	) {
		this.userId = userId;
		this.username = username;
		this.email = email;
		this.password = password;
	}

	public static create(
		userId: string,
		username: string,
		email: string,
		password: string,
	): User {
		return new User(userId, username, email, password);
	}
}
