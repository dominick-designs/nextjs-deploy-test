import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { getProjects } from '../data/data'
import _ from 'lodash';

export default function Home({ allProjectData }) {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>    

      {console.log(allProjectData[0].params.project_name)}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1></h1>
        <p className={utilStyles.lightText}>Selected portfolio highlights to display practical application of my skills as a fullstack JavaScript developer.</p>
      </section>

      <section className={utilStyles.headingMd}>        
        <div className="row row-cols-1 row-cols-md-3">
          {allProjectData.map((id) => (
            <div className="col mb-4" key={id.params.id.id}>
              <div className="card h-100">
                  
                <Link href="/projects/[id]" as={`/projects/${id.params.id.id}`} passHref>                    

                  <img src={id.params.id.image_urls[0]} className="card-img-top" alt="..." />
                  </Link> 
                <div className="card-body">
                  <h5 className="card-title">{id.params.id.project_name}</h5>
                </div>
              </div>
            </div>
            ))}        
          </div>
          
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-secondary">Github</button>        
          <button type="button" className="btn btn-secondary">Blog </button>
          <button type="button" className="btn btn-secondary">About</button>
        </div>      
      </section>

    </Layout>
  )
}


export async function getStaticProps() {
  const allProjectData = getProjects()
  return {
    props: {
allProjectData
    }
  }
}