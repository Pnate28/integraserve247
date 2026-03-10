"use client";

import { motion } from "framer-motion";
import { FaCheckCircle, FaClock, FaShieldAlt, FaUserTie } from "react-icons/fa";

const reasons = [
    {
        icon: <FaShieldAlt />,
        title: "Professional standards",
        text: "We prioritise discipline, visible presence, consistent procedure, and dependable service delivery.",
    },
    {
        icon: <FaClock />,
        title: "24/7 readiness",
        text: "Our operating mindset is built around continuity, awareness, and active site presence.",
    },
    {
        icon: <FaUserTie />,
        title: "Trained personnel",
        text: "We value communication, preparedness, site conduct, and practical duty awareness.",
    },
    {
        icon: <FaCheckCircle />,
        title: "Practical training",
        text: "Our courses focus on usable knowledge, safe handling, and industry-relevant readiness.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="section-pad bg-[#f6f8fb]">
            <div className="container-main">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-4xl font-bold text-[var(--navy)]">Why Choose Us</h2>
                    <p className="mt-4 text-slate-600">
                        Our company is built to support clients who need calm, capable, and
                        professional security support in real operating environments.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 26 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.45, delay: index * 0.08 }}
                            whileHover={{ y: -8 }}
                            className="soft-card p-6"
                        >
                            <motion.div
                                whileHover={{ rotate: 6, scale: 1.08 }}
                                transition={{ type: "spring", stiffness: 260, damping: 16 }}
                                className="mb-4 inline-flex rounded-xl bg-slate-100 p-4 text-3xl text-[var(--blue)]"
                            >
                                {reason.icon}
                            </motion.div>

                            <h3 className="text-xl font-semibold text-slate-900">{reason.title}</h3>
                            <p className="mt-3 text-sm leading-7 text-slate-600">{reason.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}