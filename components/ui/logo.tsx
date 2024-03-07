import Link from 'next/link'
import Image from 'next/image'
// import LogoImg from '@/public/images/logo.svg'
import LogoImg from '@/public/images/turgonlogo-transparent.png'

export default function Logo() {
  return (
    <Link className="inline-flex" href="/" aria-label="Cruip">
      <Image className="max-w-none" src={LogoImg} width={250} height={100} priority alt="Stellar" />
    </Link>
  )
}