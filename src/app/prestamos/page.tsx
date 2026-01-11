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
                        description: "Brindamos financiamiento para impulsar el crecimiento económico de nuestros clientes con opciones adaptadas a cada necesidad.",
                        imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop", // New keys/House
                        ctaText: "Solicitar Crédito",
                        ctaLink: "/contacto"
                    },
                    {
                        id: 2,
                        title: "Impulsa tu Negocio",
                        subtitle: "Emprendimiento",
                        description: "Apoyamos a pequeños y grandes empresarios con capital de trabajo para llevar sus ideas al siguiente nivel.",
                        imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1000&auto=format&fit=crop", // Shop/Business
                        ctaText: "Ver Créditos",
                        ctaLink: "#productos"
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
