import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/devalone-removebg-preview.png'

function Navigation() {
    const location = useLocation()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navLinks = [
        { path: '/', label: 'HOME' },
        { path: '/about', label: 'ABOUT US' },
        { path: '/contact', label: 'CONTACT US' }
    ]

    const isActive = (path) => {
        return location.pathname === path
    }

    return (
        <nav className="w-[95%] m-auto mt-[10px] rounded-full lg:rounded-none lg:mt-0 lg:w-full bg-[#2a2a2a] sticky top-0 z-50 shadow-lg">
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

                {/* Mobile Menu Backdrop */}
                {mobileMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300"
                        onClick={() => setMobileMenuOpen(false)}
                    />
                )}

                {/* Mobile Menu Drawer */}
                <div className={`fixed top-0 right-0 h-full w-[280px] bg-[#2a2a2a] z-50 md:hidden transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}>
                    {/* Close Button */}
                    <div className="flex justify-end p-6">
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-white text-2xl hover:text-gray-300 transition-colors"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Menu Links */}
                    <div className="px-6 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block py-4 text-base font-medium tracking-wide transition-all border-b border-gray-700 ${isActive(link.path)
                                    ? 'text-white'
                                    : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Additional Menu Items */}
                    <div className="px-6 mt-8 space-y-4">
                        <button className="flex items-center gap-3 text-gray-300 hover:text-white transition-all">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <span className="text-sm font-medium">Search</span>
                        </button>
                        <div className="flex items-center gap-3 text-gray-300">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                            </svg>
                            <span className="text-sm font-medium">ENG</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
