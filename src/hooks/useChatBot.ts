"use client";

import { useState, useEffect, useRef } from "react";
import { CHAT_FLOW } from "@/data/chatFlow";

export interface Message {
    id: string;
    text: string;
    sender: "bot" | "user";
}

export function useChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentStepId, setCurrentStepId] = useState("start");
    const [history, setHistory] = useState<Message[]>([]);
    const [userData, setUserData] = useState<Record<string, string>>({});
    const [inputValue, setInputValue] = useState("");

    // Referencia para scroll automático (se expone para que la UI lo conecte)
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Inicializar chat
    useEffect(() => {
        if (history.length === 0) {
            processStep("start");
        }
    }, [history.length]);

    // Auto-scroll
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history, currentStepId, isOpen]);

    const replaceVariables = (text: string) => {
        if (!text) return "";
        let newText = text;
        Object.keys(userData).forEach(key => {
            newText = newText.replace(new RegExp(`{${key}}`, 'g'), userData[key]);
        });
        newText = newText.replace(/{.*?}/g, "");
        return newText;
    };

    const processStep = (stepId: string) => {
        const stepData = CHAT_FLOW[stepId];
        if (!stepData) {
            console.error(`Paso no encontrado: ${stepId}`);
            return;
        }

        const newMessage: Message = {
            id: Date.now().toString(),
            text: replaceVariables(stepData.message),
            sender: "bot",
        };

        setHistory(prev => [...prev, newMessage]);
        setCurrentStepId(stepId);
    };

    const handleOptionClick = (option: { label: string, nextStep?: string, url?: string, setContext?: { topic: string } }) => {
        if (option.setContext) {
            setUserData(prev => ({ ...prev, ...option.setContext }));
        }

        const userMsg: Message = {
            id: Date.now().toString(),
            text: option.label,
            sender: "user"
        };
        setHistory(prev => [...prev, userMsg]);

        setTimeout(() => {
            if (option.url) {
                const finalUrl = replaceVariables(option.url);
                window.open(finalUrl, "_blank");
                setHistory(prev => [...prev, {
                    id: Date.now().toString(),
                    text: "🚀 Te hemos redirigido a una nueva pestaña.",
                    sender: "bot"
                }]);
            } else if (option.nextStep) {
                processStep(option.nextStep);
            }
        }, 500);
    };

    const handleInputSubmit = () => {
        const stepData = CHAT_FLOW[currentStepId];
        if (!stepData.input || !inputValue.trim()) return;

        setUserData(prev => ({ ...prev, [stepData.input!.variable]: inputValue.trim() }));

        const userMsg: Message = {
            id: Date.now().toString(),
            text: inputValue.trim(),
            sender: "user"
        };
        setHistory(prev => [...prev, userMsg]);
        setInputValue("");

        setTimeout(() => {
            processStep(stepData.input!.nextStep);
        }, 500);
    };

    const resetChat = () => {
        setHistory([]);
        setUserData({});
        setInputValue("");
        setCurrentStepId("start");
    };

    const toggleChat = () => setIsOpen(!isOpen);

    const closeChat = () => setIsOpen(false);

    const currentStepData = CHAT_FLOW[currentStepId];

    return {
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
        renderMessageText: (text: string) => text // Simple helper if needed, or moved to UI
    };
}
