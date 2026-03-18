"use client"

import { cn } from "@/lib/utils"

interface CapsuleProps {
  children: React.ReactNode
  variant?: "outline" | "filled" | "star"
  className?: string
}

export function Capsule({ children, variant = "outline", className }: CapsuleProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center px-3 py-1 text-sm font-medium rounded-full transition-all duration-200",
        variant === "outline" && "border-2 border-primary text-foreground hover:bg-primary hover:text-primary-foreground",
        variant === "filled" && "bg-primary text-primary-foreground",
        variant === "star" && "bg-primary text-primary-foreground w-8 h-8 p-0",
        className
      )}
    >
      {variant === "star" ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L14.5 9.5H22L16 14L18.5 22L12 17.5L5.5 22L8 14L2 9.5H9.5L12 2Z" />
        </svg>
      ) : (
        children
      )}
    </span>
  )
}
