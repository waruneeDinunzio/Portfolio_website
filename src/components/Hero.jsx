function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold mb-4">
          QA Automation Engineer | Python • Playwright • Selenium
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Hi, I&apos;m Warunee
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
          Former restaurant owner turned QA Automation Engineer, passionate about
          quality, accessibility, and ethical AI. I build thoughtful, reliable
          testing solutions that help teams ship with confidence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-700 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-gray-900 px-6 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero