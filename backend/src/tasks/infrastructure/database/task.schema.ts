import { usersTable } from "@users/infrastructure/database/user.schema";
import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const tasksTable = pgTable("tasks", {
	taskId: uuid("task_id").primaryKey().defaultRandom(),
	title: varchar({ length: 255 }).notNull(),
	priority: varchar({ length: 50 }).notNull(),
	userId: uuid("user_id")
		.notNull()
		.references(() => usersTable.userId, { onDelete: "restrict" }),
});
