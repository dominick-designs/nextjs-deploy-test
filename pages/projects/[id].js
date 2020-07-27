import { useRouter } from 'next/router'
import { getProjects, getProjectData } from '../../data/data';
import _ from 'lodash';
import Layout from '../../components/layout';
import { Carousel, Alert, Card, Button, ListGroup } from 'react-bootstrap';

export default function Project({ projectData }) {
    const router = useRouter();
    const { id } = router.query;

    const imageUrls = projectData[id].params.id.image_urls;
    const projectName = projectData[id].params.id.project_name;
    const projectDescription = projectData[id].params.id.description;
    const projectTechnologies = projectData[id].params.id.technologies;
    const projectLiveLink = projectData[id].params.id.live_link;
    const projectGitHubLink = projectData[id].params.id.github_link;

    const removeFirstImage = _.filter(imageUrls, (value, index) => {
        return index !== 0;
    });


    return (
        <Layout>
            <Alert variant="light" className="text-center">
                <hr />
                <Alert.Heading> You are viewing the <span className="text-info"> {projectName}</span> project</Alert.Heading>
                <hr />
            </Alert>

            <Carousel>
                {_.map(removeFirstImage, (value, index) => (
                    < Carousel.Item key={index}  >
                        <img
                            className="d-block w-100"
                            src={value}
                            alt={projectName}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
            <div className="row row-cols-1 row-cols-md-3 mt-5">
                < div className="col mb-4">
                    <Card className="h-100">
                        <Card.Header as="h5">Project Name</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {projectName}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                < div className="col mb-4">
                    <Card className="h-100">
                        <Card.Header as="h5">Description</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {projectDescription}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                < div className="col mb-4">
                    <Card className="h-100">
                        <Card.Header as="h5">Technologies</Card.Header>
                        <Card.Body>
                            {_.map(projectTechnologies, (value, index) => (
                                <ul key={index} className="card-text">
                                    <li >{value}</li>
                                </ul>
                            ))}
                        </Card.Body>
                    </Card>
                </div>

                < div className="col mb-4">
                    <Card className="h-100">
                        <Card.Header as="h5">Live</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Click the button below to view this project live.
    </Card.Text>
                            <Button href={projectLiveLink} variant="primary">View Live</Button>
                        </Card.Body>
                    </Card>
                </div>

                < div className="col mb-4">
                    <Card className="h-100">
                        <Card.Header as="h5">Github</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Click the button below to view the Github repository.
    </Card.Text>
                            <Button href={projectGitHubLink} variant="primary">View Github Repo</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </Layout >
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


