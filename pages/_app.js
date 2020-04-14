import '../styles/index.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AnimatePresence } from 'framer-motion';


export default function MyApp({ Component, pageProps, router }) {
  return (
  <div>
    <Header />
      <Component {...pageProps} key={router.route} />
    <Footer />
  </div>
  )
}