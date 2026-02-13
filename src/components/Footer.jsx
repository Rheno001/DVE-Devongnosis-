import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/devalone-removebg-preview.png'
import partner1 from '../assets/partners/AAPM.png'
import partner2 from '../assets/partners/Apex.png'
import partner3 from '../assets/partners/galilee.png'
import partner4 from '../assets/partners/Untitled-1.png'
import partner5 from '../assets/partners/Untitled-3.png'
import partner6 from '../assets/partners/Untitled-5.png'
import partner7 from '../assets/partners/Untitled-9.png'
import partner8 from '../assets/partners/Untitled-10.png'


function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-gray-300">
            {/* Main Footer Content */}
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo Section */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <img src={logo} alt="Devongnosis Logo" className="h-16 w-auto" />
                            <span className="text-2xl font-bold text-white">Devongnosis</span>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                            Empowering professionals through innovative training solutions and comprehensive educational programs designed to meet industry standards and drive career excellence.
                        </p>
                    </div>

                    {/* Center-A Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm tracking-wider">CENTER-A</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="hover:text-white transition-colors">About CENTER-A</Link></li>
                            <li><Link to="/trainers" className="hover:text-white transition-colors">Courses and programs</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Services and prices</Link></li>
                            <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Site map</a></li>
                        </ul>
                    </div>

                    {/* Contacts Section */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm tracking-wider">CONTACTS</h3>
                        <div className="space-y-3 text-sm">
                            <p>No. 42, Onitsha Crescent,</p>
                            <p>Area 11, Garki Abuja,</p>
                            <p>FCT, Abuja, Nigeria</p>
                            <div className="mt-4 space-y-1">
                                <p>+234-048-785-39-47</p>
                                <p>+234-097-618-48-03</p>
                                <p className="text-[#c9a961]">info@dve.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div>
                        <div className="bg-gray-700 h-40 rounded flex items-center justify-center text-gray-500">
                            <div className="text-center">
                                <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p className="text-xs">Location Map</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Partner Logos Section */}
            <div className="border-t border-gray-700">
                <div className="container mx-auto px-6 py-6">
                    <div className="flex flex-wrap items-center justify-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
                        <img src={partner1} alt="Partner 1" className="h-12 w-auto object-contain" />
                        <img src={partner2} alt="Partner 2" className="h-12 w-auto object-contain" />
                        <img src={partner3} alt="Partner 3" className="h-12 w-auto object-contain" />
                        <img src={partner4} alt="Partner 4" className="h-12 w-auto object-contain" />
                        <img src={partner5} alt="Partner 5" className="h-12 w-auto object-contain" />
                        <img src={partner6} alt="Partner 6" className="h-12 w-auto object-contain" />
                        <img src={partner7} alt="Partner 7" className="h-12 w-auto object-contain" />
                        <img src={partner8} alt="Partner 8" className="h-12 w-auto object-contain" />
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="border-t border-gray-700">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                        <p>© 2025 Devongnosis. All rights reserved</p>
                        <div className="flex items-center gap-2 mt-2 md:mt-0">
                            <span>CREATED BY</span>
                            <span className="text-[#c9a961] font-semibold">DEVONGNOSIS TEAM</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
