import Link from 'next/link'

export function Menu(){
  return (
    <div>
      <Link href="/">Início</Link>
      <Link href="/sobre">Sobre a ONU</Link>
    </div>
  )
}