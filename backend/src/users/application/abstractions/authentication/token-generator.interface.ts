import { JwtPayload } from "jsonwebtoken";

export interface TokenGenerator {
	generate(payload: JwtPayload): string;
}
