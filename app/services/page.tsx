import React from 'react'
import Image from 'next/image'
import { servicesData } from '@/data/services'

const Services = () => {
  return (
    <section className="w-full bg-[#FDFBF7] py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Top Heading */}
        <div className="max-w-3xl mx-auto text-center mb-20 sm:mb-28">
          <span className="text-xs font-mono tracking-widest uppercase text-[#FFC107] bg-[#FFC107]/10 px-3 py-1 rounded-full font-semibold">
            Capabilities
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-[#1C1C1C] sm:text-5xl mt-4">
            Our Service Offerings
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-xl mx-auto">
            Engineered software solutions tailored to secure operational efficiency and scale your digital landscape.
          </p>
        </div>

        {/* Alternating Services Stack */}
        <div className="space-y-24 sm:space-y-32 md:space-y-40">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Text Block Content */}
                <div className={`lg:col-span-6 flex flex-col justify-center text-center sm:text-left ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}>
                  <h2 className="relative pb-2 inline-block text-2xl font-extrabold text-[#1C1C1C] sm:text-3xl tracking-tight self-center sm:self-start">
                    {service.title}
                    <span className="absolute left-0 bottom-0 h-[3px] w-12 bg-[#FFC107]" />
                  </h2>
                  
                  <p className="mt-3 text-sm font-mono uppercase tracking-wider text-gray-400">
                    {service.tagline}
                  </p>
                  
                  <p className="mt-5 text-sm sm:text-base text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bulleted Core Checklist Frameworks */}
                  <ul className="mt-6 space-y-2.5 text-sm text-gray-600">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 justify-center sm:justify-start">
                        <svg className="h-5 w-5 flex-shrink-0 text-[#FFC107]" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* SVG Render Container */}
                <div className={`lg:col-span-6 flex justify-center ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  <div className="relative w-full max-w-md lg:max-w-none aspect-square p-4 flex items-center justify-center bg-white/40 border border-gray-100 rounded-2xl group hover:border-[#FFC107]/20 transition-all duration-300">
                    <Image
                      src={service.svgPath}
                      alt={`${service.title} illustration graphic`}
                      width={450}
                      height={450}
                      className="w-full h-auto max-h-[400px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                      priority={index === 0}
                    />
                  </div>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Services