-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE "users" (
	"user_id" serial PRIMARY KEY NOT NULL,
	"user_name" varchar(20),
	"user_dob" date
);
--> statement-breakpoint
CREATE TABLE "exercises" (
	"exer_id" serial PRIMARY KEY NOT NULL,
	"exer_name" varchar(80),
	"exer_page" integer,
	"exer_musclegroup" varchar(20)
);
--> statement-breakpoint
CREATE TABLE "sessions" (
	"session_id" serial PRIMARY KEY NOT NULL,
	"session_date" date,
	"user_id" integer
);
--> statement-breakpoint
CREATE TABLE "lifts" (
	"lift_id" serial PRIMARY KEY NOT NULL,
	"session_id" integer,
	"exer_id" integer,
	"weight" integer,
	"reps" integer,
	"comments" text
);

*/