const projects = [
  {
    title: "QA Automation Projects",
    description:
      "A collection of automation testing projects using Python, Selenium, Playwright, and pytest. These projects focus on building reliable test frameworks, improving coverage, and validating real-world user flows.",
    highlights: [
      "Automated UI testing with Selenium & Playwright",
      "Structured tests using Page Object Model (POM)",
      "Focused on reliability, readability, and scalability",
    ],
    tech: ["Python", "Selenium", "Playwright", "pytest"],
    github: "#",
    video: "#",
    type: "main",
  },

  {
  title: "JavaScript Projects",
  description:
    "Interactive browser-based projects built with JavaScript, focusing on DOM manipulation, user interaction, and UI behavior.",
  items: [
    {
      name: "Rock Paper Scissors",
      github: "https://github.com/waruneeDinunzio/The_Game",
      live: "https://waruneedinunzio.github.io/The_Game/",
    },
    {
      name: "Phrase Hunter",
      github: "https://github.com/waruneeDinunzio/Phrase_Hunter",
      live: "https://waruneedinunzio.github.io/Phrase_Hunter/",
    },
    {
      name: "Interactive Form",
      github: "https://github.com/waruneeDinunzio/Interactive_form",
      live: "https://waruneedinunzio.github.io/Interactive_form/",
    },
    {
      name: "Public API Requests",
      github: "https://github.com/waruneeDinunzio/Public_API_Request/tree/master",
      live: "https://waruneedinunzio.github.io/Public_API_Request/",
    },
  ],
  tech: ["JavaScript", "HTML5", "CSS3"],
  type: "support",
},

  {
    title: "Python Practice Projects (100 Days of Code)",
    description:
      "A series of small Python projects focused on building problem-solving skills, logic, and programming fundamentals as part of an intensive coding bootcamp.",
    highlights: [
      "Completed 24+ hands-on Python projects",
      "Strengthened core programming logic",
      "Built foundation for automation and scripting",
    ],
    tech: ["Python"],
    github: "#",
    video: "#",
    type: "support",
  },
]

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Projects
        </h2>

        <p className="text-lg text-gray-600 mb-10 max-w-3xl">
          Focused on QA Automation, testing, and building strong technical foundations.
        </p>

        <div className="grid gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`rounded-2xl p-6 md:p-8 border shadow-sm ${
                project.type === "main"
                  ? "bg-blue-50 border-blue-200"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-5 leading-relaxed">
                {project.description}
              </p>

              {project.items ? (
  <div className="space-y-4 mb-5">
    {project.items.map((item) => (
      <div
        key={item.name}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-white border border-gray-200 rounded-lg px-4 py-3"
      >
        <span className="text-gray-800 font-medium">{item.name}</span>

        <div className="flex gap-3">
          <a
            href={item.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm px-3 py-1 bg-gray-900 text-white rounded-md"
          >
            GitHub
          </a>

          <a
            href={item.live}
            target="_blank"
            rel="noreferrer"
            className="text-sm px-3 py-1 border border-gray-900 rounded-md"
          >
            Live
          </a>
        </div>
      </div>
    ))}
  </div>
) : (
  <ul className="space-y-2 mb-5 text-gray-700">
    {project.highlights.map((highlight) => (
      <li key={highlight}>• {highlight}</li>
    ))}
  </ul>
)}

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1 bg-white border border-gray-200 rounded-full text-gray-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 flex-wrap">
  {/* Only show main GitHub button if it's NOT item-based project */}
  {!project.items && project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noreferrer"
      className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
    >
      GitHub
    </a>
  )}

  {project.video && (
    <a
      href={project.video}
      target="_blank"
      rel="noreferrer"
      className="border border-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
    >
      Demo Video
    </a>
  )}

  {/* Only show Live button if it's NOT item-based */}
  {!project.items && project.live && (
    <a
      href={project.live}
      target="_blank"
      rel="noreferrer"
      className="border border-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
    >
      Live Demo
    </a>
  )}
</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects