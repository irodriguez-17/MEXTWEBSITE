import Link from 'next/link'
import React, { useState } from 'react'
import { noto_serif } from '@/utils/fonts'

const NavBar = () => {
  const [isMobileNavBarOpen, setIsMobileNavBarOpen] = useState(false)

  return (
    <>
      <nav className="z-[10] fixed top-0 flex justify-center w-full bg-red text-white shadow-md">
        <div className="w-11/12 h-16 flex justify-between items-center">
          <Link href="/" className={`${noto_serif.className} text-white text-2xl font-semibold`}>
            MEXT
          </Link>

          {/* Desktop Nav */}
          <div className="space-x-12 hidden md:inline-flex text-lg">
            <Link href="/contact" className="hover:text-white/70">
              Contact
            </Link>
            <Link href="/about" className="hover:text-white/70">
              About
            </Link>
            <Link href="/board" className="hover:text-white/70">
              Executive Board
            </Link>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScF6FI-6M9wdQPMHMmnu4F-dbz5oySySra2AyeBIYnNF7eEyA/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70"
            >
              Join
            </a>
          </div>

          {/* Hamburger Icon */}
          <button
            aria-label="Toggle menu"
            onClick={() => setIsMobileNavBarOpen((prev) => !prev)}
            className="block md:hidden focus:outline-none"
          >
            {isMobileNavBarOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      {isMobileNavBarOpen && (
          <div className="fixed md:hidden bg-black/80 backdrop-blur-md text-white h-screen flex items-center justify-center z-[50] w-screen transition-all duration-300">
          <div className="flex flex-col text-2xl items-center space-y-6">
            <Link href="/contact" className="hover:text-white/70" onClick={() => setIsMobileNavBarOpen(false)}>
              Contact
            </Link>
            <Link href="/about" className="hover:text-white/70" onClick={() => setIsMobileNavBarOpen(false)}>
              About
            </Link>
            <Link href="/board" className="hover:text-white/70" onClick={() => setIsMobileNavBarOpen(false)}>
              Executive Board
            </Link>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScF6FI-6M9wdQPMHMmnu4F-dbz5oySySra2AyeBIYnNF7eEyA/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70"
            >
              Join
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export default NavBar
