import {
	JWT_ALGORITHM,
	JWT_AUDIENCE,
	JWT_EXPIRATION_TIME,
	JWT_ISSUER,
	JWT_SECRET,
} from "@common/config/config";
import { TokenGenerator } from "@users/application/abstractions/authentication/token-generator.interface";
import jwt, { Algorithm, JwtPayload } from "jsonwebtoken";

export class JwtTokenGenerator implements TokenGenerator {
	generate(payload: JwtPayload): string {
		return jwt.sign(payload, JWT_SECRET!, {
			issuer: JWT_ISSUER,
			audience: JWT_AUDIENCE,
			algorithm: JWT_ALGORITHM as Algorithm,
			expiresIn: JWT_EXPIRATION_TIME as any,
		});
	}
}
