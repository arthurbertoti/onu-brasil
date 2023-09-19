import Image from 'next/image'
import Link from 'next/link'

export default function Footer(){
  return (
    <header>
      <div>
        <h1>Logo</h1>  
      </div>
      <div>
        <Link href="/">Início</Link>
        <Link href="/sobre">Sobre a ONU</Link>
      </div>
    </header>
  )
}