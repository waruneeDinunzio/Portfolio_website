function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/totoro.jpeg"
            alt="Warunee at Studio Ghibli with Totoro"
            className="rounded-2xl shadow-lg w-full max-w-sm object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About Me
          </h2>

          <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
            <p>
              I began my career managing and owning restaurants, where precision,
              speed, and customer experience were critical. That mindset now
              shapes how I approach software quality.
            </p>

            <p>
              While transitioning into tech, I initially pursued software
              engineering—but through hands-on training and real-world projects,
              I discovered QA, and it clicked. I enjoy being the “defensive team”:
              identifying risks, improving systems, and making sure products truly
              work for users.
            </p>

            <p>
              Today, I’m focused on becoming a strong QA Automation Engineer,
              working with tools like{" "}
              <span className="font-medium text-gray-900">Playwright</span>,{" "}
              <span className="font-medium text-gray-900">Selenium</span>, and{" "}
              <span className="font-medium text-gray-900">Python</span>, supported by my ISTQB certification.
            </p>

            <p>
              I bring a strong attention to detail, an accessibility-first
              mindset, and a commitment to building reliable, high-quality
              software. I'm especially interested in the future of{" "}
              <span className="font-medium text-gray-900">ethical AI in testing</span>—ensuring systems are
              reliable, fair, and trustworthy for everyone.
            </p>

            <p>
              Outside of tech, I’m a runner training for a half marathon, and I
              practice karate with my family. I also enjoy playing chess and
              reading extensively with my kids to support them in overcoming
              dyslexia—an experience that deeply influences my focus on
              accessibility and inclusive design.
            </p>

            <p>
              My goal is to master QA Automation engineering and contribute to
              teams that value quality, collaboration, and continuous learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About