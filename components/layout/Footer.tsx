import React from 'react'
import Link from "next/link"
import Image from "next/image"

const Footer = () => {
    return (
        <footer className="w-full border-t border-gray-200 bg-[#FDFBF7] py-12 sm:py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Grid layout with top alignment (items-start) for balanced columns */}
                <div className="grid grid-cols-1 gap-10 text-center items-start sm:text-left sm:grid-cols-2 lg:gap-16">

                    {/* Left Side: Brand Block */}
                    <div className="flex flex-col items-center sm:items-start">
                        <h2 className="text-2xl font-extrabold tracking-tight text-[#1C1C1C] sm:text-3xl">
                            Eternity<span className="text-[#FFC107]">.INC</span>
                        </h2>
                        <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-500">
                            Building lasting digital landscapes.
                        </p>
                    </div>

                    {/* Right Side: Contact Info & Socials */}
                    <div className="flex flex-col items-center sm:items-start">
                        <h3 className="text-lg font-semibold text-[#1C1C1C]">
                            Contact Us
                        </h3>

                        {/* Normalized margins to align perfectly across layouts */}
                        <div className="mt-3 space-y-3 text-sm text-gray-600 w-full flex flex-col items-center sm:items-start">
                            <p className="flex gap-2 items-center justify-center sm:justify-start">
                                <span className="font-medium text-gray-900">Email:</span>
                                <a href="mailto:eternity.INC@gmail.com" className="hover:text-[#FFC107] transition-colors break-all">
                                    eternity.INC@gmail.com
                                </a>
                            </p>
                        </div>

                        {/* Social Links Container - Slightly tucked in for cohesive grouping */}
                        <div className="mt-4 flex items-center gap-4">
                            <Link
                                href="https://www.instagram.com/eternity.inc.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-block focus:outline-none focus:ring-2 focus:ring-[#FFC107] rounded-md"
                                aria-label="Follow Eternity.INC on Instagram"
                            >
                                <Image
                                    src="/svg/instagram.svg" 
                                    alt="Instagram Icon"
                                    width={36}                 
                                    height={36}
                                    className="h-9 w-9 object-contain text-gray-500 transition-all duration-200 group-hover:scale-105 group-hover:text-[#FFC107]"
                                />
                            </Link>
                        </div>
                    </div>

                </div>

                {/* Bottom copyright line section */}
                <div className="mt-12 border-t border-gray-200 pt-8 text-center text-xs text-gray-400 sm:mt-16">
                    <p>&copy; {new Date().getFullYear()} Eternity.INC. All rights reserved.</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer