"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { Button } from "./Button";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

interface CarouselSlide {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    imageUrl: string;
    ctaText?: string;
    ctaLink?: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
}

/**
 * Configuración de diapositivas del carrusel
 * Cada slide representa una promoción o servicio destacado
 */
const defaultSlides: CarouselSlide[] = [
    {
        id: 1,
        title: "BIENVENIDO A CRECE FINANCE",
        subtitle: "Tu aliado financiero",
        description:
            "Crecer contigo es nuestra mayor inversión, construyendo juntos un futuro financiero sólido.",
        imageUrl: "https://res.cloudinary.com/dm1fivmmh/image/upload/v1768881530/EquipoCrece_lacdoi.jpg",
        ctaText: "Solicitar Crédito",
        ctaLink: "/contacto",
        secondaryCtaText: "Conoce nuestros servicios",
        secondaryCtaLink: "/servicios",
    },
    {
        id: 2,
        title: "Ahorro Plazo Fijo",
        subtitle: "Haz crecer tu dinero",
        description:
            "Las mejores tasas de interés del mercado para hacer crecer tus ahorros de forma segura y estable.",
        imageUrl: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=1920&q=80",
        ctaText: "Conocer más",
        ctaLink: "/ahorros/plazo-fijo",
        secondaryCtaText: "Ver todos los ahorros",
        secondaryCtaLink: "/ahorros",
    },
    {
        id: 3,
        title: "Microcréditos",
        subtitle: "Impulsa tu negocio",
        description:
            "Financiamiento rápido y accesible para emprendedores y pequeños negocios que quieren crecer.",
        imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80",
        ctaText: "Solicitar ahora",
        ctaLink: "/prestamos/microcreditos",
        secondaryCtaText: "Ver todos los créditos",
        secondaryCtaLink: "/prestamos",
    },
    {
        id: 4,
        title: "Ahorro Navideño",
        subtitle: "Planifica tus fiestas",
        description:
            "Ahorra durante el año y disfruta de unas fiestas sin preocupaciones financieras.",
        imageUrl: "https://res.cloudinary.com/dm1fivmmh/image/upload/v1767993423/AhorroNavide%C3%B1o_twontb.webp",
        ctaText: "Empezar a ahorrar",
        ctaLink: "/ahorros/navideno",
        secondaryCtaText: "Ver productos de ahorro",
        secondaryCtaLink: "/ahorros",
    },
];

interface HeroCarouselProps {
    slides?: CarouselSlide[];
    autoPlay?: boolean;
    interval?: number;
    className?: string;
}

/**
 * Componente HeroCarousel
 * Carrusel principal con transiciones animadas y navegación
 */
export function HeroCarousel({
    slides = defaultSlides,
    autoPlay = true,
    interval = 6000,
    className,
}: HeroCarouselProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const goToSlide = useCallback(
        (index: number) => {
            if (isAnimating) return;
            setIsAnimating(true);
            setCurrentSlide(index);
            setTimeout(() => setIsAnimating(false), 800);
        },
        [isAnimating]
    );

    const nextSlide = useCallback(() => {
        goToSlide((currentSlide + 1) % slides.length);
    }, [currentSlide, slides.length, goToSlide]);

    const prevSlide = useCallback(() => {
        goToSlide((currentSlide - 1 + slides.length) % slides.length);
    }, [currentSlide, slides.length, goToSlide]);

    useEffect(() => {
        if (!autoPlay) return;
        const timer = setInterval(nextSlide, interval);
        return () => clearInterval(timer);
    }, [autoPlay, interval, nextSlide]);

    return (
        <section
            className={cn("relative h-screen min-h-[700px] w-full overflow-hidden group/carousel", className)}
        >
            {/* Fondo degradado con líneas decorativas */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-blue via-primary-blue-600 to-primary-blue-800 z-0">
                <svg
                    className="absolute inset-0 w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient id="goldGradientCarousel" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#e5a810" stopOpacity="0" />
                            <stop offset="30%" stopColor="#e5a810" stopOpacity="0.15" />
                            <stop offset="50%" stopColor="#f6cf51" stopOpacity="0.25" />
                            <stop offset="70%" stopColor="#e5a810" stopOpacity="0.15" />
                            <stop offset="100%" stopColor="#e5a810" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    {/* Líneas diagonales decorativas */}
                    <line x1="0" y1="30%" x2="100%" y2="42%" stroke="url(#goldGradientCarousel)" strokeWidth="1" />
                    <line x1="0" y1="50%" x2="100%" y2="62%" stroke="url(#goldGradientCarousel)" strokeWidth="2" />
                    <line x1="0" y1="70%" x2="100%" y2="82%" stroke="url(#goldGradientCarousel)" strokeWidth="1" />
                </svg>

                {/* Círculos de resplandor */}
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary-gold/10 to-transparent blur-3xl" />
                <div className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-primary-gold/10 to-transparent blur-3xl" />
            </div>

            {/* Diapositivas */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={cn(
                        "absolute inset-0 transition-all duration-800 ease-out",
                        index === currentSlide
                            ? "opacity-100 z-10"
                            : "opacity-0 z-0"
                    )}
                >
                    {/* Capa de imagen de fondo con efecto 3D */}
                    <div className="absolute inset-0 overflow-hidden" style={{ perspective: '1000px' }}>
                        <div className="absolute inset-0 bg-primary-blue" />
                        <Image
                            src={slide.imageUrl}
                            alt={slide.title}
                            fill
                            sizes="100vw"
                            className={cn(
                                "object-cover object-center transition-transform duration-1000",
                                index === currentSlide && "animate-parallax-3d"
                            )}
                            priority={index === 0}
                            unoptimized
                            loading={index === 0 ? "eager" : "lazy"}
                        />
                    </div>

                    {/* Línea dorada animada */}
                    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 z-5 pointer-events-none overflow-hidden">
                        <div
                            className={cn(
                                "h-[2px] bg-gradient-to-r from-transparent via-primary-gold to-transparent transition-all duration-1000",
                                index === currentSlide ? "w-full opacity-50" : "w-0 opacity-0"
                            )}
                        />
                    </div>

                    {/* Contenido del slide */}
                    <div className="relative z-20 flex h-full items-center">
                        <div className="container mx-auto px-6 lg:px-8">
                            <div className="max-w-2xl lg:max-w-3xl">
                                {/* Etiqueta del subtítulo */}
                                <div
                                    className={cn(
                                        "transition-all duration-700 delay-100",
                                        index === currentSlide
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-8"
                                    )}
                                >
                                    <span className="inline-flex items-center gap-2 mb-6 rounded-full bg-primary-gold px-5 py-2.5 text-sm font-bold text-primary-blue shadow-lg">
                                        <Sparkles className="h-4 w-4" />
                                        {slide.subtitle}
                                    </span>
                                </div>

                                {/* Título principal */}
                                <h1
                                    className={cn(
                                        "mb-4 font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] transition-all duration-700 delay-200 whitespace-nowrap",
                                        "[text-shadow:_0_2px_4px_rgba(0,0,0,0.8),_0_4px_8px_rgba(0,0,0,0.6),_0_8px_16px_rgba(0,0,0,0.4)]",
                                        index === currentSlide
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-8"
                                    )}
                                >
                                    {slide.title}
                                </h1>

                                {/* Descripción */}
                                <p
                                    className={cn(
                                        "mb-8 text-base text-white md:text-lg lg:text-xl leading-relaxed max-w-xl transition-all duration-700 delay-300",
                                        "[text-shadow:_0_1px_2px_rgba(0,0,0,0.8),_0_2px_4px_rgba(0,0,0,0.6)]",
                                        index === currentSlide
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-8"
                                    )}
                                >
                                    {slide.description}
                                </p>

                                {/* Botones de acción */}
                                {slide.ctaText && (
                                    <div
                                        className={cn(
                                            "flex flex-col gap-4 sm:flex-row transition-all duration-700 delay-400",
                                            index === currentSlide
                                                ? "opacity-100 translate-y-0"
                                                : "opacity-0 translate-y-8"
                                        )}
                                    >
                                        <Link href={slide.ctaLink || "/contacto"}>
                                            <Button
                                                variant="primary"
                                                size="lg"
                                                className="button-shine shadow-xl shadow-primary-gold/40 border-2 border-primary-gold"
                                            >
                                                {slide.ctaText}
                                            </Button>
                                        </Link>
                                        <Link href={slide.secondaryCtaLink || "/servicios"}>
                                            <Button
                                                variant="outline"
                                                size="lg"
                                                className="!bg-white !border-2 !border-white !text-primary-blue font-bold hover:!bg-primary-gold hover:!border-primary-gold hover:!text-primary-blue transition-all duration-300 shadow-lg"
                                            >
                                                {slide.secondaryCtaText || "Conoce nuestros servicios"}
                                            </Button>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Barra de progreso */}
            <div className="absolute bottom-0 left-0 right-0 z-30 h-1 bg-white/10">
                <div
                    key={currentSlide}
                    className="h-full bg-primary-gold"
                    style={{
                        animation: `progress ${interval}ms linear forwards`
                    }}
                />
            </div>

            {/* Flechas de navegación - se ocultan y aparecen al pasar el mouse */}
            <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 z-30 -translate-y-1/2 group opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300"
                aria-label="Anterior"
            >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary-gold/20 backdrop-blur-md text-white transition-all duration-300 hover:bg-primary-gold/40 hover:scale-110 border border-primary-gold/30">
                    <ChevronLeft className="h-6 w-6 transition-transform group-hover:-translate-x-0.5" />
                </div>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 z-30 -translate-y-1/2 group opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300"
                aria-label="Siguiente"
            >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary-gold/20 backdrop-blur-md text-white transition-all duration-300 hover:bg-primary-gold/40 hover:scale-110 border border-primary-gold/30">
                    <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-0.5" />
                </div>
            </button>

            {/* Indicadores de navegación */}
            <div className="absolute bottom-16 left-1/2 z-30 flex -translate-x-1/2 gap-3">
                {slides.map((slide, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={cn(
                            "relative h-3 rounded-full transition-all duration-500 focus:outline-none overflow-hidden",
                            index === currentSlide
                                ? "w-12 bg-primary-gold"
                                : "w-3 bg-white/30 hover:bg-primary-gold/50"
                        )}
                        aria-label={`Ir a ${slide.title}`}
                    >
                        {index === currentSlide && (
                            <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                        )}
                    </button>
                ))}
            </div>

            {/* Indicador de scroll */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 hidden lg:flex flex-col items-center gap-2 text-white/50">
                <span className="text-xs uppercase tracking-[0.2em]">Descubre más</span>
                <div className="w-6 h-10 rounded-full border-2 border-primary-gold/30 flex items-start justify-center p-2">
                    <div className="w-1.5 h-3 bg-primary-gold/60 rounded-full animate-bounce" />
                </div>
            </div>

            {/* Curva inferior decorativa */}
            <div className="absolute -bottom-1 left-0 right-0 z-20">
                <svg
                    viewBox="0 0 1440 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0 80L48 74.7C96 69 192 59 288 53.3C384 48 480 48 576 53.3C672 59 768 69 864 69.3C960 69 1056 59 1152 53.3C1248 48 1344 48 1392 48L1440 48V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0Z"
                        fill="white"
                    />
                </svg>
            </div>

            {/* Animación de progreso */}
            <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
        </section>
    );
}
