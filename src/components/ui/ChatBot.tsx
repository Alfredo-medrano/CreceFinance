"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/cn";
import { X, RefreshCcw, Send } from "lucide-react";
import { useChatBot } from "@/hooks/useChatBot";
import { WavingBotIcon } from "@/components/ui/chat/WavingBotIcon";

/**
 * Componente ChatBot - Presentational Layer
 */
export function ChatBot() {
    const {
        isOpen,
        toggleChat,
        closeChat,
        messagesEndRef,
        history,
        currentStepData,
        inputValue,
        setInputValue,
        handleOptionClick,
        handleInputSubmit,
        resetChat,
    } = useChatBot();

    const inputRef = useRef<HTMLInputElement>(null);

    // Focus en input cuando aparece
    useEffect(() => {
        if (currentStepData?.input && isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [currentStepData, isOpen]);

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") handleInputSubmit();
    };

    // Render helper
    const renderMessageText = (text: string) => {
        return text.split('\n').map((line, i) => (
            <React.Fragment key={i}>
                {line}
                {i < text.split('\n').length - 1 && <br />}
            </React.Fragment>
        ));
    };

    return (
        <>
            {/* Botón flotante */}
            <button
                onClick={toggleChat}
                className={cn(
                    "fixed bottom-6 right-6 z-50 transition-all duration-500",
                    isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
                )}
                aria-label="Abrir chat"
            >
                <div className="relative group">
                    <div className="absolute inset-0 rounded-full bg-primary-gold/40 animate-ping" />
                    <div className="absolute inset-0 rounded-full bg-primary-gold/20 animate-pulse" />
                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary-blue to-primary-blue-800 flex items-center justify-center shadow-2xl border-2 border-primary-gold/50 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                        <WavingBotIcon className="w-12 h-12 mt-1" />
                    </div>
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary-gold rounded-full flex items-center justify-center text-xs font-bold text-primary-blue animate-pulse">
                        1
                    </span>
                </div>
            </button>

            {/* Ventana del chat */}
            <div
                className={cn(
                    "fixed z-50 flex flex-col shadow-2xl overflow-hidden transition-all duration-500 transform origin-bottom-right bg-gray-50 border-gray-200",
                    // Mobile Styles (Default)
                    "bottom-0 right-0 w-full h-[100dvh] rounded-none border-t",
                    // Desktop Styles (sm and up)
                    "sm:bottom-6 sm:right-6 sm:w-[380px] sm:h-[600px] sm:max-h-[85vh] sm:rounded-2xl sm:border",
                    isOpen
                        ? "scale-100 opacity-100 translate-y-0 pointer-events-auto"
                        : "scale-0 opacity-0 translate-y-10 pointer-events-none"
                )}
            >
                {/* Header */}
                <div className="bg-gradient-to-r from-primary-blue to-primary-blue-800 p-4 shrink-0 flex items-center justify-between shadow-md z-10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center overflow-hidden border border-white/20">
                            <WavingBotIcon className="w-8 h-8 mt-1" />
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-sm">Crecito</h3>
                            <span className="text-primary-gold text-xs flex items-center gap-1">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                Asistente Virtual
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={resetChat}
                            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                            aria-label="Reiniciar chat"
                            title="Reiniciar conversación"
                        >
                            <RefreshCcw className="w-4 h-4" />
                        </button>
                        <button
                            onClick={closeChat}
                            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                            aria-label="Cerrar chat"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Área de mensajes (Historial) */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-20">
                    {history.map((message) => (
                        <div
                            key={message.id}
                            className={cn(
                                "flex fade-in-up",
                                message.sender === "user" ? "justify-end" : "justify-start"
                            )}
                        >
                            {message.sender === "bot" && (
                                <div className="w-8 h-8 rounded-full bg-primary-blue/10 flex items-center justify-center mr-2 flex-shrink-0 overflow-hidden border border-primary-blue/20 self-end mb-1">
                                    <WavingBotIcon className="w-6 h-6 mt-1" />
                                </div>
                            )}
                            <div
                                className={cn(
                                    "max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm",
                                    message.sender === "user"
                                        ? "bg-gradient-to-r from-primary-blue to-primary-blue-700 text-white rounded-br-none"
                                        : "bg-white border border-gray-200 text-gray-700 rounded-bl-none"
                                )}
                            >
                                <div className="leading-relaxed">
                                    {renderMessageText(message.text)}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Botones de acción actuales (Siempre al final) */}
                    {currentStepData?.options && (
                        <div className="flex flex-col gap-2 mt-4 animate-in fade-in slide-in-from-bottom-4 duration-500 pl-10">
                            {currentStepData.options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleOptionClick(option)}
                                    className="text-left w-full px-4 py-3 bg-white hover:bg-gray-50 border border-primary-gold/30 hover:border-primary-gold text-primary-blue text-sm font-medium rounded-xl transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 flex items-center justify-between group"
                                >
                                    <span>{option.label}</span>
                                    {option.url ? (
                                        <span className="text-xs text-gray-400 group-hover:text-primary-gold">↗</span>
                                    ) : (
                                        <span className="text-xs text-gray-400 group-hover:text-primary-gold">→</span>
                                    )}
                                </button>
                            ))}
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area (Solo si el paso actual tiene input) */}
                {currentStepData?.input && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 animate-in slide-in-from-bottom-10 duration-300">
                        <div className="flex items-center gap-2">
                            <input
                                ref={inputRef}
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyPress}
                                placeholder={currentStepData.input!.placeholder}
                                className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-primary-gold focus:ring-2 focus:ring-primary-gold/20 text-sm text-gray-700 placeholder-gray-400 shadow-sm"
                            />
                            <button
                                onClick={handleInputSubmit}
                                disabled={!inputValue.trim()}
                                className={cn(
                                    "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-md",
                                    inputValue.trim()
                                        ? "bg-gradient-to-r from-primary-gold to-primary-gold-600 text-primary-blue hover:scale-105"
                                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                                )}
                            >
                                <Send className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .fade-in-up {
                    animation: fadeInUp 0.3s ease-out forwards;
                }
            `}</style>
        </>
    );
}
