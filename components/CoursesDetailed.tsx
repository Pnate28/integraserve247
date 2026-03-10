"use client";

import { motion } from "framer-motion";
import {
    FaBullseye,
    FaCertificate,
    FaShieldAlt,
    FaUserShield,
} from "react-icons/fa";

const courses = [
    {
        icon: <FaBullseye />,
        title: "Handgun Training",
        details: [
            "Safe handling discipline",
            "Storage awareness and responsibility",
            "Practical introduction to handgun use",
        ],
    },
    {
        icon: <FaShieldAlt />,
        title: "Shotgun Training",
        details: [
            "Handling and safety fundamentals",
            "Practical operating awareness",
            "Controlled training environment approach",
        ],
    },
    {
        icon: <FaBullseye />,
        title: "Rifle Training",
        details: [
            "Rifle safety and handling principles",
            "Confidence through guided instruction",
            "Useful for beginners and refreshers",
        ],
    },
    {
        icon: <FaCertificate />,
        title: "Firearm Competency Preparation",
        details: [
            "Safety-first preparation",
            "Responsible ownership mindset",
            "Better readiness for competency-related learning",
        ],
    },
    {
        icon: <FaUserShield />,
        title: "Security Officer Training",
        details: [
            "Guarding role awareness",
            "Communication and reporting mindset",
            "Professional presentation and conduct",
        ],
    },
    {
        icon: <FaShieldAlt />,
        title: "Self-Defence Awareness",
        details: [
            "Situational awareness principles",
            "Basic personal safety concepts",
            "Confidence and practical readiness",
        ],
    },
];

export default function CoursesDetailed() {
    return (
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {courses.map((course, index) => (
                <motion.div
                    key={course.title}
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
                        {course.icon}
                    </motion.div>

                    <span className="inline-flex rounded-full bg-[var(--blue)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white">
            Course
          </span>

                    <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                        {course.title}
                    </h3>

                    <ul className="mt-4 space-y-2">
                        {course.details.map((detail) => (
                            <li key={detail} className="text-sm leading-7 text-slate-700">
                                • {detail}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            ))}
        </div>
    );
}