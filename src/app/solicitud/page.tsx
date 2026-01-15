import type { Metadata } from "next";
import { SolicitudWizard } from "@/components/forms/SolicitudWizard";
import { FileText, Clock, Shield, Users } from "lucide-react";

export const metadata: Metadata = {
    title: "Solicitud de Admisión | CRECE FINANCE",
    description: "Inicia tu proceso de afiliación a CRECE FINANCE. Completa tu solicitud en línea para ahorros, créditos o inversiones.",
    keywords: ["solicitud", "afiliación", "CRECE FINANCE", "ahorro", "crédito", "inversión", "El Salvador"],
    openGraph: {
        title: "Solicitud de Admisión | CRECE FINANCE",
        description: "Únete a la familia CRECE FINANCE. Completa tu solicitud de admisión en línea.",
        type: "website",
        locale: "es_SV",
    },
};

export default function SolicitudPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary-blue via-primary-blue to-primary-blue-600 pt-32 pb-16 overflow-hidden">
                {/* Decoraciones */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary-gold/10 blur-3xl" />
                    <div className="absolute bottom-[-30%] left-[-10%] w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-gold/20 text-primary-gold text-sm font-semibold mb-6">
                            <FileText className="h-4 w-4" />
                            Proceso 100% en Línea
                        </span>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                            Solicitud de Admisión
                        </h1>
                        <p className="text-lg text-white/80 mb-8">
                            Inicia tu camino hacia el éxito financiero. Completa tu solicitud
                            en minutos y un asesor te contactará para guiarte en el proceso.
                        </p>

                        {/* Beneficios */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                                <Clock className="h-6 w-6 text-primary-gold mx-auto mb-2" />
                                <p className="text-sm text-white font-medium">5 minutos</p>
                                <p className="text-xs text-white/60">Tiempo promedio</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                                <Shield className="h-6 w-6 text-primary-gold mx-auto mb-2" />
                                <p className="text-sm text-white font-medium">100% Seguro</p>
                                <p className="text-xs text-white/60">Datos protegidos</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                                <Users className="h-6 w-6 text-primary-gold mx-auto mb-2" />
                                <p className="text-sm text-white font-medium">Asesoría</p>
                                <p className="text-xs text-white/60">Personal dedicado</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                                <FileText className="h-6 w-6 text-primary-gold mx-auto mb-2" />
                                <p className="text-sm text-white font-medium">Sin papeleos</p>
                                <p className="text-xs text-white/60">Todo digital</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Formulario */}
            <section className="py-12 sm:py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6">
                    <SolicitudWizard />
                </div>
            </section>

            {/* Aviso de privacidad */}
            <section className="py-8 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-sm text-gray-500 max-w-2xl mx-auto">
                        Al enviar este formulario, aceptas nuestros términos y condiciones.
                        Tu información personal será tratada de forma confidencial según nuestra
                        política de privacidad. CRECE FINANCE se reserva el derecho de aprobar
                        o rechazar solicitudes según sus políticas internas.
                    </p>
                </div>
            </section>
        </>
    );
}
