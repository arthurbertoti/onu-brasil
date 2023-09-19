/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

export default function Header(){
  return (
    <header>
      <div className='container'>
        <img src="/images/logo.png" alt="Logo da ONU" />
      </div>
      <div>
        <Link href="/">Início</Link>
        <Link href="/sobre">Sobre a ONU</Link>
      </div>
    </header>
  )
}