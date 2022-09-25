import type { NextPage } from "next";
import BreadCrumbs from "../../components/BreadCrumbs";
import OurProjectsSection from "../../components/OurProjectsSection";

const Projects: NextPage = () => {
    return (
        <main>
            <BreadCrumbs title='Projects' />
            <OurProjectsSection />
        </main>
    );
};

export default Projects;
