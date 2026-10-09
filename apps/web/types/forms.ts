export type FormFieldType =
  | "text"
  | "email"
  | "number"
  | "textarea";

export interface FormField {
  id: string;
  type: FormFieldType;
  label: string;
  placeholder?: string;
  required?: boolean;
}

export interface FormDefinition {
  id: string;
  title: string;
  description?: string;
  fields: FormField[];
  themeId: "base";
}