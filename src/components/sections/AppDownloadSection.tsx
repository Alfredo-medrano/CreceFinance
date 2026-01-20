"use client";

import Image from "next/image";
import Link from "next/link";
import { Smartphone, Download, Star, Shield, Zap } from "lucide-react";

/**
 * Beneficios destacados de la aplicación móvil
 */
const appFeatures = [
    {
        icon: Zap,
        title: "Acceso Rápido",
        description: "Consulta tus saldos y movimientos al instante",
    },
    {
        icon: Shield,
        title: "100% Seguro",
        description: "Protección biométrica y encriptación de datos",
    },
    {
        icon: Star,
        title: "Fácil de Usar",
        description: "Interfaz intuitiva diseñada para ti",
    },
];

/**
 * Sección de descarga de la aplicación móvil
 * Incluye mockups de teléfono y enlace a Play Store
 */
export function AppDownloadSection() {
    return (
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-blue via-primary-blue-600 to-primary-blue">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-gold/15 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-turquoise/10 rounded-full blur-2xl" />

            <div className="container relative mx-auto px-6">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Contenido promocional */}
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-primary-gold/20 px-4 py-2 text-sm font-semibold text-primary-gold">
                            <Smartphone className="w-4 h-4" />
                            <span>Disponible en Android</span>
                        </div>

                        <h2 className="mb-6 font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                            Lleva a{" "}
                            <span className="text-gradient-gold inline-block">
                                CRECE FINANCE
                            </span>{" "}
                            en tu bolsillo
                        </h2>

                        <p className="mb-8 text-lg text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Descarga nuestra aplicación móvil y gestiona tus finanzas de forma
                            fácil, rápida y segura desde cualquier lugar. Disponible ahora en
                            Google Play Store.
                        </p>

                        {/* Tarjetas de beneficios */}
                        <div className="grid gap-4 mb-10 sm:grid-cols-3">
                            {appFeatures.map((feature) => (
                                <div
                                    key={feature.title}
                                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 lg:items-start"
                                >
                                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-gold/20 text-primary-gold">
                                        <feature.icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-heading font-semibold text-white text-sm">
                                        {feature.title}
                                    </h3>
                                    <p className="text-xs text-white/60">{feature.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Botón de descarga con logo oficial de Google Play */}
                        <Link
                            href="https://play.google.com/store/apps/details?id=com.sstsoluciones.arisstoCrecefinanceProduccion2&pcampaignid=web_share"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-4 px-8 py-4 bg-black text-white font-bold rounded-xl shadow-2xl shadow-black/20 hover:bg-gray-900 transition-all duration-300 group border border-white/20"
                        >
                            {/* Logo oficial de Google Play con colores */}
                            <svg
                                className="w-10 h-10"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path d="M3.609 1.814c-.287.179-.48.498-.48.862v18.648c0 .364.193.683.48.862l.057.032 10.449-10.449v-.118L3.666 1.782l-.057.032z" fill="#00D7FE" />
                                <path d="M17.574 15.306l-3.458-3.458v-.118l3.458-3.458.078.045 4.1 2.33c1.17.664 1.17 1.75 0 2.414l-4.1 2.33-.078.045z" fill="#FFCE00" />
                                <path d="M17.652 15.261l-3.536-3.413L3.609 22.324c.385.404 1.023.428 1.439.186l12.604-7.249z" fill="#FF3A44" />
                                <path d="M17.652 8.318L5.048 1.069c-.416-.242-1.054-.218-1.439.186l10.507 10.507 3.536-3.444z" fill="#00F076" />
                            </svg>
                            <div className="text-left">
                                <span className="block text-xs text-white/70 uppercase tracking-wider">Disponible en</span>
                                <span className="block text-xl font-heading">Google Play</span>
                            </div>
                        </Link>
                    </div>

                    {/* Mockups de teléfonos */}
                    <div className="relative flex items-center justify-center lg:justify-end">
                        {/* Efecto de resplandor */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-80 h-80 bg-primary-gold/20 rounded-full blur-3xl animate-pulse" />
                        </div>

                        {/* Contenedor de mockups */}
                        <div className="relative flex items-end gap-4 md:gap-6">
                            {/* Teléfono trasero - Pantalla de login */}
                            <div className="relative animate-float" style={{ animationDelay: "0.5s" }}>
                                <div className="phone-frame phone-frame-back">
                                    <div className="phone-screen">
                                        <Image
                                            src="https://res.cloudinary.com/dm1fivmmh/image/upload/v1768226700/LoginCrece_hlj2h9.jpg"
                                            alt="CRECE Finance App - Pantalla de Login"
                                            fill
                                            className="object-cover object-top"
                                            sizes="(max-width: 768px) 160px, 200px"
                                        />
                                    </div>
                                    <div className="phone-notch" />
                                </div>
                            </div>

                            {/* Teléfono frontal - Menú principal */}
                            <div className="relative z-10 animate-float">
                                <div className="phone-frame phone-frame-front">
                                    <div className="phone-screen">
                                        <Image
                                            src="https://res.cloudinary.com/dm1fivmmh/image/upload/v1768226700/menuCrecePrincipal_f0rkyk.jpg"
                                            alt="CRECE Finance App - Menú Principal"
                                            fill
                                            className="object-cover object-top"
                                            sizes="(max-width: 768px) 200px, 260px"
                                        />
                                    </div>
                                    <div className="phone-notch" />
                                </div>
                                {/* Efecto de brillo */}
                                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
