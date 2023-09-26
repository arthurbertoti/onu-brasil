/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import styles from '../../styles/Header.module.css'

export default function Header(){
  return (
    <header className={styles.header}>
      <div className='container'>
        <img src="/images/logo.png" alt="Logo da ONU" />
      </div>
    </header>
  )
}