import React from 'react'
import Image from 'next/image'

const BoardMenu = () => {
  const leadership = [
    {
      name: 'Juan Pablo Fernandez Garza',
      role: 'Club President',
      location: 'León, Guanajuato, Mexico',
      major: 'Electrical and Computer Engineering',
      picture: '/team/juanpablo2025.jpg',
    },
    {
      name: 'Isabella Rodriguez',
      role: 'Vice President & Treasurer',
      location: 'Cd. Juarez, Chihuahua, Mexico',
      major: 'Electrical & Computer Engineering',
      picture: '/team/isarodriguez2025.jpg',
    },
  ]

  const executives = [
    {
      name: 'Maria Fernanda Castaneda Ruiz',
      role: 'Executive Board Member',
      location: 'Guadalajara, Jalisco, Mexico',
      major: 'Biology',
      picture: '/team/mariafernanda2025.jpg',
    },
    {
      name: 'Sebastian Espinoza',
      role: 'Executive Board Member',
      location: 'Morelia, Michoacan, Mexico',
      major: 'Finance',
      picture: '/team/sebastian2025.jpg',
    },
    {
      name: 'Mario Mendias Navarrete',
      role: 'Executive Board Member',
      location: 'Tijuana, Baja California, Mexico',
      major: 'Finance',
      picture: '/team/mario2025.jpg',
    },
  ]

  return (
    <div className="bg-white py-24 min-h-screen w-full flex flex-col items-center">
      <div className="w-11/12 max-w-7xl">
        {/* Board Mission */}
        <div className="bg-[#b30000e6] text-white p-6 rounded-xl mb-16 shadow-md">
          <h2 className="text-3xl font-bold mb-2">Meet the Team Behind the Mission</h2>
          <p className="text-lg">
            We are more than faces, we are a team of passionate students dedicated to shaping a space
            where Mexican identity, ambition, and joy thrive. We plan, represent, and celebrate our
            community, and we are always listening.
          </p>
        </div>

        <h2 className="text-center text-4xl md:text-5xl font-bold text-red mb-16">
          MEXT Executive Board
        </h2>

{/* Leaders */}
<div className="grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 justify-items-center mb-20">
  {leadership.map((member, i) => (
    <BoardCard key={i} member={member} isLead />
  ))}
</div>

{/* Executives */}
<div className="grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
  {executives.map((member, i) => (
    <BoardCard key={i} member={member} />
  ))}
</div>


        {/* Submit Box */}
        <div className="mt-24 bg-gray-100 p-8 rounded-xl text-center shadow-inner">
          <h3 className="text-2xl font-semibold text-red mb-4">Have Ideas for MEXT?</h3>
          <p className="text-gray-700 mb-4">
            We want to hear from you — events, traditions, initiatives, anything. Use the link below
            to tell us what you want to see next.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfE_xHT80ErdqlVAkrn7Zu4c7gHAxcsVQiCLp9ByLfvV0Ccfg/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red text-white font-bold px-6 py-3 rounded-full hover:bg-red/80 transition"
          >
            Submit an Idea
          </a>
        </div>
      </div>
    </div>
  )
}

const BoardCard = ({ member, isLead = false }) => (
  <div className="w-full max-w-xs text-center hover:scale-[1.03] hover:shadow-xl transition-all duration-300">
    <div className="relative w-full h-60 rounded-lg overflow-hidden shadow-md mb-4">
      <Image
        src={member.picture}
        alt={member.name}
        fill
        sizes="25vw"
        className="object-cover"
      />
    </div>
    <h4 className="font-bold text-xl text-black">{member.name}</h4>
    <p className={`text-base ${isLead ? 'text-red' : 'text-gray-700'} mb-1`}>{member.role}</p>
    <p className="text-sm text-gray-500 italic">{member.major}</p>
    <p className="text-sm text-gray-400">{member.location}</p>
  </div>
)

export default BoardMenu
