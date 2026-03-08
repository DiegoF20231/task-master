import { usersTable } from "@users/infrastructure/database/user.schema";
import { varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";
import { uuid } from "drizzle-orm/pg-core";

export const projectsTable = pgTable("projects", {
	projectId: uuid("project_id").primaryKey().notNull(),
	title: varchar({ length: 255 }).notNull(),
	description: varchar({ length: 255 }).notNull(),
	userId: uuid("user_id")
		.notNull()
		.references(() => usersTable.userId, { onDelete: "restrict" }),
});
