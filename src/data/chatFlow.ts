export type ChatOption = {
    label: string;
    nextStep?: string;
    url?: string;
    setContext?: { topic: string }; // Para guardar el tema seleccionado
};

export type ChatInput = {
    variable: string;
    placeholder: string;
    buttonLabel: string;
    nextStep: string;
};

export type ChatStep = {
    message: string;
    options?: ChatOption[];
    input?: ChatInput; // Campo opcional para solicitar datos
};

export const CHAT_FLOW: Record<string, ChatStep> = {
    start: {
        message: "¡Hola! 👋 Soy Crecito, tu asistente virtual. \n\n¿En qué puedo ayudarte hoy?",
        options: [
            { label: "💰 Ahorros", nextStep: "ahorros" },
            { label: "📈 Inversiones", nextStep: "inversiones" },
            { label: "💸 Préstamos", nextStep: "prestamos" },
            { label: "🏦 Agencias y Horarios", nextStep: "agencias" },
            { label: "💬 Hablar con un Asesor", nextStep: "ask_name", setContext: { topic: "Consulta General" } },
        ],
    },
    ask_name: {
        message: "¡Con gusto! Para brindarte una mejor atención, ¿cuál es tu nombre?",
        input: {
            variable: "name",
            placeholder: "Escribe tu nombre aquí...",
            buttonLabel: "Continuar",
            nextStep: "redirect_whatsapp"
        }
    },
    redirect_whatsapp: {
        message: "¡Gracias {name}! \n\nTe pondré en contacto con uno de nuestros asesores expertos para tratar tu tema: **{topic}**.\n\nHaz clic abajo para iniciar la conversación en WhatsApp.",
        options: [
            { label: "📲 Abrir WhatsApp", url: "https://wa.me/50326413400?text=Hola,%20mi%20nombre%20es%20{name}.%20Me%20interesa%20recibir%20atención%20personalizada%20sobre%20{topic}." },
            { label: "⬅️ Volver al Inicio", nextStep: "start" },
        ]
    },
    ahorros: {
        message: "En CRECE FINANCE tenemos excelentes opciones para tus ahorros. \n\n¿Qué tipo de cuenta te interesa?",
        options: [
            { label: "Ahorro a la Vista", nextStep: "ahorro_vista" },
            { label: "Ahorro Navideño", nextStep: "ahorro_navideno" },
            { label: "Ahorro Plazo Fijo", nextStep: "ahorro_plazo" },
            { label: "Ahorro Infantil", nextStep: "ahorro_infantil" },
            { label: "Ahorro Escolar", nextStep: "ahorro_escolar" },
            { label: "⬅️ Volver al Inicio", nextStep: "start" },
        ],
    },
    ahorro_vista: {
        message: "✅ **Ahorro a la Vista**\n\nCuenta con disponibilidad inmediata de fondos.\n\n**Requisitos:**\n• Mayor de 18 años\n• Ser Socio(a)\n• Apertura USD$10.00\n• DUI",
        options: [
            { label: "💬 Consultar disponibilidad", nextStep: "ask_name", setContext: { topic: "Ahorro a la Vista" } },
            { label: "📝 Solicitar en Línea", url: "/contacto#formulario-orientacion" },
            { label: "⬅️ Ver otros ahorros", nextStep: "ahorros" },
            { label: "🏠 Inicio", nextStep: "start" },
        ],
    },
    ahorro_navideno: {
        message: "🎄 **Ahorro Navideño**\n\nAhorra durante el año para disfrutar las fiestas sin preocupaciones.\n\n**Requisitos:**\n• Mayor de 18 años\n• Ser Socio(a)\n• Apertura USD$10.00\n• DUI",
        options: [
            { label: "💬 Consultar disponibilidad", nextStep: "ask_name", setContext: { topic: "Ahorro Navideño" } },
            { label: "📝 Solicitar en Línea", url: "/contacto#formulario-orientacion" },
            { label: "⬅️ Ver otros ahorros", nextStep: "ahorros" },
            { label: "🏠 Inicio", nextStep: "start" },
        ],
    },
    ahorro_plazo: {
        message: "📈 **Ahorro Plazo Fijo**\n\nLas mejores tasas de interés para hacer crecer tus ahorros.\n\n**Requisitos:**\n• Mayor de 18 años\n• Ser Socio(a)\n• Apertura USD$10.00\n• DUI",
        options: [
            { label: "💬 Consultar tasas", nextStep: "ask_name", setContext: { topic: "Ahorro Plazo Fijo" } },
            { label: "📝 Solicitar en Línea", url: "/contacto#formulario-orientacion" },
            { label: "⬅️ Ver otros ahorros", nextStep: "ahorros" },
            { label: "🏠 Inicio", nextStep: "start" },
        ],
    },
    ahorro_infantil: {
        message: "🧸 **Ahorro Infantil**\n\nIdeal para enseñar hábitos financieros a los pequeños.\n\n**Requisitos:**\n• Copia de partida de nacimiento\n• DUI del padre/madre o tutor",
        options: [
            { label: "💬 Consultar más", nextStep: "ask_name", setContext: { topic: "Ahorro Infantil" } },
            { label: "📝 Solicitar en Línea", url: "/contacto#formulario-orientacion" },
            { label: "⬅️ Ver otros ahorros", nextStep: "ahorros" },
            { label: "🏠 Inicio", nextStep: "start" },
        ],
    },
    ahorro_escolar: {
        message: "📚 **Ahorro Escolar**\n\nOrientado a gastos educativos y útiles escolares.\n\n**Requisitos:**\n• Mayor de 18 años\n• Ser Socio(a)\n• DUI",
        options: [
            { label: "💬 Consultar más", nextStep: "ask_name", setContext: { topic: "Ahorro Escolar" } },
            { label: "📝 Solicitar en Línea", url: "/contacto#formulario-orientacion" },
            { label: "⬅️ Ver otros ahorros", nextStep: "ahorros" },
            { label: "🏠 Inicio", nextStep: "start" },
        ],
    },
    inversiones: {
        message: "💎 **Acciones Preferidas Plus**\n\nInversión sólida y confiable con dividendos superiores.\n\n**Beneficios:**\n• Rentabilidad competitiva\n• Asesoría personalizada",
        options: [
            { label: "💬 Hablar con Asesor", nextStep: "ask_name", setContext: { topic: "Inversiones/Acciones" } },
            { label: "ℹ️ Más información", url: "/contacto#formulario-orientacion" },
            { label: "🏠 Inicio", nextStep: "start" },
        ],
    },
    prestamos: {
        message: "🚀 Impulsa tus sueños con nuestros créditos.\n\n¿Qué tipo de financiamiento necesitas?",
        options: [
            { label: "🏢 Microcréditos (Negocios)", nextStep: "credito_micro" },
            { label: "🏪 Créditos Comerciales", nextStep: "credito_comercial" },
            { label: "💍 Créditos Prendarios", nextStep: "credito_prendario" },
            { label: "🏠 Créditos de Vivienda", nextStep: "credito_vivienda" },
            { label: "⬅️ Volver al Inicio", nextStep: "start" },
        ],
    },
    credito_micro: {
        message: "🏢 **Microcréditos**\n\nPara emprendedores y pequeños negocios.\n\n• Procesos rápidos\n• Plazos flexibles\n• Seguro de deuda",
        options: [
            { label: "💬 Asesoría de Crédito", nextStep: "ask_name", setContext: { topic: "Microcréditos" } },
            { label: "📋 Solicitar Evaluación", url: "/contacto#formulario-orientacion" },
            { label: "⬅️ Ver otros préstamos", nextStep: "prestamos" },
            { label: "🏠 Inicio", nextStep: "start" },
        ],
    },
    credito_comercial: {
        message: "🏪 **Créditos Comerciales**\n\nCapital de trabajo y expansión.\n\n• Desembolso rápido\n• Tasas competitivas",
        options: [
            { label: "💬 Asesoría de Crédito", nextStep: "ask_name", setContext: { topic: "Créditos Comerciales" } },
            { label: "📋 Solicitar Evaluación", url: "/contacto#formulario-orientacion" },
            { label: "⬅️ Ver otros préstamos", nextStep: "prestamos" },
            { label: "🏠 Inicio", nextStep: "start" },
        ],
    },
    credito_prendario: {
        message: "💍 **Créditos Prendarios**\n\nGarantía de bienes muebles.\n\n• Tasas reducidas\n• Plazos extendidos\n• Conservas el uso del bien",
        options: [
            { label: "💬 Asesoría de Crédito", nextStep: "ask_name", setContext: { topic: "Créditos Prendarios" } },
            { label: "📋 Solicitar Evaluación", url: "/contacto#formulario-orientacion" },
            { label: "⬅️ Ver otros préstamos", nextStep: "prestamos" },
            { label: "🏠 Inicio", nextStep: "start" },
        ],
    },
    credito_vivienda: {
        message: "🏠 **Créditos de Vivienda**\n\nCompra, construcción o mejoras.\n\n• Financiamiento hasta 70%\n• Cuotas accesibles",
        options: [
            { label: "💬 Asesoría Hipotecaria", nextStep: "ask_name", setContext: { topic: "Créditos de Vivienda" } },
            { label: "📋 Solicitar Evaluación", url: "/contacto#formulario-orientacion" },
            { label: "⬅️ Ver otros préstamos", nextStep: "prestamos" },
            { label: "🏠 Inicio", nextStep: "start" },
        ],
    },
    agencias: {
        message: "📍 **Nuestras Agencias**\n\n**San Miguel (Casa Matriz)**\n7ª Av. Norte y 2ª Calle Pte.\nTel: 2660-7300\n\n**La Unión**\nPlaza Quinta Avenida\nTel: 2641-3400\n\n**Santa Rosa de Lima**\nFrente al Mercado Municipal\nTel: 2608-0530",
        options: [
            { label: "⏰ Ver Horarios", nextStep: "horarios" },
            { label: "🗺️ Ver en Google Maps", url: "https://goo.gl/maps/example" },
            { label: "🏠 Inicio", nextStep: "start" },
        ],
    },
    horarios: {
        message: "⏰ **Horarios de Atención**\n\n**Lunes a Viernes:**\n8:00 a.m. – 4:00 p.m.\n\n**Sábados:**\n8:00 a.m. – 12:00 m.",
        options: [
            { label: "📍 Volver a Agencias", nextStep: "agencias" },
            { label: "🏠 Inicio", nextStep: "start" },
        ],
    },
};
