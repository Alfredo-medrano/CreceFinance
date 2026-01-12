/**
 * Configuración de Cloudinary
 * Utilidades para gestión de imágenes en el sitio web CRECE FINANCE
 */

/** Nombre del cloud de Cloudinary */
export const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "demo";

/**
 * Construye una URL de Cloudinary con transformaciones
 */
export function getCloudinaryUrl(
    publicId: string,
    options: {
        width?: number;
        height?: number;
        quality?: "auto" | "auto:low" | "auto:eco" | "auto:good" | "auto:best" | number;
        format?: "auto" | "webp" | "avif" | "jpg" | "png";
        crop?: "fill" | "fit" | "scale" | "thumb" | "crop";
        gravity?: "auto" | "face" | "center" | "north" | "south" | "east" | "west";
        effect?: string;
    } = {}
): string {
    const {
        width,
        height,
        quality = "auto",
        format = "auto",
        crop = "fill",
        gravity = "auto",
        effect,
    } = options;

    const transformations: string[] = [];

    if (width) transformations.push(`w_${width}`);
    if (height) transformations.push(`h_${height}`);
    if (crop) transformations.push(`c_${crop}`);
    if (gravity) transformations.push(`g_${gravity}`);
    if (quality) transformations.push(`q_${quality}`);
    if (format) transformations.push(`f_${format}`);
    if (effect) transformations.push(`e_${effect}`);

    const transformString = transformations.length > 0 ? transformations.join(",") + "/" : "";

    return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transformString}${publicId}`;
}

/** Rutas de imágenes predefinidas del sitio */
export const cloudinaryImages = {
    hero: {
        slide1: "crece-finance/hero/slide1",
        slide2: "crece-finance/hero/slide2",
        slide3: "crece-finance/hero/slide3",
        slide4: "crece-finance/hero/slide4",
    },
    logos: {
        main: "crece-finance/logos/logo-main",
        white: "crece-finance/logos/logo-white",
        icon: "crece-finance/logos/isotipo",
        horizontal: "crece-finance/logos/logo-horizontal",
    },
    services: {
        savings: "crece-finance/services/ahorro",
        loans: "crece-finance/services/prestamos",
        investments: "crece-finance/services/inversiones",
    },
    about: {
        team: "crece-finance/about/equipo",
        office: "crece-finance/about/oficina",
    },
};

/**
 * Obtiene URL de imagen hero con dimensiones optimizadas
 */
export function getHeroImageUrl(publicId: string): string {
    return getCloudinaryUrl(publicId, {
        width: 1920,
        height: 1080,
        quality: "auto:good",
        format: "auto",
        crop: "fill",
        gravity: "auto",
    });
}

/**
 * Obtiene URL de logo con configuración según variante
 */
export function getLogoUrl(publicId: string, variant: "small" | "medium" | "large" = "medium"): string {
    const sizes = {
        small: { width: 120, height: 40 },
        medium: { width: 180, height: 60 },
        large: { width: 300, height: 100 },
    };

    return getCloudinaryUrl(publicId, {
        ...sizes[variant],
        quality: "auto:best",
        format: "auto",
        crop: "fit",
    });
}
