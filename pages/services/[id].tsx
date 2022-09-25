import { NextPage } from "next";
import BreadCrumbs from "../../components/BreadCrumbs";
import ServiceDetailsSection from "../../components/ServiceDetailsSection";
import data from "../../data.json";

const ServiceDetails: NextPage = ({ service }: any) => {
    return (
        <main>
            <BreadCrumbs title={service.title} />
            <ServiceDetailsSection />
        </main>
    );
};

export async function getStaticProps(context: any) {
    const service = data.services[context.params.id];

    return {
        props: {
            service
        }
    };
}

export async function getStaticPaths() {
    return {
        fallback: true,
        paths: data.services.map((service: never) => ({
            params: {
                id: data.services.indexOf(service).toString()
            }
        }))
    };
}

export default ServiceDetails;
