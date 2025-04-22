import { pgTable, serial, varchar, date, unique, integer, text } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const users = pgTable("users", {
	userId: serial("user_id").primaryKey().notNull(),
	userName: varchar("user_name", { length: 20 }),
	userDob: date("user_dob"),
});

export const exercises = pgTable("exercises", {
	exerId: serial("exer_id").primaryKey().notNull(),
	exerName: varchar("exer_name", { length: 80 }),
	exerPage: integer("exer_page"),
	exerMusclegroup: varchar("exer_musclegroup", { length: 20 }),
}, (table) => [
	unique("exercises_exer_name_key").on(table.exerName),
]);

export const sessions = pgTable("sessions", {
	sessionId: serial("session_id").primaryKey().notNull(),
	sessionDate: date("session_date"),
	userId: integer("user_id"),
});

export const lifts = pgTable("lifts", {
	liftId: serial("lift_id").primaryKey().notNull(),
	sessionId: integer("session_id"),
	exerId: integer("exer_id"),
	weight: integer(),
	reps: integer(),
	comments: text(),
});
