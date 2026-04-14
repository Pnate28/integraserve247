"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="pt-8 md:pt-10">
            <div className="container-main">
                <div className="hero-shell">
                    <div className="grid min-h-[560px] items-stretch md:grid-cols-[1.05fr_0.95fr]">
                        <div className="flex items-center bg-[linear-gradient(135deg,#12345b,#0d2747)] px-8 py-14 text-white md:px-12">
                            <div className="max-w-xl">
                                <motion.p
                                    initial={{ opacity: 0, y: 18 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.45 }}
                                    className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-200"
                                >
                                    Professional security solutions
                                </motion.p>

                                <motion.h1
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-4xl font-bold leading-tight md:text-6xl"
                                >
                                    Reliable guarding, practical training, and visible protection for real environments
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.15, duration: 0.6 }}
                                    className="mt-6 max-w-lg text-base leading-7 text-slate-200 md:text-lg"
                                >
                                    Integraserve 24/7 supports businesses, residential sites, events,
                                    and individuals with disciplined security personnel and structured
                                    training services.
                                </motion.p>

                                <div className="mt-8 flex flex-wrap gap-4">
                                    <Link
                                        href="/services"
                                        className="rounded-md bg-[#1f6ea9] px-6 py-3 font-semibold text-white transition hover:bg-[#215f8d]"
                                    >
                                        Explore Services
                                    </Link>

                                    <Link
                                        href="/courses"
                                        className="rounded-md border border-white px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                                    >
                                        View Courses
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="relative min-h-[320px]">
                            <Image
                                src="/images/home/hero-home.jpg"
                                alt="Integraserve security team"
                                fill
                                priority
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}