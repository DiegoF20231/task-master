import { db } from "@common/infrastructure/drizzle/drizzle";
import { User } from "@users/domain/user";
import { UserRepository } from "@users/domain/user-repository.interface";

export class DrizzleUserRepository implements UserRepository {
	public async findById(userId: string): Promise<User | null> {
		const user = await db.query.usersTable.findFirst({
			where: {
				userId,
			},
		});

		if (!user) {
			return null;
		}
		return user;
	}
	public async findByIdWithProjects(userId: string): Promise<User | null> {
		const user = await db.query.usersTable.findFirst({
			where: {
				userId,
			},
			with: {
				projects: true,
			},
		});

		if (!user) {
			return null;
		}
		throw new Error("Method not implemented.");
	}
	public async findByUsername(username: string): Promise<User | null> {
		throw new Error("Method not implemented.");
	}
	public async findByEmail(email: string): Promise<User | null> {
		const user = await db.query.usersTable.findFirst({
			where: {
				email,
			},
		});
		if (!user) {
			return null;
		}
		return user;
	}
	public async save(user: User): Promise<void> {
		throw new Error("Method not implemented.");
	}
}
