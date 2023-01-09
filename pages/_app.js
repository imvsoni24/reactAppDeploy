import Navbar from '../component/Navbar'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return  (<>
  <Navbar/>
  <Component {...pageProps} />
  </> )
}
