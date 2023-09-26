import Link from 'next/link'
import styles from '../../styles/Footer.module.css'

export default function Footer(){
  return (
    <footer className={styles.footer}>
      <div>
        <h1>Logo</h1>  
      </div>
      <div>
        <Link href="/">Início</Link>
        <Link href="/sobre">Sobre a ONU</Link>
      </div>
    </footer>
  )
}