import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo or Brand Name */}
        <div className="text-white text-2xl font-bold">
          <a href="#home" className="hover:text-primary-400 transition-colors">
            Jagan&apos;s Portfolio
          </a>
        </div>

        {/* Social Links */}
        <ul className="flex space-x-6 items-center">
          <li>
            <a
              href="https://www.linkedin.com/in/jagan-raajan/"
              className="flex items-center text-gray-300 hover:text-primary-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
              <span className="ml-2 hidden sm:inline">jagan-raajan</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/jaganraajan/fav-stocks-dashboard"
              className="flex items-center text-gray-300 hover:text-primary-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
              <span className="ml-2 hidden sm:inline">jaganraajan</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;