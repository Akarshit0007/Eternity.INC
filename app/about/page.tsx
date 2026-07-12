'use client' // Required for useState image fallback handling

import React, { useState } from 'react'
import Image from 'next/image'
import { teamData } from '@/data/team'

const page = () => {
  // Fallback handler for missing images
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="w-full bg-[#FDFBF7] py-16 sm:py-24 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Brand Narrative / Vision Block */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#1C1C1C] sm:text-4xl">
            Who We Are
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            At <span className="font-bold">Eternity<span className="text-[#FFC107]">.INC</span></span>, we are a collective of developers, engineers, and digital architects. We don't just write code; we build resilient digital infrastructures, optimize processing performance, and transform ambitious visions into clean, functional reality.
          </p>
        </div>

        {/* Team Introduction Header */}
        <div className="text-center sm:text-left mb-12">
          <h3 className="text-xl font-bold text-[#1C1C1C] tracking-tight uppercase border-b-2 border-[#FFC107] inline-block pb-1">
            The Crew Behind The Code
          </h3>
          <p className="text-sm text-gray-500 mt-2">Driven by engineering principles, execution, and deep collaboration.</p>
        </div>

        {/* Fluid Responsive Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamData.map((member) => {
            const hasError = imageErrors[member.id];

            return (
              <div
                key={member.id}
                className="group bg-white border border-gray-200/60 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-[#FFC107]/50 active:scale-[0.99] active:border-[#FFC107]/50 transition-all duration-300 flex flex-col items-center text-center sm:items-start sm:text-left cursor-pointer"
              >
                {/* Profile Avatar Wrapper */}
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 mb-5 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                  {hasError ? (
                    // Clean initials fallback if image doesn't exist
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center font-bold text-gray-400 text-xl font-mono">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  ) : (
                    <Image
                      src={member.imagePath}
                      alt={`${member.name} Profile`}
                      fill
                      className="object-cover"
                      sizes="96px"
                      onError={() => handleImageError(member.id)}
                    />
                  )}
                </div>

                {/* Identity Text */}
                <h4 className="relative pb-1 inline-block text-lg font-bold text-[#1C1C1C] transition-colors duration-200 group-hover:text-[#FFC107] after:block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#FFC107] after:transition-all after:duration-300 group-hover:after:w-full">
                  {member.name}
                </h4>

                <span className="text-xs font-mono tracking-wider uppercase text-gray-400 mt-0.5">
                  {member.role}
                </span>

                <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  )
}

export default page