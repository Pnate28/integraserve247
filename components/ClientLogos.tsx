"use client";

import Image from "next/image";

const logos = [
    "/images/clients/client1.png",
    "/images/clients/client2.png",
    "/images/clients/client3.png",
    "/images/clients/client4.png",
    "/images/clients/client5.png",
];

export default function ClientLogos() {
    return (
        <section className="py-12 bg-white border-y border-slate-200 overflow-hidden">
            <div className="container-main">
                <div className="mb-6 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                        Our Clients
                    </p>
                </div>

                <div className="overflow-hidden">
                    <div className="logo-marquee flex items-center gap-16">
                        {[...logos, ...logos].map((logo, index) => (
                            <div
                                key={`${logo}-${index}`}
                                className="relative flex h-[60px] w-[140px] shrink-0 items-center justify-center opacity-70 transition hover:opacity-100"
                            >
                                <Image
                                    src={logo}
                                    alt={`Client logo ${index + 1}`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}