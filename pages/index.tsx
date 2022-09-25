import type { NextPage } from "next";
import FeaturesSection from "../components/FeaturesSection";
import GetStartedSection from "../components/GetStartedSection";
import HeroSection from "../components/HeroSection";
import OurProjectsSection from "../components/OurProjectsSection";
import ServicesSection from "../components/ServicesSection";

const Home: NextPage = () => {
    return (
        <main>
            <HeroSection />
            <GetStartedSection />
            <ServicesSection />
            <FeaturesSection />
            <OurProjectsSection hasHeader={true} />
        </main>
    );
};

export default Home;
