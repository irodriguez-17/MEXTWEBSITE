import React from 'react'
import Head from 'next/head'
import NavBar from './NavBar'
import MainHeader from './MainHeader'
import MissionSection from './MissionSection'
import ProgramsSection from './ProgramsSection'
import Footer from './Footer'

const MainMenu = () => {
  return (
    <>
      <Head>
        <title>MEXT at Santa Clara University</title>
        <meta
          name="description"
          content="Mexican international students at SCU – celebrating culture, building comunidad."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen bg-white">
        {/* Navigation Bar */}
        <NavBar />

        {/* Hero Section */}
        <main className="flex-grow">
          <section className="relative z-0">
            <MainHeader />
          </section>

          {/* Mission Statement */}
          <section className="bg-white relative z-10">
            <MissionSection />
          </section>

          {/* Current Programs */}
          <section className="bg-black text-white relative z-10">
            <ProgramsSection />
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}

export default MainMenu
