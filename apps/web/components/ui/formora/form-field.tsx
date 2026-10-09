"use client";

import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";

export type FormoraFieldType =
  | "text"
  | "email"
  | "number"
  | "textarea";

interface FormoraFieldProps {
  id: string;
  type: FormoraFieldType;
  label: string;
  placeholder?: string;
  required?: boolean;
}

export function FormoraField({
  id,
  type,
  label,
  placeholder,
  required = false,
}: FormoraFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>
        {label}
        {required && (
          <span className="ml-1 text-destructive" aria-hidden="true">
            *
          </span>
        )}
      </Label>

      {type === "textarea" ? (
        <Textarea
          id={id}
          name={id}
          placeholder={placeholder}
          required={required}
        />
      ) : (
        <Input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          required={required}
        />
      )}
    </div>
  );
}