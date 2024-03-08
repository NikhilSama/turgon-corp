import Image from 'next/image'
import { StaticImageData } from 'next/image'
import Testimonial01 from '@/public/images/headshhot_varma.png'
import Testimonial02 from '@/public/images/headshot_sama.png'
import Testimonial03 from '@/public/images/headshot_dalmia.png'

interface Item {
  img: StaticImageData
  name: string
  role: string
  twitter: string
  quote: string
  edu: string
}

export default function Testimonials02() {

  const items: Item[] = [
    {
      img: Testimonial01,
      name: 'Ankur Varma',
      role: 'Founder CEO',
      twitter: '#0',
      quote: "Ankur Varma is a seasoned executive with a proven track record of scaling businesses and driving growth. Ankur previously served as President at Course Hero, where he scaled the business 10x to a $3.6B valuation in just five years, achieving a 43% CAGR at 20%+ EBITDA. He was the Founder and CEO of Plonked, which was acquired by Fiserv. Ankur spent several years at Microsoft where he was part of the founding team of Xbox. In addition to his leadership roles, he is an active board member, investor, and advisor for various AI startups in Silicon Valley.",
      edu: " Ankur holds a BS and MS in Computer Science and Electrical Engineering from University of California, Berkeley"
    },
    {
      img: Testimonial02,
      name: 'Nikhil Sama',
      role: 'Founder  CTO',
      twitter: '#0',
      quote: "Nikhil Sama is a visionary technologist with extensive experience in AI technology. Nikhil was the Founder and CEO of InstaPaisa, India's first online lending platform, which was acquired by Incred Finance. He served as the General Manager for Ocrolus Inc, NY, where he played a pivotal role in setting up Indian technology and operations. Prior to that, he was a consultant with Bain & Company, serving technology clients in the US. Nikhil brings over a decade of Silicon Valley software development experience with companies like Cisco Systems, Juniper Networks, and Ciena.",
      edu:"Nikhil holds an MBA from Chicago Booth, an MS in Computer Science from the USC and a BTech from Delhi College of Engineering."
    },
    {
      img: Testimonial03,
      name: 'Rudra Dalmia',
      role: 'Founder  COO',
      twitter: '#0',
      quote: "Rudra Dalmia is a distinguished executive with a strong background in operations. Rudra was previously the Managing Partner of Green Frontier Capital, India's first Climate Tech Venture Fund. He previously served as the Executive Director and COO of Paytm Ecommerce Private Limited and was the CEO of SaxoBank India. Rudra is an active board member, investor, and advisor for various tech startups in India, the US, Dubai, and the UK. Rudra is currently, the President of “Khushii”, a private educational NGO with over 45,000 beneficiaries.",
      edu:"Rudra holds an MBA from Cornell University, and a BCOM degree from Shri Ram College of Commerce, Delhi University"
    
    },
  ]

  return (
    <section className="relative">
      {/* Radial gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
        <div className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-1/3 aspect-square">
          <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-50"></div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Content */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">The Founders</h2>
            <p className="text-lg text-slate-400">Experienced Innovators who make bold choices for our clients. It's in our DNA to push our limits and make bold changes.</p>
          </div>
          {/* Grid */}
          <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 max-w-xs mx-auto lg:max-w-none">
            {items.map((item, index) => ( 
              <div key={index} className="relative p-5 before:absolute before:inset-0 before:-z-10 before:border before:border-slate-300 before:bg-slate-700 before:opacity-10 before:rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <Image className="shrink-0" src={item.img} width={200} height={200} alt={item.name} />
                    <div className="grow">
                      <div className="font-bold text-slate-100">{item.name}</div>
                      <div className="text-sm text-purple-500 font-medium">{item.role}</div>
                    </div>
                  </div>
                  <a className="shrink-0 text-slate-500" href="#0" aria-label="Member's Twitter">
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                      <path d="M11.297 13.807 7.424 18H5.276l5.019-5.436L5 6h4.43l3.06 3.836L16.025 6h2.147l-4.688 5.084L19 18h-4.32l-3.383-4.193Zm3.975 2.975h1.19L8.783 7.155H7.507l7.766 9.627Z" />
                    </svg>
                  </a>
                </div>
                <p className="text-sm text-slate-400">{item.quote}</p><br></br>
                <p className="text-sm text-slate-400">{item.edu}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}