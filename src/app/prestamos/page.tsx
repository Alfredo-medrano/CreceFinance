import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
    Banknote,
    ArrowRight,
    Sparkles,
    ShieldCheck,
    Clock,
    Briefcase,
    ShoppingBag,
    CreditCard,
    Key,
    Home,
    Users
} from "lucide-react";

const productosCredito = [
    {
        id: "microcreditos",
        icon: Briefcase,
        title: "Microcréditos",
        description: "Financiamiento accesible y rápido para pequeños emprendedores que buscan impulsar su negocio.",
        href: "/prestamos/microcreditos",
    },
    {
        id: "comercio",
        icon: ShoppingBag,
        title: "Créditos de Comercio",
        description: "Ideales para comerciantes y empresarios que buscan expandir o fortalecer sus negocios.",
        href: "/prestamos/comercio",
    },
    {
        id: "consumo",
        icon: CreditCard,
        title: "Créditos de Consumo",
        description: "Para cubrir necesidades personales o imprevistos con flexibilidad en pagos.",
        href: "/prestamos/consumo",
    },
    {
        id: "prendarios",
        icon: Key,
        title: "Créditos Prendarios",
        description: "Otorgados con garantía prendaria para mayor seguridad en la financiación.",
        href: "/prestamos/prendarios",
    },
    {
        id: "vivienda",
        icon: Home,
        title: "Créditos para Vivienda",
        description: "Para remodelación, adquisición y construcción de tu hogar.",
        href: "/prestamos/vivienda",
        destacado: true,
    },
];

const beneficios = [
    { icon: Clock, title: "Aprobación Rápida", description: "Respuesta en 24-48h" },
    { icon: ShieldCheck, title: "Tasas Competitivas", description: "Las mejores del mercado" },
    { icon: Users, title: "Atención Personal", description: "Asesores dedicados" },
    { icon: Banknote, title: "Plazos Flexibles", description: "Adaptados a ti" },
];

export default function PrestamosPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-blue via-primary-blue-600 to-primary-blue-800">
                    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="goldLinePrestamos" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#e5a810" stopOpacity="0" />
                                <stop offset="50%" stopColor="#e5a810" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#e5a810" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <line x1="0" y1="40%" x2="100%" y2="55%" stroke="url(#goldLinePrestamos)" strokeWidth="1" />
                        <line x1="0" y1="60%" x2="100%" y2="75%" stroke="url(#goldLinePrestamos)" strokeWidth="2" />
                    </svg>
                    <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary-gold/10 blur-3xl" />
                </div>

                <div className="container relative mx-auto px-6 z-10">
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center gap-2 mb-6 rounded-full bg-primary-gold/20 px-5 py-2.5 text-sm font-semibold text-primary-gold border border-primary-gold/30">
                            <Banknote className="h-4 w-4" />
                            Créditos y Préstamos
                        </span>
                        <h1 className="mb-6 font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl leading-tight">
                            Financiamiento para <span className="text-primary-gold">crecer</span>
                        </h1>
                        <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                            Brindamos financiamiento para impulsar el crecimiento económico de
                            nuestros clientes con opciones adaptadas a cada necesidad.
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none" className="w-full">
                        <path d="M0 100L48 94C96 88 192 76 288 68C384 60 480 56 576 58C672 60 768 68 864 72C960 76 1056 76 1152 70C1248 64 1344 52 1392 46L1440 40V100H0Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* Beneficios */}
            <section className="py-12 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {beneficios.map((item) => (
                            <div key={item.title} className="flex items-center gap-4 p-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-gold/10">
                                    <item.icon className="h-6 w-6 text-primary-gold" />
                                </div>
                                <div>
                                    <p className="font-semibold text-primary-blue">{item.title}</p>
                                    <p className="text-sm text-gray-500">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Productos */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-3xl font-bold text-primary-blue md:text-4xl mb-4">
                            Tipos de crédito
                        </h2>
                        <p className="text-gray-600 max-w-xl mx-auto">
                            Elige el financiamiento que mejor se adapte a tus necesidades
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {productosCredito.map((producto) => (
                            <Link
                                key={producto.id}
                                href={producto.href}
                                className={`group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 ${producto.destacado ? "ring-2 ring-primary-gold" : ""
                                    }`}
                            >
                                {producto.destacado && (
                                    <span className="absolute top-3 right-3 bg-primary-gold text-primary-blue text-xs font-bold px-2 py-1 rounded-full">
                                        Popular
                                    </span>
                                )}

                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary-blue to-primary-blue-600 text-white mb-4 group-hover:scale-110 transition-transform">
                                    <producto.icon className="h-7 w-7" />
                                </div>

                                <h3 className="font-heading text-xl font-bold text-primary-blue mb-2">
                                    {producto.title}
                                </h3>

                                <p className="text-gray-600 mb-4 line-clamp-2">
                                    {producto.description}
                                </p>

                                <span className="inline-flex items-center gap-2 text-primary-gold font-semibold group-hover:gap-3 transition-all">
                                    Más información
                                    <ArrowRight className="h-4 w-4" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-primary-blue to-primary-blue-600">
                <div className="container mx-auto px-6 text-center">
                    <Sparkles className="h-10 w-10 text-primary-gold mx-auto mb-4" />
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
                        ¿Necesitas financiamiento?
                    </h2>
                    <p className="text-white/80 mb-6 max-w-xl mx-auto">
                        Contáctanos y un asesor te ayudará a encontrar el crédito perfecto para ti.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/contacto">
                            <Button variant="primary" size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
                                Solicitar crédito
                            </Button>
                        </Link>
                        <Link href="/agencias">
                            <Button variant="outline" size="lg" className="border-white/50 text-white hover:bg-white hover:text-primary-blue">
                                Visitar agencia
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
