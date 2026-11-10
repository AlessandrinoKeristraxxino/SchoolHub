// Navbar.tsx

import { useState } from 'react';
import '../index.css';

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
            <a key={item.path} href={item.path} className="navbar-link">
              {item.name}
            </a>
          ))}
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
      {isOpen && (
        <div className="navbar-menu-mobile">
          {navLinks.map(item => (
            <a 
              key={item.path}
              href={item.path}
              className="navbar-link-mobile"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}