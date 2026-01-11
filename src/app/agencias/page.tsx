import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import {
    MapPin,
    Phone,
    Clock,
    Sparkles,
    Building2,
    Navigation
} from "lucide-react";
import { HeroCarousel } from "@/components/ui/HeroCarousel";

export const metadata: Metadata = {
    title: "Agencias | CRECE FINANCE - Encuentra tu Sucursal más Cercana",
    description: "Visita nuestras agencias en San Miguel, La Unión y Santa Rosa de Lima. Horarios de atención, direcciones y teléfonos de contacto.",
    keywords: ["agencias CRECE FINANCE", "sucursales", "San Miguel", "La Unión", "Santa Rosa de Lima", "horarios", "ubicación"],
    openGraph: {
        title: "Nuestras Agencias | CRECE FINANCE",
        description: "Encuentra la agencia CRECE FINANCE más cercana a ti. Presentes en San Miguel, La Unión y Santa Rosa de Lima.",
        type: "website",
        locale: "es_SV",
    },
};

const agencias = [
    {
        id: "san-miguel",
        nombre: "Agencia San Miguel",
        direccion: "7ª Avenida Norte y 2ª Calle Poniente, #416, San Miguel",
        telefono: "2660-7300",
        telefonoLink: "26607300",
        // Dirección exacta: CRECE FINANCE de R.L., 2A Calle Poniente, San Miguel
        mapUrl: "https://maps.google.com/maps?q=CRECE%20FINANCE%20de%20R.L.%2C%202A%20Calle%20Poniente%2C%20San%20Miguel&t=&z=17&ie=UTF8&iwloc=&output=embed",
        imagen: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: "la-union",
        nombre: "Agencia La Unión",
        direccion: "5ª Avenida Norte, Plaza Quinta Avenida, La Unión",
        telefono: "2641-3400",
        telefonoLink: "26413400",
        // Plus Code: 85P5+RC5 Crece Finance, Agencia La Union, La Unión
        mapUrl: "https://maps.google.com/maps?q=85P5%2BRC5%20Crece%20Finance%2C%20Agencia%20La%20Union%2C%20La%20Uni%C3%B3n&t=&z=17&ie=UTF8&iwloc=&output=embed",
        imagen: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: "santa-rosa",
        nombre: "Agencia Santa Rosa de Lima",
        direccion: "8ª Avenida Sur, frente al Mercado Municipal, Santa Rosa de Lima, La Unión",
        telefono: "2608-0530",
        telefonoLink: "26080530",
        // Dirección exacta: 8ª Avenida Sur, frente al Mercado Municipal, Santa Rosa de Lima, La Unión
        mapUrl: "https://maps.google.com/maps?q=8%C2%AA%20Avenida%20Sur%2C%20frente%20al%20Mercado%20Municipal%2C%20Santa%20Rosa%20de%20Lima%2C%20La%20Uni%C3%B3n&t=&z=17&ie=UTF8&iwloc=&output=embed",
        imagen: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop"
    }
];

export default function AgenciasPage() {
    return (
        <>
            {/* Hero */}
            {/* Hero (Dynamic) */}
            <HeroCarousel
                slides={[
                    {
                        id: 1,
                        title: "Cerca de Ti",
                        subtitle: "Nuestras Agencias",
                        description: "Visítanos en cualquiera de nuestras sucursales y recibe atención personalizada para tus trámites financieros.",
                        imageUrl: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1000&auto=format&fit=crop", // Office building/Lobby
                        ctaText: "Ver Ubicaciones",
                        ctaLink: "#agencias"
                    },
                    {
                        id: 2,
                        title: "Atención de Calidad",
                        subtitle: "Servicio al Cliente",
                        description: "Nuestro equipo está listo para asesorarte y brindarte las mejores soluciones financieras.",
                        imageUrl: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=1000&auto=format&fit=crop", // Modern office/Team
                        ctaText: "Contáctanos",
                        ctaLink: "/contacto"
                    }
                ]}
            />

            {/* Agencias List */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid gap-8 lg:grid-cols-3">
                        {/* Columna Izquierda: Lista de Agencias */}
                        <div className="lg:col-span-2 space-y-8">
                            {agencias.map((agencia) => (
                                <div key={agencia.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform transition-all hover:shadow-xl group">
                                    {/* Imagen de Referencia */}
                                    <div className="relative h-56 w-full overflow-hidden">
                                        <Image
                                            src={agencia.imagen}
                                            alt={agencia.nombre}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/80 to-transparent flex items-end p-6">
                                            <div>
                                                <div className="inline-flex items-center gap-2 mb-2 bg-primary-gold/20 backdrop-blur-sm px-3 py-1 rounded-full border border-primary-gold/30">
                                                    <Building2 className="h-4 w-4 text-primary-gold" />
                                                    <span className="text-xs font-semibold text-primary-gold uppercase tracking-wider">Sucursal</span>
                                                </div>
                                                <h2 className="text-2xl font-bold text-white">{agencia.nombre}</h2>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2">
                                        <div className="p-8 flex flex-col justify-center">
                                            <div className="space-y-6 mb-6">
                                                <div className="flex items-start gap-4">
                                                    <div className="p-2 bg-gray-50 rounded-lg">
                                                        <MapPin className="h-5 w-5 text-primary-blue mt-0.5 flex-shrink-0" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-semibold text-gray-400 mb-1">Dirección</p>
                                                        <p className="text-gray-700 leading-relaxed">{agencia.direccion}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <div className="p-2 bg-gray-50 rounded-lg">
                                                        <Phone className="h-5 w-5 text-primary-blue flex-shrink-0" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-semibold text-gray-400 mb-1">Teléfono</p>
                                                        <a href={`tel:${agencia.telefonoLink}`} className="text-lg font-bold text-primary-blue hover:text-primary-gold transition-colors">
                                                            {agencia.telefono}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap gap-3">
                                                <a
                                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(agencia.direccion)}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center justify-center font-heading font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 border-2 border-primary-blue text-primary-blue bg-transparent hover:bg-primary-blue hover:text-white active:scale-[0.98] px-6 py-3 w-full sm:w-auto"
                                                >
                                                    <Navigation className="h-4 w-4 mr-2" />
                                                    Cómo llegar
                                                </a>
                                            </div>
                                        </div>

                                        <div className="h-72 md:h-auto bg-gray-100 relative min-h-[300px] border-t md:border-t-0 md:border-l border-gray-100">
                                            <iframe
                                                src={agencia.mapUrl}
                                                width="100%"
                                                height="100%"
                                                style={{ border: 0 }}
                                                allowFullScreen
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                                className="grayscale hover:grayscale-0 transition-all duration-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Columna Derecha: Horarios e Imagen */}
                        <div className="space-y-8 sticky top-32 self-start">
                            {/* Horarios Card */}
                            <div className="bg-primary-blue rounded-2xl p-8 shadow-lg text-white relative overflow-hidden">
                                <div className="absolute top-[-20%] right-[-20%] w-64 h-64 rounded-full bg-primary-gold/20 blur-3xl" />

                                <h3 className="font-heading text-2xl font-bold mb-6 flex items-center gap-3">
                                    <Clock className="h-6 w-6 text-primary-gold" />
                                    Horarios de Atención
                                </h3>

                                <div className="space-y-6 relative z-10">
                                    <div className="pb-6 border-b border-white/10">
                                        <p className="text-primary-gold font-semibold mb-2">Lunes a viernes</p>
                                        <p className="text-2xl font-bold">8:00 a.m. – 4:00 p.m.</p>
                                    </div>
                                    <div>
                                        <p className="text-primary-gold font-semibold mb-2">Sábados</p>
                                        <p className="text-2xl font-bold">8:00 a.m. – 12:00 m.</p>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/10">
                                    <p className="text-sm text-white/70 mb-4">
                                        ¿No puedes visitarnos?
                                    </p>
                                    <Link href="/contacto">
                                        <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white hover:text-primary-blue">
                                            Contáctanos en línea
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            {/* Imagen Decorativa */}
                            <div className="hidden lg:block rounded-2xl overflow-hidden shadow-lg h-80 relative">
                                <Image
                                    src="https://res.cloudinary.com/dm1fivmmh/image/upload/v1767993424/se%C3%B1oraRiendo_fo7shy.webp"
                                    alt="Atención al cliente"
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/80 to-transparent flex items-end p-8">
                                    <p className="text-white font-bold text-xl">
                                        Tu satisfacción es nuestra prioridad
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <Sparkles className="h-10 w-10 text-primary-gold mx-auto mb-4" />
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-blue mb-4">
                        ¿Tienes alguna consulta?
                    </h2>
                    <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                        Nuestro equipo está listo para atenderte en cualquiera de nuestras sucursales
                        o a través de nuestros canales digitales.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="tel:26607373">
                            <Button variant="primary" size="lg" rightIcon={<Phone className="h-5 w-5" />}>
                                Llamar ahora
                            </Button>
                        </a>
                        <Link href="/contacto">
                            <Button variant="outline" size="lg">
                                Escribir mensaje
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
