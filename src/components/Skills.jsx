const skills = [
  "Manual Testing",
  "QA Automation",
  "Python",
  "Selenium",
  "Playwright",
  "Git",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
]

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-transparent">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Skills
        </h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills