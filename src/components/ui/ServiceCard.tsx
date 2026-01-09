"use client";

import React from "react";
import { cn } from "@/lib/cn";
import { LucideIcon, ArrowRight } from "lucide-react";
import { Button } from "./Button";

interface ServiceCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    features?: string[];
    ctaText?: string;
    onCtaClick?: () => void;
    className?: string;
    variant?: "default" | "featured";
}

export function ServiceCard({
    icon: Icon,
    title,
    description,
    features,
    ctaText = "Más información",
    onCtaClick,
    className,
    variant = "default",
}: ServiceCardProps) {
    return (
        <div
            className={cn(
                "group relative overflow-hidden rounded-2xl bg-white p-8 transition-all duration-500",
                "hover:shadow-2xl hover:-translate-y-2",
                "border border-gray-100",
                variant === "featured" && "border-primary-gold/30 bg-gradient-to-br from-white to-primary-gold/5",
                className
            )}
        >
            {/* Animated Background Gradient */}
            <div className={cn(
                "absolute inset-0 bg-gradient-to-br from-primary-blue via-primary-blue-600 to-primary-gold opacity-0 transition-opacity duration-500",
                "group-hover:opacity-100"
            )} />

            {/* Decorative Orbs */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary-gold/20 blur-2xl transition-all duration-500 group-hover:bg-white/20 group-hover:scale-150" />
            <div className="absolute -left-10 -bottom-10 h-24 w-24 rounded-full bg-primary-blue/10 blur-2xl transition-all duration-500 group-hover:bg-primary-gold/20 group-hover:scale-150" />

            {/* Content */}
            <div className="relative z-10">
                {/* Icon */}
                <div
                    className={cn(
                        "mb-6 inline-flex rounded-2xl p-4 transition-all duration-500",
                        variant === "featured"
                            ? "bg-primary-gold text-primary-blue shadow-lg shadow-primary-gold/30"
                            : "bg-primary-blue/10 text-primary-blue group-hover:bg-white/20 group-hover:text-white group-hover:shadow-lg"
                    )}
                >
                    <Icon className="h-8 w-8 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className={cn(
                    "mb-3 font-heading text-xl font-bold transition-colors duration-300",
                    "text-primary-blue group-hover:text-white"
                )}>
                    {title}
                </h3>

                {/* Description */}
                <p className={cn(
                    "mb-4 leading-relaxed transition-colors duration-300",
                    "text-gray-600 group-hover:text-white/90"
                )}>
                    {description}
                </p>

                {/* Features list */}
                {features && features.length > 0 && (
                    <ul className="mb-6 space-y-2">
                        {features.map((feature, index) => (
                            <li
                                key={index}
                                className={cn(
                                    "flex items-center text-sm transition-all duration-300",
                                    "text-gray-600 group-hover:text-white/90"
                                )}
                                style={{ transitionDelay: `${index * 50}ms` }}
                            >
                                <span className={cn(
                                    "mr-3 flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold transition-colors duration-300",
                                    "bg-primary-gold/20 text-primary-gold group-hover:bg-white/20 group-hover:text-white"
                                )}>
                                    ✓
                                </span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                )}

                {/* CTA Button */}
                {onCtaClick && (
                    <Button
                        variant={variant === "featured" ? "primary" : "outline"}
                        size="sm"
                        onClick={onCtaClick}
                        rightIcon={<ArrowRight className="h-4 w-4" />}
                        className={cn(
                            "mt-auto w-full transition-all duration-300",
                            "group-hover:bg-white group-hover:text-primary-blue group-hover:border-white"
                        )}
                    >
                        {ctaText}
                    </Button>
                )}
            </div>

            {/* Top Accent Line */}
            <div className={cn(
                "absolute top-0 left-0 right-0 h-1 transition-all duration-500",
                "bg-gradient-to-r from-primary-blue via-primary-gold to-primary-blue",
                "transform origin-left scale-x-0 group-hover:scale-x-100"
            )} />
        </div>
    );
}
