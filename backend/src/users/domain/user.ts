export class User {
	public readonly username: string;
	public readonly email: string;
	public readonly password: string;

	private constructor(username: string, email: string, password: string) {
		this.username = username;
		this.email = email;
		this.password = password;
	}

	public static create(
		username: string,
		email: string,
		password: string,
	): User {
		return new User(username, email, password);
	}
}
