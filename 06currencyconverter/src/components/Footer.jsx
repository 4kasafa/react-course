
import {Atom} from 'lucide-react';

function Footer() {
  return (
    <footer className="w-full mt-auto py-1 backdrop-blur-md text-white text-center shadow-inner">
        <p className="text-xs md:text-base ">
          © {new Date().getFullYear()} Money Converter — Built with <Atom className="inline-block mb-1" size={14}/> by Syabdll
        </p>
    </footer>
  );
}

export default Footer;
