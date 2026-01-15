import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "Términos y Condiciones | CRECE FINANCE",
    description: "Términos y condiciones de uso de los servicios de CRECE FINANCE.",
};

export default function TerminosPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative bg-primary-blue pt-32 pb-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 text-primary-gold mb-4">
                            <FileText className="h-5 w-5" />
                            <span className="text-sm font-medium">Documento Legal</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Términos y Condiciones
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

                        <h2>1. Aceptación de los Términos</h2>
                        <p>
                            Al acceder y utilizar los servicios de CRECE FINANCE, usted acepta
                            estar sujeto a estos Términos y Condiciones. Si no está de acuerdo
                            con alguna parte de estos términos, no podrá acceder a nuestros servicios.
                        </p>

                        <h2>2. Descripción de los Servicios</h2>
                        <p>
                            CRECE FINANCE ofrece servicios financieros que incluyen:
                        </p>
                        <ul>
                            <li>Cuentas de ahorro en diversas modalidades</li>
                            <li>Créditos personales, comerciales y de vivienda</li>
                            <li>Productos de inversión</li>
                            <li>Servicios complementarios (pagos, remesas, seguros)</li>
                        </ul>

                        <h2>3. Requisitos de Elegibilidad</h2>
                        <p>Para ser cliente de CRECE FINANCE, usted debe:</p>
                        <ul>
                            <li>Ser mayor de 18 años</li>
                            <li>Poseer documento único de identidad (DUI) válido</li>
                            <li>Proporcionar información veraz y actualizada</li>
                            <li>Cumplir con los requisitos específicos de cada producto</li>
                        </ul>

                        <h2>4. Obligaciones del Cliente</h2>
                        <p>El cliente se compromete a:</p>
                        <ul>
                            <li>Proporcionar información veraz y completa</li>
                            <li>Mantener actualizada su información de contacto</li>
                            <li>Cumplir con los pagos en las fechas establecidas</li>
                            <li>No utilizar los servicios para actividades ilícitas</li>
                            <li>Proteger sus credenciales de acceso</li>
                        </ul>

                        <h2>5. Tasas y Comisiones</h2>
                        <p>
                            Las tasas de interés, comisiones y cargos aplicables a cada producto
                            serán informados al momento de la contratación. CRECE FINANCE se
                            reserva el derecho de modificar las tasas con previo aviso según
                            lo establecido por las regulaciones vigentes.
                        </p>

                        <h2>6. Confidencialidad</h2>
                        <p>
                            CRECE FINANCE se compromete a mantener la confidencialidad de la
                            información del cliente, excepto cuando sea requerida por
                            autoridades competentes según las leyes aplicables.
                        </p>

                        <h2>7. Modificaciones</h2>
                        <p>
                            CRECE FINANCE se reserva el derecho de modificar estos términos
                            en cualquier momento. Las modificaciones serán notificadas a través
                            de nuestros canales oficiales y entrarán en vigor 30 días después
                            de su publicación.
                        </p>

                        <h2>8. Terminación</h2>
                        <p>
                            El cliente puede terminar su relación con CRECE FINANCE en cualquier
                            momento, siempre que no tenga obligaciones pendientes. CRECE FINANCE
                            puede terminar la relación por incumplimiento de estos términos.
                        </p>

                        <h2>9. Ley Aplicable</h2>
                        <p>
                            Estos términos se rigen por las leyes de la República de El Salvador.
                            Cualquier disputa será resuelta por los tribunales competentes de
                            El Salvador.
                        </p>

                        <h2>10. Contacto</h2>
                        <p>
                            Para consultas sobre estos términos, puede comunicarse con nosotros:
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
