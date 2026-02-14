import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import teamImage from '../assets/IMG_7218.JPG.jpeg'

function AboutUs() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const teamMembers = [
        { name: 'Jane Cooper', role: 'Marketing Coordinator' },
        { name: 'Darlene Robertson', role: 'Training Specialist' },
        { name: 'Darrell Steward', role: 'Senior Instructor' },
        { name: 'Jenny Wilson', role: 'Program Director' },
        { name: 'Robert Fox', role: 'Lead Consultant' },
        { name: 'Kristin Watson', role: 'Education Manager' }
    ]

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % teamMembers.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section - Crafting Excellence Together */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Text Content */}
                        <div>
                            <p className="text-sm mb-2">
                                <Link to="/" className="text-gray-500 hover:text-gray-700 transition-colors">Home</Link>
                                <span className="text-gray-400 mx-2">/</span>
                                <span className="text-[#c9a961] font-semibold">About</span>
                            </p>
                            <h1 className="text-5xl font-bold text-gray-900 mb-6">
                                Crafting Excellence Together
                            </h1>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                At DVE we believe in the power of collaboration to achieve outstanding results. With a team of skilled professionals and a commitment to excellence, we work hand in hand with our clients to bring their ideas to life. Together, we create spaces and solutions that stand the test of time.
                            </p>

                            {/* Decorative Badge */}
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg">
                                <div className="w-12 h-12 bg-[#c9a961] rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Right: Image */}
                        <div className="relative">
                            <img
                                src={teamImage}
                                alt="DVE Team"
                                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Statement */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        At DVE we are committed to revolutionizing the training and education industry with innovative, sustainable, and cost-effective solutions. With a proven track record of delivering exceptional programs, we combine state-of-the-art technology, <span className="text-gray-500">skilled expertise</span>, and customer-centric approaches to bring visions to life.
                    </p>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <h3 className="text-5xl font-bold text-gray-900 mb-2">150+</h3>
                            <p className="text-gray-600">Complete Projects</p>
                        </div>
                        <div>
                            <h3 className="text-5xl font-bold text-gray-900 mb-2">100+</h3>
                            <p className="text-gray-600">Team Members</p>
                        </div>
                        <div>
                            <h3 className="text-5xl font-bold text-gray-900 mb-2">200+</h3>
                            <p className="text-gray-600">Client Reviews</p>
                        </div>
                        <div>
                            <h3 className="text-5xl font-bold text-gray-900 mb-2">30</h3>
                            <p className="text-gray-600">Winning Awards</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Image */}
                        <div>
                            <img
                                src={teamImage}
                                alt="Our Mission"
                                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                            />
                        </div>

                        {/* Right: Content */}
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Our mission is to create a platform, build resourceful capacity, project and bring high impact development programs and a wide range of consultancy services that yields exceptional human performance in private and public sectors.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Content */}
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Our vision is to transform the learning world in delivering sustainable human capital for the present and the future.
                            </p>
                        </div>

                        {/* Right: Image */}
                        <div>
                            <img
                                src={teamImage}
                                alt="Our Vision"
                                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Guiding Attitude Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Guiding Attitude</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                            Our primary focus is designing, developing and delivering both off-site and on-site training programmes.
                        </p>
                    </div>

                    <div className="relative">
                        <img
                            src={teamImage}
                            alt="Our Guiding Attitude"
                            className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                        />
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button className="w-20 h-20 bg-[#c9a961] hover:bg-[#b89851] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110">
                                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section - Crafting Excellence as a Team */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Crafting Excellence as a Team</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Our success is built on the dedication and expertise of our team. Each member brings unique skills and a shared commitment to delivering exceptional results. Together, we turn visions into reality.
                        </p>
                    </div>

                    {/* Carousel Container */}
                    <div className="relative">
                        {/* Carousel Wrapper */}
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-in-out gap-6 pl-[calc(50%-200px)]"
                                style={{ transform: `translateX(-${currentSlide * 420}px)` }}
                            >
                                {teamMembers.map((member, index) => (
                                    <div key={index} className="shrink-0" style={{ width: '400px' }}>
                                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                            {/* Image Section */}
                                            <div className="relative h-64 overflow-hidden bg-gray-300">
                                            </div>

                                            {/* Text Content Section */}
                                            <div className="bg-gray-900 p-6">
                                                <h3 className="text-white text-lg font-bold mb-1">{member.name}</h3>
                                                <p className="text-gray-400 text-sm mb-4">{member.role}</p>

                                                <div className="flex gap-2">
                                                    <button className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors">
                                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                        </svg>
                                                    </button>
                                                    <button className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors">
                                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                                        </svg>
                                                    </button>
                                                    <button className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors">
                                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Controls */}
                        <div className="relative mt-6">
                            {/* Slide Indicators - Centered */}
                            <div className="flex justify-center gap-2">
                                {teamMembers.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-8 bg-[#c9a961]' : 'w-2 bg-gray-300 hover:bg-gray-400'
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>

                            {/* Navigation Arrows - Absolute Right, Same Level */}
                            <div className="absolute right-8 top-1/2 -translate-y-1/2 flex gap-2">
                                <button
                                    onClick={prevSlide}
                                    className="bg-white hover:bg-gray-100 text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
                                    aria-label="Previous team member"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="bg-white hover:bg-gray-100 text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
                                    aria-label="Next team member"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Say Our Customers Section */}
            <section className="py-20 bg-gray-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Say Our Customers</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Our clients trust us for our reliability, attention to detail, and dedication to delivering projects on time and within budget. Hear from those who have experienced the Devongnosis difference.
                        </p>
                    </div>

                    {/* Auto-Scrolling Testimonials */}
                    <div className="relative">
                        <div className="testimonials-scroll flex gap-6">
                            {/* First Set */}
                            <div className="testimonial-card flex-shrink-0 w-[400px] bg-white rounded-2xl p-8 shadow-lg">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-[#c9a961]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    "I am very satisfied with the training. I rate this training 101% and I will improve my capacity as with the aim of comptroller general mission for creating this capacity building training programme workshop."
                                </p>
                                <div className="border-t pt-4">
                                    <h3 className="font-bold text-gray-900">Sarki B</h3>
                                    <p className="text-sm text-gray-500">Nigerian Customs Service</p>
                                </div>
                            </div>

                            <div className="testimonial-card flex-shrink-0 w-[400px] bg-white rounded-2xl p-8 shadow-lg">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-[#c9a961]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    "The course generally was very good and adequately spaced. The topic was well chosen and the resource persons gave their best. I sincerely appreciate the composure and delivery of the resource persons. They should keep it up and do these kinds of training often."
                                </p>
                                <div className="border-t pt-4">
                                    <h3 className="font-bold text-gray-900">Ogunkua IB</h3>
                                    <p className="text-sm text-gray-500">Nigerian Navy</p>
                                </div>
                            </div>

                            <div className="testimonial-card flex-shrink-0 w-[400px] bg-white rounded-2xl p-8 shadow-lg">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-[#c9a961]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    "If only I can turn back the hands of the clock, I will turn back to the first day we started this training. It was indeed an excellent training I have ever had in my entire life. Thanks. Bravo!"
                                </p>
                                <div className="border-t pt-4">
                                    <h3 className="font-bold text-gray-900">Itukwude Maureen</h3>
                                    <p className="text-sm text-gray-500">Ministry of Justice</p>
                                </div>
                            </div>

                            <div className="testimonial-card flex-shrink-0 w-[400px] bg-white rounded-2xl p-8 shadow-lg">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-[#c9a961]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    "The organizers offer the participants a good opportunity to learn intensive lessons that are generally priceless and worth the time. A job well done."
                                </p>
                                <div className="border-t pt-4">
                                    <h3 className="font-bold text-gray-900">Victor SM</h3>
                                    <p className="text-sm text-gray-500">Office of the Special Adviser to the President on Ethics and Value</p>
                                </div>
                            </div>

                            <div className="testimonial-card flex-shrink-0 w-[400px] bg-white rounded-2xl p-8 shadow-lg">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-[#c9a961]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    "This was my unexpected surprise for the fact that some seminars conducted by teams like this would come up with information that are not sustainable. The presenters have really built up our capacity that would be invaluable."
                                </p>
                                <div className="border-t pt-4">
                                    <h3 className="font-bold text-gray-900">Anonymous</h3>
                                    <p className="text-sm text-gray-500">Government Official</p>
                                </div>
                            </div>

                            {/* Duplicate Set for Seamless Loop */}
                            <div className="testimonial-card flex-shrink-0 w-[400px] bg-white rounded-2xl p-8 shadow-lg">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-[#c9a961]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    "I am very satisfied with the training. I rate this training 101% and I will improve my capacity as with the aim of comptroller general mission for creating this capacity building training programme workshop."
                                </p>
                                <div className="border-t pt-4">
                                    <h3 className="font-bold text-gray-900">Sarki B</h3>
                                    <p className="text-sm text-gray-500">Nigerian Customs Service</p>
                                </div>
                            </div>

                            <div className="testimonial-card flex-shrink-0 w-[400px] bg-white rounded-2xl p-8 shadow-lg">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-[#c9a961]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    "The course generally was very good and adequately spaced. The topic was well chosen and the resource persons gave their best. I sincerely appreciate the composure and delivery of the resource persons. They should keep it up and do these kinds of training often."
                                </p>
                                <div className="border-t pt-4">
                                    <h3 className="font-bold text-gray-900">Ogunkua IB</h3>
                                    <p className="text-sm text-gray-500">Nigerian Navy</p>
                                </div>
                            </div>

                            <div className="testimonial-card flex-shrink-0 w-[400px] bg-white rounded-2xl p-8 shadow-lg">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-[#c9a961]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    "If only I can turn back the hands of the clock, I will turn back to the first day we started this training. It was indeed an excellent training I have ever had in my entire life. Thanks. Bravo!"
                                </p>
                                <div className="border-t pt-4">
                                    <h3 className="font-bold text-gray-900">Itukwude Maureen</h3>
                                    <p className="text-sm text-gray-500">Ministry of Justice</p>
                                </div>
                            </div>

                            <div className="testimonial-card flex-shrink-0 w-[400px] bg-white rounded-2xl p-8 shadow-lg">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-[#c9a961]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    "The organizers offer the participants a good opportunity to learn intensive lessons that are generally priceless and worth the time. A job well done."
                                </p>
                                <div className="border-t pt-4">
                                    <h3 className="font-bold text-gray-900">Victor SM</h3>
                                    <p className="text-sm text-gray-500">Office of the Special Adviser to the President on Ethics and Value</p>
                                </div>
                            </div>

                            <div className="testimonial-card flex-shrink-0 w-[400px] bg-white rounded-2xl p-8 shadow-lg">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-[#c9a961]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    "This was my unexpected surprise for the fact that some seminars conducted by teams like this would come up with information that are not sustainable. The presenters have really built up our capacity that would be invaluable."
                                </p>
                                <div className="border-t pt-4">
                                    <h3 className="font-bold text-gray-900">Anonymous</h3>
                                    <p className="text-sm text-gray-500">Government Official</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className="relative max-w-4xl mx-auto px-4 text-center">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#c9a961] rounded-full mb-6">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Let's Build Excellence Together
                    </h2>

                    {/* Description */}
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                        Partner with us to unlock your organization's full potential. Our expert team is ready to design customized training solutions that drive real results.
                    </p>

                    {/* CTA Button */}
                    <Link to="/contact">
                        <button className="bg-[#c9a961] hover:bg-[#b89851] text-white px-10 py-4 text-lg font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center gap-3">
                            CONTACT US TODAY
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </Link>

                    {/* Additional Info */}
                    <p className="text-sm text-gray-400 mt-6">
                        Schedule a free consultation • Custom training solutions available
                    </p>
                </div>
            </section>
        </div>
    )
}

export default AboutUs
