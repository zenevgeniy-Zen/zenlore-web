import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-subtle hover:shadow-premium",
        
        // Zenlore specific variants
        hero: "bg-gradient-gold text-zenlore-navy font-semibold hover:shadow-gold-glow transform hover:scale-105 transition-all duration-300",
        
        outline: "border-2 border-zenlore-gold text-zenlore-gold bg-transparent hover:bg-zenlore-gold hover:text-zenlore-navy transition-all duration-300",
        
        ghost: "text-zenlore-navy hover:bg-zenlore-gray hover:text-zenlore-navy transition-all duration-300",
        
        navy: "bg-gradient-navy text-white hover:bg-zenlore-navy-light shadow-subtle hover:shadow-premium",
        
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        
        link: "text-zenlore-navy underline-offset-4 hover:underline hover:text-zenlore-gold transition-colors duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-full px-3",
        lg: "h-11 rounded-full px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
