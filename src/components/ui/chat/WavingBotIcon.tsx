"use client";

import React from "react";
import { cn } from "@/lib/cn";

/**
 * Componente de Robot Saludando
 * Mascota amigable para el chatbot
 */
export function WavingBotIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 100 100"
            className={cn("w-12 h-12", className)}
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Definiciones de gradientes */}
            <defs>
                <linearGradient id="botMetal" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f0f4f8" />
                    <stop offset="100%" stopColor="#d9e2ec" />
                </linearGradient>
                <linearGradient id="botBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0a3d6a" />
                    <stop offset="100%" stopColor="#062b4d" />
                </linearGradient>
                <linearGradient id="botEye" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#000" />
                    <stop offset="100%" stopColor="#333" />
                </linearGradient>
            </defs>

            {/* Cabeza */}
            <rect x="25" y="25" width="50" height="40" rx="10" ry="10" fill="url(#botMetal)" stroke="#0a3d6a" strokeWidth="2" />

            {/* Antena */}
            <line x1="50" y1="25" x2="50" y2="15" stroke="#0a3d6a" strokeWidth="2" />
            <circle cx="50" cy="12" r="4" fill="#f6cf51" stroke="#e5a810" strokeWidth="1">
                <animate attributeName="fill" values="#f6cf51;#ffeb3b;#f6cf51" dur="2s" repeatCount="indefinite" />
            </circle>

            {/* Ojos */}
            <ellipse cx="40" cy="40" rx="6" ry="8" fill="url(#botEye)" />
            <ellipse cx="60" cy="40" rx="6" ry="8" fill="url(#botEye)" />

            {/* Brillo Ojos */}
            <circle cx="42" cy="38" r="2" fill="white" fillOpacity="0.8" />
            <circle cx="62" cy="38" r="2" fill="white" fillOpacity="0.8" />

            {/* Boca Sonriente */}
            <path d="M 40 55 Q 50 62 60 55" fill="none" stroke="#0a3d6a" strokeWidth="2" strokeLinecap="round" />

            {/* Cuerpo (parcial para el icono) */}
            <path d="M 30 65 L 30 85 Q 50 90 70 85 L 70 65" fill="url(#botBlue)" />

            {/* Mano Saludando */}
            <g className="animate-wave origin-bottom-right" style={{ transformBox: "fill-box", transformOrigin: "80% 80%" }}>
                <path d="M 75 60 L 85 40 Q 90 35 95 40 Q 98 45 92 50 L 80 65" fill="url(#botMetal)" stroke="#0a3d6a" strokeWidth="2" />
            </g>

            <style jsx>{`
                @keyframes wave {
                    0%, 100% { transform: rotate(0deg); }
                    25% { transform: rotate(-10deg); }
                    75% { transform: rotate(10deg); }
                }
                .animate-wave {
                    animation: wave 1.5s ease-in-out infinite;
                }
            `}</style>
        </svg>
    );
}
