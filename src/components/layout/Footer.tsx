import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Phone,
    MapPin,
    Mail,
    Facebook,
    Instagram,
    Linkedin,
    Clock,
    ArrowRight,
} from "lucide-react";

// ============================================
// 🎨 CONFIGURA TU IMAGEN DE FONDO AQUÍ
// ============================================
const FOOTER_CONFIG = {
    backgroundImage: "https://res.cloudinary.com/dm1fivmmh/image/upload/v1767993424/se%C3%B1oraRiendo_fo7shy.webp",
    logo: "https://res.cloudinary.com/dm1fivmmh/image/upload/v1767991987/Horizontal2_ebpdri.png",
};

const quickLinks = [
    { label: "Inicio", href: "/" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Servicios", href: "/servicios" },
    { label: "Agencias", href: "/agencias" },
    { label: "Contacto", href: "/contacto" },
];

const services = [
    { label: "Ahorro Plazo Fijo", href: "/ahorros/plazo-fijo" },
    { label: "Ahorro Navideño", href: "/ahorros/navideno" },
    { label: "Microcréditos", href: "/prestamos/microcreditos" },
    { label: "Préstamo Personal", href: "/prestamos/personal" },
    { label: "Inversiones", href: "/inversiones" },
];

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative text-white overflow-hidden">
            {/* ============================================
          CAPA 1: IMAGEN DE FONDO
          ============================================ */}
            <div className="absolute inset-0">
                <Image
                    src={FOOTER_CONFIG.backgroundImage}
                    alt="CRECE FINANCE Footer"
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                    unoptimized
                />
            </div>

            {/* ============================================
          CAPA 2: DEGRADADO AZUL
          ============================================ */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-blue via-primary-blue/95 to-primary-blue/90" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-blue-900 via-primary-blue/80 to-transparent" />

            {/* ============================================
          CAPA 3: LÍNEAS DORADAS DECORATIVAS
          ============================================ */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="footerGoldLine" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#e5a810" stopOpacity="0" />
                        <stop offset="20%" stopColor="#e5a810" stopOpacity="0.5" />
                        <stop offset="50%" stopColor="#f6cf51" stopOpacity="0.7" />
                        <stop offset="80%" stopColor="#e5a810" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#e5a810" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {/* Líneas diagonales */}
                <line x1="0" y1="10%" x2="100%" y2="25%" stroke="url(#footerGoldLine)" strokeWidth="2" opacity="0.3" />
                <line x1="0" y1="30%" x2="100%" y2="45%" stroke="url(#footerGoldLine)" strokeWidth="1.5" opacity="0.25" />
                <line x1="0" y1="60%" x2="100%" y2="75%" stroke="url(#footerGoldLine)" strokeWidth="2.5" opacity="0.35" />
                <line x1="0" y1="80%" x2="100%" y2="95%" stroke="url(#footerGoldLine)" strokeWidth="1" opacity="0.2" />
            </svg>

            {/* ============================================
          CAPA 4: EFECTOS DECORATIVOS
          ============================================ */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Círculos con glow dorado */}
                <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-primary-gold/15 blur-3xl" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary-gold/10 blur-3xl" />

                {/* Patrón de puntos dorados */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `radial-gradient(circle, #e5a810 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            {/* ============================================
          CURVA SUPERIOR
          ============================================ */}
            <div className="absolute -top-1 left-0 right-0 z-10">
                <svg
                    viewBox="0 0 1440 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full rotate-180"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0 60L48 54C96 48 192 36 288 30C384 24 480 24 576 27C672 30 768 36 864 39C960 42 1056 42 1152 36C1248 30 1344 18 1392 12L1440 6V60H0Z"
                        fill="white"
                    />
                    {/* Línea dorada en la curva */}
                    <path
                        d="M0 54L48 48C96 42 192 30 288 24C384 18 480 18 576 21C672 24 768 30 864 33C960 36 1056 36 1152 30C1248 24 1344 12 1392 6L1440 0"
                        stroke="#e5a810"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.4"
                    />
                </svg>
            </div>

            {/* ============================================
          CONTENIDO PRINCIPAL
          ============================================ */}
            <div className="relative z-20 container mx-auto px-6 py-16 pt-24">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="mb-6 flex items-center">
                            <div className="relative h-14 w-40">
                                <Image
                                    src={FOOTER_CONFIG.logo}
                                    alt="CRECE FINANCE"
                                    fill
                                    className="object-contain object-left"
                                    unoptimized
                                />
                            </div>
                        </Link>
                        <p className="mb-6 text-white/70 leading-relaxed">
                            Tu aliado financiero en El Salvador. Ofrecemos soluciones de
                            ahorro, inversión y crédito adaptadas a tus necesidades.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-all hover:bg-primary-gold hover:text-primary-blue border border-white/10 hover:border-primary-gold"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-all hover:bg-primary-gold hover:text-primary-blue border border-white/10 hover:border-primary-gold"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-all hover:bg-primary-gold hover:text-primary-blue border border-white/10 hover:border-primary-gold"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-6 font-heading text-lg font-bold text-white flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-primary-gold"></span>
                            Enlaces Rápidos
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="group flex items-center text-white/70 transition-colors hover:text-primary-gold"
                                    >
                                        <ArrowRight className="mr-2 h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="mb-6 font-heading text-lg font-bold text-white flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-primary-gold"></span>
                            Nuestros Servicios
                        </h3>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.href}>
                                    <Link
                                        href={service.href}
                                        className="group flex items-center text-white/70 transition-colors hover:text-primary-gold"
                                    >
                                        <ArrowRight className="mr-2 h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                                        {service.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="mb-6 font-heading text-lg font-bold text-white flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-primary-gold"></span>
                            Contacto
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-gold/20 border border-primary-gold/30">
                                    <MapPin className="h-5 w-5 text-primary-gold" />
                                </div>
                                <div>
                                    <p className="font-medium text-white">Dirección</p>
                                    <p className="text-sm text-white/70">
                                        2 calle Pte. Y 7 Av. Nte. 418
                                        <br />
                                        Barrio San Felipe, San Miguel
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-gold/20 border border-primary-gold/30">
                                    <Phone className="h-5 w-5 text-primary-gold" />
                                </div>
                                <div>
                                    <p className="font-medium text-white">Teléfono</p>
                                    <a
                                        href="tel:26607373"
                                        className="text-sm text-white/70 transition-colors hover:text-primary-gold"
                                    >
                                        2660-7373
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-gold/20 border border-primary-gold/30">
                                    <Mail className="h-5 w-5 text-primary-gold" />
                                </div>
                                <div>
                                    <p className="font-medium text-white">Email</p>
                                    <a
                                        href="mailto:info@crecefinance.com"
                                        className="text-sm text-white/70 transition-colors hover:text-primary-gold"
                                    >
                                        info@crecefinance.com
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-gold/20 border border-primary-gold/30">
                                    <Clock className="h-5 w-5 text-primary-gold" />
                                </div>
                                <div>
                                    <p className="font-medium text-white">Horario</p>
                                    <p className="text-sm text-white/70">
                                        Lunes a Viernes: 8:00 AM - 5:00 PM
                                        <br />
                                        Sábado: 8:00 AM - 12:00 PM
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* ============================================
          BARRA INFERIOR
          ============================================ */}
            <div className="relative z-20 border-t border-primary-gold/20">
                <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
                    <p className="text-sm text-white/60">
                        © {currentYear} CRECE FINANCE. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-6 text-sm text-white/60">
                        <Link
                            href="/privacidad"
                            className="transition-colors hover:text-primary-gold"
                        >
                            Política de Privacidad
                        </Link>
                        <Link
                            href="/terminos"
                            className="transition-colors hover:text-primary-gold"
                        >
                            Términos y Condiciones
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
