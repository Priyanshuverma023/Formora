"use client";

import type { FormField } from "~/types/forms";

interface FieldSettingsProps {
  field: FormField | null;
  onChange: (updates: Partial<FormField>) => void;
  onDelete: () => void;
}

export function FieldSettings({
  field,
  onChange,
  onDelete,
}: FieldSettingsProps) {
  if (!field) {
    return (
      <aside className="rounded-xl border bg-card p-5">
        <h2 className="font-semibold">Field settings</h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Select a field to edit its settings.
        </p>
      </aside>
    );
  }

  return (
    <aside className="rounded-xl border bg-card p-5">
      <div className="space-y-5">
        <div>
          <h2 className="font-semibold">Field settings</h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Customize this field.
          </p>
        </div>

        <div className="space-y-2">
          <label htmlFor="field-label" className="text-sm font-medium">
            Label
          </label>

          <input
            id="field-label"
            value={field.label}
            onChange={(event) =>
              onChange({
                label: event.target.value,
              })
            }
            className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="field-placeholder"
            className="text-sm font-medium"
          >
            Placeholder
          </label>

          <input
            id="field-placeholder"
            value={field.placeholder ?? ""}
            onChange={(event) =>
              onChange({
                placeholder: event.target.value,
              })
            }
            className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="field-type" className="text-sm font-medium">
            Type
          </label>

          <select
            id="field-type"
            value={field.type}
            onChange={(event) =>
              onChange({
                type: event.target.value as FormField["type"],
              })
            }
            className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="text">Text</option>
            <option value="email">Email</option>
            <option value="number">Number</option>
            <option value="textarea">Textarea</option>
          </select>
        </div>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={field.required ?? false}
            onChange={(event) =>
              onChange({
                required: event.target.checked,
              })
            }
          />

          Required
        </label>

        <button
          type="button"
          onClick={onDelete}
          className="w-full rounded-md border border-destructive px-3 py-2 text-sm font-medium text-destructive hover:bg-destructive/10"
        >
          Delete field
        </button>
      </div>
    </aside>
  );
}