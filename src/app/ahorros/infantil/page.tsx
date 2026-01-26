"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import {
    Baby,
    ArrowRight,
    CheckCircle2,
    Calendar,
    Sparkles,
    Cake,
    BookOpen,
    Heart,
    ShieldCheck
} from "lucide-react";

export default function AhorroInfantilPage() {
    return (
        <>
            {/* Hero */}
            <PageHero
                title="Ahorro "
                highlightText="Infantil"
                description="Siembra el hábito del ahorro desde temprana edad. Una cuenta especial para que los más pequeños aprendan el valor del dinero."
                icon={Baby}
                backText="Volver a Ahorros"
                backHref="/ahorros"
                imageSlug="infantil"
            />

            {/* Contenido */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid gap-12 lg:grid-cols-3">
                        <div className="lg:col-span-2">
                            <h2 className="font-heading text-2xl font-bold text-primary-blue mb-6">
                                ¿Qué es el Ahorro Infantil?
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                El <strong className="text-primary-blue">Ahorro Infantil</strong> está pensado para fomentar el hábito del ahorro
                                en los niños desde temprana edad. Es una cuenta a nombre del menor donde pueden
                                depositar sus ahorros y verlos crecer.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Los fondos están disponibles en el <strong className="text-primary-gold">mes de cumpleaños</strong> del niño,
                                creando una experiencia especial y educativa que les enseña el valor de la
                                paciencia y la planificación financiera.
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
                                            <span className="text-sm text-gray-700">Ser Socio(a)</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-primary-gold flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700">Apertura USD$10.00</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-primary-gold flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700">Copia de partida de nacimiento del menor</span>
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
                                            <span className="text-sm text-gray-700">DUI del padre/madre o tutor</span>
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
                                    <p className="text-2xl font-bold text-primary-blue">Mes de Cumpleaños</p>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                                        <span className="text-gray-600">Edad</span>
                                        <span className="font-semibold text-primary-blue">0 - 17 años</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                                        <span className="text-gray-600">Monto mínimo</span>
                                        <span className="font-semibold text-primary-blue">$5.00</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                                        <span className="text-gray-600">Titular</span>
                                        <span className="font-semibold text-primary-blue">El menor</span>
                                    </div>
                                </div>

                                <Link href="/contacto">
                                    <Button variant="primary" size="lg" className="w-full" rightIcon={<ArrowRight className="h-5 w-5" />}>
                                        Abrir cuenta
                                    </Button>
                                </Link>

                                <p className="text-center text-sm text-gray-500 mt-4">
                                    <ShieldCheck className="h-4 w-4 inline mr-1" />
                                    Cuenta supervisada por padres/tutores
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
                        ¡Enséñales a ahorrar desde pequeños!
                    </h2>
                    <p className="text-white/80 mb-6 max-w-xl mx-auto">
                        Abre una cuenta de Ahorro Infantil y siembra las semillas de un futuro financiero saludable.
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
