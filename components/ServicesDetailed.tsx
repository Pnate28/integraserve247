"use client";

import {
    FaBuilding,
    FaCamera,
    FaDoorOpen,
    FaPeopleArrows,
    FaShieldAlt,
    FaUserShield,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
    {
        icon: <FaShieldAlt />,
        title: "Armed Security",
        points: [
            "High-visibility protection presence",
            "Strong deterrence for sensitive environments",
            "Professional conduct and site discipline",
        ],
    },
    {
        icon: <FaUserShield />,
        title: "Unarmed Guarding",
        points: [
            "Reception and entry point coverage",
            "Patrol and observation duties",
            "Daily incident awareness and reporting support",
        ],
    },
    {
        icon: <FaPeopleArrows />,
        title: "Event Security",
        points: [
            "Entry screening and access control",
            "Guest flow and perimeter support",
            "Visible event presence and coordination",
        ],
    },
    {
        icon: <FaBuilding />,
        title: "Commercial and Industrial Security",
        points: [
            "Office and business premises coverage",
            "Warehouse and yard observation",
            "Shift-based guarding support",
        ],
    },
    {
        icon: <FaCamera />,
        title: "CCTV Monitoring Support",
        points: [
            "Monitoring support and observation discipline",
            "Enhanced perimeter awareness",
            "Useful for layered security environments",
        ],
    },
    {
        icon: <FaDoorOpen />,
        title: "Access Control",
        points: [
            "Visitor entry management",
            "Vehicle and gate control support",
            "Controlled movement through key access points",
        ],
    },
];

export default function ServicesDetailed() {
    return (
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
                <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    whileHover={{ y: -8 }}
                    className="soft-card p-6"
                >
                    <motion.div
                        whileHover={{ rotate: 8, scale: 1.08 }}
                        className="mb-4 inline-flex rounded-xl bg-slate-100 p-4 text-3xl text-[var(--blue)]"
                    >
                        {service.icon}
                    </motion.div>

                    <h3 className="text-2xl font-semibold text-slate-900">
                        {service.title}
                    </h3>

                    <ul className="mt-4 space-y-2">
                        {service.points.map((point) => (
                            <li key={point} className="text-sm leading-7 text-slate-700">
                                • {point}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            ))}
        </div>
    );
}