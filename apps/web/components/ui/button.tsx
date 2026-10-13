import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "~/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
  variant: {
    default:
      "bg-[var(--formora-brand)] text-white shadow-[0_3px_0_0_#5c3bd6] hover:bg-[var(--formora-brand-hover)] hover:shadow-[0_4px_0_0_#5c3bd6] active:translate-y-[2px] active:shadow-none",

    destructive:
      "bg-destructive text-white shadow-sm hover:bg-destructive/90",

    outline:
      "border border-[var(--formora-border)] bg-white text-[var(--formora-text-primary)] shadow-sm hover:border-[var(--formora-brand)] hover:bg-[var(--formora-brand-soft)]",

    secondary:
      "bg-[var(--formora-surface-muted)] text-[var(--formora-text-primary)] hover:bg-[var(--formora-brand-soft)]",

    ghost:
      "text-[var(--formora-text-primary)] hover:bg-[var(--formora-brand-soft)] hover:text-[var(--formora-brand)]",

    link:
      "text-[var(--formora-brand)] underline-offset-4 hover:underline",

    playful:
      "bg-[var(--formora-coral)] text-[#35213a] shadow-[0_3px_0_0_#dc5d57] hover:brightness-105 active:translate-y-[2px] active:shadow-none",
  },

  size: {
    default: "h-10 rounded-xl px-5 py-2 has-[>svg]:px-4",
    sm: "h-9 rounded-lg gap-1.5 px-3 has-[>svg]:px-2.5",
    lg: "h-12 rounded-2xl px-7 text-base has-[>svg]:px-5",
    icon: "size-10 rounded-xl",
    "icon-sm": "size-8 rounded-lg",
    "icon-lg": "size-12 rounded-2xl",
  },
},
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
