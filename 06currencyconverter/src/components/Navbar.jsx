import { CircleDollarSign, Menu } from 'lucide-react';

function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-blue-950 text-white shadow-md z-1000">
      <div className=" mx-auto px-4 md:px-20 py-4 flex justify-between items-center">
        <h1 className="text-lg md:text-2xl font-semibold tracking-wide">
          <CircleDollarSign className="inline-block mb-1 mr-2" size={30} />
          Money Converter
        </h1>
        <i>
          <Menu size={30} className='md:hidden' />
        </i>
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li>
            <a href="#home" className="hover:text-blue-200 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-200 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-200 transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
