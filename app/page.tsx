import Hero from "@/components/Hero";
import IconStrip from "@/components/IconStrip";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";

export default function Home() {
    return (
        <>
            <Hero />
            <IconStrip />
            <WhyChooseUs />
            <Testimonials />
            <Stats />
        </>
    );
}