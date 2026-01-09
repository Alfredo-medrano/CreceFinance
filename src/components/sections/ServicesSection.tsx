"use client";

import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/Button";
import {
    PiggyBank,
    Gift,
    Coins,
    Briefcase,
    CreditCard,
    Building,
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
}

const services: Service[] = [
    {
        icon: PiggyBank,
        title: "Ahorro Plazo Fijo",
        description:
            "Invierte tu dinero con las mejores tasas de interés del mercado. Tu capital crece de forma segura y estable.",
        features: ["Tasas competitivas", "Capital protegido", "Intereses mensuales"],
        href: "/ahorros/plazo-fijo",
        variant: "default",
    },
    {
        icon: Gift,
        title: "Ahorro Navideño",
        description:
            "Planifica tus fiestas navideñas sin estrés financiero. Ahorra durante el año y recibe tu dinero a tiempo.",
        features: ["Sin comisiones", "Bonificación especial", "Retiro en diciembre"],
        href: "/ahorros/navideno",
        variant: "featured",
    },
    {
        icon: Coins,
        title: "Ahorro Programado",
        description:
            "Establece metas de ahorro y alcánzalas. Ideal para proyectos personales y familiares.",
        features: ["Metas personalizadas", "Depósitos flexibles", "Seguimiento en línea"],
        href: "/ahorros/programado",
        variant: "default",
    },
    {
        icon: Briefcase,
        title: "Microcréditos",
        description:
            "Impulsa tu pequeño negocio con financiamiento rápido y accesible. Requisitos mínimos y aprobación ágil.",
        features: ["Aprobación rápida", "Montos flexibles", "Asesoría incluida"],
        href: "/prestamos/microcreditos",
        variant: "featured",
    },
    {
        icon: CreditCard,
        title: "Préstamo Personal",
        description:
            "Financia tus proyectos personales con tasas preferenciales y plazos cómodos de pago.",
        features: ["Tasas preferenciales", "Plazos flexibles", "Sin fiador"],
        href: "/prestamos/personal",
        variant: "default",
    },
    {
        icon: Building,
        title: "Crédito PYME",
        description:
            "Soluciones financieras para pequeñas y medianas empresas. Crece tu negocio con nosotros.",
        features: ["Montos mayores", "Asesoría empresarial", "Plazos extendidos"],
        href: "/prestamos/pyme",
        variant: "default",
    },
];

export function ServicesSection() {
    const router = useRouter();

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block mb-4 rounded-full bg-primary-gold/10 px-4 py-2 text-sm font-semibold text-primary-gold">
                        Nuestros Servicios
                    </span>
                    <h2 className="mb-4 font-heading text-3xl font-bold text-primary-blue md:text-4xl lg:text-5xl">
                        Soluciones Financieras a tu Medida
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        Descubre nuestra amplia gama de productos diseñados para impulsar tu
                        crecimiento económico personal y empresarial.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.title}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            features={service.features}
                            variant={service.variant}
                            ctaText="Ver detalles"
                            onCtaClick={() => router.push(service.href)}
                        />
                    ))}
                </div>

                {/* CTA */}
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
