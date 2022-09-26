import { NextPage } from "next";
import BreadCrumbs from "../../components/BreadCrumbs";
import ProjectDetailsSection from "../../components/ProjectDetailsSection";
import data from "../../data.json";

const ProjectDetails: NextPage = ({ project = null }: any) => {
    return (
        <main>
            <BreadCrumbs title={project?.title} />
            <ProjectDetailsSection project={project} />
        </main>
    );
};

export async function getStaticProps(context: any) {
    const project = data.projects[context.params.id];

    return {
        props: {
            project
        }
    };
}

export async function getStaticPaths() {
    return {
        fallback: true,
        paths: data.projects.map((project: any) => ({
            params: {
                id: data.projects.indexOf(project).toString()
            }
        }))
    };
}

export default ProjectDetails;
