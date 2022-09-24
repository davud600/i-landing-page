import type { NextPage } from "next";
import Footer from "../components/Footer";
import GetStartedSection from "../components/GetStartedSection";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

const Home: NextPage = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <main>
                <GetStartedSection />
            </main>
            <Footer />
        </>
    );
};

export default Home;
