/**
 * Base de conocimiento para el chatbot Crecito
 * Contiene información oficial de CRECE FINANCE para respuestas precisas
 */

export const CRECE_KNOWLEDGE_BASE = {
    empresa: {
        nombre: "CRECE FINANCE, Soc. Coop. de R.L. de C.V.",
        slogan: "Tu aliado financiero",
        email: "info@crecefinance.com",
        web: "https://crecefinance.com.sv",
    },

    agencias: [
        {
            nombre: "Agencia San Miguel (Casa Matriz)",
            direccion: "7ª Avenida Norte y 2ª Calle Poniente, #416, San Miguel",
            telefono: "2660-7300",
        },
        {
            nombre: "Agencia La Unión",
            direccion: "5ª Avenida Norte, Plaza Quinta Avenida, La Unión",
            telefono: "2641-3400",
        },
        {
            nombre: "Agencia Santa Rosa de Lima",
            direccion: "8ª Avenida Sur, frente al Mercado Municipal, Santa Rosa de Lima, La Unión",
            telefono: "2608-0530",
        },
    ],

    horarios: {
        lunesViernes: "8:00 a.m. – 4:00 p.m.",
        sabados: "8:00 a.m. – 12:00 m.",
    },

    productosAhorro: [
        {
            nombre: "Ahorro a la Vista",
            descripcion: "Cuenta de ahorro con disponibilidad inmediata de fondos",
            requisitos: ["Mayor de 18 años", "Ser Socio(a)", "Apertura USD$10.00", "DUI para personas naturales"],
        },
        {
            nombre: "Ahorro Navideño",
            descripcion: "Ahorra durante el año para disfrutar las fiestas sin preocupaciones",
            requisitos: ["Mayor de 18 años", "Ser Socio(a)", "Apertura USD$10.00", "DUI para personas naturales"],
        },
        {
            nombre: "Ahorro Plazo Fijo",
            descripcion: "Las mejores tasas de interés del mercado para hacer crecer tus ahorros de forma segura",
            requisitos: ["Mayor de 18 años", "Ser Socio(a)", "Apertura USD$10.00", "DUI para personas naturales"],
        },
        {
            nombre: "Ahorro Infantil",
            descripcion: "Cuenta de ahorro para menores de edad, ideal para enseñar hábitos financieros",
            requisitos: ["Copia de partida de nacimiento del menor", "DUI del padre/madre o tutor"],
        },
        {
            nombre: "Ahorro Escolar",
            descripcion: "Ahorro orientado a gastos educativos y útiles escolares",
            requisitos: ["Mayor de 18 años", "Ser Socio(a)", "DUI para personas naturales"],
        },
    ],

    productosInversion: [
        {
            nombre: "Acciones Preferidas Plus",
            descripcion: "Inversión sólida y confiable con dividendos superiores",
            beneficios: [
                "Dividendos superiores frente a otras acciones",
                "Inversión sólida y confiable",
                "Mayor rentabilidad a largo plazo",
                "Asesoría personalizada para inversionistas",
            ],
        },
    ],

    productosPrestamos: [
        {
            nombre: "Microcréditos",
            descripcion: "Financiamiento rápido y accesible para emprendedores y pequeños negocios",
            beneficios: [
                "Procesos fáciles y rápidos",
                "Plazos flexibles de pago",
                "Seguro de deuda",
                "Flexibilidad de uso",
                "Asesoría personalizada",
            ],
        },
        {
            nombre: "Créditos Comerciales",
            descripcion: "Financiamiento para capital de trabajo y expansión de negocios",
            beneficios: [
                "Plazos adaptados al flujo comercial",
                "Tasas competitivas",
                "Desembolso rápido",
                "Asesoría incluida",
            ],
        },
        {
            nombre: "Créditos Prendarios",
            descripcion: "Préstamos con garantía de bienes muebles",
            beneficios: [
                "Tasas de interés reducidas",
                "Montos de acuerdo al valúo",
                "Mayor facilidad de aprobación",
                "Plazos extendidos",
                "Conservas el uso del bien",
                "Proceso transparente",
            ],
        },
        {
            nombre: "Créditos de Vivienda",
            descripcion: "Financiamiento para compra, construcción o mejoras de vivienda",
            beneficios: [
                "Tasas competitivas",
                "Financiamiento hasta el 70%",
                "Proceso transparente",
                "Cuotas y plazos accesibles",
            ],
        },
    ],

    serviciosAdicionales: [
        {
            nombre: "Pago de Servicios Básicos (Punto Xpress)",
            descripcion: "Paga servicios básicos y facturas de forma rápida y segura, sin largas filas",
        },
        {
            nombre: "Remesas Familiares (Western Union)",
            descripcion: "Recibe y envía remesas familiares de forma segura y confiable",
        },
        {
            nombre: "Cobro a Domicilio",
            descripcion: "Servicio de cobro de cuotas de crédito y ahorro a domicilio",
        },
        {
            nombre: "App Móvil CRECE",
            descripcion: "Gestiona tus cuentas, consulta saldos y realiza operaciones desde tu celular Android",
            enlace: "Disponible en Google Play Store",
        },
    ],

    requisitosGenerales: {
        personas: ["Mayor de 18 años", "DUI vigente", "Comprobante de ingresos"],
        empresas: [
            "Escritura de Constitución",
            "Acuerdo de Apertura",
            "Tarjeta de IVA y NIT",
            "Credencial Vigente Representante Legal",
            "DUI Representante Legal",
        ],
        extranjeros: ["Carnet de Residente o Pasaporte vigente"],
    },
};

/**
 * Genera el contexto en formato texto para enviar al webhook
 */
export function generateContextForBot(): string {
    const kb = CRECE_KNOWLEDGE_BASE;
    // Formato compactado para reducir tokens y latencia
    return `
INFO OFICIAL ${kb.empresa.nombre}.Email:${kb.empresa.email}.Web:${kb.empresa.web}
AGENCIAS:${kb.agencias.map(a => `${a.nombre}(${a.telefono}):${a.direccion}`).join("|")}
HORARIOS:L-V ${kb.horarios.lunesViernes}, Sab ${kb.horarios.sabados}
AHORROS:${kb.productosAhorro.map(p => `${p.nombre}:${p.descripcion}.Req:${p.requisitos.join(",")}`).join("|")}
INVERSIONES:${kb.productosInversion.map(p => `${p.nombre}:${p.descripcion}`).join("|")}
PRESTAMOS:${kb.productosPrestamos.map(p => `${p.nombre}:${p.descripcion}`).join("|")}
SERVICIOS:${kb.serviciosAdicionales.map(s => `${s.nombre}:${s.descripcion}`).join("|")}
REQ_GRAL:Personas(${kb.requisitosGenerales.personas.join(",")})Empresas(${kb.requisitosGenerales.empresas.join(",")})Extranjeros(${kb.requisitosGenerales.extranjeros.join(",")})
Instrucción:Responde usando SOLO este contexto.
`.trim().replace(/\n/g, " "); // Eliminar saltos de línea para hacerlo una sola línea larga
}
