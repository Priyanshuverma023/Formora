import * as React from "react";

import { cn } from "~/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-[var(--formora-text-secondary)] selection:bg-primary selection:text-primary-foreground",
        "h-11 w-full min-w-0 rounded-xl border border-[var(--formora-border)] bg-white px-4 py-2 text-sm text-[var(--formora-text-primary)] shadow-sm",
        "transition-all duration-200 outline-none",
        "hover:border-[var(--formora-border-strong)]",
        "focus-visible:border-[var(--formora-brand)] focus-visible:ring-2 focus-visible:ring-[var(--formora-brand)]/20",
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20",
        className,
      )}
      {...props}
    />
  );
}

export { Input };