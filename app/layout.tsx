import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
    title: "Integraserve 24/7",
    description:
        "Professional security services, training courses, and protection solutions for residential, commercial, and event environments.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
        </body>
        </html>
    );
}