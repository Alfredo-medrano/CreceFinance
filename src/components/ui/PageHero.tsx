"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, LucideIcon } from "lucide-react";

/**
 * Mapeo de imágenes temáticas para cada sección
 * Estas imágenes deben ser relevantes al contenido de cada página
 */
const HERO_IMAGES: Record<string, string> = {
    // Ahorros
    "plazo-fijo": "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1920&q=80",
    "vista": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80",
    "navideno": "https://images.unsplash.com/photo-1512389142860-9e86fc39be02?w=1920&q=80",
    "infantil": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1920&q=80",
    "escolar": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=80",

    // Préstamos
    "microcreditos": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80",
    "consumo": "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1920&q=80",
    "comercio": "https://images.unsplash.com/photo-1556742208-999815fca738?w=1920&q=80",
    "vivienda": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80",
    "prendarios": "https://images.unsplash.com/photo-1549924231-f129b911e442?w=1920&q=80",

    // Inversiones
    "acciones-preferidas": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&q=80",
    "acciones-preferidas-plus": "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1920&q=80",

    // Default
    "default": "https://images.unsplash.com/photo-1560472355-536de3962603?w=1920&q=80",
};

interface PageHeroProps {
    /** Título principal de la página */
    title: string;
    /** Texto destacado en color dorado (opcional) */
    highlightText?: string;
    /** Descripción corta debajo del título */
    description?: string;
    /** Icono de Lucide para mostrar */
    icon?: LucideIcon;
    /** Badge/etiqueta opcional (ej: "MÁS POPULAR") */
    badge?: string;
    /** Texto del enlace de retorno */
    backText?: string;
    /** URL del enlace de retorno */
    backHref?: string;
    /** Slug para seleccionar la imagen (ej: "plazo-fijo", "microcreditos") */
    imageSlug?: string;
    /** URL de imagen personalizada (anula imageSlug) */
    customImage?: string;
}

/**
 * Componente PageHero reutilizable para headers de páginas internas
 * Reemplaza los degradados con imágenes de fondo temáticas
 */
export function PageHero({
    title,
    highlightText,
    description,
    icon: Icon,
    badge,
    backText,
    backHref,
    imageSlug,
    customImage,
}: PageHeroProps) {
    // Seleccionar la imagen apropiada
    const imageUrl = customImage || HERO_IMAGES[imageSlug || "default"] || HERO_IMAGES["default"];

    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Imagen de fondo */}
            <div className="absolute inset-0">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                    priority
                    unoptimized
                />
                {/* Efecto de luz dorada */}
                <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-primary-gold/10 blur-3xl" />
            </div>

            <div className="container relative mx-auto px-6 z-10">
                {/* Enlace de retorno */}
                {backText && backHref && (
                    <Link
                        href={backHref}
                        className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        {backText}
                    </Link>
                )}

                {/* Badge opcional */}
                {badge && (
                    <div className="flex items-center gap-2 mb-4">
                        <span className="bg-primary-gold text-primary-blue text-xs font-bold px-3 py-1 rounded-full">
                            ⭐ {badge}
                        </span>
                    </div>
                )}

                <div className="flex items-start gap-6">
                    {/* Icono */}
                    {Icon && (
                        <div className="hidden md:flex h-20 w-20 items-center justify-center rounded-2xl bg-primary-gold/20 backdrop-blur">
                            <Icon className="h-10 w-10 text-primary-gold" />
                        </div>
                    )}

                    <div>
                        {/* Título */}
                        <h1 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl mb-3 [text-shadow:_0_2px_4px_rgba(0,0,0,0.8),_0_4px_8px_rgba(0,0,0,0.6),_0_8px_16px_rgba(0,0,0,0.4)]">
                            {highlightText ? (
                                <>
                                    {title.replace(highlightText, "")}
                                    <span className="text-primary-gold">{highlightText}</span>
                                </>
                            ) : (
                                <span className="text-primary-gold">{title}</span>
                            )}
                        </h1>

                        {/* Descripción */}
                        {description && (
                            <p className="text-lg text-white max-w-2xl [text-shadow:_0_1px_2px_rgba(0,0,0,0.8),_0_2px_4px_rgba(0,0,0,0.6)]">
                                {description}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Curva inferior decorativa */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none" className="w-full">
                    <path d="M0 100L48 94C96 88 192 76 288 68C384 60 480 56 576 58C672 60 768 68 864 72C960 76 1056 76 1152 70C1248 64 1344 52 1392 46L1440 40V100H0Z" fill="white" />
                </svg>
            </div>
        </section>
    );
}
