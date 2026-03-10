import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-16 bg-[var(--navy-dark)] text-white">
            <div className="container-main grid gap-10 py-14 md:grid-cols-3">
                <div>
                    <h3 className="text-xl font-semibold">Integraserve 24/7</h3>
                    <p className="mt-4 max-w-md text-sm leading-7 text-slate-200">
                        Professional security services and practical training solutions for
                        clients who need discipline, presence, and dependable support.
                    </p>
                </div>

                <div>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                        Quick Links
                    </h4>
                    <div className="mt-4 flex flex-col gap-3 text-sm">
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/courses">Courses</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/contact">Contact Us</Link>
                    </div>
                </div>

                <div>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                        Contact
                    </h4>
                    <div className="mt-4 space-y-3 text-sm text-slate-200">
                        <p>073 559 2399</p>
                        <p>natethorffin@gmail.com</p>
                        <p>
                            R101 Old Warmbath Rd, Harry Gwala Ave,
                            <br />
                            DMP Building, 2nd Floor
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