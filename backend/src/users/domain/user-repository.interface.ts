import { User } from "./user";

export interface UserRepository {
	findById(userId: string): Promise<User | null>;
	findByIdWithProjects(userId: string): Promise<User | null>;
	findByUsername(username: string): Promise<User | null>;
	findByEmail(email: string): Promise<User | null>;
	save(user: User): Promise<void>;
}
