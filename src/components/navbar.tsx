import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import pdfLogo from '../assets/pdf-logo.webp';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  window.addEventListener('scroll', () => {
    setScrolled(window.scrollY > 20);
    console.log(scrolled)
  });

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/generate', label: 'Generate' },
    { path: '/api-docs', label: 'API Docs' },
    { path: '/support', label: 'About & Support' },
  ];

  return (
    <nav className="w-full border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <img
            src={pdfLogo}
            alt="PDFree"
            className="h-20 w-auto transition-transform group-hover:scale-[1.02]"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`text-sm font-medium transition-colors ${
                isActive(path)
                  ? 'text-purple-600 font-semibold'
                  : 'text-slate-600 hover:text-purple-600'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/generate"
            className="px-5 py-2.5 bg-purple-600 text-white text-sm font-semibold rounded-full hover:bg-purple-700 transition-all active:scale-95 shadow-md shadow-purple-600/20"
          >
            Start Free
          </Link>
        </div>

        <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden glass mt-4 mx-4 rounded-xl">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm font-medium text-slate-600 hover:text-purple-600"
              >
                {label}
              </Link>
            ))}
            <Link to="/login" className="block text-sm font-medium text-slate-600">
              Log in
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
