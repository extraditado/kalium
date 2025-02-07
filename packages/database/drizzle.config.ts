import { defineConfig } from "drizzle-kit";

export default defineConfig({
	out: "",
	schema: "",
	dialect: "postgresql",
	dbCredentials: {
		host: "localhost",
		user: process.env.DB_USR || "admin",
		password: process.env.DB_PWD || "admin",
		database: process.env.DB_NAME || "db",
		port: process.env.DB_PORT ? Number.parseInt(process.env.DB_PORT) : 5432,
	},
});
