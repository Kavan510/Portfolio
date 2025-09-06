import { Link, useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom"
function Navbar() {
const navigate = useNavigate();


  return (
    <nav className="sticky top-0 bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Kavan
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-8 font-medium text-gray-700">
          <Link to="/ " className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/projects" className="hover:text-blue-600">Projects</Link>
          <Link to="/#contact" className="hover:text-blue-600">Contact</Link>
        </div>

        {/* CTA Button */}
        <a
          href="/resume.pdf"
          download
          className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Download CV
        </a>
      </div>
    </nav>
  )
}

export default Navbar
