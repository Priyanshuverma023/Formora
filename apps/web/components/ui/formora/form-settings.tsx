
"use client";

import type { FormDefinition } from "~/types/forms";

interface FormSettingsProps {
  form: FormDefinition;
  onChange: (updates: Partial<FormDefinition>) => void;
}

export function FormSettings({
  form,
  onChange,
}: FormSettingsProps) {
  return (
    <aside className="rounded-xl border bg-card p-5">
      <div className="space-y-5">
        <div>
          <h2 className="font-semibold">Form settings</h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Customize your form.
          </p>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="form-title"
            className="text-sm font-medium"
          >
            Title
          </label>

          <input
            id="form-title"
            value={form.title}
            onChange={(event) =>
              onChange({
                title: event.target.value,
              })
            }
            className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="form-description"
            className="text-sm font-medium"
          >
            Description
          </label>

          <textarea
            id="form-description"
            value={form.description ?? ""}
            onChange={(event) =>
              onChange({
                description: event.target.value,
              })
            }
            rows={4}
            className="w-full resize-none rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>
    </aside>
  );
}