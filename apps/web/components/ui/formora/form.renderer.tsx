"use client";

import type { FormDefinition, FormField } from "~/types/forms";
import { FormoraField } from "./form-field";

interface FormRendererProps {
  form: FormDefinition;
  selectedFieldId?: string;
  onFieldSelect?: (fieldId: string) => void;
  onMoveField?: (fieldId: string, direction: "up" | "down") => void;
}

function renderField(
  field: FormField,
  index: number,
  totalFields: number,
  selectedFieldId: string | undefined,
  onFieldSelect: ((fieldId: string) => void) | undefined,
  onMoveField: ((fieldId: string, direction: "up" | "down") => void) | undefined,
) {
  const isSelected = field.id === selectedFieldId;

  return (
    <div
      key={field.id}
      className={`rounded-lg border p-4 transition-colors ${
        isSelected ? "border-primary bg-primary/5" : "border-transparent hover:border-border"
      }`}
      onClick={() => onFieldSelect?.(field.id)}
    >
      <div className="mb-3 flex items-center justify-end gap-2">
        {index > 0 && (
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onMoveField?.(field.id, "up");
            }}
            className="rounded-md border px-2 py-1 text-sm hover:bg-accent"
            aria-label="Move field up"
          >
            ↑
          </button>
        )}

        {index < totalFields - 1 && (
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onMoveField?.(field.id, "down");
            }}
            className="rounded-md border px-2 py-1 text-sm hover:bg-accent"
            aria-label="Move field down"
          >
            ↓
          </button>
        )}
      </div>

      <FormoraField
        id={field.id}
        type={field.type}
        label={field.label}
        placeholder={field.placeholder}
        required={field.required}
      />
    </div>
  );
}

export function FormRenderer({
  form,
  selectedFieldId,
  onFieldSelect,
  onMoveField,
}: FormRendererProps) {
  return (
    <form className="space-y-6" onSubmit={(event) => event.preventDefault()}>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">{form.title}</h2>

        {form.description && <p className="text-muted-foreground">{form.description}</p>}
      </div>

      <div className="space-y-5">
        {form.fields.map((field, index) =>
          renderField(
            field,
            index,
            form.fields.length,
            selectedFieldId,
            onFieldSelect,
            onMoveField,
          ),
        )}
      </div>

      <button
        type="submit"
        className="rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground"
      >
        Submit
      </button>
    </form>
  );
}
