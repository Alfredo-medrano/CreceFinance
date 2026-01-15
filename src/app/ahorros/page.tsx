import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
    Gift,
    Baby,
    GraduationCap,
    Landmark,
    ArrowRight,
    Sparkles,
    Wallet,
    ShieldCheck,
    Percent,
    Clock,
    TrendingUp
} from "lucide-react";
import { HeroCarousel } from "@/components/ui/HeroCarousel";

export const metadata: Metadata = {
    title: "Ahorros | CRECE FINANCE - Cuentas de Ahorro con las Mejores Tasas",
    description: "Descubre nuestras opciones de ahorro: Vista, Navideño, Infantil, Escolar y Plazo Fijo. Tasas competitivas y seguridad garantizada para tu dinero.",
    keywords: ["ahorro El Salvador", "cuenta de ahorros", "plazo fijo", "ahorro navideño", "ahorro infantil", "tasas de interés", "CRECE FINANCE"],
    openGraph: {
        title: "Productos de Ahorro | CRECE FINANCE",
        description: "Haz crecer tu dinero con nuestras diversas opciones de ahorro. Tasas competitivas y seguridad garantizada.",
        type: "website",
        locale: "es_SV",
    },
};

// ============================================
// PRODUCTOS DE AHORRO (RESUMEN)
// ============================================
const productosAhorro = [
    {
        id: "vista",
        icon: Wallet,
        title: "Ahorro a la Vista",
        description: "Tu dinero siempre disponible. Accede a tus fondos en cualquier momento sin restricciones.",
        href: "/ahorros/vista",
    },
    {
        id: "navideno",
        icon: Gift,
        title: "Ahorro Navideño",
        description: "Diseñado para fomentar el ahorro con disponibilidad a partir del 1 de diciembre de cada año.",
        href: "/ahorros/navideno",
    },
    {
        id: "infantil",
        icon: Baby,
        title: "Ahorro Infantil",
        description: "Pensado para fomentar el hábito del ahorro en los niños, disponible en el mes de su cumpleaños.",
        href: "/ahorros/infantil",
    },
    {
        id: "escolar",
        icon: GraduationCap,
        title: "Ahorro Escolar",
        description: "Enfocado en la planificación educativa, disponible en los meses de noviembre, diciembre y enero de cada año.",
        href: "/ahorros/escolar",
    },
    {
        id: "plazo-fijo",
        icon: Landmark,
        title: "Depósitos a Plazo Fijo",
        description: "Permite obtener un mayor rendimiento con tasas de interés atractivas. Puede mantenerse por un plazo mínimo de 90 días o más, de acuerdo con tu preferencia.",
        href: "/ahorros/plazo-fijo",
        destacado: true,
    },
];

const beneficios = [
    { icon: ShieldCheck, title: "Seguridad", description: "Tu dinero protegido" },
    { icon: Percent, title: "Tasas Competitivas", description: "Los mejores rendimientos" },
    { icon: Clock, title: "Atención Rápida", description: "Servicio personalizado" },
    { icon: TrendingUp, title: "Crecimiento", description: "Tu dinero trabajando" },
];

export default function AhorrosPage() {
    return (
        <>
            {/* ============================================
          HERO SECTION
          ============================================ */}
            {/* ============================================
          HERO SECTION (Dynamic)
          ============================================ */}
            <HeroCarousel
                slides={[
                    {
                        id: 1,
                        title: "Haz crecer tu dinero",
                        subtitle: "Ahorros",
                        description: "Diversas opciones de ahorro con tasas competitivas para asegurar el crecimiento financiero de tu familia.",
                        imageUrl: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1000&auto=format&fit=crop",
                        ctaText: "Abrir Cuenta",
                        ctaLink: "/contacto",
                        secondaryCtaText: "Ver tipos de ahorro",
                        secondaryCtaLink: "#productos"
                    },
                    {
                        id: 2,
                        title: "Planifica tu Futuro",
                        subtitle: "Seguridad Financiera",
                        description: "Empieza hoy a construir el mañana que sueñas con nuestras soluciones de ahorro programado.",
                        imageUrl: "https://images.unsplash.com/photo-1565514020176-dbf2277cc168?q=80&w=1000&auto=format&fit=crop",
                        ctaText: "Ver Planes",
                        ctaLink: "/ahorros/plazo-fijo",
                        secondaryCtaText: "Contactar asesor",
                        secondaryCtaLink: "/contacto"
                    }
                ]}
            />

            {/* ============================================
          BENEFICIOS
          ============================================ */}
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

            {/* ============================================
          PRODUCTOS - CARDS COMPACTAS
          ============================================ */}
            <section id="productos" className="py-20 bg-gray-50 scroll-mt-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-3xl font-bold text-primary-blue md:text-4xl mb-4">
                            Elige tu tipo de ahorro
                        </h2>
                        <p className="text-gray-600 max-w-xl mx-auto">
                            Selecciona el producto que mejor se adapte a tus metas financieras
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {productosAhorro.map((producto) => (
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

            {/* ============================================
          CTA
          ============================================ */}
            <section className="py-16 bg-gradient-to-r from-primary-blue to-primary-blue-600">
                <div className="container mx-auto px-6 text-center">
                    <Sparkles className="h-10 w-10 text-primary-gold mx-auto mb-4" />
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
                        ¿Listo para empezar a ahorrar?
                    </h2>
                    <p className="text-white/80 mb-6 max-w-xl mx-auto">
                        Visita cualquiera de nuestras agencias o contáctanos para abrir tu cuenta.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/contacto">
                            <Button variant="primary" size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
                                Abrir mi cuenta
                            </Button>
                        </Link>
                        <Link href="/agencias">
                            <Button variant="outline" size="lg" className="border-white/50 text-white hover:bg-white hover:text-primary-blue">
                                Ver agencias
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
