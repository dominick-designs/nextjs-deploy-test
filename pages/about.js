import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import _ from 'lodash';

export default function About() {

    return (
        <Layout >
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h1>About </h1>
                <p className={utilStyles.lightText}>Fullstack JavaScript developer with strong foundations in clear, healthy communication, accountability, and character development.</p>
                <p>
                    I have a strong belief in treating others with respect and dignity. I challenge myself every morning to grow and develop to in order to reach my fullest potential. I believe that you will benefit from my sincere approach to communication, software development and transparency regarding every aspect of my perception of the world around me. I have volunteered with and support local technology programs dedicated to increasing diversity in the field. I am co-founder of a small non-profit education institute in West Bengal, India. My background in web development began in 2008. I teach free coding classes locally to adults looking to transition into a career as a full time web developer. Coding without healthy, non-violent communication results in inferior software. Superior software arises in an environment of professionalism, respectable communication, and sincerity.
             </p>
            </section>

        </Layout >
    );
}