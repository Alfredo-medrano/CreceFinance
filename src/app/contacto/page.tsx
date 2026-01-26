import type { Metadata } from "next";
import { SolicitudWizard } from "@/components/forms/SolicitudWizard";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";

export const metadata: Metadata = {
    title: "Contacto | CRECE FINANCE",
    description: "Contáctanos para orientación financiera o inicia tu proceso de afiliación a CRECE FINANCE.",
    keywords: ["contacto", "solicitud", "afiliación", "CRECE FINANCE", "ahorro", "crédito", "inversión", "El Salvador"],
    openGraph: {
        title: "Contacto | CRECE FINANCE",
        description: "Contáctanos o únete a la familia CRECE FINANCE.",
        type: "website",
        locale: "es_SV",
    },
};

export default function ContactoPage() {
    return (
        <>
            {/* Hero con información de contacto integrada */}
            <section className="relative bg-gradient-to-br from-primary-blue via-primary-blue to-primary-blue-600 pt-32 pb-32 overflow-hidden">
                {/* Decoraciones */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary-gold/10 blur-3xl" />
                    <div className="absolute bottom-[-30%] left-[-10%] w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-gold/20 text-primary-gold text-sm font-semibold mb-6">
                            <MessageCircle className="h-4 w-4" />
                            Estamos para servirte
                        </span>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                            ¿Cómo podemos ayudarte?
                        </h1>
                        <p className="text-lg text-white/80">
                            Contáctanos directamente o completa el formulario y un asesor te contactará.
                        </p>
                    </div>

                    {/* Tarjetas de contacto integradas en el hero */}
                    <div className="grid gap-4 sm:gap-6 md:grid-cols-3 max-w-4xl mx-auto">
                        {/* Dirección */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all group">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-gold/20 group-hover:bg-primary-gold transition-colors">
                                    <MapPin className="h-6 w-6 text-primary-gold group-hover:text-primary-blue transition-colors" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-white text-sm mb-1">Visítanos</h3>
                                    <p className="text-white/70 text-sm leading-tight">
                                        2 calle Pte. Y 7 Av. Nte. 418<br />
                                        San Miguel
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Teléfono */}
                        <a
                            href="tel:26607373"
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all group cursor-pointer"
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-gold/20 group-hover:bg-primary-gold transition-colors">
                                    <Phone className="h-6 w-6 text-primary-gold group-hover:text-primary-blue transition-colors" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-white text-sm mb-1">Llámanos</h3>
                                    <p className="text-white/70 text-sm">2660-7373</p>
                                </div>
                            </div>
                        </a>

                        {/* Correo */}
                        <a
                            href="mailto:atencionalcliente@crecefinance.com"
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all group cursor-pointer"
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-gold/20 group-hover:bg-primary-gold transition-colors">
                                    <Mail className="h-6 w-6 text-primary-gold group-hover:text-primary-blue transition-colors" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-white text-sm mb-1">Escríbenos</h3>
                                    <p className="text-white/70 text-xs sm:text-sm break-all">
                                        atencionalcliente@crecefinance.com
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* Formulario */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6">
                    {/* Encabezado del formulario */}
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-blue/10 text-primary-blue text-sm font-semibold mb-4">
                            <Clock className="h-4 w-4" />
                            Respuesta en menos de 24 horas
                        </div>
                        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary-blue mb-3">
                            ¿Necesitas orientación?
                        </h2>
                        <p className="text-gray-600">
                            Completa el formulario y un asesor se pondrá en contacto contigo para brindarte la información que necesitas.
                        </p>
                    </div>

                    {/* Wizard de solicitud */}
                    <SolicitudWizard />

                    {/* Aviso de privacidad integrado */}
                    <div className="mt-8 text-center">
                        <p className="text-xs text-gray-400 max-w-xl mx-auto">
                            Al enviar este formulario, aceptas nuestros términos y condiciones.
                            Tu información será tratada de forma confidencial según nuestra política de privacidad.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
