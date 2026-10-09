"use client";

import type { FormDefinition, FormField } from "~/types/forms";
import { FormoraField } from "./form-field";

interface FormRendererProps {
  form: FormDefinition;
  selectedFieldId?: string;
  onFieldSelect?: (fieldId: string) => void;
}

function renderField(
  field: FormField,
  selectedFieldId: string | undefined,
  onFieldSelect: ((fieldId: string) => void) | undefined,
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

export function FormRenderer({ form, selectedFieldId, onFieldSelect }: FormRendererProps) {
  return (
    <form className="space-y-6" onSubmit={(event) => event.preventDefault()}>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">{form.title}</h2>

        {form.description && <p className="text-muted-foreground">{form.description}</p>}
      </div>

      <div className="space-y-5">
        {form.fields.map((field) => renderField(field, selectedFieldId, onFieldSelect))}
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
