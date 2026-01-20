"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import {
    Menu,
    X,
    ChevronDown,
    ChevronRight,
    PiggyBank,
    Gift,
    Coins,
    Building,
    CreditCard,
    Users,
    Briefcase,
    TrendingUp,
    ShoppingBag,
    Key,
    Home,
} from "lucide-react";

/** URLs de logos desde Cloudinary */
const LOGO_CONFIG = {
    horizontal: "https://res.cloudinary.com/dm1fivmmh/image/upload/v1767991987/Horizontal2_ebpdri.png",
    white: "https://res.cloudinary.com/dm1fivmmh/image/upload/v1767991987/Horizontal2_ebpdri.png",
    icon: "https://res.cloudinary.com/dm1fivmmh/image/upload/v1767991987/logo2_qcbu5g.png",
};

interface NavItem {
    label: string;
    href: string;
    children?: NavItem[];
    icon?: React.ReactNode;
}

/** Estructura de navegación principal */
const navItems: NavItem[] = [
    { label: "Inicio", href: "/" },
    { label: "Nosotros", href: "/nosotros" },
    {
        label: "Ahorros",
        href: "/ahorros",
        children: [
            { label: "Ahorro a la Vista", href: "/ahorros/vista", icon: <Coins className="h-4 w-4" /> },
            { label: "Ahorro Navideño", href: "/ahorros/navideno", icon: <Gift className="h-4 w-4" /> },
            { label: "Ahorro Infantil", href: "/ahorros/infantil", icon: <Users className="h-4 w-4" /> },
            { label: "Ahorro Escolar", href: "/ahorros/escolar", icon: <Building className="h-4 w-4" /> },
            { label: "Plazo Fijo", href: "/ahorros/plazo-fijo", icon: <PiggyBank className="h-4 w-4" /> },
        ],
    },
    {
        label: "Inversiones",
        href: "/inversiones",
        children: [
            { label: "Acciones Preferidas", href: "/inversiones/acciones-preferidas", icon: <Coins className="h-4 w-4" /> },
            { label: "Acciones Preferidas Plus", href: "/inversiones/acciones-preferidas-plus", icon: <TrendingUp className="h-4 w-4" /> },
        ],
    },
    {
        label: "Préstamos",
        href: "/prestamos",
        children: [
            { label: "Microcréditos", href: "/prestamos/microcreditos", icon: <Briefcase className="h-4 w-4" /> },
            { label: "Comercio", href: "/prestamos/comercio", icon: <ShoppingBag className="h-4 w-4" /> },
            { label: "Consumo", href: "/prestamos/consumo", icon: <CreditCard className="h-4 w-4" /> },
            { label: "Prendarios", href: "/prestamos/prendarios", icon: <Key className="h-4 w-4" /> },
            { label: "Vivienda", href: "/prestamos/vivienda", icon: <Home className="h-4 w-4" /> },
        ],
    },
    { label: "Servicios", href: "/servicios" },
    { label: "Agencias", href: "/agencias" },
    { label: "Eventos", href: "/eventos" },
    { label: "Contacto", href: "/contacto" },
];

/**
 * Componente Header
 * Navegación principal con soporte para desktop y móvil
 */
export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Cerrar menú móvil al cambiar de ruta
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setExpandedMobileItem(null);
    }, [pathname]);

    // Bloquear scroll del body cuando el menú móvil está abierto
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    const isActive = (path: string) => {
        if (path === "/") return pathname === "/";
        return pathname.startsWith(path);
    };

    const toggleMobileSubmenu = (label: string) => {
        setExpandedMobileItem(expandedMobileItem === label ? null : label);
    };

    return (
        <>
            <header
                className={cn(
                    "fixed left-0 right-0 top-0 z-50 transition-all duration-500",
                    isScrolled
                        ? "bg-white shadow-lg shadow-gray-200/50"
                        : "bg-gradient-to-b from-black/60 via-black/30 to-transparent"
                )}
            >
                <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 sm:h-18 lg:h-20 items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="relative flex items-center shrink-0">
                            <div className="relative h-10 w-32 sm:h-12 sm:w-36 lg:h-14 lg:w-44">
                                <Image
                                    src={isScrolled ? LOGO_CONFIG.horizontal : LOGO_CONFIG.white}
                                    alt="CRECE FINANCE"
                                    fill
                                    className="object-contain object-left transition-opacity duration-300"
                                    priority
                                    unoptimized
                                />
                            </div>
                        </Link>

                        {/* Navegación desktop */}
                        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
                            {navItems.map((item) => {
                                const active = isActive(item.href);
                                return (
                                    <div
                                        key={item.href}
                                        className="relative group"
                                        onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                                        onMouseLeave={() => setOpenDropdown(null)}
                                    >
                                        <Link
                                            href={item.href}
                                            className={cn(
                                                "relative flex items-center gap-1 px-3 xl:px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                                                isScrolled
                                                    ? active
                                                        ? "bg-primary-blue text-white shadow-md shadow-primary-blue/30"
                                                        : "text-gray-700 hover:bg-gray-100"
                                                    : active
                                                        ? "bg-white/20 text-white backdrop-blur-sm [text-shadow:_0_1px_3px_rgb(0_0_0_/_60%)]"
                                                        : "text-white hover:text-white hover:bg-white/10 [text-shadow:_0_1px_3px_rgb(0_0_0_/_60%)]"
                                            )}
                                        >
                                            {item.label}
                                            {item.children && (
                                                <ChevronDown
                                                    className={cn(
                                                        "h-3.5 w-3.5 transition-transform duration-200",
                                                        openDropdown === item.label && "rotate-180"
                                                    )}
                                                />
                                            )}
                                        </Link>

                                        {/* Menú desplegable */}
                                        {item.children && (
                                            <div
                                                className={cn(
                                                    "absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-all duration-200",
                                                    openDropdown === item.label
                                                        ? "opacity-100 visible translate-y-0"
                                                        : "opacity-0 invisible -translate-y-2"
                                                )}
                                            >
                                                <div className="min-w-[280px] bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-2 overflow-hidden">
                                                    {item.children.map((child) => {
                                                        const childActive = pathname === child.href;
                                                        return (
                                                            <Link
                                                                key={child.href}
                                                                href={child.href}
                                                                className={cn(
                                                                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                                                                    childActive
                                                                        ? "bg-primary-blue/10 text-primary-blue"
                                                                        : "text-gray-600 hover:bg-gray-50"
                                                                )}
                                                            >
                                                                {child.icon && (
                                                                    <span className={cn(
                                                                        "flex h-9 w-9 items-center justify-center rounded-xl transition-colors",
                                                                        childActive
                                                                            ? "bg-primary-blue text-white"
                                                                            : "bg-gray-100 text-gray-500"
                                                                    )}>
                                                                        {React.cloneElement(child.icon as React.ReactElement<any>, { className: "h-4 w-4" })}
                                                                    </span>
                                                                )}
                                                                <span className="font-medium">{child.label}</span>
                                                            </Link>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Botón menú móvil */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={cn(
                                "lg:hidden relative z-50 p-2 rounded-xl transition-all duration-300",
                                isMobileMenuOpen
                                    ? "bg-gray-100 text-gray-700"
                                    : isScrolled
                                        ? "text-gray-700 hover:bg-gray-100"
                                        : "text-white hover:bg-white/10 [filter:_drop-shadow(0_1px_2px_rgb(0_0_0_/_60%))]"
                            )}
                            aria-label="Toggle menu"
                        >
                            <div className="relative w-6 h-6">
                                <span className={cn(
                                    "absolute left-0 w-6 h-0.5 bg-current transition-all duration-300",
                                    isMobileMenuOpen ? "top-[11px] rotate-45" : "top-1"
                                )} />
                                <span className={cn(
                                    "absolute left-0 top-[11px] w-6 h-0.5 bg-current transition-all duration-300",
                                    isMobileMenuOpen ? "opacity-0 scale-x-0" : "opacity-100"
                                )} />
                                <span className={cn(
                                    "absolute left-0 w-6 h-0.5 bg-current transition-all duration-300",
                                    isMobileMenuOpen ? "top-[11px] -rotate-45" : "top-[19px]"
                                )} />
                            </div>
                        </button>
                    </div>
                </nav>
            </header>

            {/* Menú móvil - Panel lateral */}
            <div
                className={cn(
                    "fixed inset-0 z-40 lg:hidden transition-all duration-300",
                    isMobileMenuOpen ? "visible" : "invisible"
                )}
            >
                {/* Fondo oscuro */}
                <div
                    className={cn(
                        "absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
                        isMobileMenuOpen ? "opacity-100" : "opacity-0"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                />

                {/* Panel del menú */}
                <div
                    className={cn(
                        "absolute right-0 top-0 bottom-0 w-full max-w-[320px] sm:max-w-[380px] bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col",
                        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    )}
                >
                    {/* Cabecera del menú móvil */}
                    <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-100">
                        <div className="relative h-10 w-28">
                            <Image
                                src={LOGO_CONFIG.horizontal}
                                alt="CRECE FINANCE"
                                fill
                                className="object-contain object-left"
                                unoptimized
                            />
                        </div>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 rounded-xl text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Navegación móvil */}
                    <nav className="flex-1 overflow-y-auto py-4">
                        <div className="px-4 sm:px-6 space-y-1">
                            {navItems.map((item) => {
                                const active = isActive(item.href);
                                const isExpanded = expandedMobileItem === item.label;

                                return (
                                    <div key={item.href}>
                                        <div className="flex items-center">
                                            <Link
                                                href={item.href}
                                                onClick={() => !item.children && setIsMobileMenuOpen(false)}
                                                className={cn(
                                                    "flex-1 flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200",
                                                    active
                                                        ? "bg-primary-blue text-white"
                                                        : "text-gray-700 hover:bg-gray-50"
                                                )}
                                            >
                                                <span className="flex-1">{item.label}</span>
                                                {active && !item.children && (
                                                    <span className="h-2 w-2 rounded-full bg-primary-gold animate-pulse" />
                                                )}
                                            </Link>
                                            {item.children && (
                                                <button
                                                    onClick={() => toggleMobileSubmenu(item.label)}
                                                    className={cn(
                                                        "p-3 rounded-xl transition-colors",
                                                        active ? "text-primary-blue" : "text-gray-400 hover:text-gray-600"
                                                    )}
                                                >
                                                    <ChevronRight
                                                        className={cn(
                                                            "h-5 w-5 transition-transform duration-200",
                                                            isExpanded && "rotate-90"
                                                        )}
                                                    />
                                                </button>
                                            )}
                                        </div>

                                        {/* Submenú móvil */}
                                        {item.children && (
                                            <div
                                                className={cn(
                                                    "overflow-hidden transition-all duration-300",
                                                    isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                                )}
                                            >
                                                <div className="ml-4 mt-1 pl-4 border-l-2 border-gray-100 space-y-1">
                                                    {item.children.map((child) => {
                                                        const childActive = pathname === child.href;
                                                        return (
                                                            <Link
                                                                key={child.href}
                                                                href={child.href}
                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                                className={cn(
                                                                    "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                                                                    childActive
                                                                        ? "bg-primary-gold/10 text-primary-gold"
                                                                        : "text-gray-500 hover:text-primary-blue hover:bg-gray-50"
                                                                )}
                                                            >
                                                                {child.icon && (
                                                                    <span className={cn(
                                                                        "flex h-8 w-8 items-center justify-center rounded-lg",
                                                                        childActive ? "bg-primary-gold/20 text-primary-gold" : "bg-gray-100 text-gray-400"
                                                                    )}>
                                                                        {React.cloneElement(child.icon as React.ReactElement<any>, { className: "h-4 w-4" })}
                                                                    </span>
                                                                )}
                                                                {child.label}
                                                            </Link>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </nav>

                    {/* Pie del menú móvil */}
                    <div className="p-4 sm:p-6 border-t border-gray-100 bg-gray-50/50">
                        <Link href="/contacto" onClick={() => setIsMobileMenuOpen(false)} className="block">
                            <Button className="w-full justify-center py-3 text-base shadow-lg shadow-primary-gold/20">
                                Contáctanos
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
