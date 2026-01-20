"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import {
    TrendingUp,
    ArrowRight,
    CheckCircle2,
    Sparkles,
    Percent,
    Zap,
    ShieldCheck,
    Star
} from "lucide-react";

export default function AccionesPlusPage() {
    return (
        <>
            {/* Hero */}
            <PageHero
                title="Acciones Preferidas "
                highlightText="Plus"
                description="Mayor rentabilidad con dividendos competitivos y condiciones preferenciales para maximizar el crecimiento de tu capital."
                icon={TrendingUp}
                badge="RECOMENDADO"
                backText="Volver a Inversiones"
                backHref="/inversiones"
                imageSlug="acciones-preferidas-plus"
            />

            {/* Contenido */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid gap-12 lg:grid-cols-3">
                        <div className="lg:col-span-2">
                            <h2 className="font-heading text-2xl font-bold text-primary-blue mb-6">
                                ¿Qué son las Acciones Preferidas Plus?
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Las <strong className="text-primary-blue">Acciones Preferidas Plus</strong> son una alternativa
                                de inversión dirigida a quienes buscan <strong className="text-primary-gold">mayor rentabilidad</strong>,
                                ofreciendo dividendos competitivos y condiciones preferenciales.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Este producto está orientado a inversionistas que desean maximizar el crecimiento de su
                                capital, participando activamente en el desarrollo y expansión de <strong className="text-primary-gold">CRECE FINANCE</strong>.
                            </p>

                            <h3 className="font-heading text-xl font-bold text-primary-blue mb-4">
                                Beneficios
                            </h3>
                            <div className="grid gap-4 sm:grid-cols-2 mb-8">
                                {[
                                    "Dividendos superiores frente a otras acciones",
                                    "Condiciones preferenciales exclusivas",
                                    "Participación en el crecimiento institucional",
                                    "Inversión sólida y confiable",
                                    "Mayor rentabilidad a largo plazo",
                                    "Asesoría personalizada para inversionistas",
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
                                    <Star className="h-6 w-6 text-primary-gold" />
                                    <span className="text-gray-700 font-medium">Mayor rentabilidad</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-primary-blue/5 border border-primary-blue/10">
                                    <Zap className="h-6 w-6 text-primary-gold" />
                                    <span className="text-gray-700 font-medium">Crecimiento activo</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-primary-blue/5 border border-primary-blue/10">
                                    <TrendingUp className="h-6 w-6 text-primary-gold" />
                                    <span className="text-gray-700 font-medium">Largo plazo</span>
                                </div>
                            </div>
                        </div>

                        {/* Card lateral */}
                        <div>
                            <div className="sticky top-32 rounded-2xl bg-primary-blue/5 p-6 border-2 border-primary-gold">
                                <div className="text-center mb-6">
                                    <TrendingUp className="h-10 w-10 text-primary-gold mx-auto mb-3" />
                                    <p className="text-sm text-gray-500">Tipo de inversión</p>
                                    <p className="text-2xl font-bold text-primary-blue">Preferidas Plus</p>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                                        <span className="text-gray-600">Rendimiento</span>
                                        <span className="font-semibold text-primary-gold">Superior</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                                        <span className="text-gray-600">Condiciones</span>
                                        <span className="font-semibold text-primary-gold">Preferenciales</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                                        <span className="text-gray-600">Dividendos</span>
                                        <span className="font-semibold text-primary-gold">Competitivos</span>
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
                        ¡Maximiza el crecimiento de tu capital!
                    </h2>
                    <p className="text-white/80 mb-6 max-w-xl mx-auto">
                        Las Acciones Preferidas Plus te ofrecen los mejores rendimientos del mercado.
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
