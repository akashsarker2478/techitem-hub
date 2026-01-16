// src/components/Navbar.jsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Menu, X } from "lucide-react"; // lucide-react থেকে আইকন (npm install lucide-react)

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // লগইন স্ট্যাটাস চেক করা
  useEffect(() => {
    const loggedIn = Cookies.get("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    Cookies.remove("isLoggedIn");
    setIsLoggedIn(false);
    window.location.href = "/"; // হোমে রিডিরেক্ট
  };

  return (
    <nav className="bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-xl transition">
              <span className="text-blue-700 font-bold text-xl">T</span>
            </div>
            <span className="text-2xl md:text-3xl font-extrabold tracking-tight group-hover:text-blue-200 transition">
              TechItem Hub
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/" className="hover:text-blue-200 transition font-medium">
              Home
            </Link>
            <Link href="/items" className="hover:text-blue-200 transition font-medium">
              Items
            </Link>

            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-white text-indigo-700 hover:bg-gray-100 font-bold px-6 py-2 rounded-full transition transform hover:scale-105 shadow-md"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                className="bg-white text-indigo-700 hover:bg-gray-100 font-bold px-6 py-2 rounded-full transition transform hover:scale-105 shadow-md"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-white/20">
            <Link
              href="/"
              className="block hover:text-blue-200 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/items"
              className="block hover:text-blue-200 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Items
            </Link>

            {isLoggedIn ? (
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="w-full bg-white text-indigo-700 hover:bg-gray-100 font-bold py-3 rounded-full transition"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                className="block w-full bg-white text-indigo-700 hover:bg-gray-100 font-bold py-3 rounded-full text-center transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}