import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { noto_serif } from '@/utils/fonts'
import { motion } from 'framer-motion'

const MainHeader = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="relative flex items-center justify-center h-[95vh] w-full overflow-hidden">
      {/* Hero Content */}
      {isMounted && (
        <motion.div
          className={`flex flex-col z-[2] items-center text-white text-center px-4 ${noto_serif.className}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1
            className="text-6xl md:text-9xl font-bold drop-shadow-xl"
            style={{ textShadow: '4px 4px 20px rgba(0,0,0,0.7)' }}
          >
            MEXT
          </h1>

          <span
            className="text-lg md:text-3xl font-light"
            style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.7)' }}
          >
            Mexican Students at Santa Clara University
          </span>

          <p
            className="mt-4 text-base md:text-xl italic"
            style={{ textShadow: '1px 1px 5px rgba(0,0,0,0.6)' }}
          >
            Orgullosos de nuestras raíces, unidos por nuestro futuro.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScF6FI-6M9wdQPMHMmnu4F-dbz5oySySra2AyeBIYnNF7eEyA/viewform?usp=sf_link"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:bg-yellow-300 transition-all duration-300"
          >
            Join Now
          </a>
        </motion.div>
      )}

      {/* Background Image */}
      <Image
        className="object-cover z-[-2]"
        src="/santa_clara_bg.jpeg"
        alt="Santa Clara campus with MEXT overlay"
        fill
        sizes="100vw"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-[-1] bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
    </div>
  )
}

export default MainHeader
