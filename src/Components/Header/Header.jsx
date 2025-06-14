import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className=" text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-light">Interior Design Studio</h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link 
                to="/" 
                className="text-white hover:text-orange-400 transition-colors duration-300"
                activeClassName="text-orange-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className="text-white hover:text-orange-400 transition-colors duration-300"
                activeClassName="text-orange-400"
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="text-white hover:text-orange-400 transition-colors duration-300"
                activeClassName="text-orange-400"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;