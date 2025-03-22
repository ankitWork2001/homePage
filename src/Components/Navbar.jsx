import React from 'react';
import logo from '../assets/Logo.png';
const Navbar = () => {
  return (
    <nav className="bg-yellow-50 p-4 flex justify-evenly items-center">
      <div className='flex justify-between items-center'>

      <div className="flex items-center mr-8">
        <img src={logo} alt="Mending Mind Logo" className="h-15" />
        
      </div>
      <ul className="flex space-x-8">
        <li><a href="#home" className="hover:text-blue-500">HOME</a></li>
        <li><a href="#about" className="hover:text-blue-500">ABOUT</a></li>
        <li><a href="#services" className="hover:text-blue-500">OUR SERVICES</a></li>
        <li><a href="#corporate" className="hover:text-blue-500">CORPORATE</a></li>
        <li><a href="#merch" className="hover:text-blue-500">MENDING MERCH</a></li>
        <li><a href="#resources" className="hover:text-blue-500">RESOURCES</a></li>
      </ul>
      </div>
      <button className="bg-yellow-400 px-4 py-2 rounded-lg hover:bg-yellow-500">LET'S TALK</button>
    </nav>
  );
}

export default Navbar;