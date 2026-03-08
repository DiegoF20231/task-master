import { projectsTable } from "@projects/infrastructure/database/project.schema";
import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const tasksTable = pgTable("tasks", {
	taskId: uuid("task_id").primaryKey().notNull(),
	title: varchar({ length: 255 }).notNull(),
	priority: varchar({ length: 50 }).notNull(),
	projectId: uuid("project_id")
		.notNull()
		.references(() => projectsTable.projectId, { onDelete: "restrict" }),
});
