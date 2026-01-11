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
  metadataBase: new URL('https://crecefinance.com.sv'),
  title: {
    default: "CRECE FINANCE | Tu Aliado Financiero en El Salvador",
    template: "%s | CRECE FINANCE"
  },
  description:
    "CRECE FINANCE - Cooperativa financiera líder en El Salvador. Ahorro, inversiones, microcréditos y préstamos personales con las mejores tasas. Más de 200 años de experiencia combinada.",
  keywords: [
    "CRECE FINANCE",
    "cooperativa financiera",
    "ahorro El Salvador",
    "préstamos",
    "microcréditos",
    "inversiones",
    "El Salvador",
    "San Miguel",
    "La Unión",
    "Santa Rosa de Lima",
    "servicios financieros",
    "crédito",
    "remesas",
  ],
  authors: [{ name: "CRECE FINANCE", url: "https://crecefinance.com.sv" }],
  creator: "CRECE FINANCE",
  publisher: "CRECE FINANCE",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Favicon configuration
  icons: {
    icon: [
      { url: FAVICON_URL, type: "image/png" },
    ],
    apple: [
      { url: FAVICON_URL, sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "CRECE FINANCE | Tu Aliado Financiero en El Salvador",
    description:
      "Cooperativa financiera líder en El Salvador. Ahorro, inversiones, microcréditos y préstamos personales con las mejores tasas.",
    type: "website",
    locale: "es_SV",
    url: "https://crecefinance.com.sv",
    siteName: "CRECE FINANCE",
    images: [
      {
        url: "https://res.cloudinary.com/dm1fivmmh/image/upload/v1767991987/LogoHorizontal_iohiqa.png",
        width: 1200,
        height: 630,
        alt: "CRECE FINANCE - Tu Aliado Financiero en El Salvador",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CRECE FINANCE | Tu Aliado Financiero",
    description: "Cooperativa financiera líder en El Salvador. Ahorro, inversiones y préstamos.",
    images: ["https://res.cloudinary.com/dm1fivmmh/image/upload/v1767991987/LogoHorizontal_iohiqa.png"],
    creator: "@crecefinance",
  },
  alternates: {
    canonical: "https://crecefinance.com.sv",
  },
  category: 'finance',
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
