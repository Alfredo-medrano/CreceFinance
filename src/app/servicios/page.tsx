import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
    Briefcase,
    Users,
    Globe,
    Receipt,
    ArrowRight,
    Sparkles,
    Headphones,
    Banknote
} from "lucide-react";
import { HeroCarousel } from "@/components/ui/HeroCarousel";

export const metadata: Metadata = {
    title: "Servicios | CRECE FINANCE - Pago de Servicios, Remesas y Más",
    description: "Servicios adicionales: pago de servicios básicos (Punto Xpress), envío y pago de remesas (Western Union), cobro a domicilio, asesoría financiera.",
    keywords: ["servicios financieros", "pago de servicios", "remesas El Salvador", "Western Union", "Punto Xpress", "asesoría financiera"],
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
            {/* Hero */}
            {/* Hero (Dynamic) */}
            <HeroCarousel
                slides={[
                    {
                        id: 1,
                        title: "Soluciones Integrales",
                        subtitle: "Servicios",
                        description: "Complementamos nuestros productos financieros con servicios diseñados para facilitar tu día a día.",
                        imageUrl: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1000&auto=format&fit=crop", // Customer service
                        ctaText: "Ver Servicios",
                        ctaLink: "#servicios"
                    },
                    {
                        id: 2,
                        title: "Facilidad y Rapidez",
                        subtitle: "Tecnología",
                        description: "Realiza tus pagos, cobros y trámites de manera ágil y segura en nuestras agencias.",
                        imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000&auto=format&fit=crop", // Digital payment/Technology
                        ctaText: "Contáctanos",
                        ctaLink: "/contacto"
                    }
                ]}
            />

            {/* Servicios Grid */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* Pago de Servicios Básicos (Punto Xpress) */}
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-primary-gold/30">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-blue/5 text-primary-gold mb-6 group-hover:bg-primary-gold group-hover:text-primary-blue transition-colors">
                                <Receipt className="h-7 w-7" />
                            </div>
                            <h3 className="font-heading text-xl font-bold text-primary-blue mb-4">
                                Pago de Servicios Básicos (Punto Xpress)
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                                Realiza el pago de tus servicios básicos y facturas de forma rápida y segura, a través de la plataforma Punto Xpress, en un solo lugar y sin largas filas.
                            </p>
                        </div>

                        {/* Pago de Colectores */}
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-primary-gold/30">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-blue/5 text-primary-gold mb-6 group-hover:bg-primary-gold group-hover:text-primary-blue transition-colors">
                                <Banknote className="h-7 w-7" />
                            </div>
                            <h3 className="font-heading text-xl font-bold text-primary-blue mb-4">
                                Pago de Colectores
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                                Servicio de recaudación de pagos autorizados, que permite cancelar recibos de diferentes instituciones de manera confiable y eficiente.
                            </p>
                        </div>

                        {/* Envío y Pago de Remesas Familiares (Western Union) */}
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-primary-gold/30">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-blue/5 text-primary-gold mb-6 group-hover:bg-primary-gold group-hover:text-primary-blue transition-colors">
                                <Globe className="h-7 w-7" />
                            </div>
                            <h3 className="font-heading text-xl font-bold text-primary-blue mb-4">
                                Remesas Familiares (Western Union)
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                                Recibe y envía remesas familiares de forma segura y confiable, con atención personalizada y respaldo internacional.
                            </p>
                        </div>

                        {/* Cobro de Créditos y Ahorros a Domicilio */}
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-primary-gold/30">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-blue/5 text-primary-gold mb-6 group-hover:bg-primary-gold group-hover:text-primary-blue transition-colors">
                                <Users className="h-7 w-7" />
                            </div>
                            <h3 className="font-heading text-xl font-bold text-primary-blue mb-4">
                                Cobro a Domicilio
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                                Ofrecemos el servicio de cobro de cuotas de crédito y ahorro a domicilio, facilitando el cumplimiento de obligaciones financieras para nuestros socios.
                            </p>
                        </div>

                        {/* Constancias y Servicios Administrativos */}
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-primary-gold/30">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-blue/5 text-primary-gold mb-6 group-hover:bg-primary-gold group-hover:text-primary-blue transition-colors">
                                <Briefcase className="h-7 w-7" />
                            </div>
                            <h3 className="font-heading text-xl font-bold text-primary-blue mb-4">
                                Constancias y Servicios Administrativos
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                                Emisión de constancias de saldo, constancias de cancelación y otros documentos, conforme a solicitud y políticas institucionales.
                            </p>
                        </div>

                        {/* Atención y Asesoría Financiera */}
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-primary-gold/30">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-blue/5 text-primary-gold mb-6 group-hover:bg-primary-gold group-hover:text-primary-blue transition-colors">
                                <Headphones className="h-7 w-7" />
                            </div>
                            <h3 className="font-heading text-xl font-bold text-primary-blue mb-4">
                                Atención y Asesoría Financiera
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                                Brindamos orientación personalizada sobre nuestros productos y servicios, ayudando a socios y usuarios a tomar decisiones financieras responsables.
                            </p>
                        </div>
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
