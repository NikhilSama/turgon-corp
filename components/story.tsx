import Image from 'next/image'
import Team from '@/public/images/turgonteam.webp'

export default function Story() {
  return (
    <section className="relative">

      {/* Blurred shape */}
      <div className="absolute top-0 -mt-32 left-1/2 -translate-x-1/2 ml-10 blur-2xl opacity-70 pointer-events-none -z-10" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
          <defs>
            <linearGradient id="bs4-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
              <stop offset="0%" stopColor="#A855F7"></stop>
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
          <path fill="url(#bs4-a)" fillRule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)"></path>
        </svg>
      </div>

      <div className="px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="pb-12 md:pb-20">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">Our story (so far)</h2>
            </div>

            <div className="md:flex justify-between space-x-6 md:space-x-8 lg:space-x-14">
              <figure className="min-w-[240px]">
                <Image className="sticky top-8 mx-auto mb-12 md:mb-0 rounded-lg -rotate-[4deg]" src={Team} width={420} height={280} alt="Team" />
              </figure>
              <div className="max-w-[548px] mx-auto">
                <div className="text-slate-400 space-y-6">
                  <p>
                    Our journey at Turgon AI began when three like-minded technology enthusiasts, Ankur, Nikhil, and Rudra, crossed paths at a technology conference.  Each of us brought a unique set of skills to the table - Ankur with his proven product leadership abilties, and ability to launch and scale startups, Nikhil with his deep understanding of artificial intelligence and prowess in software development, Nikhil with his prowess in software development, and Rudra with a HR, Operations and General Management abilities. It was during a panel discussion on the future of AI in business that we realized our shared vision for the untapped potential of generative AI in enterprise solutions.
                  </p>

                  <p>
                  Inspired by Turgon, a character from Lord of the Rings known for his wisdom and the elves' magical abilities to aid the hobbits, we founded Turgon AI. Our mission was clear: to develop custom, tailor-made generative AI applications that could empower enterprises in a way akin to the magical assistance provided by the elves. We aimed to create AI solutions that seamlessly integrate into an enterprise's unique ecosystem, enhancing productivity, innovation, and decision-making processes.
                  </p>
                  <p>
                   At Turgon AI, we pride ourselves on our client-centric approach. By closely collaborating with our clients, we ensure that our AI solutions address their specific challenges and objectives. Our bespoke applications have consistently delivered tangible improvements in efficiency and cost savings, making a significant impact on our clients' bottom lines. As we continue to grow, our commitment remains unwavering: to transform the way enterprises leverage technology for competitive advantage, with a touch of magic inspired by the elves of Middle-earth.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}