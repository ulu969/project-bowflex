import {
	pgTable,
	unique,
	serial,
	text,
	foreignKey,
	boolean,
	timestamp,
	varchar,
	date,
	integer,

} from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const users = pgTable("users", {
	userId: serial("user_id").primaryKey().notNull(),
	userName: varchar("user_name", { length: 20 }),
	userDob: date("user_dob"),
},
	(table) => [unique('users_user_name_key').on(table.userName)]
);

export const exercises = pgTable("exercises", {
	exerId: serial("exer_id").primaryKey().notNull(),
	exerName: varchar("exer_name", { length: 80 }),
	exerPage: integer("exer_page"),
	exerMusclegroup: varchar("exer_musclegroup", { length: 20 }),
});

export const sessions = pgTable("sessions", {
	sessionId: serial("session_id").primaryKey().notNull(),
	sessionDate: date("session_date"),
	userId: integer("user_id"),
},
	(table) => [
		foreignKey({
			columns: [table.userId],
			foreignColumns: [users.userId],
			name: 'sessions_user_id_fkey',
		}).onDelete('set null'),
	]

);

export const lifts = pgTable("lifts", {
	liftId: serial("lift_id").primaryKey().notNull(),
	sessionId: integer("session_id"),
	exerId: integer("exer_id"),
	weight: integer(),
	reps: integer(),
	comments: text(),
},
	(table) => [
		foreignKey({
			columns: [table.exerId],
			foreignColumns: [exercises.exerId],
			name: 'lifts_exer_id_fkey',
		}).onDelete('set null'),
		foreignKey({
			columns: [table.sessionId],
			foreignColumns: [sessions.sessionId],
			name: 'lifts_session_id_fkey'
		}).onDelete('set null'),
	]
);
