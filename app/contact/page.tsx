import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
    return (
        <main className="section-pad">
            <div className="container-main">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                        Contact us
                    </p>
                    <h1 className="mt-2 text-4xl font-bold text-slate-900 md:text-5xl">
                        Speak to us about your security or training needs
                    </h1>
                </div>

                <div className="relative mt-10 h-[260px] overflow-hidden rounded-2xl border border-slate-200 md:h-[420px]">
                    <Image
                        src="/images/contact/contact-banner.jpg"
                        alt="Integraserve office"
                        fill
                        className="object-cover"
                    />
                </div>

                <div
                    id="contact-form"
                    className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]"
                >
                    <div>
                        <div className="space-y-4 text-slate-700">
                            <p>
                                <span className="font-semibold">Phone:</span> 073 559 2399
                            </p>
                            <p>
                                <span className="font-semibold">Email:</span>{" "}
                                natethorffin@gmail.com
                            </p>
                            <p>
                                <span className="font-semibold">Address:</span> R101 Old
                                Warmbath Rd, Harry Gwala Ave, DMP Building, 2nd Floor
                            </p>
                        </div>

                        <div className="soft-card mt-8 overflow-hidden">
                            <iframe
                                title="Integraserve location map"
                                className="h-[320px] w-full"
                                loading="lazy"
                                src="https://maps.google.com/maps?q=R101%20Old%20Warmbath%20Rd%20Harry%20Gwala%20Ave%20DMP%20Building&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            />
                        </div>
                    </div>

                    <ContactForm />
                </div>
            </div>
        </main>
    );
}