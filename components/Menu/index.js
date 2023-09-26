import Link from 'next/link'
import styles from '../../styles/Menu.module.css'

export function Menu(){
  return (
    <div className={styles.menu}>
      <Link href="/">Início</Link>
      <Link href="/sobre">Sobre a ONU</Link>
    </div>
  )
}