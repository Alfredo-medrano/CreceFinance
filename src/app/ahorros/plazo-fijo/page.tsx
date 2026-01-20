"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import {
    Landmark,
    ArrowRight,
    CheckCircle2,
    Calendar,
    Sparkles,
    TrendingUp,
    Clock,
    Percent,
    ShieldCheck
} from "lucide-react";

export default function DepositoPlazoFijoPage() {
    const plazos = [
        { tiempo: "90 días", descripcion: "Corto plazo" },
        { tiempo: "180 días", descripcion: "Medio plazo" },
        { tiempo: "360 días", descripcion: "Largo plazo" },
        { tiempo: "Personalizado", descripcion: "A tu medida" },
    ];

    return (
        <>
            {/* Hero */}
            <PageHero
                title="Depósito a "
                highlightText="Plazo Fijo"
                description="Maximiza tus rendimientos con las tasas de interés más atractivas del mercado. Ideal para inversiones seguras."
                icon={Landmark}
                badge="MÁS POPULAR"
                backText="Volver a Ahorros"
                backHref="/ahorros"
                imageSlug="plazo-fijo"
            />

            {/* Contenido */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid gap-12 lg:grid-cols-3">
                        <div className="lg:col-span-2">
                            <h2 className="font-heading text-2xl font-bold text-primary-blue mb-6">
                                ¿Qué es el Depósito a Plazo Fijo?
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                El <strong>Depósito a Plazo Fijo</strong> es la opción ideal si buscas
                                el máximo rendimiento para tu dinero. Al mantener tu inversión por un
                                período determinado, obtienes las tasas de interés más atractivas del mercado.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Puedes elegir el plazo que mejor se adapte a tus necesidades, desde 90 días
                                hasta plazos personalizados. Al vencimiento, recibes tu capital más los
                                intereses generados.
                            </p>

                            <h3 className="font-heading text-xl font-bold text-primary-blue mb-4">
                                Plazos disponibles
                            </h3>
                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                                {plazos.map((plazo) => (
                                    <div key={plazo.tiempo} className="text-center p-4 rounded-xl bg-primary-blue/5 border border-primary-blue/10">
                                        <p className="text-xl font-bold text-primary-gold">{plazo.tiempo}</p>
                                        <p className="text-sm text-gray-500">{plazo.descripcion}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Requisitos por categoría */}
                            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                                {/* Generales */}
                                <div>
                                    <p className="text-xs text-primary-gold font-semibold mb-1">Requisitos</p>
                                    <h4 className="font-heading font-bold text-primary-blue mb-3">Generales</h4>
                                    <div className="space-y-2">
                                        <div className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-primary-gold flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700">Mayor 18 años</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-primary-gold flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700">Ser Socio(a)</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-primary-gold flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700">Apertura USD$10.00</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Personas */}
                                <div>
                                    <p className="text-xs text-primary-gold font-semibold mb-1">Requisitos</p>
                                    <h4 className="font-heading font-bold text-primary-blue mb-3">Personas</h4>
                                    <div className="space-y-2">
                                        <div className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-primary-gold flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700">DUI</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Empresas */}
                                <div>
                                    <p className="text-xs text-primary-gold font-semibold mb-1">Requisitos</p>
                                    <h4 className="font-heading font-bold text-primary-blue mb-3">Empresas</h4>
                                    <div className="space-y-2">
                                        <div className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-primary-gold flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700">Escritura de Constitución</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-primary-gold flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700">Acuerdo de Apertura</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-primary-gold flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700">Tarjeta de IVA y NIT</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-primary-gold flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700">Credencial Vigente Representante Legal</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-primary-gold flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700">DUI Representante Legal</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-primary-gold flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700">Otros que sean requeridos</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Extranjeros */}
                                <div>
                                    <p className="text-xs text-primary-gold font-semibold mb-1">Requisitos</p>
                                    <h4 className="font-heading font-bold text-primary-blue mb-3">Extranjeros</h4>
                                    <div className="space-y-2">
                                        <div className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-primary-gold flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700">Carnet de Residente o Pasaporte</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card lateral */}
                        <div>
                            <div className="sticky top-32 rounded-2xl bg-primary-blue/5 p-6 border-2 border-primary-gold">
                                <div className="text-center mb-6">
                                    <Calendar className="h-10 w-10 text-primary-gold mx-auto mb-3" />
                                    <p className="text-sm text-gray-500">Disponibilidad</p>
                                    <p className="text-2xl font-bold text-primary-gold">Al Vencimiento</p>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                                        <span className="text-gray-600">Monto mínimo</span>
                                        <span className="font-semibold text-primary-blue">$100.00</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                                        <span className="text-gray-600">Plazo mínimo</span>
                                        <span className="font-semibold text-primary-blue">90 días</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                                        <span className="text-gray-600">Intereses</span>
                                        <span className="font-semibold text-primary-gold">Los mejores</span>
                                    </div>
                                </div>

                                <Link href="/contacto">
                                    <Button variant="primary" size="lg" className="w-full" rightIcon={<ArrowRight className="h-5 w-5" />}>
                                        Invertir ahora
                                    </Button>
                                </Link>

                                <p className="text-center text-sm text-gray-500 mt-4">
                                    <ShieldCheck className="h-4 w-4 inline mr-1" />
                                    Inversión 100% segura
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
                        ¡Haz que tu dinero trabaje para ti!
                    </h2>
                    <p className="text-white/80 mb-6 max-w-xl mx-auto">
                        Invierte en un Depósito a Plazo Fijo y obtén los mejores rendimientos del mercado.
                    </p>
                    <Link href="/contacto">
                        <Button variant="secondary" size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
                            Contáctanos
                        </Button>
                    </Link>
                </div>
            </section>
        </>
    );
}
