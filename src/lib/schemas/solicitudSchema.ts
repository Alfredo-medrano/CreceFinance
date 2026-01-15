import { z } from "zod";

/**
 * Esquemas de validación Zod para el formulario de Solicitud de Admisión
 */

// Paso 1: Datos Básicos (siempre obligatorio)
export const step1Schema = z.object({
    // Tipo de servicio solicitado
    tipoServicio: z.enum(["ahorro", "credito", "inversion", "otro"]),

    // Datos personales
    nombres: z.string()
        .min(2, "Los nombres deben tener al menos 2 caracteres")
        .max(100, "Los nombres son muy largos"),
    apellidos: z.string()
        .min(2, "Los apellidos deben tener al menos 2 caracteres")
        .max(100, "Los apellidos son muy largos"),
    dui: z.string()
        .regex(/^\d{8}-\d$/, "El DUI debe tener el formato 00000000-0"),
    fechaNacimiento: z.string()
        .min(1, "La fecha de nacimiento es requerida"),

    // Contacto
    celular: z.string()
        .regex(/^\d{4}-?\d{4}$/, "El celular debe tener 8 dígitos"),
    email: z.string()
        .email("Ingresa un correo electrónico válido"),

    // Ubicación
    departamento: z.string()
        .min(1, "Selecciona un departamento"),
    municipio: z.string()
        .min(1, "Selecciona un municipio"),

    // Modo de formulario
    modoCompleto: z.boolean().default(false),
});

// Paso 2: Perfil Laboral (solo modo completo) - Sin refine para simplificar
export const step2Schema = z.object({
    lugarTrabajo: z.string()
        .min(2, "Ingresa el nombre de tu lugar de trabajo"),
    cargo: z.string()
        .min(2, "Ingresa tu cargo"),
    tiempoLaborando: z.string()
        .min(1, "Indica el tiempo que llevas trabajando"),
    direccionTrabajo: z.string().optional(),

    tieneNegocio: z.boolean().default(false),
    nombreNegocio: z.string().optional(),
    tipoNegocio: z.string().optional(),
    capitalNegocio: z.string().optional(),
});

// Paso 3: Salud Financiera (solo modo completo)
export const step3Schema = z.object({
    // Ingresos
    sueldoMensual: z.number()
        .min(0, "El sueldo no puede ser negativo"),
    remesas: z.number().min(0).default(0),
    otrosIngresos: z.number().min(0).default(0),
    fuenteOtrosIngresos: z.string().optional(),

    // Egresos
    gastosVida: z.number()
        .min(0, "Los gastos no pueden ser negativos"),
    pagoPrestamos: z.number().min(0).default(0),
    pagoAlquiler: z.number().min(0).default(0),
});

// Paso 4: Referencias (solo modo completo)
export const step4Schema = z.object({
    // Referencia personal obligatoria
    referenciaPersonalNombre: z.string()
        .min(2, "Ingresa el nombre de la referencia personal"),
    referenciaPersonalTelefono: z.string()
        .regex(/^\d{4}-?\d{4}$/, "El teléfono debe tener 8 dígitos"),

    // Referencia familiar obligatoria
    referenciaFamiliarNombre: z.string()
        .min(2, "Ingresa el nombre de la referencia familiar"),
    referenciaFamiliarParentesco: z.string()
        .min(1, "Selecciona el parentesco"),
    referenciaFamiliarTelefono: z.string()
        .regex(/^\d{4}-?\d{4}$/, "El teléfono debe tener 8 dígitos"),
});

// Paso 5: Confirmación
export const step5Schema = z.object({
    aceptaTerminos: z.boolean().refine((val) => val === true, {
        message: "Debes aceptar la declaración jurada para continuar",
    }),
});

// Tipo para el formulario completo
export interface SolicitudCompleta {
    // Paso 1
    tipoServicio: "ahorro" | "credito" | "inversion" | "otro";
    nombres: string;
    apellidos: string;
    dui: string;
    fechaNacimiento: string;
    celular: string;
    email: string;
    departamento: string;
    municipio: string;
    modoCompleto: boolean;
    // Paso 2
    lugarTrabajo: string;
    cargo: string;
    tiempoLaborando: string;
    direccionTrabajo?: string;
    tieneNegocio: boolean;
    nombreNegocio?: string;
    tipoNegocio?: string;
    capitalNegocio?: string;
    // Paso 3
    sueldoMensual: number;
    remesas: number;
    otrosIngresos: number;
    fuenteOtrosIngresos?: string;
    gastosVida: number;
    pagoPrestamos: number;
    pagoAlquiler: number;
    // Paso 4
    referenciaPersonalNombre: string;
    referenciaPersonalTelefono: string;
    referenciaFamiliarNombre: string;
    referenciaFamiliarParentesco: string;
    referenciaFamiliarTelefono: string;
    // Paso 5
    aceptaTerminos: boolean;
}

// Tipos inferidos para cada paso
export type Step1Data = z.infer<typeof step1Schema>;
export type Step2Data = z.infer<typeof step2Schema>;
export type Step3Data = z.infer<typeof step3Schema>;
export type Step4Data = z.infer<typeof step4Schema>;
export type Step5Data = z.infer<typeof step5Schema>;

// Valores iniciales
export const defaultValues: Partial<SolicitudCompleta> = {
    tipoServicio: undefined,
    nombres: "",
    apellidos: "",
    dui: "",
    fechaNacimiento: "",
    celular: "",
    email: "",
    departamento: "",
    municipio: "",
    modoCompleto: false,
    lugarTrabajo: "",
    cargo: "",
    tiempoLaborando: "",
    direccionTrabajo: "",
    tieneNegocio: false,
    nombreNegocio: "",
    tipoNegocio: "",
    capitalNegocio: "",
    sueldoMensual: 0,
    remesas: 0,
    otrosIngresos: 0,
    fuenteOtrosIngresos: "",
    gastosVida: 0,
    pagoPrestamos: 0,
    pagoAlquiler: 0,
    referenciaPersonalNombre: "",
    referenciaPersonalTelefono: "",
    referenciaFamiliarNombre: "",
    referenciaFamiliarParentesco: "",
    referenciaFamiliarTelefono: "",
    aceptaTerminos: false,
};
