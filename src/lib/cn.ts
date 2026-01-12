import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina clases condicionales con merge de Tailwind CSS
 * Evita conflictos de estilos duplicados
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
