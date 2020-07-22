import '../styles/global.css'
// ensure all pages have Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'


export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}