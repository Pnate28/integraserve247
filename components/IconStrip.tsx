"use client";

import { motion } from "framer-motion";
import {
    FaCamera,
    FaClock,
    FaShieldAlt,
    FaUserShield,
} from "react-icons/fa";

const items = [
    { icon: <FaShieldAlt />, label: "Protection" },
    { icon: <FaClock />, label: "24/7 Readiness" },
    { icon: <FaUserShield />, label: "Guarding" },
    { icon: <FaCamera />, label: "Monitoring" },
];

export default function IconStrip() {
    return (
        <section className="py-8">
            <div className="container-main">
                <div className="flex flex-wrap items-center justify-center gap-10 rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-sm">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: index * 0.08 }}
                            whileHover={{ y: -4 }}
                            className="flex flex-col items-center gap-2 text-slate-400"
                        >
                            <motion.div
                                animate={{ y: [0, -3, 0] }}
                                transition={{ duration: 2.2, repeat: Infinity, delay: index * 0.2 }}
                                className="text-4xl text-slate-400"
                            >
                                {item.icon}
                            </motion.div>
                            <span className="text-sm font-medium text-slate-500">{item.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}