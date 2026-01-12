"use client";

import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/Button";
import {
    PiggyBank,
    Gift,
    TrendingUp,
    Star,
    Briefcase,
    Home,
    LucideIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface Service {
    icon: LucideIcon;
    title: string;
    description: string;
    features: string[];
    href: string;
    variant: "default" | "featured";
    category: "ahorros" | "inversiones" | "prestamos";
}

/**
 * Catálogo de servicios destacados
 * 2 productos por categoría: Ahorros, Inversiones, Préstamos
 */
const services: Service[] = [
    // Productos de ahorro
    {
        icon: PiggyBank,
        title: "Ahorro Plazo Fijo",
        description:
            "Invierte tu dinero con las mejores tasas de interés del mercado. Tu capital crece de forma segura y estable.",
        features: ["Tasas competitivas", "Capital protegido", "Intereses mensuales"],
        href: "/ahorros/plazo-fijo",
        variant: "default",
        category: "ahorros",
    },
    {
        icon: Gift,
        title: "Ahorro Navideño",
        description:
            "Planifica tus fiestas navideñas sin estrés financiero. Ahorra durante el año y recibe tu dinero a tiempo.",
        features: ["Sin comisiones", "Bonificación especial", "Retiro en diciembre"],
        href: "/ahorros/navideno",
        variant: "featured",
        category: "ahorros",
    },
    // Productos de inversión
    {
        icon: TrendingUp,
        title: "Acciones Preferidas",
        description:
            "Invierte en acciones preferidas y obtén dividendos atractivos. Haz crecer tu patrimonio con seguridad.",
        features: ["Dividendos competitivos", "Inversión segura", "Rendimiento garantizado"],
        href: "/inversiones/acciones-preferidas",
        variant: "default",
        category: "inversiones",
    },
    {
        icon: Star,
        title: "Acciones Preferentes Plus",
        description:
            "Nuestra opción premium de inversión con los mejores rendimientos del mercado para inversionistas exigentes.",
        features: ["Máximo rendimiento", "Beneficios exclusivos", "Asesoría personalizada"],
        href: "/inversiones/acciones-preferentes-plus",
        variant: "featured",
        category: "inversiones",
    },
    // Productos de préstamo
    {
        icon: Briefcase,
        title: "Microcréditos",
        description:
            "Impulsa tu pequeño negocio con financiamiento rápido y accesible. Requisitos mínimos y aprobación ágil.",
        features: ["Aprobación rápida", "Montos flexibles", "Asesoría incluida"],
        href: "/prestamos/microcreditos",
        variant: "default",
        category: "prestamos",
    },
    {
        icon: Home,
        title: "Préstamo de Vivienda",
        description:
            "Haz realidad el sueño de tu casa propia con tasas preferenciales y plazos cómodos de hasta 20 años.",
        features: ["Tasas preferenciales", "Plazos hasta 20 años", "Asesoría legal incluida"],
        href: "/prestamos/vivienda",
        variant: "featured",
        category: "prestamos",
    },
];

/** Etiquetas visuales por categoría */
const categoryLabels = {
    ahorros: { label: "Ahorros", color: "bg-emerald-500" },
    inversiones: { label: "Inversiones", color: "bg-primary-gold" },
    prestamos: { label: "Préstamos", color: "bg-primary-blue" },
};

/**
 * Sección de servicios destacados
 * Muestra 6 productos organizados por categoría
 */
export function ServicesSection() {
    const router = useRouter();

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                {/* Encabezado */}
                <div className="text-center mb-16">
                    <span className="inline-block mb-4 rounded-full bg-primary-gold/10 px-4 py-2 text-sm font-semibold text-primary-gold">
                        Nuestros Servicios
                    </span>
                    <h2 className="mb-4 font-heading text-3xl font-bold text-primary-blue md:text-4xl lg:text-5xl">
                        Soluciones Financieras a tu Medida
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        Descubre nuestra amplia gama de productos en ahorros, inversiones y
                        préstamos diseñados para impulsar tu crecimiento económico.
                    </p>
                </div>

                {/* Leyenda de categorías */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {Object.entries(categoryLabels).map(([key, { label, color }]) => (
                        <div key={key} className="flex items-center gap-2">
                            <span className={`w-3 h-3 rounded-full ${color}`} />
                            <span className="text-sm font-medium text-gray-600">{label}</span>
                        </div>
                    ))}
                </div>

                {/* Grilla de servicios */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <div key={service.title} className="relative">
                            {/* Etiqueta de categoría */}
                            <div className="absolute -top-3 left-4 z-10">
                                <span className={`px-3 py-1 text-xs font-bold text-white rounded-full ${categoryLabels[service.category].color}`}>
                                    {categoryLabels[service.category].label}
                                </span>
                            </div>
                            <ServiceCard
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                features={service.features}
                                variant={service.variant}
                                ctaText="Ver detalles"
                                onCtaClick={() => router.push(service.href)}
                            />
                        </div>
                    ))}
                </div>

                {/* Enlace a todos los servicios */}
                <div className="mt-16 text-center">
                    <Button
                        variant="secondary"
                        size="lg"
                        onClick={() => router.push("/servicios")}
                    >
                        Ver todos los servicios
                    </Button>
                </div>
            </div>
        </section>
    );
}
