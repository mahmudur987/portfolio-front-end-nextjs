import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full  bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-10 mt-20">
      <div className="  px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo / Name */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">Your Name</h2>
          <p className="text-sm text-gray-200">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6 text-sm">
          <li>
            <a
              href="#about"
              className="hover:text-yellow-300 transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-yellow-300 transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-yellow-300 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-5">
          <a
            href="https://github.com/mahmudur987"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="w-6 h-6 hover:text-yellow-300 transition-colors" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin className="w-6 h-6 hover:text-yellow-300 transition-colors" />
          </a>
          <a
            href="https://www.facebook.com/mahmudur.rahman.98478/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className="w-6 h-6 hover:text-yellow-300 transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
}
