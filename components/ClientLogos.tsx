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
        <section className="py-20 bg-white border-y border-slate-200">
            <div className="container-main">

                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-slate-900">
                        Our Clients
                    </h2>

                    <p className="text-slate-500 mt-2">
                        Trusted by businesses and organisations
                    </p>
                </div>

                <div className="overflow-hidden">

                    <div className="logo-marquee flex items-center gap-20">

                        {[...logos, ...logos].map((logo, index) => (
                            <div
                                key={index}
                                className="relative flex h-[70px] w-[150px] items-center justify-center opacity-70 hover:opacity-100 transition"
                            >
                                <Image
                                    src={logo}
                                    alt="client logo"
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