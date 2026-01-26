/**
 * Componente PlayStoreBadge
 * Badge oficial de Google Play Store reutilizable
 */

interface PlayStoreBadgeProps {
    className?: string;
}

export function PlayStoreBadge({ className = "" }: PlayStoreBadgeProps) {
    return (
        <div className={`inline-flex items-center gap-3 px-5 py-3 bg-black/80 text-white rounded-xl hover:bg-black transition-colors ${className}`}>
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                    d="M3.609 1.814c-.287.179-.48.498-.48.862v18.648c0 .364.193.683.48.862l.057.032 10.449-10.449v-.118L3.666 1.782l-.057.032z"
                    fill="#00D7FE"
                />
                <path
                    d="M17.574 15.306l-3.458-3.458v-.118l3.458-3.458.078.045 4.1 2.33c1.17.664 1.17 1.75 0 2.414l-4.1 2.33-.078.045z"
                    fill="#FFCE00"
                />
                <path
                    d="M17.652 15.261l-3.536-3.413L3.609 22.324c.385.404 1.023.428 1.439.186l12.604-7.249z"
                    fill="#FF3A44"
                />
                <path
                    d="M17.652 8.318L5.048 1.069c-.416-.242-1.054-.218-1.439.186l10.507 10.507 3.536-3.444z"
                    fill="#00F076"
                />
            </svg>
            <div className="text-left">
                <span className="block text-[10px] text-white/70 uppercase tracking-wider">
                    Disponible en
                </span>
                <span className="block text-sm font-semibold">Google Play</span>
            </div>
        </div>
    );
}
