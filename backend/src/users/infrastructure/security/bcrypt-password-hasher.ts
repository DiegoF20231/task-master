import { PASSWORD_SALTS } from "@common/config/config";
import { PasswordHasher } from "@users/application/abstractions/authentication/password-hasher.interface";
import bcrypt from "bcryptjs";

export class BCryptPasswordHasher implements PasswordHasher {
	hash(password: string): Promise<string> {
		return bcrypt.hash(password, Number(PASSWORD_SALTS));
	}
	compare(password: string, hash: string): Promise<boolean> {
		return bcrypt.compare(password, hash);
	}
}
