import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative w-full bg-[#FDFBF7] pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Subtle Background Glow Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[400px] h-[400px] rounded-full bg-[#FFC107]/5 blur-3xl pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Responsively Scaled Layout Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Left Block: High-Impact Typography & Action CTA Elements */}
          <div className="text-center sm:text-left lg:col-span-7 flex flex-col items-center sm:items-start">
            
            {/* Minimalist Pill Accent Notification */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFC107]/10 px-3 py-1 text-xs font-semibold text-gray-900 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-[#FFC107]" />
              Next-Gen Digital Landscapes
            </div>

            {/* Main Catchy Value Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-[#1C1C1C] sm:text-5xl md:text-6xl max-w-2xl leading-[1.1]">
              Architecting Digital Products For <span className="relative inline-block text-[#FFC107]">Eternity.</span>
            </h1>

            {/* Supportive descriptive copy */}
            <p className="mt-6 max-w-xl text-base text-gray-600 sm:text-lg leading-relaxed">
              We engineer scalable software environments, striking visual systems, and performance-first web ecosystems tailored to position your brand at the absolute forefront of your industry.
            </p>

            {/* Dual CTA Button Row Layout */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link 
                href="/services" 
                className="w-full sm:w-auto text-center bg-[#1C1C1C] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#FFC107] hover:text-gray-900 active:scale-[0.98] transition-all duration-200 shadow-sm"
              >
                Explore Services
              </Link>
              {/* <Link 
                href="/contact" 
                className="w-full sm:w-auto text-center border-2 border-gray-200 bg-white/50 backdrop-blur-sm text-gray-900 px-8 py-4 rounded-xl font-medium hover:bg-gray-50 hover:border-gray-300 active:scale-[0.98] transition-all duration-200"
              >
                Get In Touch
              </Link> */}
            </div>

          </div>

          {/* Right Block: Minimal Visual Interactive Showcase Box */}
          <div className="lg:col-span-5 flex justify-center items-center w-full">
            <div className="relative w-full max-w-md lg:max-w-none aspect-square bg-white border border-gray-200/80 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-6 flex flex-col justify-between overflow-hidden group hover:border-[#FFC107]/40 transition-colors duration-300">
              
              {/* Inner Decorative Dot Mesh Matrix */}
              <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

              {/* Minimal Card Header Mockup */}
              <div className="flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <span className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>
                <div className="text-[10px] uppercase font-mono tracking-widest text-gray-400 bg-gray-50 px-2 py-0.5 rounded border border-gray-100">
                  Performance.Engine
                </div>
              </div>

              {/* Central Premium Graphic Accent */}
              <div className="my-auto flex flex-col items-center justify-center z-10 py-8">
                <div className="w-20 h-20 rounded-2xl bg-[#1C1C1C] flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:rotate-6">
                  {/* Your Main brand color block design geometry */}
                  <div className="w-8 h-8 rounded-full border-4 border-[#FFC107] animate-pulse" />
                </div>
                <div className="mt-6 text-center">
                  <span className="text-2xl font-bold text-gray-900 tracking-tight">99.8% Efficiency</span>
                  <p className="text-xs text-gray-400 mt-1">Automated infrastructure scaling matrix</p>
                </div>
              </div>

              {/* Abstract Bottom Metric Bar Grid */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-100 z-10 text-center text-xs font-mono text-gray-500">
                <div>SSR: Active</div>
                <div className="text-[#FFC107] font-bold">TTFB: 12ms</div>
                <div>SEO: 100/100</div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero