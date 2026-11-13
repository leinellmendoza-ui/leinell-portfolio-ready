import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
  return (
    <nav className="navbar">
      <a href="#home" className="logo">LM<span>.</span></a>
      <ul className={open ? 'nav-links open' : 'nav-links'} style={{ display: open ? 'flex' : '' }}>
        {links.map(link => (
          <li key={link}><a href={`#${link}`} onClick={() => setOpen(false)}>{link.charAt(0).toUpperCase() + link.slice(1)}</a></li>
        ))}
      </ul>
      <button style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer', display: window.innerWidth < 768 ? 'block' : 'none' }} onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}