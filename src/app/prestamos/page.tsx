import type { Metadata } from "next";
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
import { HeroCarousel } from "@/components/ui/HeroCarousel";

export const metadata: Metadata = {
    title: "Préstamos | CRECE FINANCE - Microcréditos, Consumo y Vivienda",
    description: "Soluciones de crédito adaptadas a tus necesidades: microcréditos, créditos de comercio, consumo, prendarios y vivienda. Aprobación rápida y tasas competitivas.",
    keywords: ["préstamos El Salvador", "microcréditos", "crédito de consumo", "préstamo vivienda", "crédito comercio", "CRECE FINANCE"],
    openGraph: {
        title: "Productos de Crédito | CRECE FINANCE",
        description: "Financiamiento para emprendedores, comerciantes y familias. Aprobación rápida y tasas competitivas.",
        type: "website",
        locale: "es_SV",
    },
};

const productosCredito = [
    {
        id: "microcreditos",
        icon: Briefcase,
        title: "Microcréditos",
        description: "Diseñados para pequeños emprendedores que necesitan financiamiento accesible y rápido.",
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
        description: "Para remodelación, adquisición y construcción de viviendas.",
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
            {/* Hero (Dynamic) */}
            <HeroCarousel
                slides={[
                    {
                        id: 1,
                        title: "Financiamiento para Crecer",
                        subtitle: "Créditos",
                        description: "Brindamos financiamiento para impulsar el crecimiento económico de nuestros socios con opciones adaptadas a cada necesidad.",
                        imageUrl: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1920&auto=format&fit=crop",
                        ctaText: "Solicitar Crédito",
                        ctaLink: "/contacto",
                        secondaryCtaText: "Ver tipos de crédito",
                        secondaryCtaLink: "#productos"
                    },
                    {
                        id: 2,
                        title: "Impulsa tu Negocio",
                        subtitle: "Emprendimiento",
                        description: "Apoyamos a pequeños y grandes empresarios con capital de trabajo para llevar sus ideas al siguiente nivel.",
                        imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1920&auto=format&fit=crop",
                        ctaText: "Ver Créditos",
                        ctaLink: "#productos",
                        secondaryCtaText: "Contactar asesor",
                        secondaryCtaLink: "/contacto"
                    }
                ]}
            />

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
            <section id="productos" className="py-20 bg-gray-50 scroll-mt-20">
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
                                className={`group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 ${producto.destacado ? "border-primary-gold/30 bg-gradient-to-br from-white to-primary-gold/5" : ""
                                    }`}
                            >
                                {/* Degradado de fondo animado */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-blue via-primary-blue-600 to-primary-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                {/* Círculos decorativos */}
                                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary-gold/20 blur-2xl transition-all duration-500 group-hover:bg-white/20 group-hover:scale-150" />
                                <div className="absolute -left-10 -bottom-10 h-24 w-24 rounded-full bg-primary-blue/10 blur-2xl transition-all duration-500 group-hover:bg-primary-gold/20 group-hover:scale-150" />

                                {/* Línea decorativa superior */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-blue via-primary-gold to-primary-blue transform origin-left scale-x-0 group-hover:scale-x-100 transition-all duration-500" />

                                {producto.destacado && (
                                    <span className="absolute top-3 right-3 z-20 bg-primary-gold text-primary-blue text-xs font-bold px-2 py-1 rounded-full animate-bounce">
                                        Popular
                                    </span>
                                )}

                                <div className="relative z-10">
                                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 transition-all duration-500 ${producto.destacado
                                        ? "bg-primary-gold text-primary-blue shadow-lg shadow-primary-gold/30"
                                        : "bg-gradient-to-br from-primary-blue to-primary-blue-600 text-white group-hover:bg-white/20 group-hover:shadow-lg"
                                        }`}>
                                        <producto.icon className="h-7 w-7 transition-transform duration-500 group-hover:scale-110" />
                                    </div>

                                    <h3 className="font-heading text-xl font-bold text-primary-blue mb-2 transition-colors duration-300 group-hover:text-white">
                                        {producto.title}
                                    </h3>

                                    <p className="text-gray-600 mb-4 line-clamp-2 transition-colors duration-300 group-hover:text-white/90">
                                        {producto.description}
                                    </p>

                                    <span className="inline-flex items-center gap-2 text-primary-gold font-semibold group-hover:gap-3 transition-all group-hover:text-white">
                                        Más información
                                        <ArrowRight className="h-4 w-4" />
                                    </span>
                                </div>
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
