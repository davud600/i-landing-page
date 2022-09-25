import type { NextPage } from "next";
import BreadCrumbs from "../components/BreadCrumbs";
import ContactSection from "../components/ContactSection";

const Contact: NextPage = () => {
    return (
        <main>
            <BreadCrumbs title='Contact' />
            <ContactSection />
        </main>
    );
};

export default Contact;
