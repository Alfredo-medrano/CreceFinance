import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
    Landmark,
    ArrowRight,
    ArrowLeft,
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
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-blue via-primary-blue-600 to-primary-blue-800">
                    <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-primary-gold/15 blur-3xl" />
                </div>

                <div className="container relative mx-auto px-6 z-10">
                    <Link href="/ahorros" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="h-4 w-4" />
                        Volver a Ahorros
                    </Link>

                    <div className="flex items-center gap-2 mb-4">
                        <span className="bg-primary-gold text-primary-blue text-xs font-bold px-3 py-1 rounded-full">
                            ⭐ MÁS POPULAR
                        </span>
                    </div>

                    <div className="flex items-start gap-6">
                        <div className="hidden md:flex h-20 w-20 items-center justify-center rounded-2xl bg-primary-gold/20 backdrop-blur">
                            <Landmark className="h-10 w-10 text-primary-gold" />
                        </div>
                        <div>
                            <h1 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl mb-4">
                                Depósito a <span className="text-primary-gold">Plazo Fijo</span>
                            </h1>
                            <p className="text-xl text-white/80 max-w-2xl">
                                Maximiza tus rendimientos con las tasas de interés más atractivas del mercado.
                                Ideal para inversiones seguras.
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
                                Beneficios
                            </h3>
                            <div className="grid gap-4 sm:grid-cols-2 mb-8">
                                {[
                                    "Las tasas de interés más atractivas",
                                    "Plazos flexibles desde 90 días",
                                    "Intereses pagados al vencimiento",
                                    "Renovación automática opcional",
                                    "Certificado de depósito",
                                    "Tu dinero trabajando para ti",
                                ].map((item) => (
                                    <div key={item} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-primary-gold flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>

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

                            <h3 className="font-heading text-xl font-bold text-primary-blue mb-4">
                                Ideal para
                            </h3>
                            <div className="grid gap-4 sm:grid-cols-3 mb-8">
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-primary-blue/5 border border-primary-blue/10">
                                    <TrendingUp className="h-6 w-6 text-primary-gold" />
                                    <span className="text-gray-700 font-medium">Inversiones</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-primary-blue/5 border border-primary-blue/10">
                                    <Clock className="h-6 w-6 text-primary-gold" />
                                    <span className="text-gray-700 font-medium">Metas a plazo</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-primary-blue/5 border border-primary-blue/10">
                                    <Percent className="h-6 w-6 text-primary-gold" />
                                    <span className="text-gray-700 font-medium">Rendimientos</span>
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
