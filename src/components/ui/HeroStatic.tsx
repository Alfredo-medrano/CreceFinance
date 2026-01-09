"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { Button } from "./Button";
import { Sparkles, ArrowRight, ChevronDown } from "lucide-react";

// ============================================
// 🎨 CONFIGURA TU IMAGEN DE FONDO AQUÍ
// Pega la URL de tu imagen de Cloudinary
// ============================================
const HERO_CONFIG = {
    // Imagen de fondo principal
    backgroundImage: "https://res.cloudinary.com/dm1fivmmh/image/upload/v1767993424/se%C3%B1oraRiendo_fo7shy.webp",

    // Textos del hero
    subtitle: "Tu aliado financiero",
    title: "Bienvenido a CRECE FINANCE",
    description: "Somos una sociedad cooperativa sólida y confiable que brinda servicios financieros oportunos y accesibles para nuestros socios y clientes.",

    // Botones
    ctaPrimary: "Solicitar Crédito",
    ctaPrimaryLink: "/contacto",
    ctaSecondary: "Conoce nuestros servicios",
    ctaSecondaryLink: "/servicios",
};

interface HeroStaticProps {
    backgroundImage?: string;
    subtitle?: string;
    title?: string;
    description?: string;
    className?: string;
}

export function HeroStatic({
    backgroundImage = HERO_CONFIG.backgroundImage,
    subtitle = HERO_CONFIG.subtitle,
    title = HERO_CONFIG.title,
    description = HERO_CONFIG.description,
    className,
}: HeroStaticProps) {
    return (
        <section
            className={cn(
                "relative h-screen min-h-[700px] w-full overflow-hidden",
                className
            )}
        >
            {/* ============================================
          CAPA 1: IMAGEN DE FONDO (CLOUDINARY)
          ============================================ */}
            <div className="absolute inset-0">
                <Image
                    src={backgroundImage}
                    alt="CRECE FINANCE"
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                    priority
                    unoptimized
                />
            </div>

            {/* ============================================
          CAPA 2: DEGRADADO AZUL
          ============================================ */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-blue via-primary-blue/85 to-primary-blue/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-blue via-transparent to-primary-blue/50" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/40 to-transparent" />

            {/* ============================================
          CAPA 3: LÍNEAS DORADAS DECORATIVAS
          ============================================ */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <defs>
                    {/* Degradado dorado */}
                    <linearGradient id="goldLine" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#e5a810" stopOpacity="0" />
                        <stop offset="20%" stopColor="#e5a810" stopOpacity="0.6" />
                        <stop offset="50%" stopColor="#f6cf51" stopOpacity="0.8" />
                        <stop offset="80%" stopColor="#e5a810" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#e5a810" stopOpacity="0" />
                    </linearGradient>

                    {/* Degradado dorado vertical */}
                    <linearGradient id="goldLineVertical" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#e5a810" stopOpacity="0" />
                        <stop offset="30%" stopColor="#e5a810" stopOpacity="0.5" />
                        <stop offset="50%" stopColor="#f6cf51" stopOpacity="0.7" />
                        <stop offset="70%" stopColor="#e5a810" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#e5a810" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {/* Líneas diagonales principales */}
                <line x1="0" y1="25%" x2="100%" y2="40%" stroke="url(#goldLine)" strokeWidth="3" opacity="0.4" />
                <line x1="0" y1="30%" x2="100%" y2="45%" stroke="url(#goldLine)" strokeWidth="1.5" opacity="0.3" />
                <line x1="0" y1="50%" x2="100%" y2="65%" stroke="url(#goldLine)" strokeWidth="4" opacity="0.5" />
                <line x1="0" y1="55%" x2="100%" y2="70%" stroke="url(#goldLine)" strokeWidth="2" opacity="0.35" />
                <line x1="0" y1="75%" x2="100%" y2="90%" stroke="url(#goldLine)" strokeWidth="2.5" opacity="0.4" />

                {/* Línea central horizontal animada */}
                <line
                    x1="0" y1="50%" x2="100%" y2="50%"
                    stroke="url(#goldLine)"
                    strokeWidth="1"
                    opacity="0.2"
                    className="animate-pulse"
                />
            </svg>

            {/* ============================================
          CAPA 4: EFECTOS DECORATIVOS
          ============================================ */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Círculos con glow dorado */}
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-radial from-primary-gold/25 to-transparent blur-3xl animate-pulse" />
                <div className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-radial from-primary-gold/20 to-transparent blur-3xl" />
                <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-primary-gold/10 blur-2xl animate-float" />

                {/* Patrón de puntos dorados */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: `radial-gradient(circle, #e5a810 1.5px, transparent 1.5px)`,
                        backgroundSize: '50px 50px'
                    }}
                />

                {/* Líneas de acento en las esquinas */}
                <div className="absolute top-20 left-10 w-32 h-[2px] bg-gradient-to-r from-primary-gold/50 to-transparent" />
                <div className="absolute top-20 left-10 w-[2px] h-32 bg-gradient-to-b from-primary-gold/50 to-transparent" />
                <div className="absolute bottom-20 right-10 w-32 h-[2px] bg-gradient-to-l from-primary-gold/50 to-transparent" />
                <div className="absolute bottom-20 right-10 w-[2px] h-32 bg-gradient-to-t from-primary-gold/50 to-transparent" />
            </div>

            {/* ============================================
          CAPA 5: CONTENIDO
          ============================================ */}
            <div className="relative z-20 flex h-full items-center">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-2xl lg:max-w-3xl">
                        {/* Badge */}
                        <div className="animate-fade-in-up">
                            <span className="inline-flex items-center gap-2 mb-6 rounded-full bg-primary-gold/20 backdrop-blur-md px-5 py-2.5 text-sm font-semibold text-primary-gold border border-primary-gold/30 shadow-lg shadow-primary-gold/10">
                                <Sparkles className="h-4 w-4" />
                                {subtitle}
                            </span>
                        </div>

                        {/* Título */}
                        <h1 className="mb-6 font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] animate-fade-in-up animate-delay-100">
                            {title.split(" ").map((word, i) => (
                                <span key={i}>
                                    {word === "CRECE" || word === "FINANCE" ? (
                                        <span className="text-primary-gold">{word}</span>
                                    ) : (
                                        word
                                    )}{" "}
                                </span>
                            ))}
                        </h1>

                        {/* Descripción */}
                        <p className="mb-10 text-lg text-white/85 md:text-xl lg:text-2xl leading-relaxed max-w-xl animate-fade-in-up animate-delay-200">
                            {description}
                        </p>

                        {/* Botones */}
                        <div className="flex flex-col gap-4 sm:flex-row animate-fade-in-up animate-delay-300">
                            <Link href={HERO_CONFIG.ctaPrimaryLink}>
                                <Button
                                    variant="primary"
                                    size="lg"
                                    rightIcon={<ArrowRight className="h-5 w-5" />}
                                    className="button-shine shadow-xl shadow-primary-gold/30"
                                >
                                    {HERO_CONFIG.ctaPrimary}
                                </Button>
                            </Link>
                            <Link href={HERO_CONFIG.ctaSecondaryLink}>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-primary-gold/50 text-white hover:bg-primary-gold hover:text-primary-blue hover:border-primary-gold backdrop-blur-sm"
                                >
                                    {HERO_CONFIG.ctaSecondary}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* ============================================
          INDICADOR DE SCROLL
          ============================================ */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 hidden lg:flex flex-col items-center gap-2 text-white/60 animate-fade-in-up animate-delay-500">
                <span className="text-xs uppercase tracking-[0.2em]">Descubre más</span>
                <div className="w-8 h-12 rounded-full border-2 border-primary-gold/40 flex items-start justify-center p-2">
                    <ChevronDown className="w-4 h-4 text-primary-gold animate-bounce" />
                </div>
            </div>

            {/* ============================================
          CURVA INFERIOR
          ============================================ */}
            <div className="absolute -bottom-1 left-0 right-0 z-20">
                <svg
                    viewBox="0 0 1440 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full"
                    preserveAspectRatio="none"
                >
                    {/* Línea dorada en la curva */}
                    <path
                        d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 35C672 40 768 50 864 52C960 54 1056 48 1152 42C1248 36 1344 30 1392 27L1440 24"
                        stroke="#e5a810"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.5"
                    />
                    {/* Fondo blanco */}
                    <path
                        d="M0 100L48 94C96 88 192 76 288 68C384 60 480 56 576 58C672 60 768 68 864 72C960 76 1056 76 1152 70C1248 64 1344 52 1392 46L1440 40V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0Z"
                        fill="white"
                    />
                </svg>
            </div>
        </section>
    );
}
