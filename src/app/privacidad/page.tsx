import type { Metadata } from "next";
import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "Política de Privacidad | CRECE FINANCE",
    description: "Política de privacidad y protección de datos personales de CRECE FINANCE.",
};

export default function PrivacidadPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative bg-primary-blue pt-32 pb-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 text-primary-gold mb-4">
                            <Shield className="h-5 w-5" />
                            <span className="text-sm font-medium">Protección de Datos</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Política de Privacidad
                        </h1>
                        <p className="text-white/80">
                            Última actualización: Enero 2024
                        </p>
                    </div>
                </div>
            </section>

            {/* Contenido */}
            <section className="py-12 sm:py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto prose prose-lg prose-gray">

                        <h2>1. Introducción</h2>
                        <p>
                            En CRECE FINANCE nos comprometemos a proteger la privacidad de
                            nuestros clientes y usuarios. Esta política describe cómo recopilamos,
                            utilizamos y protegemos su información personal.
                        </p>

                        <h2>2. Información que Recopilamos</h2>
                        <p>Recopilamos los siguientes tipos de información:</p>

                        <h3>Información de identificación personal:</h3>
                        <ul>
                            <li>Nombre completo</li>
                            <li>Número de DUI</li>
                            <li>Fecha de nacimiento</li>
                            <li>Dirección de domicilio</li>
                            <li>Número de teléfono</li>
                            <li>Correo electrónico</li>
                        </ul>

                        <h3>Información financiera:</h3>
                        <ul>
                            <li>Información laboral y de ingresos</li>
                            <li>Historial crediticio</li>
                            <li>Referencias personales y familiares</li>
                            <li>Información sobre patrimonio</li>
                        </ul>

                        <h2>3. Uso de la Información</h2>
                        <p>Utilizamos su información para:</p>
                        <ul>
                            <li>Procesar solicitudes de productos y servicios</li>
                            <li>Evaluar su capacidad crediticia</li>
                            <li>Administrar su cuenta y transacciones</li>
                            <li>Comunicarnos con usted sobre sus productos</li>
                            <li>Cumplir con obligaciones legales y regulatorias</li>
                            <li>Prevenir fraudes y actividades ilícitas</li>
                            <li>Mejorar nuestros productos y servicios</li>
                        </ul>

                        <h2>4. Compartir Información</h2>
                        <p>
                            No vendemos ni alquilamos su información personal. Podemos compartir
                            su información únicamente con:
                        </p>
                        <ul>
                            <li>Autoridades reguladoras y gubernamentales cuando sea requerido por ley</li>
                            <li>Burós de crédito para reportar su historial</li>
                            <li>Proveedores de servicios que nos asisten en nuestras operaciones</li>
                            <li>En caso de fusión, adquisición o venta de activos</li>
                        </ul>

                        <h2>5. Seguridad de la Información</h2>
                        <p>
                            Implementamos medidas de seguridad técnicas, administrativas y físicas
                            para proteger su información personal contra acceso no autorizado,
                            pérdida, alteración o divulgación. Esto incluye:
                        </p>
                        <ul>
                            <li>Encriptación de datos sensibles</li>
                            <li>Acceso restringido a información personal</li>
                            <li>Monitoreo continuo de nuestros sistemas</li>
                            <li>Capacitación de personal en protección de datos</li>
                        </ul>

                        <h2>6. Sus Derechos</h2>
                        <p>Usted tiene derecho a:</p>
                        <ul>
                            <li><strong>Acceso:</strong> Solicitar una copia de su información personal</li>
                            <li><strong>Rectificación:</strong> Corregir información inexacta o incompleta</li>
                            <li><strong>Cancelación:</strong> Solicitar la eliminación de sus datos cuando corresponda</li>
                            <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos para fines específicos</li>
                        </ul>

                        <h2>7. Conservación de Datos</h2>
                        <p>
                            Conservamos su información personal durante el tiempo necesario para
                            cumplir con los propósitos descritos en esta política y según lo
                            requieran las leyes aplicables, incluyendo obligaciones de retención
                            de documentos financieros.
                        </p>

                        <h2>8. Cookies y Tecnologías Similares</h2>
                        <p>
                            Nuestro sitio web puede utilizar cookies para mejorar su experiencia
                            de navegación. Puede configurar su navegador para rechazar cookies,
                            aunque esto puede afectar la funcionalidad del sitio.
                        </p>

                        <h2>9. Cambios a esta Política</h2>
                        <p>
                            Podemos actualizar esta política periódicamente. Le notificaremos
                            sobre cambios significativos a través de nuestros canales de
                            comunicación habituales.
                        </p>

                        <h2>10. Contacto</h2>
                        <p>
                            Para ejercer sus derechos o consultas sobre privacidad:
                        </p>
                        <ul>
                            <li>Teléfono: 2660-7300</li>
                            <li>Email: info@crecefinance.com</li>
                            <li>Dirección: 7ª Avenida Norte y 2ª Calle Poniente, #416, San Miguel</li>
                        </ul>

                    </div>

                    <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-gray-200">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-primary-blue hover:text-primary-blue/80 transition-colors"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Volver al inicio
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
