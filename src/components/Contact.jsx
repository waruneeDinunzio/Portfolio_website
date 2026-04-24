function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Contact
        </h2>

        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          I’m currently growing my skills in QA Automation and would love to
          connect about opportunities, projects, or anything related to testing,
          quality, and tech.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:dinunziow@gmail.com"
            className="bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-700 transition"
          >
            Email Me
          </a>

          <a
            href="https://github.com/waruneeDinunzio"
            target="_blank"
            rel="noreferrer"
            className="border border-gray-900 px-6 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/warunee-dinunzio/"
            target="_blank"
            rel="noreferrer"
            className="border border-gray-900 px-6 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact