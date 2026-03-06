import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
	dialect: "postgresql",
	dbCredentials: {
		url: process.env.DATABASE_URL!,
	},
	schema: ["./src/**/infrastructure/database/*.schema.ts"],
	out: "./src/common/infrastructure/drizzle/migrations",
});
