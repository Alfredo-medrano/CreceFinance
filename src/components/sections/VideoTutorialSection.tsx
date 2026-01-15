"use client";

import { Play, CheckCircle, Smartphone, Shield, CreditCard } from "lucide-react";

/**
 * Pasos del tutorial de la aplicación
 */
const tutorialSteps = [
    {
        icon: Smartphone,
        title: "Descarga la App",
        description: "Disponible en Google Play Store",
    },
    {
        icon: Shield,
        title: "Regístrate Seguro",
        description: "Crea tu cuenta en minutos",
    },
    {
        icon: CreditCard,
        title: "Gestiona tus Finanzas",
        description: "Accede a todos los servicios",
    },
];

interface VideoTutorialSectionProps {
    videoId?: string;
}

/**
 * Sección de video tutorial
 * Muestra un video de YouTube embebido con pasos guía
 * @param videoId - ID del video de YouTube (valor después de v= en la URL)
 */
export function VideoTutorialSection({
    videoId = "dQw4w9WgXcQ"
}: VideoTutorialSectionProps) {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                {/* Encabezado de sección */}
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 mb-4 rounded-full bg-primary-blue/10 px-4 py-2 text-sm font-semibold text-primary-blue">
                        <Play className="w-4 h-4" />
                        <span>Tutorial</span>
                    </span>
                    <h2 className="mb-4 font-heading text-3xl font-bold text-primary-blue md:text-4xl lg:text-5xl">
                        Aprende a usar la App
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        Mira nuestro video tutorial y descubre lo fácil que es gestionar
                        tus finanzas desde la palma de tu mano.
                    </p>
                </div>

                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    {/* Reproductor de video */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary-blue/20">
                            {/* Borde degradado */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-blue via-primary-gold to-primary-blue p-[3px] rounded-2xl">
                                <div className="w-full h-full bg-black rounded-xl" />
                            </div>

                            {/* Video de YouTube */}
                            <div className="relative aspect-video rounded-xl overflow-hidden">
                                <iframe
                                    src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                                    title="Tutorial CRECE Finance App"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute inset-0 w-full h-full"
                                />
                            </div>
                        </div>

                        {/* Efectos decorativos */}
                        <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary-gold/20 rounded-full blur-2xl" />
                        <div className="absolute -left-6 -bottom-6 w-32 h-32 bg-primary-blue/20 rounded-full blur-2xl" />
                    </div>

                    {/* Panel de pasos */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="mb-4 font-heading text-2xl font-bold text-primary-blue">
                                Comienza en 3 simples pasos
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Nuestra aplicación está diseñada para que puedas acceder a todos
                                los servicios de CRECE FINANCE de manera rápida y segura. Sigue
                                estos pasos para comenzar:
                            </p>
                        </div>

                        {/* Lista de pasos */}
                        <div className="space-y-6">
                            {tutorialSteps.map((step, index) => (
                                <div
                                    key={step.title}
                                    className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-primary-blue/5 transition-colors duration-300"
                                >
                                    <div className="flex items-center justify-center shrink-0">
                                        <div className="relative">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary-blue to-primary-gold text-white font-bold">
                                                {index + 1}
                                            </div>
                                            <step.icon className="absolute -right-1 -bottom-1 w-5 h-5 text-primary-gold bg-white rounded-full p-0.5" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-heading font-bold text-primary-blue">
                                            {step.title}
                                        </h4>
                                        <p className="text-sm text-gray-600">{step.description}</p>
                                    </div>
                                    <CheckCircle className="ml-auto shrink-0 w-5 h-5 text-emerald-500" />
                                </div>
                            ))}
                        </div>

                        {/* Tarjeta de soporte */}
                        <div className="p-6 rounded-xl bg-gradient-to-r from-primary-blue to-primary-blue-600 text-white">
                            <div className="flex items-center gap-4">
                                <div className="flex-1">
                                    <h4 className="font-heading font-bold mb-1">
                                        ¿Necesitas ayuda adicional?
                                    </h4>
                                    <p className="text-sm text-white/80">
                                        Nuestro equipo de soporte está disponible para ayudarte.
                                    </p>
                                </div>
                                <a
                                    href="/contacto"
                                    className="shrink-0 px-4 py-2 bg-primary-gold text-primary-blue font-bold rounded-lg hover:bg-primary-gold-300 transition-colors"
                                >
                                    Contáctanos
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
