"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
    { value: 24, suffix: "/7", label: "Operational readiness" },
    { value: 100, suffix: "%", label: "Professional focus" },
    { value: 6, suffix: "+", label: "Key service categories" },
    { value: 6, suffix: "+", label: "Core training offerings" },
];

export default function Stats() {
    return (
        <section className="py-0">
            <div className="container-main">
                <div className="stats-strip rounded-none md:rounded-b-2xl">
                    <div className="grid gap-0 md:grid-cols-2 xl:grid-cols-4">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.45, delay: index * 0.08 }}
                                className="border-b border-white/10 px-6 py-8 text-center text-white md:border-b-0 md:border-r md:border-white/10 last:md:border-r-0"
                            >
                                <div className="text-5xl font-bold">
                                    <CountUp end={stat.value} duration={2.2} enableScrollSpy scrollSpyOnce />
                                    {stat.suffix}
                                </div>
                                <p className="mt-2 text-sm text-slate-200">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}