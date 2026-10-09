"use client";

import { useState } from "react";
import type { FormDefinition, FormField } from "~/types/forms";
import { FieldSettings } from "./field-settings";
import { FormRenderer } from "./form.renderer";

const initialForm: FormDefinition = {
  id: "new-form",
  title: "Untitled Form",
  description: "Start building your form.",
  themeId: "base",
  fields: [],
};

export function FormBuilder() {
  const [form, setForm] = useState<FormDefinition>(initialForm);
  const [selectedFieldId, setSelectedFieldId] = useState<string | null>(null);
  const selectedField = form.fields.find((field) => field.id === selectedFieldId) ?? null;

  function updateSelectedField(updates: Partial<FormField>) {
    if (!selectedFieldId) {
      return;
    }

    setForm((currentForm) => ({
      ...currentForm,
      fields: currentForm.fields.map((field) =>
        field.id === selectedFieldId
          ? {
              ...field,
              ...updates,
            }
          : field,
      ),
    }));
  }

  function deleteSelectedField() {
    if (!selectedFieldId) {
      return;
    }

    setForm((currentForm) => ({
      ...currentForm,
      fields: currentForm.fields.filter((field) => field.id !== selectedFieldId),
    }));

    setSelectedFieldId(null);
  }

  function addTextField() {
    const newField = {
      id: crypto.randomUUID(),
      type: "text" as const,
      label: "New question",
      placeholder: "Enter your answer",
      required: false,
    };

    setForm((currentForm) => ({
      ...currentForm,
      fields: [...currentForm.fields, newField],
    }));
  }

  return (
    <div className="grid min-h-[600px] grid-cols-1 gap-6 xl:grid-cols-[220px_minmax(0,1fr)_280px]">
      {/* Builder Sidebar */}
      <aside className="rounded-xl border bg-card p-4">
        <div className="space-y-4">
          <div>
            <h2 className="font-semibold">Add fields</h2>
            <p className="text-sm text-muted-foreground">Choose a field to add to your form.</p>
          </div>

          <button
            type="button"
            onClick={addTextField}
            className="w-full rounded-md border px-3 py-2 text-left text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            + Text field
          </button>
        </div>
      </aside>

      {/* Form Canvas */}
      <section className="rounded-xl border bg-card p-6">
        <FormRenderer
          form={form}
          selectedFieldId={selectedFieldId ?? undefined}
          onFieldSelect={setSelectedFieldId}
        />
      </section>
      <FieldSettings
        field={selectedField}
        onChange={updateSelectedField}
        onDelete={deleteSelectedField}
      />
    </div>
  );
}
