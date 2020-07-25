import Layout from '../components/layout'
import Head from 'next/head'
import Date from '../components/date'
import utilStyles from '../../styles/utils.module.css'
import { getProjects } from '../data/data'



export default function Project({ projects }) {
    return (<p>ok</p>)
}


export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}


export async function getStaticProps({ params }) {
    const projects = await getprojects(params.id)
    return {
        props: {
            projects
        }
    }
}