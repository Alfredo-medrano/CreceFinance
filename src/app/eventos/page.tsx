import type { Metadata } from "next";
import { HeroCarousel } from "@/components/ui/HeroCarousel";
import {
    Calendar,
    MapPin,
    Users,
    Gift,
    Trophy,
    Camera,
    ArrowRight,
    Heart,
    Star,
    Sparkles
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Eventos | CRECE FINANCE - Rifas, Celebraciones y Comunidad",
    description: "Descubre los eventos de CRECE FINANCE: rifas navideñas, ferias de ahorro, capacitaciones y más. Participa y gana increíbles premios siendo parte de nuestra comunidad.",
    keywords: ["eventos CRECE FINANCE", "rifas El Salvador", "premios", "comunidad financiera", "celebraciones", "feria de ahorro"],
    openGraph: {
        title: "Eventos y Comunidad | CRECE FINANCE",
        description: "Celebramos juntos. Descubre nuestras rifas, eventos y beneficios exclusivos para asociados.",
        type: "website",
        locale: "es_SV",
    },
};

// Datos de eventos pasados (ficticios)
const pastEvents = [
    {
        id: 1,
        title: "Gran Rifa Navideña 2024",
        date: "15 de Diciembre, 2024",
        location: "Agencia Central, San Miguel",
        description: "Celebramos la Navidad con nuestra Gran Rifa donde entregamos increíbles premios a nuestros asociados. Más de 50 ganadores se llevaron electrodomésticos, vales de compra y el gran premio: ¡un vehículo 0 km!",
        image: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?q=80&w=1920&auto=format&fit=crop",
        category: "Rifa",
        attendees: 500,
        prizes: ["Vehículo 0 km", "Refrigeradora", "Televisor 55\"", "Vales de compra"],
        featured: true,
    },
    {
        id: 2,
        title: "Feria de Ahorro Infantil",
        date: "10 de Noviembre, 2024",
        location: "Plaza Central, San Miguel",
        description: "Un día lleno de diversión y aprendizaje financiero para los más pequeños. Actividades lúdicas, talleres de ahorro y muchos premios para fomentar la cultura del ahorro desde temprana edad.",
        image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1920&auto=format&fit=crop",
        category: "Educativo",
        attendees: 300,
        highlights: ["Talleres de ahorro", "Juegos educativos", "Premios sorpresa"],
        featured: false,
    },
    {
        id: 3,
        title: "Aniversario 15 Años CRECE",
        date: "28 de Septiembre, 2024",
        location: "Hotel Tropico Inn, San Miguel",
        description: "Celebramos 15 años de crecimiento junto a nuestros asociados con una gala especial. Reconocimientos a asociados destacados, presentaciones artísticas y una noche inolvidable.",
        image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1920&auto=format&fit=crop",
        category: "Aniversario",
        attendees: 400,
        highlights: ["Gala de celebración", "Reconocimientos especiales", "Cena de gala"],
        featured: true,
    },
    {
        id: 4,
        title: "Jornada de Salud Comunitaria",
        date: "5 de Agosto, 2024",
        location: "Agencia La Unión",
        description: "En alianza con hospitales locales, ofrecimos consultas médicas gratuitas, exámenes de la vista y charlas sobre bienestar financiero y salud integral.",
        image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1920&auto=format&fit=crop",
        category: "Comunitario",
        attendees: 250,
        highlights: ["Consultas gratuitas", "Exámenes de vista", "Charlas de bienestar"],
        featured: false,
    },
    {
        id: 5,
        title: "Capacitación Emprendedores",
        date: "20 de Julio, 2024",
        location: "Centro de Convenciones, San Miguel",
        description: "Taller intensivo para emprendedores asociados donde expertos compartieron estrategias de negocio, marketing digital y gestión financiera para hacer crecer sus empresas.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1920&auto=format&fit=crop",
        category: "Educativo",
        attendees: 150,
        highlights: ["Estrategias de negocio", "Marketing digital", "Networking"],
        featured: false,
    },
    {
        id: 6,
        title: "Rifa Día de las Madres",
        date: "10 de Mayo, 2024",
        location: "Todas las Agencias",
        description: "Homenajeamos a las madres asociadas con una rifa especial. Premios exclusivos para consentir a mamá: electrodomésticos, spa days y vales de compra.",
        image: "https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?q=80&w=1920&auto=format&fit=crop",
        category: "Rifa",
        attendees: 600,
        prizes: ["Día de spa", "Electrodomésticos", "Vales de compra", "Joyas"],
        featured: false,
    },
];

// Próximos eventos (ficticios)
const upcomingEvents = [
    {
        id: 1,
        title: "Gran Rifa de Verano 2025",
        date: "15 de Marzo, 2025",
        location: "Agencia Central, San Miguel",
        description: "¡Prepárate para nuestra Gran Rifa de Verano! Participa por increíbles premios incluyendo viajes, electrodomésticos y mucho más.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1920&auto=format&fit=crop",
        category: "Rifa",
    },
    {
        id: 2,
        title: "Feria del Ahorro 2025",
        date: "20 de Abril, 2025",
        location: "Plaza Municipal, San Miguel",
        description: "Un día completo dedicado al ahorro con tasas especiales, promociones exclusivas y actividades para toda la familia.",
        image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1920&auto=format&fit=crop",
        category: "Promocional",
    },
];

const categoryColors: Record<string, string> = {
    "Rifa": "bg-primary-gold/10 text-primary-gold border-primary-gold/20",
    "Educativo": "bg-blue-50 text-blue-600 border-blue-100",
    "Aniversario": "bg-purple-50 text-purple-600 border-purple-100",
    "Comunitario": "bg-green-50 text-green-600 border-green-100",
    "Promocional": "bg-orange-50 text-orange-600 border-orange-100",
};

export default function EventosPage() {
    return (
        <>
            {/* Hero Section */}
            <HeroCarousel
                slides={[
                    {
                        id: 1,
                        title: "Nuestros Eventos",
                        subtitle: "Comunidad CRECE",
                        description: "Celebramos juntos cada logro. Descubre los eventos que nos unen como comunidad financiera.",
                        imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1920&auto=format&fit=crop",
                        ctaText: "Ver Próximos Eventos",
                        ctaLink: "#proximos",
                    },
                    {
                        id: 2,
                        title: "Rifas y Premios",
                        subtitle: "Tu Lealtad Tiene Recompensa",
                        description: "Participa en nuestras rifas exclusivas para asociados y gana increíbles premios.",
                        imageUrl: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1920&auto=format&fit=crop",
                        ctaText: "Ver Galería",
                        ctaLink: "#galeria",
                    },
                ]}
            />

            {/* Stats Section */}
            <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-blue/10 text-primary-blue mb-4">
                                <Calendar className="h-8 w-8" />
                            </div>
                            <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">50+</p>
                            <p className="text-gray-500">Eventos al año</p>
                        </div>
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-gold/10 text-primary-gold mb-4">
                                <Users className="h-8 w-8" />
                            </div>
                            <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">5,000+</p>
                            <p className="text-gray-500">Asistentes anuales</p>
                        </div>
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-100 text-green-600 mb-4">
                                <Gift className="h-8 w-8" />
                            </div>
                            <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">200+</p>
                            <p className="text-gray-500">Premios entregados</p>
                        </div>
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-100 text-purple-600 mb-4">
                                <Trophy className="h-8 w-8" />
                            </div>
                            <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">15</p>
                            <p className="text-gray-500">Años celebrando</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Upcoming Events */}
            <section id="proximos" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-gold/10 text-primary-gold text-sm font-semibold mb-4">
                            <Sparkles className="h-4 w-4" />
                            Próximamente
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Próximos Eventos
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            No te pierdas nuestros próximos eventos. ¡Marca tu calendario y participa!
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {upcomingEvents.map((event) => (
                            <div
                                key={event.id}
                                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                    <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold border ${categoryColors[event.category]}`}>
                                        {event.category}
                                    </span>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                                        <span className="flex items-center gap-2">
                                            <Calendar className="h-4 w-4 text-primary-gold" />
                                            {event.date}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <MapPin className="h-4 w-4 text-primary-gold" />
                                            {event.location}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 mb-4">{event.description}</p>
                                    <Link
                                        href="/contacto"
                                        className="inline-flex items-center gap-2 text-primary-blue font-semibold hover:gap-3 transition-all"
                                    >
                                        Más información
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Past Events Gallery */}
            <section id="galeria" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-blue/10 text-primary-blue text-sm font-semibold mb-4">
                            <Camera className="h-4 w-4" />
                            Galería de Eventos
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Eventos Pasados
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Revive los mejores momentos de nuestros eventos y celebraciones junto a la comunidad CRECE.
                        </p>
                    </div>

                    {/* Featured Events */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-12">
                        {pastEvents
                            .filter((event) => event.featured)
                            .map((event) => (
                                <div
                                    key={event.id}
                                    className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                                >
                                    <div className="relative h-72 overflow-hidden">
                                        <Image
                                            src={event.image}
                                            alt={event.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                        <div className="absolute top-4 left-4 flex gap-2">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${categoryColors[event.category]}`}>
                                                {event.category}
                                            </span>
                                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-gold text-white">
                                                Destacado
                                            </span>
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                                            <div className="flex flex-wrap gap-4 text-sm text-white/80">
                                                <span className="flex items-center gap-2">
                                                    <Calendar className="h-4 w-4" />
                                                    {event.date}
                                                </span>
                                                <span className="flex items-center gap-2">
                                                    <Users className="h-4 w-4" />
                                                    {event.attendees} asistentes
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-gray-600 mb-4">{event.description}</p>
                                        {event.prizes && (
                                            <div className="mb-4">
                                                <p className="text-sm font-semibold text-gray-900 mb-2">Premios entregados:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {event.prizes.map((prize, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-3 py-1 rounded-full bg-primary-gold/10 text-primary-gold text-xs font-medium"
                                                        >
                                                            {prize}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        {event.highlights && (
                                            <div>
                                                <p className="text-sm font-semibold text-gray-900 mb-2">Destacados:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {event.highlights.map((highlight, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-3 py-1 rounded-full bg-primary-blue/10 text-primary-blue text-xs font-medium"
                                                        >
                                                            {highlight}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                    </div>

                    {/* Other Events Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pastEvents
                            .filter((event) => !event.featured)
                            .map((event) => (
                                <div
                                    key={event.id}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                                >
                                    <div className="relative h-40 overflow-hidden">
                                        <Image
                                            src={event.image}
                                            alt={event.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <span className={`absolute top-3 left-3 px-2 py-0.5 rounded-full text-xs font-semibold border ${categoryColors[event.category]}`}>
                                            {event.category}
                                        </span>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{event.title}</h3>
                                        <div className="text-xs text-gray-500 space-y-1">
                                            <p className="flex items-center gap-1.5">
                                                <Calendar className="h-3.5 w-3.5" />
                                                {event.date}
                                            </p>
                                            <p className="flex items-center gap-1.5">
                                                <Users className="h-3.5 w-3.5" />
                                                {event.attendees} asistentes
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary-blue to-primary-blue/90">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                            <Heart className="h-10 w-10 text-white" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            ¡Sé Parte de Nuestra Comunidad!
                        </h2>
                        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                            Como asociado de CRECE FINANCE, tienes acceso exclusivo a todos nuestros eventos,
                            rifas y beneficios especiales. ¡Únete hoy y comienza a disfrutar!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contacto"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-gold text-white font-semibold rounded-full hover:bg-primary-gold/90 transition-colors shadow-lg shadow-primary-gold/30"
                            >
                                Quiero Asociarme
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                            <Link
                                href="/agencias"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-colors border border-white/20"
                            >
                                Visitar una Agencia
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials from Events */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-gold/10 text-primary-gold text-sm font-semibold mb-4">
                            <Star className="h-4 w-4" />
                            Testimonios
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Lo Que Dicen Nuestros Asociados
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-gray-50 rounded-2xl p-6">
                            <div className="flex gap-1 text-primary-gold mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-4">
                                "¡Gané una refrigeradora en la Rifa Navideña! Nunca pensé que tendría tanta suerte.
                                CRECE siempre nos sorprende con eventos increíbles."
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary-blue/10 flex items-center justify-center text-primary-blue font-bold">
                                    MR
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">María Rodríguez</p>
                                    <p className="text-sm text-gray-500">Asociada desde 2019</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-6">
                            <div className="flex gap-1 text-primary-gold mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-4">
                                "El taller de emprendimiento fue excelente. Aprendí estrategias que apliqué en mi negocio
                                y gracias a eso he podido crecer."
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary-gold/10 flex items-center justify-center text-primary-gold font-bold">
                                    JM
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">José Martínez</p>
                                    <p className="text-sm text-gray-500">Asociado desde 2020</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-6">
                            <div className="flex gap-1 text-primary-gold mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-4">
                                "La Feria de Ahorro Infantil fue perfecta para mis hijos. Ahora ellos entienden
                                la importancia de ahorrar y tienen sus propias cuentas."
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                                    AL
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Ana López</p>
                                    <p className="text-sm text-gray-500">Asociada desde 2018</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
