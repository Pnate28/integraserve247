import Image from "next/image";
import ServicesDetailed from "@/components/ServicesDetailed";

export default function ServicesPage() {
    return (
        <main className="section-pad">
            <div className="container-main">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                        Services
                    </p>
                    <h1 className="mt-2 text-4xl font-bold text-slate-900 md:text-5xl">
                        Security services designed for real operating environments
                    </h1>
                    <p className="mt-5 text-base leading-8 text-slate-600">
                        Our service offering is structured to support clients who need
                        visible presence, controlled movement, practical observation, and a
                        professional standard of conduct.
                    </p>
                </div>

                <div className="relative mt-10 h-[260px] overflow-hidden rounded-2xl border border-slate-200 md:h-[420px]">
                    <Image
                        src="/images/services/services-banner.jpg"
                        alt="Integraserve services"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="mt-14">
                    <ServicesDetailed />
                </div>
            </div>
        </main>
    );
}