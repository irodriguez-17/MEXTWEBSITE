import React from 'react'
import Image from 'next/image'
import Footer from '@/components/Footer'

const AboutMenu = () => {
  const collageImages = [
    '/team/event2 (2).jpg',
    '/team/event2 (3).jpg',
    '/team/event2 (4).jpg',
    '/team/event2 (6).jpg',
    '/team/event2 (7).jpg',
    '/team/event2 (8).jpg',
    '/team/event2 (9).jpg',
    '/team/event2 (10).jpg',
    '/team/event2 (11).jpg',
    '/team/event2 (13).jpg',
    '/team/event2 (14).jpg',
    '/team/event2 (5).jpg',
  ]

  return (
    <div>
      {/* Main Content */}
      <div className='relative z-[3] text-white/90 flex justify-center px-4'>
        <div className='w-full lg:w-3/4 my-24 flex flex-col text-left'>

          {/* SECTION */}
          <Section title="About Us – Sobre Nosotros">
            <p>
              We connect Mexican international students and the University community. Through cultural events, education, and social gatherings, MEXT promotes Mexico’s traditions, history, and current issues while representing our members’ interests.
            </p>
            <p className='mt-4'>
              Conectamos a estudiantes mexicanos internacionales con la comunidad universitaria. A través de eventos culturales, educación y reuniones sociales, promovemos la historia y el espíritu de México.
            </p>
          </Section>

          <Section title="Celebrating Culture – Celebrando Nuestra Cultura">
            <p>
              MEXT celebrates Mexico’s culture through festivals, holiday events, and social gatherings. We create a space for students to connect, share their heritage, and build a strong community.
            </p>
            <p className='mt-4'>
              Celebramos la cultura de México con eventos sociales donde los estudiantes se conectan y comparten sus raíces.
            </p>
          </Section>

          <Section title="Administrative Assistance – Asistencia Administrativa">
            <p>
              MEXT helps students with important processes like voter registration, scholarships, and paperwork. Our goal is to make studying abroad easier and less stressful.
            </p>
            <p className='mt-4'>
              Apoyamos con becas, trámites y procesos electorales para que estudiar fuera sea más fácil.
            </p>
          </Section>

          <Section title="Networking & Professional Growth – Crecimiento Profesional">
            <p>
              MEXT connects members with Tesla, Latinos in Silicon Valley, and the Consulado Mexicano for career and networking opportunities.
            </p>
            <p className='mt-4'>
              Ofrecemos visitas a empresas, conexiones profesionales y apoyo en el crecimiento académico.
            </p>
          </Section>

          {/* COLLAGE SECTION */}
          <h3 className='text-2xl md:text-3xl font-semibold mb-4 mt-16'>
            What MEXT has been up to:
          </h3>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mb-20'>
            {collageImages.map((src, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <Image
                  src={src}
                  alt={`Event photo ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <Footer />
        </div>
      </div>

      {/* BACKGROUND LAYERS */}
      <div className="fixed inset-0 z-[-1]">
        <Image
          src="/santa_clara_bg.jpeg"
          alt="Background Image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-2xl" />
      </div>
    </div>
  )
}

const Section = ({ title, children }) => (
  <div className='mb-16'>
    <h3 className='text-xl md:text-2xl font-bold text-white border-l-4 border-red-400 pl-4 mb-4'>
      {title}
    </h3>
    <div className='text-base md:text-lg leading-relaxed space-y-2 text-white/80'>
      {children}
    </div>
  </div>
)

export default AboutMenu
