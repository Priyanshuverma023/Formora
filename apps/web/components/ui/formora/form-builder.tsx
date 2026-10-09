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

  function addField(type: FormField["type"]) {
    const labels: Record<FormField["type"], string> = {
      text: "New question",
      email: "Email address",
      number: "Number",
      textarea: "Long answer",
    };

    const placeholders: Record<FormField["type"], string> = {
      text: "Enter your answer",
      email: "Enter your email",
      number: "Enter a number",
      textarea: "Enter your answer",
    };

    const newField: FormField = {
      id: crypto.randomUUID(),
      type,
      label: labels[type],
      placeholder: placeholders[type],
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

          <div className="space-y-2">
            <button
              type="button"
              onClick={() => addField("text")}
              className="w-full rounded-md border px-3 py-2 text-left text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              + Text
            </button>

            <button
              type="button"
              onClick={() => addField("email")}
              className="w-full rounded-md border px-3 py-2 text-left text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              + Email
            </button>

            <button
              type="button"
              onClick={() => addField("number")}
              className="w-full rounded-md border px-3 py-2 text-left text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              + Number
            </button>

            <button
              type="button"
              onClick={() => addField("textarea")}
              className="w-full rounded-md border px-3 py-2 text-left text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              + Textarea
            </button>
          </div>
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
