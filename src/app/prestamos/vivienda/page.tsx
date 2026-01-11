import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
    Home,
    ArrowRight,
    ArrowLeft,
    CheckCircle2,
    Sparkles,
    Hammer,
    Building2,
    ShieldCheck
} from "lucide-react";

export default function ViviendaPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-blue via-primary-blue-600 to-primary-blue-800">
                    <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-primary-gold/15 blur-3xl" />
                </div>

                <div className="container relative mx-auto px-6 z-10">
                    <Link href="/prestamos" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="h-4 w-4" />
                        Volver a Préstamos
                    </Link>

                    <div className="flex items-center gap-2 mb-4">
                        <span className="bg-primary-gold text-primary-blue text-xs font-bold px-3 py-1 rounded-full">
                            ⭐ POPULAR
                        </span>
                    </div>

                    <div className="flex items-start gap-6">
                        <div className="hidden md:flex h-20 w-20 items-center justify-center rounded-2xl bg-primary-gold/20 backdrop-blur">
                            <Home className="h-10 w-10 text-primary-gold" />
                        </div>
                        <div>
                            <h1 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl mb-4">
                                Créditos para <span className="text-primary-gold">Vivienda</span>
                            </h1>
                            <p className="text-xl text-white/80 max-w-2xl">
                                Financiamiento para remodelación, adquisición y construcción
                                de tu hogar.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none" className="w-full">
                        <path d="M0 100L48 94C96 88 192 76 288 68C384 60 480 56 576 58C672 60 768 68 864 72C960 76 1056 76 1152 70C1248 64 1344 52 1392 46L1440 40V100H0Z" fill="white" />
                    </svg>
                </div>
            </section>

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
                                para ayudarte a cumplir el sueño de tener tu propio hogar, ya sea para
                                adquisición, construcción o remodelación.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Con plazos extendidos y tasas competitivas, te acompañamos en este
                                importante paso hacia el bienestar de tu familia.
                            </p>

                            <h3 className="font-heading text-xl font-bold text-primary-blue mb-4">
                                Beneficios
                            </h3>
                            <div className="grid gap-4 sm:grid-cols-2 mb-8">
                                {[
                                    "Plazos hasta 20 años",
                                    "Tasas competitivas fijas",
                                    "Financiamiento hasta el 80%",
                                    "Asesoría inmobiliaria",
                                    "Proceso transparente",
                                    "Cuotas accesibles",
                                ].map((item) => (
                                    <div key={item} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-primary-gold flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <h3 className="font-heading text-xl font-bold text-primary-blue mb-4">
                                Modalidades
                            </h3>
                            <div className="grid gap-4 sm:grid-cols-3 mb-8">
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-primary-blue/5 border border-primary-blue/10">
                                    <Home className="h-6 w-6 text-primary-gold" />
                                    <span className="text-gray-700 font-medium">Adquisición</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-primary-blue/5 border border-primary-blue/10">
                                    <Building2 className="h-6 w-6 text-primary-gold" />
                                    <span className="text-gray-700 font-medium">Construcción</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-primary-blue/5 border border-primary-blue/10">
                                    <Hammer className="h-6 w-6 text-primary-gold" />
                                    <span className="text-gray-700 font-medium">Remodelación</span>
                                </div>
                            </div>
                        </div>

                        {/* Card lateral */}
                        <div>
                            <div className="sticky top-32 rounded-2xl bg-primary-blue/5 p-6 border-2 border-primary-gold">
                                <div className="text-center mb-6">
                                    <Home className="h-10 w-10 text-primary-gold mx-auto mb-3" />
                                    <p className="text-sm text-gray-500">Financiamiento</p>
                                    <p className="text-2xl font-bold text-primary-blue">Hasta 80%</p>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                                        <span className="text-gray-600">Plazo máximo</span>
                                        <span className="font-semibold text-primary-gold">20 años</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                                        <span className="text-gray-600">Tasa</span>
                                        <span className="font-semibold text-primary-blue">Fija competitiva</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                                        <span className="text-gray-600">Garantía</span>
                                        <span className="font-semibold text-primary-gold">Hipotecaria</span>
                                    </div>
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
                        ¡Haz realidad el sueño de tu hogar!
                    </h2>
                    <p className="text-white/80 mb-6 max-w-xl mx-auto">
                        Te ayudamos a construir, comprar o remodelar tu casa.
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
