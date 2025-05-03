import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <>
      <header className="bg-black  p-1.5 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-white">PayMe</Link>

        {/* Desktop Nav */}
        <nav className="hidden text-white md:flex gap-6 items-center font-medium">
          <Link to="/">Home</Link>

          {/* Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1">
              Pages <span>▼</span>
            </button>
            {dropdownOpen && (
              <div className="absolute bg-white mt-2 shadow rounded w-40">
                <Link to="/about" className="block px-4 py-2 hover:bg-gray-100">About</Link>
                <Link to="/blog" className="block px-4 py-2 hover:bg-gray-100">Blog</Link>
              </div>
            )}
          </div>

          <Link to="/features">Features</Link>
          <Link to="/solution">Solution</Link>
          <Link to="/pricing">Pricing</Link>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex  items-center  gap-3">
          <Link to="/signin" className=" bg-white text-gray-800 hover:bg-green-600 transition focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign In</Link>
          <Link
            to="/signup"
            className=" text-gray-800 hover:bg-green-600 transition bg-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2">
          <Link to="/" className="block">Home</Link>
          <details className="block">
            <summary className="cursor-pointer">Pages</summary>
            <div className="pl-4 space-y-1">
              <Link to="/about" className="block">About</Link>
              <Link to="/blog" className="block">Blog</Link>
            </div>
          </details>
          <Link to="/features" className="block">Features</Link>
          <Link to="/solution" className="block">Solution</Link>
          <Link to="/pricing" className="block">Pricing</Link>
          <Link to="/signin" className="block text-sm">Sign In</Link>
          <Link
            to="/signup"
            className="block bg-red-600 text-white px-4 py-2 rounded-full text-sm text-center"
          >
            Sign Up
          </Link>
        </div>
      )}
    </header>
    </>
  );
}

export default Header;


