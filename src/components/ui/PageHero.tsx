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
    "plazo-fijo": "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=1920&q=80", // Crecimiento financiero, gráficos
    "vista": "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?w=1920&q=80", // Alcancía, ahorro personal
    "navideno": "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=1920&q=80", // Navidad, decoraciones festivas
    "infantil": "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1920&q=80", // Niños felices, familia
    "escolar": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&q=80", // Estudiantes, educación

    // Préstamos
    "microcreditos": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80", // Emprendedores, negocios pequeños
    "consumo": "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=1920&q=80", // Compras, consumidor
    "comercio": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80", // Tienda, comercio
    "vivienda": "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1920&q=80", // Casa, hogar
    "prendarios": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1920&q=80", // Vehículos, autos

    // Inversiones
    "acciones-preferidas": "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=1920&q=80", // Inversión, finanzas
    "acciones-preferidas-plus": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80", // Gráficos financieros premium

    // Default
    "default": "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1920&q=80", // Finanzas general
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
