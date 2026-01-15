import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
    Target,
    Eye,
    ArrowRight,
    Calendar,
    MapPin,
    Building2,
    Award,
    Shield,
    Heart,
    Scale,
    HandshakeIcon,
    Sparkles,
    Briefcase
} from "lucide-react";
import { HeroCarousel } from "@/components/ui/HeroCarousel";

export const metadata: Metadata = {
    title: "Nosotros | CRECE FINANCE - Nuestra Historia y Valores",
    description: "Conoce la historia de CRECE FINANCE, una cooperativa sólida con más de 3 años de experiencia. Descubre nuestra misión, visión y valores institucionales.",
    keywords: ["CRECE FINANCE", "sobre nosotros", "historia", "cooperativa El Salvador", "valores institucionales", "misión visión", "San Miguel"],
    openGraph: {
        title: "Nosotros | CRECE FINANCE",
        description: "Conoce nuestra historia, misión y valores. Más de 3 años de experiencia al servicio de nuestros socios.",
        type: "website",
        locale: "es_SV",
    },
};

// ============================================
// DATOS DE LA LÍNEA TEMPORAL
// ============================================
const timelineEvents = [
    {
        date: "29 de septiembre de 2023",
        title: "El inicio",
        description: "Crece Finance recibe oficialmente sus credenciales de funcionamiento, marcando el nacimiento formal como institución financiera.",
        icon: Award,
        highlight: true,
    },
    {
        date: "15 de diciembre de 2023",
        title: "Primera Agencia",
        description: "Inauguración de la primera agencia en San Miguel y apertura oficial al público, iniciando operaciones con un equipo de 10 colaboradores.",
        icon: Building2,
        location: "San Miguel",
    },
    {
        date: "13 de abril de 2024",
        title: "Crecimiento y confianza",
        description: "Apertura de la agencia en La Unión, fortaleciendo la presencia institucional en la región oriental y ampliando el acceso a servicios financieros.",
        icon: MapPin,
        location: "La Unión",
    },
    {
        date: "15 de febrero de 2025",
        title: "Expansión regional",
        description: "Inauguración de la agencia en Santa Rosa de Lima, consolidando el crecimiento y reflejando la aceptación y respaldo de Crece Finance en nuevas localidades.",
        icon: MapPin,
        location: "Santa Rosa de Lima",
    },
];

// ============================================
// VALORES INSTITUCIONALES
// ============================================
const valores = [
    {
        icon: Shield,
        title: "Integridad",
        description: "En CRECE FINANCE actuamos con rectitud y coherencia, incluso en ausencia de supervisión o reconocimiento. La integridad nos impulsa a hacer lo correcto en todo momento, guiados por principios éticos y por el compromiso con nuestra misión institucional.",
    },
    {
        icon: Scale,
        title: "Honradez",
        description: "Actuamos con rectitud, transparencia y respeto hacia los recursos, las personas y la confianza que se nos deposita. La honradez guía nuestras decisiones y nos impulsa a cumplir nuestras responsabilidades de forma ética.",
    },
    {
        icon: Heart,
        title: "Honestidad",
        description: "Promovemos una conducta basada en la verdad, la coherencia y el respeto por los principios éticos. Ser honestos significa actuar con sinceridad en todo momento, asumir con responsabilidad nuestras acciones y comunicarnos con transparencia.",
    },
    {
        icon: Eye,
        title: "Transparencia",
        description: "Practicamos la transparencia como un principio esencial. Promovemos una comunicación clara, accesible y oportuna, asegurando que nuestros procesos, decisiones y resultados sean comprensibles y estén disponibles.",
    },
    {
        icon: Briefcase,
        title: "Responsabilidad",
        description: "Asumimos con compromiso y seriedad las obligaciones que nos corresponden. Actuar con responsabilidad significa cumplir con nuestros deberes de forma oportuna, consciente y ética, considerando el impacto de nuestras decisiones.",
    },
    {
        icon: HandshakeIcon,
        title: "Confianza",
        description: "Construimos relaciones basadas en la credibilidad, la coherencia y el cumplimiento de nuestros compromisos. La confianza es el resultado de actuar con ética, transparencia y responsabilidad, generando seguridad en nuestros socios.",
    },
];

// ============================================
// ESTADÍSTICAS
// ============================================
const stats = [
    { number: "3+", label: "Años de experiencia" },
    { number: "24", label: "Socios fundadores" },
    { number: "30+", label: "Familias generando empleo" },
    { number: "3", label: "Agencias en operación" },
];

export default function NosotrosPage() {
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
                        title: "Conoce CRECE FINANCE",
                        subtitle: "Sobre Nosotros",
                        description: "Una sociedad cooperativa sólida y confiable, comprometida con el desarrollo financiero de nuestros socios y clientes.",
                        imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop", // Meeting/Team
                        ctaText: "Contáctanos",
                        ctaLink: "/contacto"
                    },
                    {
                        id: 2,
                        title: "Valores que Inspiran",
                        subtitle: "Nuestra Esencia",
                        description: "Integridad, transparencia y responsabilidad son los pilares que sostienen cada una de nuestras acciones.",
                        imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop", // Handshake/People
                        ctaText: "Ver Valores",
                        ctaLink: "#valores"
                    }
                ]}
            />

            {/* ============================================
          NUESTRA HISTORIA
          ============================================ */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block mb-4 rounded-full bg-primary-blue/10 px-4 py-2 text-sm font-semibold text-primary-blue">
                            Nuestra Historia
                        </span>
                        <h2 className="font-heading text-3xl font-bold text-primary-blue md:text-4xl lg:text-5xl mb-6">
                            Una visión que se convirtió en realidad
                        </h2>
                        <p className="mx-auto max-w-3xl text-lg text-gray-600 leading-relaxed">
                            CRECE FINANCE nace de la visión de cinco profesionales que, tras una amplia trayectoria
                            trabajando, dirigiendo y fortaleciendo diversas entidades financieras, identificaron
                            la necesidad de crear una institución sólida, cercana y confiable.
                        </p>
                    </div>

                    {/* Historia detallada */}
                    <div className="max-w-4xl mx-auto mb-20">
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-lg">
                            <div className="prose prose-lg max-w-none text-gray-600">
                                <p className="lead text-xl leading-relaxed mb-6">
                                    <strong className="text-primary-blue">Crece Finance, Sociedad Cooperativa de Responsabilidad Limitada de Capital Variable</strong> (abreviada como Crece Finance, Soc. Coop. de R. L. de C. V.), nace de la visión de cinco
                                    profesionales que, tras una amplia trayectoria trabajando, dirigiendo y fortaleciendo diversas
                                    entidades financieras, identificaron la necesidad de crear una institución sólida, cercana y
                                    confiable, orientada a brindar soluciones financieras accesibles, oportunas y transparentes,
                                    especialmente para quienes más lo requieren.
                                </p>
                                <p className="mb-6">
                                    Conscientes de que una institución fuerte se construye con personas y liderazgo, desde sus
                                    primeras etapas se incorporaron profesionales con amplia experiencia en el sector financiero,
                                    provenientes de distintas entidades del país. Esta integración permitió conformar un <strong className="text-primary-blue">equipo
                                        multidisciplinario con más de 3 años de experiencia</strong> en
                                    el sistema financiero salvadoreño, caracterizado por su honestidad, integridad y
                                    profesionalismo, valores que hoy distinguen a Crece Finance.
                                </p>
                                <p className="mb-6">
                                    Como resultado de este proceso, la institución cuenta con <strong className="text-primary-gold">24 accionistas fundadores e inversionistas</strong>,
                                    quienes asumieron el compromiso de aportar capital, experiencia y conocimiento, así como la
                                    responsabilidad ética de resguardar la reputación, la transparencia y la confianza de la
                                    institución, sentando las bases de una organización con visión de largo plazo, enfocada en la
                                    sostenibilidad y el crecimiento responsable.
                                </p>
                                <p>
                                    Actualmente, <strong className="text-primary-blue">Crece Finance genera empleo directo para más de
                                        treinta (30) familias</strong>, aportando al desarrollo económico local y reafirmando su misión
                                    de generar oportunidades, impulsar el crecimiento económico y mejorar la calidad de vida de sus colaboradores, socios
                                    y usuarios.
                                </p>
                                <p className="mt-6 border-l-4 border-primary-gold pl-6 italic text-gray-500">
                                    "Hoy, Crece Finance continúa avanzando con paso firme, consolidándose como una
                                    institución financiera confiable, comprometida con la transparencia, la responsabilidad y el
                                    desarrollo sostenible, bajo la convicción de que el crecimiento financiero debe ir siempre de
                                    la mano con el bienestar de las personas y las comunidades."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-center font-heading text-2xl font-bold text-primary-blue mb-12">
                            Línea del Tiempo
                        </h3>

                        <div className="relative">
                            {/* Línea central */}
                            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-gold via-primary-blue to-primary-gold transform -translate-x-1/2 hidden md:block" />

                            {timelineEvents.map((event, index) => (
                                <div
                                    key={event.date}
                                    className={`relative flex items-center mb-12 last:mb-0 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                        }`}
                                >
                                    {/* Content */}
                                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                                        <div className={`bg-white rounded-2xl p-6 shadow-lg border ${event.highlight ? "border-primary-gold shadow-primary-gold/20" : "border-gray-100"
                                            } hover:shadow-xl transition-shadow`}>
                                            <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                                                <Calendar className="h-4 w-4 text-primary-gold" />
                                                <span className="text-sm font-semibold text-primary-gold">{event.date}</span>
                                            </div>
                                            <h4 className="font-heading text-xl font-bold text-primary-blue mb-2">
                                                {event.title}
                                            </h4>
                                            <p className="text-gray-600">{event.description}</p>
                                            {event.location && (
                                                <div className={`flex items-center gap-2 mt-3 text-sm text-gray-500 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                                                    <MapPin className="h-4 w-4" />
                                                    {event.location}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Icon (center) */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-white border-4 border-primary-gold shadow-lg z-10">
                                        <event.icon className="h-6 w-6 text-primary-blue" />
                                    </div>

                                    {/* Spacer */}
                                    <div className="hidden md:block w-1/2" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================
          ESTADÍSTICAS
          ============================================ */}
            <section className="py-16 bg-gradient-to-r from-primary-blue to-primary-blue-600">
                <div className="container mx-auto px-6">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p className="font-heading text-5xl font-bold text-primary-gold mb-2">
                                    {stat.number}
                                </p>
                                <p className="text-white/80">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================
          MISIÓN Y VISIÓN
          ============================================ */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid gap-8 lg:grid-cols-2">
                        {/* Misión */}
                        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-blue to-primary-blue-600 p-10 text-white hover:shadow-2xl transition-shadow">
                            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary-gold/20 blur-2xl transition-all duration-500 group-hover:scale-150" />
                            <div className="relative">
                                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-gold/20">
                                    <Target className="h-8 w-8 text-primary-gold" />
                                </div>
                                <h2 className="mb-4 font-heading text-3xl font-bold">Nuestra Misión</h2>
                                <p className="text-lg text-white/90 leading-relaxed">
                                    &ldquo;Somos una sociedad cooperativa sólida y confiable que brinda
                                    servicios financieros oportunos y accesibles para nuestros socios
                                    y clientes.&rdquo;
                                </p>
                            </div>
                        </div>

                        {/* Visión */}
                        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-gold to-primary-gold-500 p-10 hover:shadow-2xl transition-shadow">
                            <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-primary-blue/20 blur-2xl transition-all duration-500 group-hover:scale-150" />
                            <div className="relative">
                                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-blue/20">
                                    <Eye className="h-8 w-8 text-primary-blue" />
                                </div>
                                <h2 className="mb-4 font-heading text-3xl font-bold text-primary-blue">
                                    Nuestra Visión
                                </h2>
                                <p className="text-lg text-primary-blue/90 leading-relaxed">
                                    &ldquo;Ser una entidad líder en servicios financieros, comprometida
                                    con el crecimiento y desarrollo de nuestros colaboradores, socios
                                    y clientes.&rdquo;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================
          VALORES INSTITUCIONALES
          ============================================ */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block mb-4 rounded-full bg-primary-gold/10 px-4 py-2 text-sm font-semibold text-primary-gold">
                            Lo que nos define
                        </span>
                        <h2 className="font-heading text-3xl font-bold text-primary-blue md:text-4xl mb-4">
                            Nuestros Valores Institucionales
                        </h2>
                        <p className="mx-auto max-w-2xl text-gray-600">
                            En CRECE FINANCE nos guiamos por principios fundamentales que rigen nuestra
                            forma de operar y relacionarnos con nuestros clientes y colaboradores.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {valores.map((valor, index) => (
                            <div
                                key={valor.title}
                                className="group relative overflow-hidden rounded-2xl bg-white p-8 border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                            >
                                {/* Hover gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-blue to-primary-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                <div className="relative z-10">
                                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-gold/10 text-primary-gold transition-colors group-hover:bg-white/20 group-hover:text-white">
                                        <valor.icon className="h-7 w-7" />
                                    </div>
                                    <h3 className="mb-3 font-heading text-xl font-bold text-primary-blue transition-colors group-hover:text-white">
                                        {valor.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed transition-colors group-hover:text-white/90">
                                        {valor.description}
                                    </p>
                                </div>

                                {/* Number indicator */}
                                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary-blue/5 flex items-center justify-center text-sm font-bold text-primary-blue/30 group-hover:bg-white/10 group-hover:text-white/50 transition-colors">
                                    {index + 1}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================
          CTA FINAL
          ============================================ */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-blue via-primary-blue-600 to-primary-blue-800">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-gold/10 rounded-full blur-3xl" />
                </div>

                <div className="container relative mx-auto px-6 text-center z-10">
                    <Sparkles className="h-12 w-12 text-primary-gold mx-auto mb-6" />
                    <h2 className="mb-4 font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                        ¿Listo para ser parte de CRECE FINANCE?
                    </h2>
                    <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
                        Únete a nuestra familia de socios y descubre todas las ventajas
                        de pertenecer a una cooperativa sólida y confiable.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/contacto">
                            <Button
                                variant="primary"
                                size="lg"
                                rightIcon={<ArrowRight className="h-5 w-5" />}
                            >
                                Contáctanos Ahora
                            </Button>
                        </Link>
                        <Link href="/servicios">
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-white/50 text-white hover:bg-white hover:text-primary-blue"
                            >
                                Ver Servicios
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
