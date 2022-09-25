import type { NextPage } from "next";
import BreadCrumbs from "../../components/BreadCrumbs";
import ServicesSection from "../../components/ServicesSection";

const Services: NextPage = () => {
    return (
        <main>
            <BreadCrumbs title='Services' />
            <ServicesSection />
        </main>
    );
};

export default Services;
