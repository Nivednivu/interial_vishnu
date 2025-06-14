import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" text-white py-2">
      <div className="container mx-auto px-2 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-light">Interior Design Studio</h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `text-white hover:text-orange-400 transition-colors duration-300 ${
                    isActive ? 'text-orange-400' : ''
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/services" 
                className={({ isActive }) => 
                  `text-white hover:text-orange-400 transition-colors duration-300 ${
                    isActive ? 'text-orange-400' : ''
                  }`
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `text-white hover:text-orange-400 transition-colors duration-300 ${
                    isActive ? 'text-orange-400' : ''
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/admin" 
                className={({ isActive }) => 
                  `text-white hover:text-orange-400 transition-colors duration-300 ${
                    isActive ? 'text-orange-400' : ''
                  }`
                }
              >
                Admin
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-700`}>
        <ul className="flex flex-col py-4 px-4 space-y-4">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `block py-2 text-white hover:text-orange-400 transition-colors duration-300 ${
                  isActive ? 'text-orange-400' : ''
                }`
              }
              onClick={toggleMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                `block py-2 text-white hover:text-orange-400 transition-colors duration-300 ${
                  isActive ? 'text-orange-400' : ''
                }`
              }
              onClick={toggleMenu}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `block py-2 text-white hover:text-orange-400 transition-colors duration-300 ${
                  isActive ? 'text-orange-400' : ''
                }`
              }
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/admin" 
              className={({ isActive }) => 
                `block py-2 text-white hover:text-orange-400 transition-colors duration-300 ${
                  isActive ? 'text-orange-400' : ''
                }`
              }
              onClick={toggleMenu}
            >
              Admin
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;