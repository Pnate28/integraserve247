import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="mt-16 bg-[var(--navy-dark)] text-white">
            <div className="container-main grid gap-10 py-14 md:grid-cols-4">
                <div className="md:col-span-1">
                    <h3 className="text-xl font-semibold">Integraserve 24/7</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-200">
                        Professional security services and practical training solutions
                        built on reliability, presentation, and disciplined support.
                    </p>
                </div>

                <div>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                        Links
                    </h4>
                    <div className="mt-4 flex flex-col gap-3 text-sm text-slate-200">
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/courses">Courses</Link>
                        <Link href="/contact">Contact Us</Link>
                    </div>
                </div>

                <div>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                        Services
                    </h4>
                    <div className="mt-4 flex flex-col gap-3 text-sm text-slate-200">
                        <span>Armed Security</span>
                        <span>Unarmed Guarding</span>
                        <span>Event Security</span>
                        <span>Access Control</span>
                        <span>CCTV Monitoring Support</span>
                    </div>
                </div>

                <div>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                        Contact
                    </h4>
                    <div className="mt-4 space-y-4 text-sm text-slate-200">
                        <p className="inline-flex items-start gap-2">
                            <FaPhoneAlt className="mt-1 text-xs" />
                            073 559 2399
                        </p>
                        <p className="inline-flex items-start gap-2">
                            <FaEnvelope className="mt-1 text-xs" />
                            info@integraserve247.co.za
                        </p>
                        <p className="inline-flex items-start gap-2">
                            <FaMapMarkerAlt className="mt-1 text-xs" />
                            <span>
                R101 Old Warmbath Rd, Harry Gwala Ave,
                <br />
                DMP Building, 2nd Floor
              </span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10 py-4 text-center text-xs text-slate-300">
                © {new Date().getFullYear()} Integraserve 24/7. All rights reserved.
            </div>
        </footer>
    );
}