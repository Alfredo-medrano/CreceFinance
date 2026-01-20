"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import {
    ShoppingBag,
    ArrowRight,
    CheckCircle2,
    Sparkles,
    Store,
    TrendingUp,
    ShieldCheck
} from "lucide-react";

export default function ComercioPage() {
    return (
        <>
            {/* Hero */}
            <PageHero
                title="Créditos de "
                highlightText="Comercio"
                description="Financiamiento ideal para comerciantes y empresarios que buscan expandir o fortalecer sus negocios."
                icon={ShoppingBag}
                backText="Volver a Préstamos"
                backHref="/prestamos"
                imageSlug="comercio"
            />

            {/* Contenido */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid gap-12 lg:grid-cols-3">
                        <div className="lg:col-span-2">
                            <h2 className="font-heading text-2xl font-bold text-primary-blue mb-6">
                                ¿Qué son los Créditos de Comercio?
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Los <strong className="text-primary-blue">Créditos de Comercio</strong> están diseñados
                                para comerciantes y empresarios que buscan capital para expandir, fortalecer o
                                modernizar sus negocios.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Con montos más elevados y plazos adaptados a la realidad comercial, te ayudamos
                                a llevar tu negocio al siguiente nivel.
                            </p>

                            <h3 className="font-heading text-xl font-bold text-primary-blue mb-4">
                                Beneficios
                            </h3>
                            <div className="grid gap-4 sm:grid-cols-2 mb-8">
                                {[
                                    "Montos elevados según capacidad",
                                    "Plazos adaptados al flujo comercial",
                                    "Tasas competitivas",
                                    "Desembolso rápido",
                                    "Asesoría empresarial incluida",
                                    "Renovación automática disponible",
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
                                    <Store className="h-6 w-6 text-primary-gold" />
                                    <span className="text-gray-700 font-medium">Comerciantes</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-primary-blue/5 border border-primary-blue/10">
                                    <ShoppingBag className="h-6 w-6 text-primary-gold" />
                                    <span className="text-gray-700 font-medium">Inventario</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-primary-blue/5 border border-primary-blue/10">
                                    <TrendingUp className="h-6 w-6 text-primary-gold" />
                                    <span className="text-gray-700 font-medium">Expansión</span>
                                </div>
                            </div>
                        </div>

                        {/* Card lateral */}
                        <div>
                            <div className="sticky top-32 rounded-2xl bg-primary-blue/5 p-6 border border-primary-blue/10">
                                <div className="text-center mb-6">
                                    <ShoppingBag className="h-10 w-10 text-primary-gold mx-auto mb-3" />
                                    <p className="text-sm text-gray-500">Monto disponible</p>
                                    <p className="text-2xl font-bold text-primary-blue">Hasta $50,000</p>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                                        <span className="text-gray-600">Aprobación</span>
                                        <span className="font-semibold text-primary-gold">48-72 horas</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                                        <span className="text-gray-600">Plazo</span>
                                        <span className="font-semibold text-primary-blue">Hasta 60 meses</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                                        <span className="text-gray-600">Tasas</span>
                                        <span className="font-semibold text-primary-gold">Competitivas</span>
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
                        ¡Expande tu negocio hoy!
                    </h2>
                    <p className="text-white/80 mb-6 max-w-xl mx-auto">
                        Obtén el capital que necesitas para llevar tu comercio al siguiente nivel.
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
