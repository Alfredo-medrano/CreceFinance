"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import {
    Home,
    ArrowRight,
    CheckCircle2,
    Sparkles,
    Hammer,
    ShieldCheck,
    Wrench
} from "lucide-react";
import { VIVIENDA_BENEFITS } from "@/constants/products";

export default function ViviendaPage() {
    return (
        <>
            {/* Hero */}
            <PageHero
                title="Créditos para "
                highlightText="Vivienda"
                description="Financiamiento para remodelación y reparación de tu vivienda."
                icon={Home}
                badge="POPULAR"
                backText="Volver a Préstamos"
                backHref="/prestamos"
                imageSlug="vivienda"
            />

            {/* Contenido */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid gap-12 lg:grid-cols-3">
                        <div className="lg:col-span-2">
                            <h2 className="font-heading text-2xl font-bold text-primary-blue mb-6">
                                ¿Qué son los Créditos para Vivienda?
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Los <strong className="text-primary-blue">Créditos para Vivienda</strong> están diseñados
                                para ayudarte a mejorar tu vivienda, ya sea para remodelación o reparación.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Con tasas competitivas, te acompañamos en este
                                importante paso hacia el bienestar de tu familia.
                            </p>

                            <h3 className="font-heading text-xl font-bold text-primary-blue mb-4">
                                Beneficios
                            </h3>
                            <div className="grid gap-4 sm:grid-cols-2 mb-8">
                                {VIVIENDA_BENEFITS.map((item) => (
                                    <div key={item} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-primary-gold flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <h3 className="font-heading text-xl font-bold text-primary-blue mb-4">
                                Modalidades
                            </h3>
                            <div className="grid gap-4 sm:grid-cols-2 mb-8">
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-primary-blue/5 border border-primary-blue/10">
                                    <Hammer className="h-6 w-6 text-primary-gold" />
                                    <span className="text-gray-700 font-medium">Remodelación</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-primary-blue/5 border border-primary-blue/10">
                                    <Wrench className="h-6 w-6 text-primary-gold" />
                                    <span className="text-gray-700 font-medium">Reparación</span>
                                </div>
                            </div>
                        </div>

                        {/* Card lateral */}
                        <div>
                            <div className="sticky top-32 rounded-2xl bg-primary-blue/5 p-6 border-2 border-primary-gold">
                                <div className="text-center mb-6">
                                    <Home className="h-10 w-10 text-primary-gold mx-auto mb-3" />
                                    <p className="text-sm text-gray-500">Crédito para Vivienda</p>
                                    <p className="text-2xl font-bold text-primary-blue">Remodelación y Reparación</p>
                                </div>

                                <Link href="/contacto">
                                    <Button variant="primary" size="lg" className="w-full" rightIcon={<ArrowRight className="h-5 w-5" />}>
                                        Solicitar ahora
                                    </Button>
                                </Link>

                                <p className="text-center text-sm text-gray-500 mt-4">
                                    <ShieldCheck className="h-4 w-4 inline mr-1" />
                                    Asesoría personalizada
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-primary-blue to-primary-blue-600">
                <div className="container mx-auto px-6 text-center">
                    <Sparkles className="h-10 w-10 text-primary-gold mx-auto mb-4" />
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
                        ¡Mejora tu vivienda hoy!
                    </h2>
                    <p className="text-white/80 mb-6 max-w-xl mx-auto">
                        Te ayudamos a remodelar o reparar tu vivienda con las mejores condiciones.
                    </p>
                    <Link href="/contacto">
                        <Button variant="primary" size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
                            Solicitar crédito
                        </Button>
                    </Link>
                </div>
            </section>
        </>
    );
}
