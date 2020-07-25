import { useRouter } from 'next/router'
import { getProjects, getProjectData } from '../../data/data';
import _ from 'lodash';
import Layout from '../../components/layout';


export default function Project({ projectData }) {
    const router = useRouter();
    const { id } = router.query;

    return (
        <Layout>

            {console.log(projectData)}

            <div>
                <p>{projectData[id].params.id.project_name}</p>
                <p>{projectData[id].params.id.description}</p>
                <p>{projectData[id].params.id.technologies}</p>
                <p>{projectData[id].params.id.live_link}</p>
                <p>{projectData[id].params.id.github_link}</p>
                <p>{projectData[id].params.id.image_urls}</p>

            </div>

        </Layout>


    );
}


export async function getStaticPaths() {
    const getAllProjects = await getProjects()
    const paths = getAllProjects.map((project) => ({
        params: { id: project.params.id.id },
    }))
    return {
        paths,
        fallback: false
    }
}


export async function getStaticProps({ params }) {
    const projectData = await getProjectData(params)
    return {
        props: {
            projectData,
        },
    }
}


