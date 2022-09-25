import type { NextPage } from "next";
import AboutSection from "../components/AboutSection";
import BreadCrumbs from "../components/BreadCrumbs";
import OurTeamSection from "../components/OurTeamSection";
import StatsCounterSection from "../components/StatsCounterSection";

const About: NextPage = () => {
    return (
        <main>
            <BreadCrumbs title='About' />
            <AboutSection />
            <StatsCounterSection />
            <OurTeamSection />
        </main>
    );
};

export default About;
