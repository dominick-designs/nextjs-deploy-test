import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'
import { getProjects } from '../data/data'
import _, { flattenDeep } from 'lodash';


export default function Home({ allPostsData }) {

  const listOfProjects = getProjects();

  const getList = _.get(listOfProjects[0], "technologies");

  
  const flatten = _.flattenDeep(listOfProjects);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>


        {/* <p>{console.log(_.map(listOfProjects, 'image_urls'))}</p> */}

        {/* {console.log(_.get(listOfProjects[0], "image_urls"))} */}
        
        <div className="row row-cols-1 row-cols-md-3">
            {listOfProjects.map(list => (
            <div className="col mb-4">                                
                <div className="card h-100">
              <img src={list.image_urls[0]} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{list.project_name}</h5>                 
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
        <h1>Living Portfolio of Dominick Inglese</h1>
        <p >Selected portfolio highlights to display practical application of my skills as a fullstack JavaScript developer.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <p>  <Link href="/posts/first-post"><a>Go to first post</a>
        </Link></p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}