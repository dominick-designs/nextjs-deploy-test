import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link';
import { Navbar, Nav } from "react-bootstrap";



const name = 'Dominick Inglese'
export const siteTitle = 'Portfolio of Dominick Designs Web Studio LLC'

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />

                <meta
                    name="Portfolio"
                    content="Portfolio of Dominick Designs Web Studio LLC"
                />
                <meta
                    property="og:image"
                    content={`/images/logo_512x512@2x.png${encodeURI(
                        siteTitle
                    )}`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="https://github.com/dominick-designs/" target="_blank">Github</Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/company/dominick-designs-websites/" target="_blank">Linkedin</Nav.Link>
                        <Nav.Link href="/about" >About</Nav.Link>
                        <Nav.Link href="https://dominickdesigns.space/writings/" target="_blank">Writings</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>


            <header className={styles.header}>
                {home ? (
                    <>
                        <img
                            src="/images/logo_512x512@2x.png"
                            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                            alt={siteTitle}
                        />
                        <h1 className={utilStyles.heading2Xl}>{siteTitle}</h1>
                    </>
                ) : (
                        <>
                            <Link href="/">
                                <a>
                                    <img
                                        src="/images/logo_512x512@2x.png"
                                        className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                                        alt={name}
                                    />
                                </a>
                            </Link>
                            <h2 className={utilStyles.headingLg}>
                                <Link href="/">
                                    <a className={utilStyles.colorInherit}>{siteTitle}</a>
                                </Link>
                            </h2>
                        </>
                    )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}