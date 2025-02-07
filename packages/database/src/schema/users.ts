import { pgTable } from "drizzle-orm/pg-core";

export const usersSchema = pgTable("users", {});

export type User = typeof usersSchema.$inferSelect;
