"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
    {
        quote:
            "The team is professional in presentation and dependable in how they carry out their duties.",
        name: "Corporate Client",
    },
    {
        quote:
            "Their approach to visible security presence and communication creates confidence from the start.",
        name: "Operations Stakeholder",
    },
    {
        quote:
            "The service comes across as structured, calm, and serious about standards.",
        name: "Private Client",
    },
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 4500);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="section-pad bg-white">
            <div className="container-main">
                <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 md:grid-cols-[1.05fr_0.95fr]">
                    <div className="p-8 md:p-12">
                        <h2 className="text-4xl font-bold text-[var(--navy)]">
                            Client Testimonials
                        </h2>

                        <div className="mt-8 rounded-2xl bg-[#eaf3fb] p-6">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 14 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -14 }}
                                    transition={{ duration: 0.35 }}
                                >
                                    <p className="text-lg leading-8 text-slate-700">
                                        “{testimonials[index].quote}”
                                    </p>

                                    <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--blue)]">
                                        {testimonials[index].name}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="relative min-h-[320px]">
                        <Image
                            src="/images/home/testimonial-home.jpg"
                            alt="Security personnel on site"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}