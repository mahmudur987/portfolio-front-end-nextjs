
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full  bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-10 mt-20">
      <div className="  px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo / Name */}
        <div className="text-center md:text-left">
          <Link href="/">
            <span className="text-2xl font-bold">Your Name</span>
          </Link>
          <p className="text-sm text-gray-200">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6 text-sm">
          <li>
            <Link href="/about">
              <span className="hover:text-yellow-300 transition-colors">
                About
              </span>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <span className="hover:text-yellow-300 transition-colors">
                Projects
              </span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="hover:text-yellow-300 transition-colors">
                Contact
              </span>
            </Link>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-5">
          <Link href="https://github.com/mahmudur987" target="_blank" rel="noreferrer">
            <span>
              <FaGithub className="w-6 h-6 hover:text-yellow-300 transition-colors" />
            </span>
          </Link>
          <Link href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <span>
              <FaLinkedin className="w-6 h-6 hover:text-yellow-300 transition-colors" />
            </span>
          </Link>
          <Link href="https://www.facebook.com/mahmudur.rahman.98478/" target="_blank" rel="noreferrer">
            <span>
              <FaFacebook className="w-6 h-6 hover:text-yellow-300 transition-colors" />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
