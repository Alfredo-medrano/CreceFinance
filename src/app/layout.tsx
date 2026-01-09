import type { Metadata } from "next";
import { Open_Sans, Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700", "900"],
});

// ============================================
// 🎨 CONFIGURA EL FAVICON AQUÍ
// Pega la URL de tu isotipo/icono de Cloudinary
// ============================================
const FAVICON_URL = "https://res.cloudinary.com/dm1fivmmh/image/upload/v1767991987/logo2_qcbu5g.png";

export const metadata: Metadata = {
  title: "CRECE FINANCE | Tu Aliado Financiero",
  description:
    "CRECE FINANCE - Soluciones financieras en El Salvador. Ahorro, inversiones, microcréditos y préstamos personales adaptados a tus necesidades.",
  keywords: [
    "finanzas",
    "ahorro",
    "préstamos",
    "microcréditos",
    "inversiones",
    "El Salvador",
    "San Miguel",
    "CRECE FINANCE",
    "cooperativa",
  ],
  authors: [{ name: "CRECE FINANCE" }],

  // Favicon configuration
  icons: {
    icon: [
      { url: FAVICON_URL, type: "image/png" },
    ],
    apple: [
      { url: FAVICON_URL, sizes: "180x180", type: "image/png" },
    ],
  },

  openGraph: {
    title: "CRECE FINANCE | Tu Aliado Financiero",
    description:
      "Soluciones financieras en El Salvador. Ahorro, inversiones, microcréditos y préstamos personales.",
    type: "website",
    locale: "es_SV",
    siteName: "CRECE FINANCE",
    images: [
      {
        url: "https://res.cloudinary.com/dm1fivmmh/image/upload/v1767991987/LogoHorizontal_iohiqa.png",
        width: 1200,
        height: 630,
        alt: "CRECE FINANCE - Tu Aliado Financiero",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CRECE FINANCE | Tu Aliado Financiero",
    description: "Soluciones financieras en El Salvador.",
    images: ["https://res.cloudinary.com/dm1fivmmh/image/upload/v1767991987/LogoHorizontal_iohiqa.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Favicon from Cloudinary */}
        <link rel="icon" href={FAVICON_URL} />
        <link rel="apple-touch-icon" href={FAVICON_URL} />
      </head>
      <body
        className={`${openSans.variable} ${roboto.variable} font-sans antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
