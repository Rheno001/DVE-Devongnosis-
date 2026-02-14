import React, { useState } from 'react'
import bg4 from '../assets/bg4.jpg'

function ContactUs() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        company: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted:', formData)
        alert('Thank you for your message! We will get back to you soon.')
        // Reset form
        setFormData({
            fullName: '',
            email: '',
            company: '',
            message: ''
        })
    }

    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-[60vh] overflow-hidden">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${bg4})`,
                    }}
                >
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="text-center text-white px-6 max-w-4xl">
                        {/* Main Heading */}
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                            Get in touch with our team
                        </h1>

                        {/* Description Text */}
                        <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                            Connect with our experts to discuss your needs and discover how our platform can support your goals.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-gradient-to-b from-gray-50 to-white py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                            <div className="grid md:grid-cols-2 gap-0">
                                {/* Company Information */}
                                <div className="bg-gray-900 p-12 text-white">
                                    <h2 className="text-3xl font-bold mb-8">Company information</h2>

                                    <div className="space-y-8">
                                        {/* Phone */}
                                        <div className="flex items-start gap-4">
                                            <div className="bg-[#c9a961]/20 p-3 rounded-lg">
                                                <svg className="w-6 h-6 text-[#c9a961]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-semibold text-gray-400 mb-1">Phone</h3>
                                                <p className="text-lg">+234 803 456 7890</p>
                                            </div>
                                        </div>

                                        {/* Address */}
                                        <div className="flex items-start gap-4">
                                            <div className="bg-[#c9a961]/20 p-3 rounded-lg">
                                                <svg className="w-6 h-6 text-[#c9a961]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-semibold text-gray-400 mb-1">Address</h3>
                                                <p className="text-lg">123 Training Center Road,<br />Victoria Island, Lagos, Nigeria</p>
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className="flex items-start gap-4">
                                            <div className="bg-[#c9a961]/20 p-3 rounded-lg">
                                                <svg className="w-6 h-6 text-[#c9a961]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-semibold text-gray-400 mb-1">Email</h3>
                                                <p className="text-lg">info@devongnosis.com</p>
                                            </div>
                                        </div>

                                        {/* Website */}
                                        <div className="flex items-start gap-4">
                                            <div className="bg-[#c9a961]/20 p-3 rounded-lg">
                                                <svg className="w-6 h-6 text-[#c9a961]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-semibold text-gray-400 mb-1">Visit us</h3>
                                                <p className="text-lg">devongnosis.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Form */}
                                <div className="p-12 bg-white">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Personal information</h2>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Full Name */}
                                        <div>
                                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                                                Enter your full name
                                            </label>
                                            <input
                                                type="text"
                                                id="fullName"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                required
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a961] focus:border-transparent transition-all"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                Enter your email address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="demo@email.com"
                                                required
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a961] focus:border-transparent transition-all"
                                            />
                                        </div>

                                        {/* Company Name */}
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                                Company Name
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                placeholder="Acme Inc"
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a961] focus:border-transparent transition-all"
                                            />
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Type here"
                                                rows="4"
                                                required
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a961] focus:border-transparent transition-all resize-none"
                                            ></textarea>
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            className="w-full bg-[#c9a961] hover:bg-[#b89851] text-white px-8 py-4 rounded-lg font-semibold tracking-wide transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2"
                                        >
                                            Submit request
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactUs
