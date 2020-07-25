import React, { Component } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import { getProjects, getProjectData } from '../../data/data';
import _ from 'lodash';
import Layout from '../../components/layout';


export default function Project({ projectData }) {
    const router = useRouter();
    const { id } = router.query;

    { console.log(id) }
    return (
        <Layout>
            <div>                
                <p>{projectData[`${id}`].params.id.project_name}</p>

            </div>

        </Layout>


    );
}


export async function getStaticPaths() {
    const paths = getProjects()
    return {
        paths: [
            { params: { id: '1' } },
            { params: { id: "project_name" } },
            { params: { id: "description" } },
            { params: { id: "technologies" } },
            { params: { id: "live_link" } },
        ],
        fallback: false
    }
}


export async function getStaticProps({ params }) {
    const projectData = await getProjectData(params)
    return {
        props: {
            projectData
        }
    }
}


