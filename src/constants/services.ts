import { Receipt, Globe, Users, Smartphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * Constantes de datos para la página de Servicios
 */

export interface ServiceData {
    id: string;
    icon: LucideIcon;
    title: string;
    description: string;
    variant?: "light" | "dark";
    href?: string;
    external?: boolean;
}

export const SERVICES_DATA: ServiceData[] = [
    {
        id: "punto-xpress",
        icon: Receipt,
        title: "Pago de Servicios Básicos (Punto Xpress)",
        description: "Realiza el pago de tus servicios básicos y facturas de forma rápida y segura, a través de la plataforma Punto Xpress, en un solo lugar y sin largas filas.",
        variant: "light",
    },
    {
        id: "remesas",
        icon: Globe,
        title: "Remesas Familiares (Western Union)",
        description: "Recibe y envía remesas familiares de forma segura y confiable, con atención personalizada y respaldo internacional.",
        variant: "light",
    },
    {
        id: "cobro-domicilio",
        icon: Users,
        title: "Cobro a Domicilio",
        description: "Ofrecemos el servicio de cobro de cuotas de crédito y ahorro a domicilio, facilitando el cumplimiento de obligaciones financieras para nuestros socios.",
        variant: "light",
    },
    {
        id: "app-movil",
        icon: Smartphone,
        title: "App Móvil CRECE",
        description: "Descarga nuestra aplicación y gestiona tus cuentas, consulta saldos y realiza operaciones desde tu celular. Disponible en Android.",
        variant: "dark",
        href: "https://play.google.com/store/apps/details?id=com.sstsoluciones.arisstoCrecefinanceProduccion2&pcampaignid=web_share",
        external: true,
    },
];

/**
 * Slides del carrusel de servicios
 */
export const SERVICES_HERO_SLIDES = [
    {
        id: 1,
        title: "Soluciones Integrales",
        subtitle: "Servicios",
        description: "Complementamos nuestros productos financieros con servicios diseñados para facilitar tu día a día.",
        imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1920&auto=format&fit=crop",
        ctaText: "Ver Servicios",
        ctaLink: "#servicios",
        secondaryCtaText: "Contáctanos",
        secondaryCtaLink: "/contacto",
    },
    {
        id: 2,
        title: "Facilidad y Rapidez",
        subtitle: "Tecnología",
        description: "Realiza tus pagos, cobros y trámites de manera ágil y segura en nuestras agencias.",
        imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1920&auto=format&fit=crop",
        ctaText: "Contáctanos",
        ctaLink: "/contacto",
        secondaryCtaText: "Ver servicios",
        secondaryCtaLink: "#servicios",
    },
];
