import { Link } from "react-router-dom"
import { useState } from "react"
import { Menu, X } from "lucide-react"  // icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Kavan.K
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8 font-medium text-gray-700">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/projects" className="hover:text-blue-600">Projects</Link>
        </div>

        {/* CTA Button (always visible) */}
        <a
          href="https://drive.google.com/file/d/1gp0jNHw7R9iBZShu-8-LLK3zcGhcFbGN/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Download CV
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 pb-4 space-y-4 font-medium text-gray-700">
          <Link to="/" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/projects" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>Projects</Link>
          <a
            href="https://drive.google.com/file/d/1gp0jNHw7R9iBZShu-8-LLK3zcGhcFbGN/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-blue-600 text-white text-center px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
