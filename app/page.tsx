import Hero from "@/components/Hero";
import QuickHighlights from "@/components/QuickHighlights";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ClientLogos from "@/components/ClientLogos";
import Stats from "@/components/Stats";

export default function Home() {
    return (
        <>
            <Hero />
            <QuickHighlights />
            <HowItWorks />
            <WhyChooseUs />
            <Testimonials />
            <ClientLogos />
            <Stats />
        </>
    );
}