// Navbar.tsx

import { useState } from 'react';
import { NavLink } from 'react-router';

interface NavLinkType {
  name: string,
  path: string,
};

const navLinks: NavLinkType[] = [
  { name: 'Home', path: '/' },
  { name: 'Lezioni', path: '/lessons' },
  { name: 'Account', path: '/account' },
  { name: 'Aggiungi Materiale', path: '/add' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          ClassHub
        </div>

        <div className="navbar-links">
          {navLinks.map(item => (
            <NavLink key={item.path} to={item.path} className="navbar-link">
              {item.name}
            </NavLink>
          ))}
        </div>

        <button
          className="navbar-toggle"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
      {isOpen && (
        <div className="navbar-menu-mobile">
          {navLinks.map(item => (
            <NavLink 
              key={item.path}
              to={item.path}
              className="navbar-link-mobile"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}