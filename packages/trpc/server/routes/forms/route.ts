import { db } from "@repo/database";
import { formsTable, usersTable } from "@repo/database/schema";
import { and, desc, eq } from "@repo/database";
import { z } from "../../schema";
import { publicProcedure, router } from "../../trpc";

const formFieldSchema = z.object({
  id: z.string().min(1),
  type: z.enum(["text", "email", "number", "textarea"]),
  label: z.string().min(1).max(200),
  placeholder: z.string().max(500).optional(),
  required: z.boolean().optional(),
});

const formInputSchema = z.object({
  title: z.string().trim().min(1).max(200),
  description: z.string().max(5000).optional(),
  fields: z.array(formFieldSchema).max(100),
  themeId: z.enum(["base", "cat", "comic", "cyberpunk"]),
});

const formIdSchema = z.object({
  id: z.string().uuid(),
});

/**
 * Temporary development owner.
 *
 * This is intentionally not selected automatically.
 * Replace this with the authenticated user's ID when
 * session-based authentication is implemented.
 */
async function getDevelopmentOwnerId(): Promise<string> {
  const user = await db.query.usersTable.findFirst({
    columns: { id: true },
    orderBy: desc(usersTable.createdAt),
  });

  if (!user) {
    throw new Error(
      "No user exists yet. Implement authentication or create a development user first.",
    );
  }

  return user.id;
}

export const formsRouter = router({
  create: publicProcedure
    .input(formInputSchema)
    .mutation(async ({ input }) => {
      const userId = await getDevelopmentOwnerId();

      const [form] = await db
        .insert(formsTable)
        .values({
          userId,
          title: input.title,
          description: input.description,
          fields: input.fields,
          themeId: input.themeId,
          status: "draft",
        })
        .returning();

      if (!form) {
        throw new Error("Failed to create form.");
      }

      return form;
    }),

  list: publicProcedure.query(async () => {
    const userId = await getDevelopmentOwnerId();

    return db
      .select()
      .from(formsTable)
      .where(eq(formsTable.userId, userId))
      .orderBy(desc(formsTable.updatedAt));
  }),

  getById: publicProcedure
    .input(formIdSchema)
    .query(async ({ input }) => {
      const userId = await getDevelopmentOwnerId();

      const [form] = await db
        .select()
        .from(formsTable)
        .where(
          and(
            eq(formsTable.id, input.id),
            eq(formsTable.userId, userId),
          ),
        )
        .limit(1);

      return form ?? null;
    }),

  update: publicProcedure
    .input(formIdSchema.extend(formInputSchema.shape))
    .mutation(async ({ input }) => {
      const userId = await getDevelopmentOwnerId();

      const [form] = await db
        .update(formsTable)
        .set({
          title: input.title,
          description: input.description,
          fields: input.fields,
          themeId: input.themeId,
          updatedAt: new Date(),
        })
        .where(
          and(
            eq(formsTable.id, input.id),
            eq(formsTable.userId, userId),
          ),
        )
        .returning();

      if (!form) {
        throw new Error("Form not found.");
      }

      return form;
    }),

  delete: publicProcedure
    .input(formIdSchema)
    .mutation(async ({ input }) => {
      const userId = await getDevelopmentOwnerId();

      const [form] = await db
        .delete(formsTable)
        .where(
          and(
            eq(formsTable.id, input.id),
            eq(formsTable.userId, userId),
          ),
        )
        .returning({ id: formsTable.id });

      if (!form) {
        throw new Error("Form not found.");
      }

      return { success: true };
    }),
});