"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import {
    Menu,
    X,
    ChevronDown,
    Phone,
    MapPin,
    PiggyBank,
    Gift,
    Coins,
    Building,
    CreditCard,
    Users,
    Briefcase,
    TrendingUp,
} from "lucide-react";

// ============================================
// 🎨 CONFIGURA TUS LOGOS AQUÍ
// ============================================
const LOGO_CONFIG = {
    // Logo principal (horizontal) - para el header
    horizontal: "https://res.cloudinary.com/dm1fivmmh/image/upload/v1767991987/Horizontal2_ebpdri.png",
    // Logo blanco - para fondo oscuro cuando no hay scroll
    white: "https://res.cloudinary.com/dm1fivmmh/image/upload/v1767991987/Horizontal2_ebpdri.png",
    // Isotipo/Icono - para favicon y espacios pequeños
    icon: "https://res.cloudinary.com/dm1fivmmh/image/upload/v1767991987/logo2_qcbu5g.png",
};

interface NavItem {
    label: string;
    href: string;
    children?: NavItem[];
    icon?: React.ReactNode;
}

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
            { label: "Acciones Preferentes Plus", href: "/inversiones/acciones-preferentes-plus", icon: <TrendingUp className="h-4 w-4" /> },
        ],
    },
    {
        label: "Préstamos",
        href: "/prestamos",
        children: [
            { label: "Microcréditos", href: "/prestamos/microcreditos", icon: <Briefcase className="h-4 w-4" /> },
            { label: "Préstamo Personal", href: "/prestamos/personal", icon: <CreditCard className="h-4 w-4" /> },
            { label: "Préstamo Grupal", href: "/prestamos/grupal", icon: <Users className="h-4 w-4" /> },
            { label: "Crédito PYME", href: "/prestamos/pyme", icon: <Building className="h-4 w-4" /> },
        ],
    },
    { label: "Agencias", href: "/agencias" },
    { label: "Eventos", href: "/eventos" },
    { label: "Contacto", href: "/contacto" },
];

interface DropdownProps {
    items: NavItem[];
    isOpen: boolean;
}

function Dropdown({ items, isOpen }: DropdownProps) {
    return (
        <div
            className={cn(
                "absolute left-0 top-full mt-2 min-w-[240px] rounded-xl bg-white p-2 shadow-xl border border-gray-100 transition-all duration-300",
                isOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0"
            )}
        >
            {items.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-primary-blue/5 hover:text-primary-blue"
                >
                    {item.icon && (
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-gold/10 text-primary-gold">
                            {item.icon}
                        </span>
                    )}
                    <span className="font-medium">{item.label}</span>
                </Link>
            ))}
        </div>
    );
}

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/95 shadow-lg backdrop-blur-md"
                    : "bg-transparent"
            )}
        >
            {/* Top Bar */}
            <div
                className={cn(
                    "border-b transition-all duration-300",
                    isScrolled
                        ? "border-gray-100 bg-primary-blue"
                        : "border-white/10 bg-primary-blue/80"
                )}
            >
                <div className="container mx-auto flex items-center justify-between px-6 py-2 text-sm">
                    <div className="flex items-center gap-6 text-white/90">
                        <a
                            href="tel:26607373"
                            className="flex items-center gap-2 transition-colors hover:text-primary-gold"
                        >
                            <Phone className="h-4 w-4" />
                            <span>2660-7373</span>
                        </a>
                        <span className="hidden items-center gap-2 md:flex">
                            <MapPin className="h-4 w-4" />
                            <span>San Miguel, El Salvador</span>
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link
                            href="/contacto"
                            className="text-white/90 transition-colors hover:text-primary-gold"
                        >
                            Contáctanos
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="container mx-auto px-6">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <div className="relative h-14 w-40 md:w-48">
                            <Image
                                src={isScrolled ? LOGO_CONFIG.horizontal : LOGO_CONFIG.white}
                                alt="CRECE FINANCE"
                                fill
                                className="object-contain object-left"
                                priority
                                unoptimized
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-1 lg:flex">
                        {navItems.map((item) => (
                            <div
                                key={item.href}
                                className="relative"
                                onMouseEnter={() =>
                                    item.children && setOpenDropdown(item.label)
                                }
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-1 rounded-lg px-4 py-2 font-medium transition-colors",
                                        isScrolled
                                            ? "text-gray-700 hover:bg-primary-blue/5 hover:text-primary-blue"
                                            : "text-white/90 hover:bg-white/10 hover:text-white"
                                    )}
                                >
                                    {item.label}
                                    {item.children && (
                                        <ChevronDown
                                            className={cn(
                                                "h-4 w-4 transition-transform",
                                                openDropdown === item.label && "rotate-180"
                                            )}
                                        />
                                    )}
                                </Link>
                                {item.children && (
                                    <Dropdown
                                        items={item.children}
                                        isOpen={openDropdown === item.label}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <Button variant="primary" size="sm">
                            Solicitar Crédito
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={cn(
                            "rounded-lg p-2 transition-colors lg:hidden",
                            isScrolled
                                ? "text-primary-blue hover:bg-primary-blue/10"
                                : "text-white hover:bg-white/10"
                        )}
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "fixed inset-x-0 top-[120px] bottom-0 bg-white transition-all duration-300 lg:hidden",
                    isMobileMenuOpen
                        ? "visible opacity-100"
                        : "invisible opacity-0"
                )}
            >
                <nav className="container mx-auto px-6 py-4">
                    {navItems.map((item) => (
                        <div key={item.href} className="border-b border-gray-100">
                            <Link
                                href={item.href}
                                className="flex items-center justify-between py-4 font-medium text-gray-700"
                                onClick={() => !item.children && setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                                {item.children && <ChevronDown className="h-5 w-5" />}
                            </Link>
                            {item.children && (
                                <div className="pb-4 pl-4">
                                    {item.children.map((child) => (
                                        <Link
                                            key={child.href}
                                            href={child.href}
                                            className="flex items-center gap-3 py-2 text-gray-600 hover:text-primary-blue"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {child.icon}
                                            {child.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="mt-6">
                        <Button variant="primary" size="lg" className="w-full">
                            Solicitar Crédito
                        </Button>
                    </div>
                </nav>
            </div>
        </header>
    );
}
