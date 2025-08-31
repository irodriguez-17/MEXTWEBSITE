import React from 'react'
import Image from 'next/image'

const ProgramsSection = () => {
  return (
    <div className="bg-black text-white flex items-center justify-center">
      <div className="w-11/12 my-20 flex flex-col items-start max-w-7xl">
        <h3 className="text-2xl md:text-4xl font-semibold mb-8">
          Current Programs
        </h3>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full">
          {/* Tesla Field Trip */}
          <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] hover:shadow-xl transition duration-300">
            <Image
              src="/team/Tesla.png"
              alt="Tesla Field Trip Flyer"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>

          {/* Mass in Spanish */}
          <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] hover:shadow-xl transition duration-300">
            <Image
              src="/team/Mass.png"
              alt="Mass in Spanish Flyer"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          {/* Drop-In Tutoring */}
          <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] hover:shadow-xl transition duration-300">
            <Image
              src="/team/Tutoring.png"
              alt="Spanish Tutoring Flyer"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgramsSection
