import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const exampleTable = pgTable("example", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  exampleInt: integer().notNull(),
  exampleStr: varchar({ length: 255 }).notNull().unique(),
});