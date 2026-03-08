export class LoginUserResponse {
	public constructor(
		public readonly token: string,
		public readonly userId: string,
		public readonly email: string,
		public readonly name: string,
	) {}
}
