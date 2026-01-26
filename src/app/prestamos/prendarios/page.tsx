"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import {
    Key,
    ArrowRight,
    CheckCircle2,
    Sparkles,
    Car,
    Smartphone,
    ShieldCheck
} from "lucide-react";
import { PRENDARIOS_BENEFITS } from "@/constants/products";

export default function PrenPage() {
    return (
        <>
            {/* Hero */}
            <PageHero
                title="Créditos "
                highlightText="Prendarios"
                description="Financiamiento con garantía prendaria para mayor seguridad y mejores condiciones."
                icon={Key}
                backText="Volver a Préstamos"
                backHref="/prestamos"
                imageSlug="prendarios"
            />

            {/* Contenido */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid gap-12 lg:grid-cols-3">
                        <div className="lg:col-span-2">
                            <h2 className="font-heading text-2xl font-bold text-primary-blue mb-6">
                                ¿Qué son los Créditos Prendarios?
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Los <strong className="text-primary-blue">Créditos Prendarios</strong> son préstamos
                                respaldados por una garantía (prenda) como vehículos, maquinaria u otros bienes
                                de valor, lo que permite acceder a mejores tasas y mayores montos.
                            </p>

                            <h3 className="font-heading text-xl font-bold text-primary-blue mb-4">
                                Beneficios
                            </h3>
                            <div className="grid gap-4 sm:grid-cols-2 mb-8">
                                {PRENDARIOS_BENEFITS.map((item) => (
                                    <div key={item} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-primary-gold flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <h3 className="font-heading text-xl font-bold text-primary-blue mb-4">
                                Garantías aceptadas
                            </h3>
                            <div className="grid gap-4 sm:grid-cols-3 mb-8">
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-primary-blue/5 border border-primary-blue/10">
                                    <Car className="h-6 w-6 text-primary-gold" />
                                    <span className="text-gray-700 font-medium">Vehículos</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-primary-blue/5 border border-primary-blue/10">
                                    <Smartphone className="h-6 w-6 text-primary-gold" />
                                    <span className="text-gray-700 font-medium">Equipos</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-primary-blue/5 border border-primary-blue/10">
                                    <Key className="h-6 w-6 text-primary-gold" />
                                    <span className="text-gray-700 font-medium">Maquinaria</span>
                                </div>
                            </div>
                        </div>

                        {/* Card lateral */}
                        <div>
                            <div className="sticky top-32 rounded-2xl bg-primary-blue/5 p-6 border border-primary-blue/10">
                                <div className="text-center mb-6">
                                    <Key className="h-10 w-10 text-primary-gold mx-auto mb-3" />
                                    <p className="text-sm text-gray-500">Monto disponible</p>
                                    <p className="text-2xl font-bold text-primary-blue">Según garantía</p>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                                        <span className="text-gray-600">Tasas</span>
                                        <span className="font-semibold text-primary-gold">Preferenciales</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                                        <span className="text-gray-600">Plazo</span>
                                        <span className="font-semibold text-primary-blue">Hasta 72 meses</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                                        <span className="text-gray-600">Uso del bien</span>
                                        <span className="font-semibold text-primary-gold">Lo conservas</span>
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
                        ¡Obtén mejores condiciones con tu garantía!
                    </h2>
                    <p className="text-white/80 mb-6 max-w-xl mx-auto">
                        Accede a tasas preferenciales respaldando tu crédito con una prenda.
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
