"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import {
    Gift,
    ArrowRight,
    CheckCircle2,
    Calendar,
    Sparkles,
    Users,
    TrendingUp,
    ShieldCheck,
    Star
} from "lucide-react";

export default function AhorroNavidenoPage() {
    return (
        <>
            {/* Hero */}
            <PageHero
                title="Ahorro "
                highlightText="Navideño"
                description="Celebra las fiestas sin preocupaciones financieras. Ahorra durante todo el año y disfruta de diciembre con tranquilidad."
                icon={Gift}
                backText="Volver a Ahorros"
                backHref="/ahorros"
                imageSlug="navideno"
            />

            {/* Contenido */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid gap-12 lg:grid-cols-3">
                        {/* Info principal */}
                        <div className="lg:col-span-2">
                            <h2 className="font-heading text-2xl font-bold text-primary-blue mb-6">
                                ¿Qué es el Ahorro Navideño?
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                El <strong className="text-primary-blue">Ahorro Navideño</strong> es un producto diseñado para ayudarte a planificar
                                tus gastos de fin de año con anticipación. Realiza depósitos durante todo el año y
                                ten disponible tu dinero a partir del <strong className="text-primary-gold">1 de diciembre</strong>, justo cuando
                                más lo necesitas.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Con tasas de interés atractivas, tu dinero crece mientras ahorras, permitiéndote
                                disfrutar de las celebraciones navideñas, comprar regalos y cubrir todos los gastos
                                de temporada sin afectar tu economía familiar.
                            </p>

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
                            <div className="sticky top-32 rounded-2xl bg-primary-blue/5 p-6 border border-primary-blue/10">
                                <div className="text-center mb-6">
                                    <Calendar className="h-10 w-10 text-primary-gold mx-auto mb-3" />
                                    <p className="text-sm text-gray-500">Disponibilidad</p>
                                    <p className="text-2xl font-bold text-primary-blue">1 de Diciembre</p>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                                        <span className="text-gray-600">Monto mínimo</span>
                                        <span className="font-semibold text-primary-blue">$5.00</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                                        <span className="text-gray-600">Depósitos</span>
                                        <span className="font-semibold text-primary-blue">Flexibles</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                                        <span className="text-gray-600">Intereses</span>
                                        <span className="font-semibold text-primary-gold">Competitivos</span>
                                    </div>
                                </div>

                                <Link href="/contacto">
                                    <Button variant="primary" size="lg" className="w-full" rightIcon={<ArrowRight className="h-5 w-5" />}>
                                        Abrir mi cuenta
                                    </Button>
                                </Link>

                                <p className="text-center text-sm text-gray-500 mt-4">
                                    <ShieldCheck className="h-4 w-4 inline mr-1" />
                                    Tu dinero está protegido
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
                        ¡Empieza a ahorrar para esta Navidad!
                    </h2>
                    <p className="text-white/80 mb-6 max-w-xl mx-auto">
                        Abre tu cuenta de Ahorro Navideño hoy y disfruta de las fiestas sin estrés financiero.
                    </p>
                    <Link href="/contacto">
                        <Button variant="primary" size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
                            Contáctanos ahora
                        </Button>
                    </Link>
                </div>
            </section>
        </>
    );
}
