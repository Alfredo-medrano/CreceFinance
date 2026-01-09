import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
    Gift,
    ArrowRight,
    ArrowLeft,
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
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-blue via-primary-blue-600 to-primary-blue-800">
                    <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-primary-gold/15 blur-3xl" />
                    <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] rounded-full bg-primary-gold/10 blur-3xl" />
                </div>

                <div className="container relative mx-auto px-6 z-10">
                    <Link href="/ahorros" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="h-4 w-4" />
                        Volver a Ahorros
                    </Link>

                    <div className="flex items-start gap-6">
                        <div className="hidden md:flex h-20 w-20 items-center justify-center rounded-2xl bg-primary-gold/20 backdrop-blur">
                            <Gift className="h-10 w-10 text-primary-gold" />
                        </div>
                        <div>
                            <h1 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl mb-4">
                                Ahorro <span className="text-primary-gold">Navideño</span>
                            </h1>
                            <p className="text-xl text-white/80 max-w-2xl">
                                Celebra las fiestas sin preocupaciones financieras. Ahorra durante todo el año
                                y disfruta de diciembre con tranquilidad.
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

                            <h3 className="font-heading text-xl font-bold text-primary-blue mb-4">
                                Beneficios
                            </h3>
                            <div className="grid gap-4 sm:grid-cols-2 mb-8">
                                {[
                                    "Disponible a partir del 1 de diciembre",
                                    "Tasas de interés competitivas",
                                    "Fomenta el ahorro programado",
                                    "Ideal para regalos y celebraciones",
                                    "Sin costo de apertura",
                                    "Retiros parciales opcionales",
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
                                    <span className="text-gray-700 font-medium">Regalos</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-primary-blue/5 border border-primary-blue/10">
                                    <Users className="h-6 w-6 text-primary-gold" />
                                    <span className="text-gray-700 font-medium">Celebraciones</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-primary-blue/5 border border-primary-blue/10">
                                    <TrendingUp className="h-6 w-6 text-primary-gold" />
                                    <span className="text-gray-700 font-medium">Gastos de temporada</span>
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
