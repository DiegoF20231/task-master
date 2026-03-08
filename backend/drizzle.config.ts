import "dotenv/config";
import { defineConfig } from "drizzle-kit";

import tsConfig from "./tsconfig.json";
import { register } from "tsconfig-paths";

register({
	baseUrl: "./",
	paths: tsConfig.compilerOptions.paths,
});

export default defineConfig({
	dialect: "postgresql",
	dbCredentials: {
		url: process.env.DATABASE_URL!,
	},
	schema: ["./src/**/*.schema.ts"],
	out: "./src/common/infrastructure/drizzle/migrations",
});
