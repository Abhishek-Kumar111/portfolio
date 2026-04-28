import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70",
  {
    variants: {
      variant: {
        default: "bg-slate-950 text-white shadow-sm hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200",
        destructive: "bg-rose-600 text-white shadow-sm hover:bg-rose-500",
        outline: "border border-slate-300 bg-transparent text-slate-800 hover:bg-slate-200/50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800/60",
        secondary: "bg-cyan-500/15 text-cyan-800 hover:bg-cyan-500/25 dark:text-cyan-100 dark:hover:bg-cyan-500/30",
        ghost: "text-slate-700 hover:bg-slate-200/60 dark:text-slate-200 dark:hover:bg-slate-800/60",
        link: "text-cyan-700 underline-offset-4 hover:underline dark:text-cyan-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 gap-1.5 px-3",
        lg: "h-11 px-6",
        icon: "size-9",
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
  variant,
  size,
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
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
