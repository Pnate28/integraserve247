export default function ClientsMarquee() {
    const logos = [
        "/clients/client-1.svg",
        "/clients/client-2.svg",
        "/clients/client-3.svg",
        "/clients/client-4.svg",
    ];

    const all = [...logos, ...logos];

    return (
        <section className="section-pad bg-white">
            <div className="container-main">
                <div className="mb-8 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                        Our clients
                    </p>
                    <h2 className="mt-2 text-3xl font-bold text-slate-900">
                        Trusted by organisations that value reliability
                    </h2>
                </div>

                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 py-8">
                    <div className="clients-track flex items-center gap-16 px-8">
                        {all.map((logo, index) => (
                            <img
                                key={`${logo}-${index}`}
                                src={logo}
                                alt="Client logo"
                                className="h-12 w-auto opacity-75 grayscale transition hover:opacity-100 hover:grayscale-0"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}