import type { NextPage } from "next";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";
import OurProjectsSection from "../components/OurProjectsSection";
import ServicesSection from "../components/ServicesSection";

const Home: NextPage = () => {
    return (
        <main>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <OurProjectsSection hasHeader={true} />
            <ContactSection hasHeader={true} />
        </main>
    );
};

export default Home;
