"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaBookOpen, FaShieldAlt, FaUserShield } from "react-icons/fa";

const items = [
    {
        icon: <FaShieldAlt />,
        title: "Security Services",
        text: "Guarding, access control, event support, visible site protection, and practical security presence.",
        href: "/services",
        cta: "View Services",
    },
    {
        icon: <FaBookOpen />,
        title: "Training Courses",
        text: "Structured practical training focused on discipline, confidence, safety awareness, and readiness.",
        href: "/courses",
        cta: "View Courses",
    },
    {
        icon: <FaUserShield />,
        title: "Professional Support",
        text: "A serious, client-facing approach built around reliability, presentation, and operational confidence.",
        href: "/contact",
        cta: "Enquire Now",
    },
];

export default function QuickHighlights() {
    return (
        <section className="section-pad bg-white">
            <div className="container-main">
                <div className="grid gap-6 md:grid-cols-3">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: index * 0.08 }}
                            whileHover={{ y: -6 }}
                            className="soft-card p-7"
                        >
                            <div className="mb-4 inline-flex rounded-xl bg-slate-100 p-4 text-3xl text-[var(--blue)]">
                                {item.icon}
                            </div>

                            <h3 className="text-2xl font-semibold text-slate-900">
                                {item.title}
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-slate-600">
                                {item.text}
                            </p>

                            <Link
                                href={item.href}
                                className="mt-6 inline-flex font-semibold text-[var(--blue)] transition hover:text-[var(--navy)]"
                            >
                                {item.cta}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}