import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/devalone-removebg-preview.png'

function Navigation() {
    const location = useLocation()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navLinks = [
        { path: '/', label: 'HOME' },
        { path: '/about', label: 'ABOUT US' },
        { path: '/trainers', label: 'TRAINERS' },
        { path: '/contact', label: 'CONTACT US' }
    ]

    const isActive = (path) => {
        return location.pathname === path
    }

    return (
        <nav className="bg-[#2a2a2a] sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <img src={logo} alt="Devongnosis Logo" className="h-12 w-auto" />
                        <span className="text-2xl font-bold text-white">Devongnosis</span>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm font-medium tracking-wide transition-all ${isActive(link.path)
                                    ? 'text-white'
                                    : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* Search Icon */}
                        <button className="text-gray-300 hover:text-white transition-all">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>

                        {/* Language Selector */}
                        <div className="text-gray-300 text-sm font-medium">
                            ENG
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-white text-2xl"
                    >
                        {mobileMenuOpen ? '✕' : '☰'}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden pb-4 border-t border-gray-700">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block py-3 text-sm font-medium tracking-wide transition-all ${isActive(link.path)
                                    ? 'text-white'
                                    : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navigation
