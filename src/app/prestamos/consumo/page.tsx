"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import {
    CreditCard,
    ArrowRight,
    CheckCircle2,
    Sparkles,
    Heart,
    Calendar,
    ShieldCheck
} from "lucide-react";

export default function ConsumoPage() {
    return (
        <>
            {/* Hero */}
            <PageHero
                title="Créditos de "
                highlightText="Consumo"
                description="Para cubrir necesidades personales o imprevistos con flexibilidad en los pagos."
                icon={CreditCard}
                backText="Volver a Préstamos"
                backHref="/prestamos"
                imageSlug="consumo"
            />

            {/* Contenido */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid gap-12 lg:grid-cols-3">
                        <div className="lg:col-span-2">
                            <h2 className="font-heading text-2xl font-bold text-primary-blue mb-6">
                                ¿Qué son los Créditos de Consumo?
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Los <strong className="text-primary-blue">Créditos de Consumo</strong> están diseñados
                                para cubrir tus necesidades personales, ya sea para gastos imprevistos, compras
                                importantes o cualquier proyecto personal.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Con plazos flexibles y cuotas adaptadas a tu capacidad de pago, te ayudamos
                                a cumplir tus metas sin afectar tu economía familiar.
                            </p>

                            <h3 className="font-heading text-xl font-bold text-primary-blue mb-4">
                                Beneficios
                            </h3>
                            <div className="grid gap-4 sm:grid-cols-2 mb-8">
                                {[
                                    "Flexibilidad en los pagos",
                                    "Cuotas adaptadas a tu capacidad",
                                    "Sin restricción de uso",
                                    "Aprobación rápida",
                                    "Tasas competitivas",
                                    "Proceso sencillo",
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
                                    <Heart className="h-6 w-6 text-primary-gold" />
                                    <span className="text-gray-700 font-medium">Gastos personales</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-primary-blue/5 border border-primary-blue/10">
                                    <CreditCard className="h-6 w-6 text-primary-gold" />
                                    <span className="text-gray-700 font-medium">Compras</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-primary-blue/5 border border-primary-blue/10">
                                    <Calendar className="h-6 w-6 text-primary-gold" />
                                    <span className="text-gray-700 font-medium">Imprevistos</span>
                                </div>
                            </div>
                        </div>

                        {/* Card lateral */}
                        <div>
                            <div className="sticky top-32 rounded-2xl bg-primary-blue/5 p-6 border border-primary-blue/10">
                                <div className="text-center mb-6">
                                    <CreditCard className="h-10 w-10 text-primary-gold mx-auto mb-3" />
                                    <p className="text-sm text-gray-500">Monto disponible</p>
                                    <p className="text-2xl font-bold text-primary-blue">Hasta $15,000</p>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                                        <span className="text-gray-600">Aprobación</span>
                                        <span className="font-semibold text-primary-gold">24-48 horas</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                                        <span className="text-gray-600">Plazo</span>
                                        <span className="font-semibold text-primary-blue">Hasta 48 meses</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                                        <span className="text-gray-600">Uso</span>
                                        <span className="font-semibold text-primary-gold">Libre</span>
                                    </div>
                                </div>

                                <Link href="/contacto">
                                    <Button variant="primary" size="lg" className="w-full" rightIcon={<ArrowRight className="h-5 w-5" />}>
                                        Solicitar ahora
                                    </Button>
                                </Link>

                                <p className="text-center text-sm text-gray-500 mt-4">
                                    <ShieldCheck className="h-4 w-4 inline mr-1" />
                                    Proceso seguro y confidencial
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
                        ¡Cumple tus metas personales!
                    </h2>
                    <p className="text-white/80 mb-6 max-w-xl mx-auto">
                        Obtén el financiamiento que necesitas para lo que más importa.
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
