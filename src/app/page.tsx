import { HeroCarousel } from "@/components/ui";
import { ServicesSection, AppDownloadSection, VideoTutorialSection } from "@/components/sections";
import {
  TrendingUp,
  Shield,
  Clock,
  Award,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

/**
 * Características destacadas para la sección "¿Por qué elegirnos?"
 */
const features = [
  {
    icon: Shield,
    title: "Seguridad Garantizada",
    description: "Tu dinero está protegido con los más altos estándares de seguridad financiera.",
  },
  {
    icon: Clock,
    title: "Atención Rápida",
    description: "Procesos ágiles y respuestas en tiempo récord para todas tus necesidades.",
  },
  {
    icon: Award,
    title: "Experiencia Comprobada",
    description: "La experiencia conjunta de nuestros socios garantiza respaldo y confianza financiera.",
  },
  {
    icon: Heart,
    title: "Compromiso Social",
    description: "Contribuimos al desarrollo económico de las comunidades donde operamos.",
  },
];

/**
 * Página principal - Punto de entrada del sitio
 * Estructura: Hero > Servicios > Beneficios > App > Video > CTA
 */
export default function Home() {
  return (
    <>
      {/* Carrusel principal */}
      <HeroCarousel />

      {/* Catálogo de servicios */}
      <ServicesSection />

      {/* Propuesta de valor */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Contenido textual */}
            <div>
              <span className="inline-block mb-4 rounded-full bg-primary-blue/10 px-4 py-2 text-sm font-semibold text-primary-blue">
                ¿Por qué elegirnos?
              </span>
              <h2 className="mb-6 font-heading text-3xl font-bold text-primary-blue md:text-4xl">
                Tu éxito financiero es nuestra prioridad
              </h2>
              <p className="mb-8 text-lg text-gray-600 leading-relaxed">
                En CRECE FINANCE nos comprometemos a brindarte el mejor servicio
                y las soluciones más adecuadas para tus necesidades financieras.
                Nuestro equipo de expertos está listo para acompañarte en cada
                paso de tu camino hacia el éxito.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-gold/10 text-primary-gold">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-heading font-bold text-primary-blue">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Panel de estadísticas */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-brand p-8 lg:p-12">
                <div className="flex h-full flex-col items-center justify-center text-center text-white">
                  <TrendingUp className="mb-6 h-16 w-16" />
                  <h3 className="mb-4 font-heading text-4xl font-bold md:text-5xl">
                    200+
                  </h3>
                  <p className="text-xl text-white/90 mb-6">Años de experiencia combinada</p>
                  <p className="text-base text-white/80 leading-relaxed">
                    200+ años de experiencia combinada de nuestros fundadores reflejan compromiso, conocimiento y respaldo financiero a nuestros socios.
                  </p>
                </div>
              </div>
              {/* Efectos decorativos */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-2xl bg-primary-gold/20 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-2xl bg-primary-blue/20 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Descarga de aplicación móvil */}
      <AppDownloadSection />

      {/* Tutorial en video */}
      <VideoTutorialSection videoId="dQw4w9WgXcQ" />
    </>
  );
}
