import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="section-pad">
            <div className="container-main">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                        About us
                    </p>
                    <h1 className="mt-2 text-4xl font-bold text-slate-900 md:text-5xl">
                        A company focused on trust, discipline, and visible professionalism
                    </h1>
                    <p className="mt-5 text-base leading-8 text-slate-600">
                        Integraserve 24/7 is built around the idea that good security is not
                        only about presence, but also about conduct, consistency, awareness,
                        and confidence.
                    </p>
                </div>

                <div className="relative mt-10 h-[260px] overflow-hidden rounded-2xl border border-slate-200 md:h-[420px]">
                    <Image
                        src="/images/about/about-banner.jpg"
                        alt="About Integraserve"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="mx-auto mt-10 max-w-4xl space-y-6 text-base leading-8 text-slate-700">
                    <p>
                        Our company supports clients who need reliable guarding, structured
                        site control, event security support, and practical training
                        solutions.
                    </p>
                    <p>
                        We approach each engagement with professionalism, operational
                        seriousness, and respect for client expectations.
                    </p>
                    <p>
                        Whether the requirement is commercial protection, controlled access,
                        residential support, or training development, our goal is to
                        represent the client environment well and contribute to a safer,
                        more controlled space.
                    </p>
                </div>
            </div>
        </main>
    );
}