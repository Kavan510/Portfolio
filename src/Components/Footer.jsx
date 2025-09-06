import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import { CiMail } from "react-icons/ci";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-white mb-6">
          Let’s Connect
        </h2>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a 
            href="https://github.com/Kavan510"
            target="_blank"
            className="flex hover:text-white transition ">
            <FaGithub  className="flex m-1"/>
          </a>
          <a
            href="https://www.linkedin.com/in/kavan-kansodariya-44917a1b7/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition flex"
          >
            <FaLinkedinIn className="flex m-1" />
            
          </a>
          <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=kavankansodariya@gmail.com&su=Let's Connect&body=Hi Kavan,"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white transition"
>
  <CiMail size={25} />
</a>

        </div>

        {/* Branding */}
        <div className="border-t border-gray-700 pt-4">
          <h2 className="text-lg font-semibold text-white">Kavan</h2>
        </div>
      </div>
    </footer>
  )
}

export default Footer
