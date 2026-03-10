"use client";

import { useState } from "react";

type FormState = {
    name: string;
    phone: string;
    email: string;
    message: string;
};

export default function ContactForm() {
    const [form, setForm] = useState<FormState>({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    function updateField(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (!res.ok) throw new Error("Failed");

            setStatus("Your message has been sent successfully.");
            setForm({
                name: "",
                phone: "",
                email: "",
                message: "",
            });
        } catch {
            setStatus("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="soft-card p-6 md:p-8">
            <div className="grid gap-5">
                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                        Full Name
                    </label>
                    <input
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={updateField}
                        className="w-full rounded-md border border-slate-300 px-4 py-3 outline-none transition focus:border-[var(--navy)]"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                        Contact Number
                    </label>
                    <input
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={updateField}
                        className="w-full rounded-md border border-slate-300 px-4 py-3 outline-none transition focus:border-[var(--navy)]"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                        Email Address
                    </label>
                    <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={updateField}
                        className="w-full rounded-md border border-slate-300 px-4 py-3 outline-none transition focus:border-[var(--navy)]"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                        Message
                    </label>
                    <textarea
                        name="message"
                        rows={6}
                        required
                        value={form.message}
                        onChange={updateField}
                        className="w-full rounded-md border border-slate-300 px-4 py-3 outline-none transition focus:border-[var(--navy)]"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="rounded-md bg-[var(--navy)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--navy-dark)] disabled:opacity-70"
                >
                    {loading ? "Sending..." : "Send Message"}
                </button>

                {status ? <p className="text-sm text-slate-600">{status}</p> : null}
            </div>
        </form>
    );
}