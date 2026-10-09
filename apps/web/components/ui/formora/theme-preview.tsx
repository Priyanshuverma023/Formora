"use client";
import { FormoraField } from "~/components/ui/formora/form-field";

export function ThemePreview() {
  return (
    <section className="bg-background text-foreground min-h-[400px] rounded-2xl border p-8">
      <div className="mx-auto max-w-xl space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">
            Formora Theme Preview
          </p>

          <h2 className="text-3xl font-bold tracking-tight">
            Create forms. Make them yours.
          </h2>

          <p className="text-muted-foreground">
            This preview shows how Formora themes control the appearance of
            your forms without changing the form data.
          </p>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="theme-preview-name"
            className="text-sm font-medium"
          >
            Your name
          </label>

          <input
            id="theme-preview-name"
            type="text"
            placeholder="Enter your name"
            className="bg-background w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            className="bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-medium"
          >
            Primary action
          </button>

          <button
            type="button"
            className="bg-secondary text-secondary-foreground rounded-md px-4 py-2 text-sm font-medium"
          >
            Secondary action
          </button>
        </div>
      </div>
    </section>
  );
}