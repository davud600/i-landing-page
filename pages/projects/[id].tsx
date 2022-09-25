import { NextPage } from "next";
import BreadCrumbs from "../../components/BreadCrumbs";
import ProjectDetailsSection from "../../components/ProjectDetailsSection";
import data from "../../data.json";

const ProjectDetails: NextPage = ({ project }: any) => {
    return (
        <main>
            <BreadCrumbs title={project.title} />
            <ProjectDetailsSection />
        </main>
    );
};

export async function getServerSideProps(context: any) {
    const project = data.projects[context.params.id];

    return {
        props: {
            project
        }
    };
}

// export async function getServerSidePaths() {
//     return {
//         fallback: true,
//         paths: data.projects.map((project: never) => ({
//             params: {
//                 id: data.projects.indexOf(project).toString()
//             }
//         }))
//     };
// }

export default ProjectDetails;
