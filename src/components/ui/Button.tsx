"use client";

import React from "react";
import { cn } from "@/lib/cn";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

/**
 * Componente Button reutilizable
 * Variantes: primary (dorado), secondary (azul), outline, ghost
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant = "primary",
            size = "md",
            isLoading = false,
            leftIcon,
            rightIcon,
            children,
            disabled,
            ...props
        },
        ref
    ) => {
        const baseStyles =
            "relative inline-flex items-center justify-center font-heading font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group";

        const variants = {
            primary: cn(
                "bg-primary-gold text-primary-blue",
                "hover:bg-primary-gold-500 hover:shadow-lg hover:shadow-primary-gold/30",
                "focus:ring-primary-gold",
                "active:scale-[0.98]"
            ),
            secondary: cn(
                "bg-primary-blue text-white",
                "hover:bg-primary-blue-600 hover:shadow-lg hover:shadow-primary-blue/30",
                "focus:ring-primary-blue",
                "active:scale-[0.98]"
            ),
            outline: cn(
                "border-2 border-primary-gold text-primary-gold bg-transparent",
                "hover:bg-primary-gold hover:text-primary-blue",
                "focus:ring-primary-gold",
                "active:scale-[0.98]"
            ),
            ghost: cn(
                "text-primary-blue bg-transparent",
                "hover:bg-primary-blue/10",
                "focus:ring-primary-blue",
                "active:scale-[0.98]"
            ),
        };

        const sizes = {
            sm: "px-4 py-2.5 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg",
        };

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                disabled={disabled || isLoading}
                {...props}
            >
                {/* Efecto de brillo en hover */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </span>

                {/* Contenido del botón */}
                <span className="relative flex items-center justify-center">
                    {isLoading ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : leftIcon ? (
                        <span className="mr-2 transition-transform duration-300 group-hover:scale-110">{leftIcon}</span>
                    ) : null}
                    {children}
                    {rightIcon && !isLoading && (
                        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">{rightIcon}</span>
                    )}
                </span>
            </button>
        );
    }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
