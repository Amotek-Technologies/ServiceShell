CREATE TABLE IF NOT EXISTS "example" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "example_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"exampleInt" integer NOT NULL,
	"exampleStr" varchar(255) NOT NULL,
	CONSTRAINT "example_exampleStr_unique" UNIQUE("exampleStr")
);
