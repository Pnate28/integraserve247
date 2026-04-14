"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Consultation",
        text: "We discuss your site, event, training needs, priorities, and the level of support you require.",
    },
    {
        number: "02",
        title: "Planning",
        text: "We define the service approach, access control requirements, operational expectations, or course path.",
    },
    {
        number: "03",
        title: "Deployment or Training",
        text: "Our team provides the agreed service or structured training in a professional and organised manner.",
    },
    {
        number: "04",
        title: "Ongoing Support",
        text: "We maintain communication, continuity, and dependable client support as requirements evolve.",
    },
];

export default function HowItWorks() {
    return (
        <section className="section-pad bg-slate-50">
            <div className="container-main">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                        How we work
                    </p>
                    <h2 className="mt-2 text-4xl font-bold text-slate-900">
                        A clear process built around professionalism
                    </h2>
                    <p className="mt-4 text-slate-600">
                        We keep the process straightforward, practical, and focused on dependable delivery.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: index * 0.08 }}
                            className="soft-card p-7"
                        >
                            <div className="text-4xl font-bold text-[var(--blue)]">
                                {step.number}
                            </div>
                            <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                                {step.title}
                            </h3>
                            <p className="mt-4 text-sm leading-7 text-slate-600">
                                {step.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}