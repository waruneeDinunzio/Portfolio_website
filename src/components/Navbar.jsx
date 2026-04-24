function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* <a href="#" className="text-xl font-bold hover:text-blue-600">Warunee Dinunzio</a> */}
        <a
        href="#"
        className="text-xl font-bold hover:text-blue-600"
        onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth" })
        }}
        >
        Warunee Dinunzio Testing
        </a>

        <div className="flex gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
          <a
            href="/Warunee_Dinunzio_QA_Automation_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
          >
          Resume
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
