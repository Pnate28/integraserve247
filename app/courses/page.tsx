import Image from "next/image";
import CoursesDetailed from "@/components/CoursesDetailed";

export default function CoursesPage() {
    return (
        <main className="section-pad">
            <div className="container-main">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                        Courses
                    </p>
                    <h1 className="mt-2 text-4xl font-bold text-slate-900 md:text-5xl">
                        Training that prioritises confidence, safety, and practical value
                    </h1>
                    <p className="mt-5 text-base leading-8 text-slate-600">
                        Our courses are presented with a focus on responsible learning,
                        structured guidance, and useful practical understanding.
                    </p>
                </div>

                <div className="relative mt-10 h-[260px] overflow-hidden rounded-2xl border border-slate-200 md:h-[420px]">
                    <Image
                        src="/images/courses/courses-banner.jpg"
                        alt="Integraserve training courses"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="mt-14">
                    <CoursesDetailed />
                </div>
            </div>
        </main>
    );
}