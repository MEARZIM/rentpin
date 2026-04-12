import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot" // Ensure you have @radix-ui/react-slot installed

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center border border-transparent bg-clip-padding font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:scale-95 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Brand: Emerald & Earth Primary (#006948)
        premium:
          "bg-[#006948] text-white shadow-lg shadow-[#006948]/20 hover:bg-[#005a3e] rounded-full",
        // The "Ghost Border" logic for secondary actions
        outline:
          "border-[#bccac0]/20 bg-white/80 backdrop-blur-md hover:bg-[#f0f4f8] text-[#171c1f] rounded-full",
        default: "bg-primary text-primary-foreground hover:bg-primary/80 rounded-lg",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-lg",
        ghost: "hover:bg-muted hover:text-foreground rounded-lg",
        destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 rounded-lg",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        // High-End Editorial sizing for Desktop
        premium: "h-14 px-10 text-base font-bold tracking-tight",
        // Radical Clarity sizing for Mobile
        premium_sm: "h-10 px-6 text-xs font-bold uppercase tracking-widest",
        default: "h-8 gap-1.5 px-2.5 text-sm",
        xs: "h-6 px-2 text-xs",
        sm: "h-7 px-2.5 text-[0.8rem]",
        lg: "h-9 px-2.5",
        icon: "size-8",
        "icon-xs": "size-6",
        "icon-sm": "size-7",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "premium",
      size: "premium",
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
  const Comp = asChild ? (Slot as any) : "button"

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