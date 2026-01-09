"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    CheckCircle,
} from "lucide-react";

const contactSchema = z.object({
    nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    email: z.string().email("Ingresa un email válido"),
    telefono: z.string().min(8, "El teléfono debe tener al menos 8 dígitos"),
    asunto: z.string().min(5, "El asunto debe tener al menos 5 caracteres"),
    mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactoPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactForm>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactForm) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log(data);
        setIsSubmitted(true);
        reset();
    };

    return (
        <>
            {/* Hero */}
            <section className="relative bg-primary-blue pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <span className="inline-block mb-4 rounded-full bg-primary-gold/20 px-4 py-2 text-sm font-semibold text-primary-gold">
                            Contacto
                        </span>
                        <h1 className="mb-6 font-heading text-4xl font-bold text-white md:text-5xl">
                            ¿Cómo podemos ayudarte?
                        </h1>
                        <p className="text-lg text-white/80">
                            Estamos aquí para responder todas tus preguntas. Contáctanos y un
                            asesor se comunicará contigo a la brevedad.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid gap-12 lg:grid-cols-2">
                        {/* Contact Info */}
                        <div>
                            <h2 className="mb-8 font-heading text-2xl font-bold text-primary-blue">
                                Información de Contacto
                            </h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-gold/10">
                                        <MapPin className="h-6 w-6 text-primary-gold" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading font-bold text-primary-blue">Dirección</h3>
                                        <p className="text-gray-600">
                                            2 calle Pte. Y 7 Av. Nte. 418<br />
                                            Barrio San Felipe, San Miguel
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-gold/10">
                                        <Phone className="h-6 w-6 text-primary-gold" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading font-bold text-primary-blue">Teléfono</h3>
                                        <a href="tel:26607373" className="text-gray-600 hover:text-primary-gold">
                                            2660-7373
                                        </a>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-gold/10">
                                        <Mail className="h-6 w-6 text-primary-gold" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading font-bold text-primary-blue">Email</h3>
                                        <a href="mailto:info@crecefinance.com" className="text-gray-600 hover:text-primary-gold">
                                            info@crecefinance.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-gold/10">
                                        <Clock className="h-6 w-6 text-primary-gold" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading font-bold text-primary-blue">Horario</h3>
                                        <p className="text-gray-600">
                                            Lunes a Viernes: 8:00 AM - 5:00 PM<br />
                                            Sábado: 8:00 AM - 12:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="rounded-2xl bg-white p-8 shadow-xl">
                            {isSubmitted ? (
                                <div className="flex flex-col items-center justify-center py-12 text-center">
                                    <CheckCircle className="mb-4 h-16 w-16 text-green-500" />
                                    <h3 className="mb-2 font-heading text-xl font-bold text-primary-blue">
                                        ¡Mensaje enviado!
                                    </h3>
                                    <p className="text-gray-600">
                                        Gracias por contactarnos. Te responderemos pronto.
                                    </p>
                                    <Button
                                        variant="outline"
                                        className="mt-6"
                                        onClick={() => setIsSubmitted(false)}
                                    >
                                        Enviar otro mensaje
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <div>
                                        <label className="mb-2 block font-medium text-gray-700">
                                            Nombre completo
                                        </label>
                                        <input
                                            {...register("nombre")}
                                            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-gold focus:outline-none focus:ring-2 focus:ring-primary-gold/20"
                                            placeholder="Tu nombre"
                                        />
                                        {errors.nombre && (
                                            <p className="mt-1 text-sm text-red-500">{errors.nombre.message}</p>
                                        )}
                                    </div>
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <div>
                                            <label className="mb-2 block font-medium text-gray-700">Email</label>
                                            <input
                                                {...register("email")}
                                                type="email"
                                                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-gold focus:outline-none focus:ring-2 focus:ring-primary-gold/20"
                                                placeholder="tu@email.com"
                                            />
                                            {errors.email && (
                                                <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="mb-2 block font-medium text-gray-700">Teléfono</label>
                                            <input
                                                {...register("telefono")}
                                                type="tel"
                                                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-gold focus:outline-none focus:ring-2 focus:ring-primary-gold/20"
                                                placeholder="0000-0000"
                                            />
                                            {errors.telefono && (
                                                <p className="mt-1 text-sm text-red-500">{errors.telefono.message}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="mb-2 block font-medium text-gray-700">Asunto</label>
                                        <input
                                            {...register("asunto")}
                                            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-gold focus:outline-none focus:ring-2 focus:ring-primary-gold/20"
                                            placeholder="¿Sobre qué quieres hablar?"
                                        />
                                        {errors.asunto && (
                                            <p className="mt-1 text-sm text-red-500">{errors.asunto.message}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="mb-2 block font-medium text-gray-700">Mensaje</label>
                                        <textarea
                                            {...register("mensaje")}
                                            rows={4}
                                            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-gold focus:outline-none focus:ring-2 focus:ring-primary-gold/20"
                                            placeholder="Escribe tu mensaje aquí..."
                                        />
                                        {errors.mensaje && (
                                            <p className="mt-1 text-sm text-red-500">{errors.mensaje.message}</p>
                                        )}
                                    </div>
                                    <Button
                                        type="submit"
                                        variant="primary"
                                        size="lg"
                                        className="w-full"
                                        isLoading={isSubmitting}
                                        leftIcon={<Send className="h-5 w-5" />}
                                    >
                                        Enviar Mensaje
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
