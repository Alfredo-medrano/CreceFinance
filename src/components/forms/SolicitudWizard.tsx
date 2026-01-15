"use client";

import { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    step1Schema,
    step2Schema,
    step3Schema,
    step4Schema,
    step5Schema,
    defaultValues,
    type SolicitudCompleta
} from "@/lib/schemas/solicitudSchema";
import {
    departamentos,
    municipiosPorDepartamento,
    tiposServicio,
    estadosCiviles,
    parentescos,
    type Departamento,
} from "@/lib/data/elsalvador";
import { Button } from "@/components/ui/Button";
import {
    User,
    Briefcase,
    DollarSign,
    Users,
    CheckCircle,
    ArrowRight,
    ArrowLeft,
    Send,
    Loader2,
    Building2,
    Mail,
    Phone,
    MapPin,
    FileText,
    Sparkles,
} from "lucide-react";

// Configuración de EmailJS
const EMAILJS_SERVICE_ID = "service_crece"; // Configurar después
const EMAILJS_TEMPLATE_ID = "template_solicitud"; // Configurar después
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // Configurar después

interface StepConfig {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const stepsConfig: StepConfig[] = [
    { id: 1, title: "Datos Básicos", description: "Información personal y contacto", icon: <User className="h-5 w-5" /> },
    { id: 2, title: "Perfil Laboral", description: "Tu situación de empleo", icon: <Briefcase className="h-5 w-5" /> },
    { id: 3, title: "Salud Financiera", description: "Ingresos y egresos", icon: <DollarSign className="h-5 w-5" /> },
    { id: 4, title: "Referencias", description: "Contactos de confianza", icon: <Users className="h-5 w-5" /> },
    { id: 5, title: "Confirmación", description: "Revisa y envía", icon: <CheckCircle className="h-5 w-5" /> },
];

export function SolicitudWizard() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [totalSteps, setTotalSteps] = useState(2); // Mínimo: Paso 1 + Confirmación

    const methods = useForm<SolicitudCompleta>({
        defaultValues,
        mode: "onChange",
    });


    const { watch, trigger, handleSubmit, setValue, formState: { errors } } = methods;

    const modoCompleto = watch("modoCompleto");
    const departamento = watch("departamento") as Departamento;
    const tieneNegocio = watch("tieneNegocio");
    const tipoServicio = watch("tipoServicio");

    // Verificar si los campos obligatorios del paso actual están completos
    const isCurrentStepComplete = (): boolean => {
        const valores = watch();

        switch (currentStep) {
            case 1:
                return Boolean(
                    valores.tipoServicio &&
                    valores.nombres && valores.nombres.length >= 2 &&
                    valores.apellidos && valores.apellidos.length >= 2 &&
                    valores.dui && /^\d{8}-\d$/.test(valores.dui) &&
                    valores.fechaNacimiento &&
                    valores.celular && /^\d{4}-?\d{4}$/.test(valores.celular) &&
                    valores.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valores.email) &&
                    valores.departamento &&
                    valores.municipio
                );
            case 2:
                return Boolean(
                    valores.lugarTrabajo && valores.lugarTrabajo.length >= 2 &&
                    valores.cargo && valores.cargo.length >= 2 &&
                    valores.tiempoLaborando && valores.tiempoLaborando.length >= 1
                );
            case 3:
                return Boolean(
                    valores.sueldoMensual !== undefined && Number(valores.sueldoMensual) >= 0 &&
                    valores.gastosVida !== undefined && Number(valores.gastosVida) >= 0
                );
            case 4:
                return Boolean(
                    valores.referenciaPersonalNombre && valores.referenciaPersonalNombre.length >= 2 &&
                    valores.referenciaPersonalTelefono && /^\d{4}-?\d{4}$/.test(valores.referenciaPersonalTelefono) &&
                    valores.referenciaFamiliarNombre && valores.referenciaFamiliarNombre.length >= 2 &&
                    valores.referenciaFamiliarParentesco &&
                    valores.referenciaFamiliarTelefono && /^\d{4}-?\d{4}$/.test(valores.referenciaFamiliarTelefono)
                );
            case 5:
                return Boolean(valores.aceptaTerminos);
            default:
                return false;
        }
    };

    // Actualizar total de pasos según el modo
    useEffect(() => {
        setTotalSteps(modoCompleto ? 5 : 2);
    }, [modoCompleto]);

    // Obtener municipios del departamento seleccionado
    const municipios = departamento ? municipiosPorDepartamento[departamento] || [] : [];

    // Calcular totales financieros
    const sueldoMensual = Number(watch("sueldoMensual")) || 0;
    const remesas = Number(watch("remesas")) || 0;
    const otrosIngresos = Number(watch("otrosIngresos")) || 0;
    const gastosVida = Number(watch("gastosVida")) || 0;
    const pagoPrestamos = Number(watch("pagoPrestamos")) || 0;
    const pagoAlquiler = Number(watch("pagoAlquiler")) || 0;

    const totalIngresos = sueldoMensual + remesas + otrosIngresos;
    const totalEgresos = gastosVida + pagoPrestamos + pagoAlquiler;
    const disponibleNeto = totalIngresos - totalEgresos;

    // Validar paso actual antes de avanzar
    const validateCurrentStep = async () => {
        let isValid = false;

        switch (currentStep) {
            case 1:
                isValid = await trigger([
                    "tipoServicio", "nombres", "apellidos", "dui",
                    "fechaNacimiento", "celular", "email", "departamento", "municipio"
                ]);
                break;
            case 2:
                isValid = await trigger([
                    "lugarTrabajo", "cargo", "tiempoLaborando"
                ]);
                break;
            case 3:
                isValid = await trigger(["sueldoMensual", "gastosVida"]);
                break;
            case 4:
                isValid = await trigger([
                    "referenciaPersonalNombre", "referenciaPersonalTelefono",
                    "referenciaFamiliarNombre", "referenciaFamiliarParentesco", "referenciaFamiliarTelefono"
                ]);
                break;
            case 5:
                isValid = await trigger(["aceptaTerminos"]);
                break;
            default:
                isValid = true;
        }

        return isValid;
    };

    const nextStep = async () => {
        const isValid = await validateCurrentStep();
        if (isValid) {
            // En modo rápido, saltar del paso 1 al paso de confirmación
            if (!modoCompleto && currentStep === 1) {
                setCurrentStep(5);
            } else if (currentStep < totalSteps) {
                setCurrentStep(currentStep + 1);
            }
        }
    };

    const prevStep = () => {
        if (!modoCompleto && currentStep === 5) {
            setCurrentStep(1);
        } else if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    // Enviar formulario por email
    const onSubmit = async (data: SolicitudCompleta) => {
        setIsSubmitting(true);

        try {
            // Construir el cuerpo del email
            const tipoServicioLabel = tiposServicio.find(t => t.value === data.tipoServicio)?.label || data.tipoServicio;

            const emailBody = `
=== NUEVA SOLICITUD DE ADMISIÓN ===
Tipo de Solicitud: ${tipoServicioLabel}
Modo: ${data.modoCompleto ? "Formulario Completo" : "Datos Básicos (completar en agencia)"}
Fecha: ${new Date().toLocaleString("es-SV")}

--- DATOS PERSONALES ---
Nombre Completo: ${data.nombres} ${data.apellidos}
DUI: ${data.dui}
Fecha de Nacimiento: ${data.fechaNacimiento}
Celular: ${data.celular}
Email: ${data.email}
Ubicación: ${data.municipio}, ${data.departamento}

${data.modoCompleto ? `
--- PERFIL LABORAL ---
Lugar de Trabajo: ${data.lugarTrabajo}
Cargo: ${data.cargo}
Tiempo Laborando: ${data.tiempoLaborando}
${data.direccionTrabajo ? `Dirección Trabajo: ${data.direccionTrabajo}` : ""}
¿Tiene Negocio Propio?: ${data.tieneNegocio ? "Sí" : "No"}
${data.tieneNegocio ? `
  - Nombre del Negocio: ${data.nombreNegocio}
  - Tipo de Negocio: ${data.tipoNegocio}
  - Capital: $${data.capitalNegocio}
` : ""}

--- SALUD FINANCIERA ---
INGRESOS:
  - Sueldo Mensual: $${Number(data.sueldoMensual || 0).toFixed(2)}
  - Remesas: $${Number(data.remesas || 0).toFixed(2)}
  - Otros Ingresos: $${Number(data.otrosIngresos || 0).toFixed(2)} ${data.fuenteOtrosIngresos ? `(${data.fuenteOtrosIngresos})` : ""}
  - TOTAL INGRESOS: $${totalIngresos.toFixed(2)}

EGRESOS:
  - Gastos de Vida: $${Number(data.gastosVida || 0).toFixed(2)}
  - Pago de Préstamos: $${Number(data.pagoPrestamos || 0).toFixed(2)}
  - Alquiler/Vivienda: $${Number(data.pagoAlquiler || 0).toFixed(2)}
  - TOTAL EGRESOS: $${totalEgresos.toFixed(2)}

DISPONIBLE NETO: $${disponibleNeto.toFixed(2)}

--- REFERENCIAS ---
Referencia Personal:
  - Nombre: ${data.referenciaPersonalNombre}
  - Teléfono: ${data.referenciaPersonalTelefono}

Referencia Familiar:
  - Nombre: ${data.referenciaFamiliarNombre}
  - Parentesco: ${data.referenciaFamiliarParentesco}
  - Teléfono: ${data.referenciaFamiliarTelefono}
` : ""}

--- FIN DE SOLICITUD ---
            `.trim();

            // Enviar email usando la API Route
            const response = await fetch("/api/send-solicitud", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    to: "alfremeeting@gmail.com",
                    subject: `Nueva Solicitud de ${tipoServicioLabel} - ${data.nombres} ${data.apellidos}`,
                    body: emailBody,
                    data: data,
                }),
            });

            if (!response.ok) {
                throw new Error("Error al enviar la solicitud");
            }

            setIsSubmitted(true);
        } catch (error) {
            console.error("Error enviando solicitud:", error);
            // Mostrar error al usuario
            alert("Hubo un error al enviar tu solicitud. Por favor intenta de nuevo o contáctanos directamente.");
        } finally {
            setIsSubmitting(false);
        }
    };

    // Calcular edad desde fecha de nacimiento
    const calcularEdad = (fechaNacimiento: string): number => {
        if (!fechaNacimiento) return 0;
        const hoy = new Date();
        const nacimiento = new Date(fechaNacimiento);
        let edad = hoy.getFullYear() - nacimiento.getFullYear();
        const mes = hoy.getMonth() - nacimiento.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
            edad--;
        }
        return edad;
    };

    const fechaNacimiento = String(watch("fechaNacimiento") || "");
    const edad = calcularEdad(fechaNacimiento);
    const esMenorDeEdad = edad > 0 && edad < 18;

    // Pantalla de éxito
    if (isSubmitted) {
        return (
            <div className="max-w-2xl mx-auto text-center py-16 px-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-6">
                    <CheckCircle className="h-10 w-10" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    ¡Solicitud Enviada con Éxito!
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                    Hemos recibido tu solicitud de{" "}
                    <span className="font-semibold text-primary-blue">
                        {tiposServicio.find(t => t.value === tipoServicio)?.label}
                    </span>.
                    Un asesor se comunicará contigo en un plazo de 24 horas hábiles.
                </p>
                <div className="bg-primary-blue/5 rounded-2xl p-6 mb-8">
                    <h3 className="font-semibold text-primary-blue mb-3">Próximos pasos:</h3>
                    <ul className="text-left text-gray-600 space-y-2">
                        <li className="flex items-start gap-2">
                            <span className="text-primary-gold">1.</span>
                            Recibirás un correo de confirmación
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary-gold">2.</span>
                            Un asesor te contactará para agendar una cita
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary-gold">3.</span>
                            Prepara tu DUI original para la visita a la agencia
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="primary" onClick={() => window.location.href = "/"}>
                        Volver al Inicio
                    </Button>
                    <Button variant="outline" onClick={() => window.location.href = "/agencias"}>
                        Ver Agencias
                    </Button>
                </div>
            </div>
        );
    }

    // Obtener el paso actual para mostrar
    const getActualStepIndex = () => {
        if (!modoCompleto) {
            return currentStep === 1 ? 0 : 4; // Solo paso 1 y confirmación
        }
        return currentStep - 1;
    };

    return (
        <FormProvider {...methods}>
            <div className="max-w-4xl mx-auto">
                {/* Barra de Progreso */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        {(modoCompleto ? stepsConfig : [stepsConfig[0], stepsConfig[4]]).map((step, index) => {
                            const stepNumber = modoCompleto ? step.id : (index === 0 ? 1 : 5);
                            const isActive = currentStep === stepNumber;
                            const isCompleted = modoCompleto
                                ? currentStep > step.id
                                : (currentStep === 5 && index === 0);

                            return (
                                <div key={step.id} className="flex items-center flex-1">
                                    <div className={`
                                        flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all
                                        ${isActive ? "bg-primary-blue border-primary-blue text-white" : ""}
                                        ${isCompleted ? "bg-primary-gold border-primary-gold text-white" : ""}
                                        ${!isActive && !isCompleted ? "bg-white border-gray-300 text-gray-400" : ""}
                                    `}>
                                        {isCompleted ? <CheckCircle className="h-5 w-5" /> : step.icon}
                                    </div>
                                    <div className="hidden sm:block ml-3 flex-1">
                                        <p className={`text-sm font-medium ${isActive ? "text-primary-blue" : "text-gray-500"}`}>
                                            {step.title}
                                        </p>
                                    </div>
                                    {index < (modoCompleto ? stepsConfig.length - 1 : 1) && (
                                        <div className={`flex-1 h-0.5 mx-4 ${isCompleted ? "bg-primary-gold" : "bg-gray-200"}`} />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-gray-500">
                            Paso {modoCompleto ? currentStep : (currentStep === 1 ? 1 : 2)} de {modoCompleto ? 5 : 2}
                        </p>
                    </div>
                </div>

                {/* Contenido del Paso */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* ========== PASO 1: DATOS BÁSICOS ========== */}
                        {currentStep === 1 && (
                            <div className="space-y-6">
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl font-bold text-gray-900">Datos Básicos</h2>
                                    <p className="text-gray-500 mt-2">Cuéntanos sobre ti para poder atenderte mejor</p>
                                </div>

                                {/* Tipo de Servicio */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-3">
                                        ¿Qué servicio te interesa? <span className="text-red-500">*</span>
                                    </label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {tiposServicio.map((tipo) => (
                                            <label
                                                key={tipo.value}
                                                className={`
                                                    flex items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all
                                                    ${tipoServicio === tipo.value
                                                        ? "border-primary-blue bg-primary-blue/5 text-primary-blue"
                                                        : "border-gray-200 hover:border-gray-300"
                                                    }
                                                `}
                                            >
                                                <input
                                                    type="radio"
                                                    {...methods.register("tipoServicio")}
                                                    value={tipo.value}
                                                    className="sr-only"
                                                />
                                                <span className="font-medium text-sm">{tipo.label}</span>
                                            </label>
                                        ))}
                                    </div>
                                    {errors.tipoServicio && (
                                        <p className="mt-1 text-sm text-red-500">{errors.tipoServicio.message}</p>
                                    )}
                                </div>

                                {/* Nombres y Apellidos */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Nombres <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            {...methods.register("nombres")}
                                            type="text"
                                            placeholder="Ej: Juan Carlos"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all"
                                        />
                                        {errors.nombres && (
                                            <p className="mt-1 text-sm text-red-500">{errors.nombres.message}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Apellidos <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            {...methods.register("apellidos")}
                                            type="text"
                                            placeholder="Ej: Pérez López"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all"
                                        />
                                        {errors.apellidos && (
                                            <p className="mt-1 text-sm text-red-500">{errors.apellidos.message}</p>
                                        )}
                                    </div>
                                </div>

                                {/* DUI y Fecha Nacimiento */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            DUI <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            {...methods.register("dui")}
                                            type="text"
                                            placeholder="00000000-0"
                                            maxLength={10}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all"
                                        />
                                        {errors.dui && (
                                            <p className="mt-1 text-sm text-red-500">{errors.dui.message}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Fecha de Nacimiento <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            {...methods.register("fechaNacimiento")}
                                            type="date"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all"
                                        />
                                        {edad > 0 && (
                                            <p className={`mt-1 text-sm ${esMenorDeEdad ? "text-red-500" : "text-gray-500"}`}>
                                                {esMenorDeEdad ? "Debes ser mayor de 18 años" : `${edad} años`}
                                            </p>
                                        )}
                                        {errors.fechaNacimiento && (
                                            <p className="mt-1 text-sm text-red-500">{errors.fechaNacimiento.message}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Celular y Email */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Celular <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            {...methods.register("celular")}
                                            type="tel"
                                            placeholder="0000-0000"
                                            inputMode="numeric"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all"
                                        />
                                        {errors.celular && (
                                            <p className="mt-1 text-sm text-red-500">{errors.celular.message}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Correo Electrónico <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            {...methods.register("email")}
                                            type="email"
                                            placeholder="tu@email.com"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all"
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Departamento y Municipio */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Departamento <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            {...methods.register("departamento")}
                                            onChange={(e) => {
                                                methods.setValue("departamento", e.target.value);
                                                methods.setValue("municipio", ""); // Reset municipio
                                            }}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all bg-white"
                                        >
                                            <option value="">Selecciona...</option>
                                            {departamentos.map((dep) => (
                                                <option key={dep} value={dep}>{dep}</option>
                                            ))}
                                        </select>
                                        {errors.departamento && (
                                            <p className="mt-1 text-sm text-red-500">{errors.departamento.message}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Municipio <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            {...methods.register("municipio")}
                                            disabled={!departamento}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
                                        >
                                            <option value="">Selecciona...</option>
                                            {municipios.map((mun) => (
                                                <option key={mun} value={mun}>{mun}</option>
                                            ))}
                                        </select>
                                        {errors.municipio && (
                                            <p className="mt-1 text-sm text-red-500">{errors.municipio.message}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Modo de Formulario */}
                                <div className="border-t border-gray-100 pt-6 mt-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-3">
                                        ¿Cómo deseas continuar?
                                    </label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <label className={`
                                            flex flex-col p-4 rounded-xl border-2 cursor-pointer transition-all
                                            ${!modoCompleto
                                                ? "border-primary-blue bg-primary-blue/5"
                                                : "border-gray-200 hover:border-gray-300"
                                            }
                                        `}>
                                            <input
                                                type="radio"
                                                checked={Boolean(!modoCompleto)}
                                                onChange={() => setValue("modoCompleto", false)}
                                                className="sr-only"
                                            />
                                            <span className="font-semibold text-gray-900 mb-1">Modo Rápido</span>
                                            <span className="text-sm text-gray-500">
                                                Solo datos básicos. Completar el resto en agencia.
                                            </span>
                                        </label>
                                        <label className={`
                                            flex flex-col p-4 rounded-xl border-2 cursor-pointer transition-all
                                            ${modoCompleto
                                                ? "border-primary-blue bg-primary-blue/5"
                                                : "border-gray-200 hover:border-gray-300"
                                            }
                                        `}>
                                            <input
                                                type="radio"
                                                checked={Boolean(modoCompleto)}
                                                onChange={() => setValue("modoCompleto", true)}
                                                className="sr-only"
                                            />
                                            <span className="font-semibold text-gray-900 mb-1">Formulario Completo</span>
                                            <span className="text-sm text-gray-500">
                                                Llenar toda la información ahora (recomendado).
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ========== PASO 2: PERFIL LABORAL ========== */}
                        {currentStep === 2 && modoCompleto && (
                            <div className="space-y-6">
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl font-bold text-gray-900">Perfil Laboral</h2>
                                    <p className="text-gray-500 mt-2">Información sobre tu situación de empleo</p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Lugar de Trabajo <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            {...methods.register("lugarTrabajo")}
                                            type="text"
                                            placeholder="Nombre de la empresa"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all"
                                        />
                                        {errors.lugarTrabajo && (
                                            <p className="mt-1 text-sm text-red-500">{errors.lugarTrabajo.message}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Cargo <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            {...methods.register("cargo")}
                                            type="text"
                                            placeholder="Tu puesto de trabajo"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all"
                                        />
                                        {errors.cargo && (
                                            <p className="mt-1 text-sm text-red-500">{errors.cargo.message}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Tiempo Laborando <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            {...methods.register("tiempoLaborando")}
                                            type="text"
                                            placeholder="Ej: 2 años 6 meses"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all"
                                        />
                                        {errors.tiempoLaborando && (
                                            <p className="mt-1 text-sm text-red-500">{errors.tiempoLaborando.message}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Dirección del Trabajo (Opcional)
                                        </label>
                                        <input
                                            {...methods.register("direccionTrabajo")}
                                            type="text"
                                            placeholder="Dirección de la empresa"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Negocio Propio */}
                                <div className="border-t border-gray-100 pt-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <label className="text-sm font-medium text-gray-700">
                                            ¿Posee negocio propio?
                                        </label>
                                        <button
                                            type="button"
                                            onClick={() => setValue("tieneNegocio", !tieneNegocio)}
                                            className={`
                                                relative inline-flex h-6 w-11 items-center rounded-full transition-colors
                                                ${tieneNegocio ? "bg-primary-blue" : "bg-gray-200"}
                                            `}
                                        >
                                            <span className={`
                                                inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                                                ${tieneNegocio ? "translate-x-6" : "translate-x-1"}
                                            `} />
                                        </button>
                                    </div>

                                    {tieneNegocio && (
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-in slide-in-from-top-2">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Nombre del Negocio
                                                </label>
                                                <input
                                                    {...methods.register("nombreNegocio")}
                                                    type="text"
                                                    placeholder="Nombre"
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Tipo de Negocio
                                                </label>
                                                <input
                                                    {...methods.register("tipoNegocio")}
                                                    type="text"
                                                    placeholder="Ej: Tienda, Restaurante"
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Capital Actual ($)
                                                </label>
                                                <input
                                                    {...methods.register("capitalNegocio")}
                                                    type="text"
                                                    placeholder="0.00"
                                                    inputMode="decimal"
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* ========== PASO 3: SALUD FINANCIERA ========== */}
                        {currentStep === 3 && modoCompleto && (
                            <div className="space-y-6">
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl font-bold text-gray-900">Salud Financiera</h2>
                                    <p className="text-gray-500 mt-2">Tu balance de ingresos y gastos mensuales</p>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    {/* Columna Ingresos */}
                                    <div className="bg-green-50 rounded-xl p-6">
                                        <h3 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                                            <DollarSign className="h-5 w-5" />
                                            Ingresos Mensuales
                                        </h3>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Sueldo Mensual <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                                                    <input
                                                        {...methods.register("sueldoMensual", { valueAsNumber: true })}
                                                        type="number"
                                                        step="0.01"
                                                        min="0"
                                                        placeholder="0.00"
                                                        inputMode="decimal"
                                                        className="w-full pl-8 pr-4 py-3 rounded-xl border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Remesas (Opcional)
                                                </label>
                                                <div className="relative">
                                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                                                    <input
                                                        {...methods.register("remesas", { valueAsNumber: true })}
                                                        type="number"
                                                        step="0.01"
                                                        min="0"
                                                        placeholder="0.00"
                                                        inputMode="decimal"
                                                        className="w-full pl-8 pr-4 py-3 rounded-xl border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Otros Ingresos (Opcional)
                                                </label>
                                                <div className="relative">
                                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                                                    <input
                                                        {...methods.register("otrosIngresos", { valueAsNumber: true })}
                                                        type="number"
                                                        step="0.01"
                                                        min="0"
                                                        placeholder="0.00"
                                                        inputMode="decimal"
                                                        className="w-full pl-8 pr-4 py-3 rounded-xl border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all"
                                                    />
                                                </div>
                                                <input
                                                    {...methods.register("fuenteOtrosIngresos")}
                                                    type="text"
                                                    placeholder="¿De qué fuente?"
                                                    className="w-full mt-2 px-4 py-2 rounded-lg border border-gray-300 focus:border-primary-blue outline-none transition-all text-sm"
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-green-200">
                                            <div className="flex justify-between items-center">
                                                <span className="font-medium text-green-800">Total Ingresos:</span>
                                                <span className="text-xl font-bold text-green-600">${totalIngresos.toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Columna Egresos */}
                                    <div className="bg-red-50 rounded-xl p-6">
                                        <h3 className="font-semibold text-red-800 mb-4 flex items-center gap-2">
                                            <DollarSign className="h-5 w-5" />
                                            Egresos Mensuales
                                        </h3>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Gastos de Vida <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                                                    <input
                                                        {...methods.register("gastosVida", { valueAsNumber: true })}
                                                        type="number"
                                                        step="0.01"
                                                        min="0"
                                                        placeholder="0.00"
                                                        inputMode="decimal"
                                                        className="w-full pl-8 pr-4 py-3 rounded-xl border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Pago de Préstamos (Opcional)
                                                </label>
                                                <div className="relative">
                                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                                                    <input
                                                        {...methods.register("pagoPrestamos", { valueAsNumber: true })}
                                                        type="number"
                                                        step="0.01"
                                                        min="0"
                                                        placeholder="0.00"
                                                        inputMode="decimal"
                                                        className="w-full pl-8 pr-4 py-3 rounded-xl border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Alquiler / Vivienda (Opcional)
                                                </label>
                                                <div className="relative">
                                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                                                    <input
                                                        {...methods.register("pagoAlquiler", { valueAsNumber: true })}
                                                        type="number"
                                                        step="0.01"
                                                        min="0"
                                                        placeholder="0.00"
                                                        inputMode="decimal"
                                                        className="w-full pl-8 pr-4 py-3 rounded-xl border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-red-200">
                                            <div className="flex justify-between items-center">
                                                <span className="font-medium text-red-800">Total Egresos:</span>
                                                <span className="text-xl font-bold text-red-600">${totalEgresos.toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Disponible Neto */}
                                <div className={`
                                    rounded-xl p-6 text-center
                                    ${disponibleNeto >= 0 ? "bg-blue-50" : "bg-yellow-50"}
                                `}>
                                    <p className="text-sm font-medium text-gray-600 mb-1">Disponible Neto Mensual</p>
                                    <p className={`text-3xl font-bold ${disponibleNeto >= 0 ? "text-primary-blue" : "text-yellow-600"}`}>
                                        ${disponibleNeto.toFixed(2)}
                                    </p>
                                    {disponibleNeto < 0 && (
                                        <p className="text-sm text-yellow-600 mt-2">
                                            ⚠️ Tus gastos superan tus ingresos
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* ========== PASO 4: REFERENCIAS ========== */}
                        {currentStep === 4 && modoCompleto && (
                            <div className="space-y-6">
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl font-bold text-gray-900">Referencias</h2>
                                    <p className="text-gray-500 mt-2">Personas que puedan dar referencias sobre ti</p>
                                </div>

                                {/* Referencia Personal */}
                                <div className="bg-gray-50 rounded-xl p-6">
                                    <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                        <User className="h-5 w-5 text-primary-blue" />
                                        Referencia Personal (No familiar)
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Nombre Completo <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                {...methods.register("referenciaPersonalNombre")}
                                                type="text"
                                                placeholder="Nombre de tu referencia"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all"
                                            />
                                            {errors.referenciaPersonalNombre && (
                                                <p className="mt-1 text-sm text-red-500">{errors.referenciaPersonalNombre.message}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Teléfono <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                {...methods.register("referenciaPersonalTelefono")}
                                                type="tel"
                                                placeholder="0000-0000"
                                                inputMode="numeric"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all"
                                            />
                                            {errors.referenciaPersonalTelefono && (
                                                <p className="mt-1 text-sm text-red-500">{errors.referenciaPersonalTelefono.message}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Referencia Familiar */}
                                <div className="bg-gray-50 rounded-xl p-6">
                                    <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                        <Users className="h-5 w-5 text-primary-gold" />
                                        Referencia Familiar
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Nombre Completo <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                {...methods.register("referenciaFamiliarNombre")}
                                                type="text"
                                                placeholder="Nombre del familiar"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all"
                                            />
                                            {errors.referenciaFamiliarNombre && (
                                                <p className="mt-1 text-sm text-red-500">{errors.referenciaFamiliarNombre.message}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Parentesco <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                {...methods.register("referenciaFamiliarParentesco")}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all bg-white"
                                            >
                                                <option value="">Selecciona...</option>
                                                {parentescos.map((p) => (
                                                    <option key={p.value} value={p.value}>{p.label}</option>
                                                ))}
                                            </select>
                                            {errors.referenciaFamiliarParentesco && (
                                                <p className="mt-1 text-sm text-red-500">{errors.referenciaFamiliarParentesco.message}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Teléfono <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                {...methods.register("referenciaFamiliarTelefono")}
                                                type="tel"
                                                placeholder="0000-0000"
                                                inputMode="numeric"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all"
                                            />
                                            {errors.referenciaFamiliarTelefono && (
                                                <p className="mt-1 text-sm text-red-500">{errors.referenciaFamiliarTelefono.message}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ========== PASO 5: CONFIRMACIÓN ========== */}
                        {currentStep === 5 && (
                            <div className="space-y-6">
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl font-bold text-gray-900">Confirmación</h2>
                                    <p className="text-gray-500 mt-2">Revisa tu información antes de enviar</p>
                                </div>

                                {/* Resumen */}
                                <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                                    <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                                        <FileText className="h-5 w-5 text-primary-blue" />
                                        Resumen de Solicitud
                                    </h3>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <p className="text-gray-500">Tipo de Servicio</p>
                                            <p className="font-medium">{tiposServicio.find(t => t.value === tipoServicio)?.label}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500">Nombre</p>
                                            <p className="font-medium">{String(watch("nombres") || "")} {String(watch("apellidos") || "")}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500">DUI</p>
                                            <p className="font-medium">{String(watch("dui") || "")}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500">Celular</p>
                                            <p className="font-medium">{String(watch("celular") || "")}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500">Email</p>
                                            <p className="font-medium">{String(watch("email") || "")}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500">Ubicación</p>
                                            <p className="font-medium">{String(watch("municipio") || "")}, {String(watch("departamento") || "")}</p>
                                        </div>
                                    </div>

                                    {modoCompleto && (
                                        <div className="pt-4 border-t border-gray-200">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                                <div>
                                                    <p className="text-gray-500">Lugar de Trabajo</p>
                                                    <p className="font-medium">{String(watch("lugarTrabajo") || "")}</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-500">Disponible Neto</p>
                                                    <p className={`font-medium ${disponibleNeto >= 0 ? "text-green-600" : "text-red-600"}`}>
                                                        ${disponibleNeto.toFixed(2)}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Aceptación de Términos */}
                                <div className="border-2 border-gray-200 rounded-xl p-6">
                                    <label className="flex items-start gap-3 cursor-pointer">
                                        <input
                                            {...methods.register("aceptaTerminos")}
                                            type="checkbox"
                                            className="mt-1 h-5 w-5 rounded border-gray-300 text-primary-blue focus:ring-primary-blue"
                                        />
                                        <span className="text-sm text-gray-600">
                                            Acepto que toda la información proporcionada en este formulario es veraz y completa.
                                            Autorizo a CRECE FINANCE a verificar la información proporcionada y a consultar mi
                                            historial crediticio. Acepto los{" "}
                                            <a href="/terminos" target="_blank" className="text-primary-blue underline hover:text-primary-blue/80">
                                                Términos y Condiciones
                                            </a>{" "}
                                            y la{" "}
                                            <a href="/privacidad" target="_blank" className="text-primary-blue underline hover:text-primary-blue/80">
                                                Política de Privacidad
                                            </a>.
                                        </span>
                                    </label>
                                    {errors.aceptaTerminos && (
                                        <p className="mt-2 text-sm text-red-500">{errors.aceptaTerminos.message}</p>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Botones de Navegación */}
                        <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={prevStep}
                                disabled={currentStep === 1}
                                className={currentStep === 1 ? "invisible" : ""}
                            >
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Atrás
                            </Button>

                            {currentStep === 5 ? (
                                <Button
                                    type="submit"
                                    variant="primary"
                                    disabled={isSubmitting || !watch("aceptaTerminos")}
                                    className="min-w-[180px]"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                            Enviando...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="h-4 w-4 mr-2" />
                                            Enviar Solicitud
                                        </>
                                    )}
                                </Button>
                            ) : (
                                <Button
                                    type="button"
                                    variant="primary"
                                    onClick={nextStep}
                                    disabled={esMenorDeEdad || !isCurrentStepComplete()}
                                >
                                    Siguiente
                                    <ArrowRight className="h-4 w-4 ml-2" />
                                </Button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </FormProvider>
    );
}
