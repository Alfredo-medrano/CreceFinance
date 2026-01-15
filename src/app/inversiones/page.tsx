import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
    TrendingUp,
    ArrowRight,
    Sparkles,
    ShieldCheck,
    Percent,
    Building2,
    Award
} from "lucide-react";
import { HeroCarousel } from "@/components/ui/HeroCarousel";

export const metadata: Metadata = {
    title: "Inversiones | CRECE FINANCE - Acciones Preferidas y Plus",
    description: "Invierte tu dinero con CRECE FINANCE. Acciones Preferidas y Acciones Preferidas Plus con dividendos atractivos y rendimientos competitivos.",
    keywords: ["inversiones El Salvador", "acciones preferidas", "dividendos", "rendimientos", "invertir dinero", "CRECE FINANCE"],
    openGraph: {
        title: "Productos de Inversión | CRECE FINANCE",
        description: "Maximiza tu capital con nuestras opciones de inversión. Dividendos atractivos y rendimientos competitivos.",
        type: "website",
        locale: "es_SV",
    },
};

const productosInversion = [
    {
        id: "acciones-preferidas",
        icon: Award,
        title: "Acciones Preferidas",
        description: "Diseñadas para inversionistas que buscan rendimientos fijos y atractivos, a través del pago periódico de dividendos. Permiten participar en el crecimiento de Crece Finance.",
        href: "/inversiones/acciones-preferidas",
    },
    {
        id: "acciones-preferidas-plus",
        icon: TrendingUp,
        title: "Acciones Preferidas Plus",
        description: "Alternativa dirigida a quienes buscan mayor rentabilidad, ofreciendo dividendos competitivos y condiciones preferenciales. Para maximizar el crecimiento de su capital.",
        href: "/inversiones/acciones-preferidas-plus",
        destacado: true,
    },
];

const beneficios = [
    { icon: Percent, title: "Rendimientos Atractivos", description: "Las mejores tasas" },
    { icon: ShieldCheck, title: "Solidez Financiera", description: "Respaldo institucional" },
    { icon: Building2, title: "Transparencia", description: "Información clara" },
    { icon: TrendingUp, title: "Crecimiento", description: "Tu capital trabajando" },
];

export default function InversionesPage() {
    return (
        <>
            {/* Hero */}
            {/* Hero (Dynamic) */}
            <HeroCarousel
                slides={[
                    {
                        id: 1,
                        title: "Inversiones Inteligentes",
                        subtitle: "Rentabilidad",
                        description: "Alternativas de inversión diseñadas para hacer crecer tu capital, con rendimientos atractivos y participación en los resultados.",
                        imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1000&auto=format&fit=crop", // Stock/Chart
                        ctaText: "Invertir ahora",
                        ctaLink: "/contacto"
                    },
                    {
                        id: 2,
                        title: "Maximiza tu Capital",
                        subtitle: "Crecimiento",
                        description: "Forma parte del éxito de una institución sólida y obtén beneficios por tu confianza y compromiso.",
                        imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop", // Business meeting
                        ctaText: "Ver Opciones",
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
                            Nuestros productos de inversión
                        </h2>
                        <p className="text-gray-600 max-w-xl mx-auto">
                            Elige el producto que mejor se adapte a tus objetivos de inversión
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                        {productosInversion.map((producto) => (
                            <Link
                                key={producto.id}
                                href={producto.href}
                                className={`group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 ${producto.destacado ? "ring-2 ring-primary-gold" : ""
                                    }`}
                            >
                                {producto.destacado && (
                                    <span className="absolute top-4 right-4 bg-primary-gold text-primary-blue text-xs font-bold px-3 py-1 rounded-full">
                                        Recomendado
                                    </span>
                                )}

                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary-blue to-primary-blue-600 text-white mb-6 group-hover:scale-110 transition-transform">
                                    <producto.icon className="h-8 w-8" />
                                </div>

                                <h3 className="font-heading text-2xl font-bold text-primary-blue mb-3">
                                    {producto.title}
                                </h3>

                                <p className="text-gray-600 mb-6">
                                    {producto.description}
                                </p>

                                <span className="inline-flex items-center gap-2 text-primary-gold font-semibold group-hover:gap-3 transition-all">
                                    Más información
                                    <ArrowRight className="h-5 w-5" />
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
                        ¿Listo para invertir en tu futuro?
                    </h2>
                    <p className="text-white/80 mb-6 max-w-xl mx-auto">
                        Contáctanos y un asesor te guiará en el proceso de inversión.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/contacto">
                            <Button variant="primary" size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
                                Invertir ahora
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
