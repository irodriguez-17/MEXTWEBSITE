import React from 'react'

const ContactMenu = () => {
  return (
    <div className="min-h-screen bg-[#f9f9f9] flex flex-col items-center pt-28 px-6">
      {/* Hero Section */}
      <div className="text-center max-w-2xl mb-12 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-red mb-3">Let’s Connect 🤝</h1>
        <p className="text-lg md:text-xl text-gray-800">
          Whether you are curious, passionate, or just vibing — reach out. MEXT is more than a club; it is comunidad.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl">
        <ContactCard
          title="Email"
          value="mextsantaclara@gmail.com"
          href="mailto:mextsantaclara@gmail.com"
          icon={(
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-10 h-10 mb-2" viewBox="0 0 24 24">
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
          )}
        />
        <ContactCard
          title="Instagram"
          value="@mext_santaclara"
          href="https://www.instagram.com/mext.santaclara/"
          isRed
          icon={(
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-2" viewBox="0 0 24 24">
              <path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96z" />
            </svg>
          )}
        />
        <ContactCard
          title="LinkedIn"
          value="MEXT at Santa Clara University"
          href="https://www.linkedin.com/company/mext-at-santa-clara-university/"
          isRed
          icon={(
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-2" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          )}
        />
      </div>

      {/* CTA Block */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-semibold mb-2">Want to Get Involved?</h2>
        <p className="text-gray-800 max-w-xl mx-auto mb-4">
          Whether it is helping host events, joining meetings, or just vibing with the community — we would love to have you.
        </p>
        <button
          onClick={() =>
            window.open(
              'https://docs.google.com/forms/d/e/1FAIpQLScF6FI-6M9wdQPMHMmnu4F-dbz5oySySra2AyeBIYnNF7eEyA/viewform?usp=sf_link',
              '_blank'
            )
          }
          className="bg-red text-white px-6 py-2 rounded-full hover:bg-red/80 transition"
        >
          Join MEXT
        </button>
      </div>

      {/* Map Embed */}
      <div className="w-full max-w-5xl mt-20 rounded-2xl overflow-hidden shadow-lg bg-white p-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.744589258393!2d-121.93764168469292!3d37.34964177983959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fccb1c598c153%3A0x9e7cfa7a6e43c64f!2sSanta%20Clara%20University!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
          width="100%"
          height="350"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}

const ContactCard = ({ title, value, href, icon, isRed = false }) => (
  <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
    {icon}
    <span className="font-semibold mb-1">{title}</span>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-sm ${isRed ? 'text-red' : 'text-blue-700'} hover:underline break-words`}
    >
      {value}
    </a>
  </div>
)

export default ContactMenu
