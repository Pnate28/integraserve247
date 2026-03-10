"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaPhoneAlt, FaTimes } from "react-icons/fa";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/courses", label: "Courses" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener("scroll", onScroll);
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur"
                    : "bg-white"
            }`}
        >
            <div className="container-main flex items-center justify-between py-4">
                <Link href="/" className="flex items-center gap-3">
                    <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
                        <Image
                            src="/logo.svg"
                            alt="Integraserve 24/7"
                            width={42}
                            height={42}
                            priority
                        />
                    </div>

                    <div className="leading-tight">
                        <div className="text-lg font-bold text-slate-900">
                            Integraserve 24/7
                        </div>
                        <div className="text-xs text-slate-500">
                            Security & Training Solutions
                        </div>
                    </div>
                </Link>

                <nav className="hidden items-center gap-1 md:flex">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-[var(--navy)]"
                        >
                            {link.label}
                        </Link>
                    ))}

                    <Link
                        href="/contact#contact-form"
                        className="ml-2 rounded-full border border-[var(--navy)] px-4 py-2 text-sm font-semibold text-[var(--navy)] transition hover:bg-slate-100"
                    >
                        Enquire
                    </Link>

                    <a
                        href="tel:0735592399"
                        className="ml-2 inline-flex items-center gap-2 rounded-full bg-[var(--navy)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--navy-dark)]"
                    >
                        <FaPhoneAlt className="text-xs" />
                        Call Now
                    </a>
                </nav>

                <button
                    aria-label="Open menu"
                    className="rounded-full border border-slate-200 p-3 text-slate-700 md:hidden"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    {open ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="border-t border-slate-200 bg-white md:hidden"
                    >
                        <div className="container-main flex flex-col py-4">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="rounded-xl px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                                    onClick={() => setOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}

                            <Link
                                href="/contact#contact-form"
                                className="mt-3 rounded-xl border border-[var(--navy)] px-4 py-3 text-center text-sm font-semibold text-[var(--navy)]"
                                onClick={() => setOpen(false)}
                            >
                                Enquire
                            </Link>

                            <a
                                href="tel:0735592399"
                                className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--navy)] px-4 py-3 text-sm font-semibold text-white"
                            >
                                <FaPhoneAlt className="text-xs" />
                                Call 073 559 2399
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}