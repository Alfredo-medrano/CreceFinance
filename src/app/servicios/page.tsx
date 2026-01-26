import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";
import { HeroCarousel } from "@/components/ui/HeroCarousel";
import { PlayStoreBadge } from "@/components/ui/PlayStoreBadge";
import { SERVICES_DATA, SERVICES_HERO_SLIDES } from "@/constants/services";

export const metadata: Metadata = {
    title: "Servicios | CRECE FINANCE - Pago de Servicios, Remesas y Más",
    description: "Servicios adicionales: pago de servicios básicos (Punto Xpress), envío y pago de remesas (Western Union), cobro a domicilio, app móvil.",
    keywords: ["servicios financieros", "pago de servicios", "remesas El Salvador", "Western Union", "Punto Xpress", "app móvil"],
    openGraph: {
        title: "Servicios Adicionales | CRECE FINANCE",
        description: "Complementamos nuestros productos con servicios de pago, remesas y asesoría personalizada.",
        type: "website",
        locale: "es_SV",
    },
};

export default function ServiciosPage() {
    return (
        <>
            {/* Hero (Dynamic) */}
            <HeroCarousel slides={SERVICES_HERO_SLIDES} />

            {/* Servicios Grid */}
            <section id="servicios" className="py-20 bg-gray-50 scroll-mt-20">
                <div className="container mx-auto px-6">
                    <div className="grid gap-8 md:grid-cols-2">
                        {SERVICES_DATA.map((service) => {
                            const Icon = service.icon;
                            const isAppCard = service.id === "app-movil";

                            const cardContent = (
                                <>
                                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 transition-colors ${isAppCard
                                            ? "bg-primary-gold/20 text-primary-gold group-hover:bg-primary-gold group-hover:text-primary-blue"
                                            : "bg-primary-blue/5 text-primary-gold group-hover:bg-primary-gold group-hover:text-primary-blue"
                                        }`}>
                                        <Icon className="h-7 w-7" />
                                    </div>
                                    <h3 className={`font-heading text-xl font-bold mb-4 ${isAppCard ? "text-white" : "text-primary-blue"}`}>
                                        {service.title}
                                    </h3>
                                    <p className={`leading-relaxed text-sm ${isAppCard ? "text-white/80 mb-6" : "text-gray-600"}`}>
                                        {service.description}
                                    </p>
                                    {isAppCard && <PlayStoreBadge />}
                                </>
                            );

                            if (service.external && service.href) {
                                return (
                                    <a
                                        key={service.id}
                                        href={service.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group bg-gradient-to-br from-primary-blue to-primary-blue-600 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-primary-gold/50 hover:border-primary-gold"
                                    >
                                        {cardContent}
                                    </a>
                                );
                            }

                            return (
                                <div
                                    key={service.id}
                                    className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-primary-gold/30"
                                >
                                    {cardContent}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-primary-blue to-primary-blue-600">
                <div className="container mx-auto px-6 text-center">
                    <Sparkles className="h-10 w-10 text-primary-gold mx-auto mb-4" />
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
                        ¿Necesitas más información?
                    </h2>
                    <p className="text-white/80 mb-6 max-w-xl mx-auto">
                        Visita cualquiera de nuestras agencias o contáctanos para conocer más
                        sobre nuestros servicios adicionales.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/contacto">
                            <Button variant="primary" size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
                                Contáctanos
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
