import '../styles/globals.css'
import { Footer, Header } from '../components/index.js'
import { Menu } from '../components/Menu'
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <Header />
      <Menu />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
