import React from 'react'
import Link from 'next/link'
import { noto_serif } from '@/utils/fonts'

const Footer = () => {
  return (
    <footer className="flex justify-center py-6 w-full bg-red">
      <div className="w-11/12 flex flex-col md:flex-row items-center justify-between gap-4 text-white">
        <div className={`flex flex-col items-center md:items-start ${noto_serif.className}`}>
          <Link href="/" className="text-2xl text-white">
            MEXT
          </Link>
          <span className="text-base text-center md:text-left">
            Mexican Students at Santa Clara University
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-base">
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
            aria-label="Join MEXT via Google Form"
          >
            Join
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
