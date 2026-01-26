"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import {
    Award,
    ArrowRight,
    CheckCircle2,
    Sparkles,
    Clock,
    ShieldCheck,
    Percent
} from "lucide-react";

export default function AccionesPrefsPage() {
    return (
        <>
            {/* Hero */}
            <PageHero
                title="Acciones "
                highlightText="Preferentes"
                description="Rendimientos fijos y atractivos a través del pago de dividendos."
                icon={Award}
                backText="Volver a Inversiones"
                backHref="/inversiones"
                imageSlug="acciones-preferidas"
            />

            {/* Contenido */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid gap-12 lg:grid-cols-3">
                        <div className="lg:col-span-2">
                            <h2 className="font-heading text-2xl font-bold text-primary-blue mb-6">
                                ¿Qué son las Acciones Preferentes?
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Las <strong className="text-primary-blue">Acciones Preferentes</strong> están diseñadas para
                                inversionistas que buscan rendimientos fijos y atractivos, a través del pago de dividendos.
                            </p>

                            <h3 className="font-heading text-xl font-bold text-primary-blue mb-4">
                                Beneficios
                            </h3>
                            <div className="grid gap-4 sm:grid-cols-2 mb-8">
                                {[
                                    "Rendimiento fijo mediante el pago de dividendos",
                                    "Inversión a mediano y largo plazo",
                                    "Respaldo institucional sólido y confiable",
                                ].map((item) => (
                                    <div key={item} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-primary-gold flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <h3 className="font-heading text-xl font-bold text-primary-blue mb-4">
                                Ideal para
                            </h3>
                            <div className="grid gap-4 sm:grid-cols-3 mb-8">
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-primary-blue/5 border border-primary-blue/10">
                                    <Percent className="h-6 w-6 text-primary-gold" />
                                    <span className="text-gray-700 font-medium">Dividendos fijos</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-primary-blue/5 border border-primary-blue/10">
                                    <Clock className="h-6 w-6 text-primary-gold" />
                                    <span className="text-gray-700 font-medium">Mediano plazo</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-primary-blue/5 border border-primary-blue/10">
                                    <ShieldCheck className="h-6 w-6 text-primary-gold" />
                                    <span className="text-gray-700 font-medium">Estabilidad</span>
                                </div>
                            </div>
                        </div>

                        {/* Card lateral */}
                        <div>
                            <div className="sticky top-32 rounded-2xl bg-primary-blue/5 p-6 border border-primary-blue/10">
                                <div className="text-center mb-6">
                                    <Award className="h-10 w-10 text-primary-gold mx-auto mb-3" />
                                    <p className="text-sm text-gray-500">Tipo de inversión</p>
                                    <p className="text-2xl font-bold text-primary-blue">Acciones Preferentes</p>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                                        <span className="text-gray-600">Rendimiento</span>
                                        <span className="font-semibold text-primary-gold">Fijo</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                                        <span className="text-gray-600">Plazo</span>
                                        <span className="font-semibold text-primary-blue">Mediano/Largo</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                                        <span className="text-gray-600">Dividendos</span>
                                        <span className="font-semibold text-primary-gold">Atractivos</span>
                                    </div>
                                </div>

                                <Link href="/contacto">
                                    <Button variant="primary" size="lg" className="w-full" rightIcon={<ArrowRight className="h-5 w-5" />}>
                                        Invertir ahora
                                    </Button>
                                </Link>

                                <p className="text-center text-sm text-gray-500 mt-4">
                                    <ShieldCheck className="h-4 w-4 inline mr-1" />
                                    Inversión respaldada institucionalmente
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
                        ¡Invierte en tu futuro hoy!
                    </h2>
                    <p className="text-white/80 mb-6 max-w-xl mx-auto">
                        Las Acciones Preferentes te ofrecen rendimientos estables y la seguridad que buscas.
                    </p>
                    <Link href="/contacto">
                        <Button variant="primary" size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
                            Contáctanos
                        </Button>
                    </Link>
                </div>
            </section>
        </>
    );
}
