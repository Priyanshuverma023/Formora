import {
  pgTable,
  uuid,
  varchar,
  text,
  jsonb,
  timestamp,
} from "drizzle-orm/pg-core";

import { usersTable } from "./user";

export const formsTable = pgTable("forms", {
  id: uuid("id").primaryKey().defaultRandom(),

  userId: uuid("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),

  title: varchar("title", { length: 200 }).notNull(),

  description: text("description"),

  fields: jsonb("fields")
    .$type<
      Array<{
        id: string;
        type: "text" | "email" | "number" | "textarea";
        label: string;
        placeholder?: string;
        required?: boolean;
      }>
    >()
    .notNull()
    .default([]),

  themeId: varchar("theme_id", { length: 30 })
    .$type<"base" | "cat" | "comic" | "cyberpunk">()
    .notNull()
    .default("base"),

  status: varchar("status", { length: 20 })
    .$type<"draft" | "published">()
    .notNull()
    .default("draft"),

  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),

  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export type SelectForm = typeof formsTable.$inferSelect;
export type InsertForm = typeof formsTable.$inferInsert;