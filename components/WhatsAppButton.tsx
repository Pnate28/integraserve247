"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/27735592399"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Integraserve 24/7 on WhatsApp"
            className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(34,197,94,0.35)] transition hover:scale-105 hover:bg-green-600"
        >
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-20"></span>
            <FaWhatsapp className="relative text-xl" />
            <span className="relative hidden sm:inline">WhatsApp Us</span>
        </a>
    );
}