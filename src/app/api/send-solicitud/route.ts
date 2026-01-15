import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Inicializar Resend
const resend = process.env.RESEND_API_KEY
    ? new Resend(process.env.RESEND_API_KEY)
    : null;

// Colores de la marca
const BRAND_BLUE = "#1a4d7c";
const BRAND_GOLD = "#e5a810";

// Plantilla base con estilos
const emailWrapper = (content: string) => `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRECE FINANCE</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f3f4f6;">
    <div style="max-width: 600px; margin: 0 auto; background-color: white;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, ${BRAND_BLUE} 0%, #0d3a5c 100%); padding: 30px 20px; text-align: center;">
            <h1 style="color: ${BRAND_GOLD}; margin: 0; font-size: 28px; font-weight: bold;">
                CRECE FINANCE
            </h1>
            <p style="color: rgba(255,255,255,0.8); margin: 5px 0 0; font-size: 14px;">
                Haciendo crecer tus sueños financieros
            </p>
        </div>
        
        <!-- Content -->
        <div style="padding: 30px 25px;">
            ${content}
        </div>
        
        <!-- Footer -->
        <div style="background-color: ${BRAND_BLUE}; padding: 25px 20px; text-align: center;">
            <p style="color: white; margin: 0 0 10px; font-size: 14px;">
                📍 7ª Avenida Norte y 2ª Calle Poniente, #416, San Miguel
            </p>
            <p style="color: white; margin: 0 0 10px; font-size: 14px;">
                📞 2660-7300 | ✉️ info@crecefinance.com
            </p>
            <p style="color: rgba(255,255,255,0.6); margin: 15px 0 0; font-size: 12px;">
                © ${new Date().getFullYear()} CRECE FINANCE de R.L. Todos los derechos reservados.
            </p>
        </div>
    </div>
</body>
</html>
`;

// Email para el administrador (con todos los datos)
const emailParaAdmin = (data: Record<string, unknown>, tipoServicioLabel: string, totalIngresos: number, totalEgresos: number, disponibleNeto: number) => {
    const esCompleto = data.modoCompleto;

    return emailWrapper(`
        <div style="text-align: center; margin-bottom: 25px;">
            <div style="display: inline-block; background-color: ${BRAND_GOLD}; color: white; padding: 8px 20px; border-radius: 20px; font-size: 14px; font-weight: bold;">
                NUEVA SOLICITUD
            </div>
        </div>
        
        <h2 style="color: ${BRAND_BLUE}; margin: 0 0 20px; font-size: 22px; text-align: center;">
            Solicitud de ${tipoServicioLabel}
        </h2>
        
        <div style="background-color: #f0f9ff; border-left: 4px solid ${BRAND_BLUE}; padding: 15px; margin-bottom: 25px; border-radius: 0 8px 8px 0;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
                <strong>Modo:</strong> ${esCompleto ? "Formulario Completo" : "Datos Básicos (completar en agencia)"}
            </p>
            <p style="margin: 5px 0 0; color: #6b7280; font-size: 13px;">
                Fecha: ${new Date().toLocaleString("es-SV", { dateStyle: "full", timeStyle: "short" })}
            </p>
        </div>
        
        <!-- Datos Personales -->
        <h3 style="color: ${BRAND_BLUE}; border-bottom: 2px solid ${BRAND_GOLD}; padding-bottom: 8px; margin-top: 25px;">
            👤 Datos Personales
        </h3>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; width: 40%;">Nombre Completo:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-weight: 500;">${data.nombres} ${data.apellidos}</td>
            </tr>
            <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">DUI:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-weight: 500;">${data.dui}</td>
            </tr>
            <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">Fecha de Nacimiento:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-weight: 500;">${data.fechaNacimiento}</td>
            </tr>
            <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">Celular:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-weight: 500;">${data.celular}</td>
            </tr>
            <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">Email:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-weight: 500;">${data.email}</td>
            </tr>
            <tr>
                <td style="padding: 8px 0; color: #6b7280;">Ubicación:</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 500;">${data.municipio}, ${data.departamento}</td>
            </tr>
        </table>
        
        ${esCompleto ? `
        <!-- Perfil Laboral -->
        <h3 style="color: ${BRAND_BLUE}; border-bottom: 2px solid ${BRAND_GOLD}; padding-bottom: 8px; margin-top: 25px;">
            💼 Perfil Laboral
        </h3>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; width: 40%;">Lugar de Trabajo:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-weight: 500;">${data.lugarTrabajo}</td>
            </tr>
            <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">Cargo:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-weight: 500;">${data.cargo}</td>
            </tr>
            <tr>
                <td style="padding: 8px 0; color: #6b7280;">Tiempo Laborando:</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 500;">${data.tiempoLaborando}</td>
            </tr>
            ${data.tieneNegocio ? `
            <tr>
                <td style="padding: 8px 0; border-top: 1px solid #e5e7eb; color: #6b7280;">Negocio Propio:</td>
                <td style="padding: 8px 0; border-top: 1px solid #e5e7eb; color: #111827; font-weight: 500;">${data.nombreNegocio} (${data.tipoNegocio})</td>
            </tr>
            ` : ""}
        </table>
        
        <!-- Salud Financiera -->
        <h3 style="color: ${BRAND_BLUE}; border-bottom: 2px solid ${BRAND_GOLD}; padding-bottom: 8px; margin-top: 25px;">
            💰 Salud Financiera
        </h3>
        <div style="display: flex; gap: 15px; margin-bottom: 15px;">
            <div style="flex: 1; background-color: #dcfce7; padding: 15px; border-radius: 8px; text-align: center;">
                <p style="margin: 0; color: #166534; font-size: 12px;">INGRESOS</p>
                <p style="margin: 5px 0 0; color: #15803d; font-size: 20px; font-weight: bold;">$${totalIngresos.toFixed(2)}</p>
            </div>
            <div style="flex: 1; background-color: #fee2e2; padding: 15px; border-radius: 8px; text-align: center;">
                <p style="margin: 0; color: #991b1b; font-size: 12px;">EGRESOS</p>
                <p style="margin: 5px 0 0; color: #dc2626; font-size: 20px; font-weight: bold;">$${totalEgresos.toFixed(2)}</p>
            </div>
            <div style="flex: 1; background-color: ${disponibleNeto >= 0 ? '#dbeafe' : '#fef3c7'}; padding: 15px; border-radius: 8px; text-align: center;">
                <p style="margin: 0; color: ${disponibleNeto >= 0 ? '#1e40af' : '#92400e'}; font-size: 12px;">DISPONIBLE</p>
                <p style="margin: 5px 0 0; color: ${disponibleNeto >= 0 ? '#2563eb' : '#d97706'}; font-size: 20px; font-weight: bold;">$${disponibleNeto.toFixed(2)}</p>
            </div>
        </div>
        
        <!-- Referencias -->
        <h3 style="color: ${BRAND_BLUE}; border-bottom: 2px solid ${BRAND_GOLD}; padding-bottom: 8px; margin-top: 25px;">
            👥 Referencias
        </h3>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; width: 40%;">Ref. Personal:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-weight: 500;">${data.referenciaPersonalNombre} (${data.referenciaPersonalTelefono})</td>
            </tr>
            <tr>
                <td style="padding: 8px 0; color: #6b7280;">Ref. Familiar:</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 500;">${data.referenciaFamiliarNombre} - ${data.referenciaFamiliarParentesco} (${data.referenciaFamiliarTelefono})</td>
            </tr>
        </table>
        ` : ""}
        
        <div style="background-color: #fef3c7; border-radius: 8px; padding: 15px; margin-top: 25px; text-align: center;">
            <p style="margin: 0; color: #92400e; font-size: 14px;">
                ⏰ Por favor, contactar al cliente en las próximas <strong>24 horas hábiles</strong>.
            </p>
        </div>
    `);
};

// Email de confirmación para el cliente
const emailParaCliente = (data: Record<string, unknown>, tipoServicioLabel: string) => {
    return emailWrapper(`
        <div style="text-align: center; margin-bottom: 25px;">
            <div style="display: inline-block; background-color: #22c55e; color: white; padding: 8px 20px; border-radius: 20px; font-size: 14px; font-weight: bold;">
                ✓ SOLICITUD RECIBIDA
            </div>
        </div>
        
        <h2 style="color: ${BRAND_BLUE}; margin: 0 0 20px; font-size: 24px; text-align: center;">
            ¡Gracias por tu solicitud, ${data.nombres}!
        </h2>
        
        <p style="color: #374151; font-size: 16px; line-height: 1.6; text-align: center; margin-bottom: 25px;">
            Hemos recibido tu solicitud de <strong style="color: ${BRAND_GOLD};">${tipoServicioLabel}</strong> 
            y la estamos procesando. Un asesor de CRECE FINANCE se comunicará contigo muy pronto.
        </p>
        
        <div style="background-color: #f0f9ff; border-radius: 12px; padding: 25px; margin: 25px 0;">
            <h3 style="color: ${BRAND_BLUE}; margin: 0 0 15px; font-size: 16px;">
                📋 Resumen de tu solicitud:
            </h3>
            <table style="width: 100%; font-size: 14px;">
                <tr>
                    <td style="padding: 5px 0; color: #6b7280;">Tipo de servicio:</td>
                    <td style="padding: 5px 0; color: #111827; font-weight: 600; text-align: right;">${tipoServicioLabel}</td>
                </tr>
                <tr>
                    <td style="padding: 5px 0; color: #6b7280;">Nombre:</td>
                    <td style="padding: 5px 0; color: #111827; font-weight: 600; text-align: right;">${data.nombres} ${data.apellidos}</td>
                </tr>
                <tr>
                    <td style="padding: 5px 0; color: #6b7280;">DUI:</td>
                    <td style="padding: 5px 0; color: #111827; font-weight: 600; text-align: right;">${data.dui}</td>
                </tr>
                <tr>
                    <td style="padding: 5px 0; color: #6b7280;">Celular:</td>
                    <td style="padding: 5px 0; color: #111827; font-weight: 600; text-align: right;">${data.celular}</td>
                </tr>
                <tr>
                    <td style="padding: 5px 0; color: #6b7280;">Ubicación:</td>
                    <td style="padding: 5px 0; color: #111827; font-weight: 600; text-align: right;">${data.municipio}, ${data.departamento}</td>
                </tr>
            </table>
        </div>
        
        <div style="background-color: #f3f4f6; border-radius: 12px; padding: 20px; margin: 25px 0;">
            <h3 style="color: ${BRAND_BLUE}; margin: 0 0 12px; font-size: 15px;">
                📌 Próximos pasos:
            </h3>
            <ol style="margin: 0; padding-left: 20px; color: #374151; font-size: 14px; line-height: 1.8;">
                <li>Un asesor te contactará en <strong>24 horas hábiles</strong></li>
                <li>Te agendaremos una cita en nuestra agencia</li>
                <li>Trae tu <strong>DUI original</strong> a la cita</li>
            </ol>
        </div>
        
        <div style="text-align: center; margin-top: 30px;">
            <p style="color: #6b7280; font-size: 14px; margin: 0 0 15px;">
                ¿Tienes dudas? Contáctanos:
            </p>
            <a href="tel:26607300" style="display: inline-block; background-color: ${BRAND_BLUE}; color: white; text-decoration: none; padding: 12px 30px; border-radius: 8px; font-weight: bold; font-size: 14px;">
                📞 Llamar al 2660-7300
            </a>
        </div>
    `);
};

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { data } = body;

        // Validar campos requeridos
        if (!data || !data.email) {
            return NextResponse.json(
                { error: "Faltan campos requeridos" },
                { status: 400 }
            );
        }

        // Determinar el tipo de servicio
        const tiposServicioMap: Record<string, string> = {
            ahorro: "Ahorro",
            credito: "Crédito",
            inversion: "Inversión",
            otro: "Otro Servicio"
        };
        const tipoServicioLabel = tiposServicioMap[data.tipoServicio as string] || data.tipoServicio;

        // Calcular totales financieros
        const totalIngresos = Number(data.sueldoMensual || 0) + Number(data.remesas || 0) + Number(data.otrosIngresos || 0);
        const totalEgresos = Number(data.gastosVida || 0) + Number(data.pagoPrestamos || 0) + Number(data.pagoAlquiler || 0);
        const disponibleNeto = totalIngresos - totalEgresos;

        // Email destino del administrador
        const ADMIN_EMAIL = "alfremeeting@gmail.com";

        // Si Resend está configurado, enviar emails reales
        if (resend) {
            console.log("📧 Enviando emails con Resend...");
            console.log("📥 Admin:", ADMIN_EMAIL);
            console.log("📤 Cliente:", data.email);

            // Enviar email al administrador
            const { data: adminData, error: adminError } = await resend.emails.send({
                from: "CRECE FINANCE <onboarding@resend.dev>",
                to: [ADMIN_EMAIL],
                subject: `🔔 Nueva Solicitud de ${tipoServicioLabel} - ${data.nombres} ${data.apellidos}`,
                html: emailParaAdmin(data, tipoServicioLabel, totalIngresos, totalEgresos, disponibleNeto),
            });

            if (adminError) {
                console.error("❌ Error enviando email al admin:", JSON.stringify(adminError, null, 2));
            } else {
                console.log("✅ Email al admin enviado:", adminData?.id);
            }

            // Enviar email de confirmación al cliente
            const { data: clientData, error: clientError } = await resend.emails.send({
                from: "CRECE FINANCE <onboarding@resend.dev>",
                to: [data.email as string],
                subject: `✅ Tu solicitud de ${tipoServicioLabel} ha sido recibida - CRECE FINANCE`,
                html: emailParaCliente(data, tipoServicioLabel),
            });

            if (clientError) {
                console.error("❌ Error enviando email al cliente:", JSON.stringify(clientError, null, 2));
            } else {
                console.log("✅ Email al cliente enviado:", clientData?.id);
            }

            return NextResponse.json({
                success: true,
                message: "Emails enviados correctamente",
                adminEmailSent: !adminError,
                clientEmailSent: !clientError,
                adminError: adminError ? JSON.stringify(adminError) : null,
            });
        }

        // Modo desarrollo: simular envío
        console.log("=".repeat(70));
        console.log("📧 SIMULACIÓN DE EMAILS (Modo Desarrollo)");
        console.log("=".repeat(70));
        console.log("\n📥 EMAIL PARA ADMIN:", ADMIN_EMAIL);
        console.log("Asunto: Nueva Solicitud de", tipoServicioLabel);
        console.log("\n📤 EMAIL PARA CLIENTE:", data.email);
        console.log("Asunto: Tu solicitud de", tipoServicioLabel, "ha sido recibida");
        console.log("\n" + "=".repeat(70));

        // Simular delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        return NextResponse.json({
            success: true,
            message: "Emails simulados (modo desarrollo). Configura RESEND_API_KEY para envío real.",
            preview: {
                adminEmail: ADMIN_EMAIL,
                clientEmail: data.email,
                tipoServicio: tipoServicioLabel
            }
        });

    } catch (error) {
        console.error("Error en API de solicitud:", error);
        return NextResponse.json(
            { error: "Error interno del servidor" },
            { status: 500 }
        );
    }
}
