import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import bg4 from '../assets/bg4.jpg'
import courseEthics from '../assets/course-ethics.png'
import courseSecurity from '../assets/course-security.png'
import courseMarketing from '../assets/course-marketing.png'
import courseLeadership from '../assets/course-leadership.png'
import oilGas from '../assets/oil&gas.jpg'
import finance from '../assets/finance.jpg'
import ict from '../assets/ICT.jpg'

function Home() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const courses = [
        {
            title: 'Information & Communication Technology',
            description: 'Master the latest technologies and digital tools to thrive in the modern tech landscape.',
            bgColor: 'bg-slate-700',
            image: ict
        },
        {
            title: 'Finance',
            description: 'Develop expertise in financial management, analysis, and strategic planning for business success.',
            bgColor: 'bg-neutral-700',
            image: finance
        },
        {
            title: 'Oil & Gas',
            description: 'Gain specialized knowledge in energy sector operations, safety protocols, and industry standards.',
            bgColor: 'bg-stone-700',
            image: oilGas
        },
        {
            title: 'Ethics & Compliance',
            description: 'Learn essential frameworks for maintaining ethical standards and regulatory compliance in business.',
            bgColor: 'bg-slate-600',
            image: courseEthics
        },
        {
            title: 'Security Training',
            description: 'Advanced tactical and strategic security training for defense and law enforcement professionals.',
            bgColor: 'bg-neutral-800',
            image: courseSecurity
        },
        {
            title: 'Digital Marketing & Social Selling',
            description: 'Master modern marketing strategies and social media techniques to drive business growth.',
            bgColor: 'bg-slate-600',
            image: courseMarketing
        },
        {
            title: 'Leadership & Management',
            description: 'Develop critical leadership skills and management techniques to inspire teams and drive results.',
            bgColor: 'bg-neutral-700',
            image: courseLeadership
        }
    ]

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % courses.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + courses.length) % courses.length)
    }

    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-screen overflow-hidden">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${bg4})`,
                    }}
                >
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 h-full flex items-center justify-center pb-32">
                    <div className="text-center text-white px-6 max-w-4xl">
                        {/* Main Heading */}
                        <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
                            Devongnosis Education
                        </h1>

                        {/* Description Text */}
                        <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                            Our trainers are industry leaders with years of experience and a passion for teaching. They are dedicated to helping you achieve your learning goals with personalized guidance and support.
                        </p>

                        {/* CTA Button */}
                        <button className="bg-[#c9a961] hover:bg-[#b89851] text-white px-10 py-4 text-sm font-semibold tracking-wider transition-all duration-300 transform hover:scale-105">
                            CONTACT US
                        </button>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl z-20 transition-all">
                    ‹
                </button>
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl z-20 transition-all">
                    ›
                </button>

            </section>


            {/* About Section */}
            <section className="bg-gradient-to-b from-white to-gray-50 py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="w-16 h-1 bg-[#c9a961] mb-6 mx-auto"></div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            About Devongnosis Education
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Devongnosis Education is a premier training institution dedicated to developing top-tier professionals across various industries. We combine cutting-edge facilities with expert instruction to provide comprehensive learning experiences that prepare our students for real-world challenges. Our commitment to excellence and innovation has made us a trusted partner for individuals and organizations seeking world-class training solutions.
                        </p>
                        <Link to="/about">
                            <button className="bg-[#c9a961] hover:bg-[#b89851] text-white px-8 py-3 font-semibold tracking-wide transition-all duration-300 transform hover:scale-105">
                                READ MORE
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Courses Section */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-6">
                    {/* Section Header */}
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <div className="w-16 h-1 bg-[#c9a961] mb-6 mx-auto"></div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Our Courses
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Explore our comprehensive range of professional training programs designed to elevate your skills and advance your career.
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
                                {courses.map((course, index) => (
                                    <div key={index} className="shrink-0" style={{ width: '400px' }}>
                                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                            {/* Image Section */}
                                            <div className="relative h-64 overflow-hidden">
                                                {course.image ? (
                                                    <img
                                                        src={course.image}
                                                        alt={course.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <div className={`w-full h-full ${course.bgColor}`}></div>
                                                )}
                                            </div>

                                            {/* Text Content Section */}
                                            <div className="bg-gray-900 p-6">
                                                <h3 className="text-white text-lg font-bold mb-3 leading-tight">{course.title}</h3>
                                                <p className="text-gray-300 text-sm mb-6 leading-relaxed">{course.description}</p>

                                                {/* Learn More Button */}
                                                <button className="bg-[#c9a961] hover:bg-[#b89851] text-white px-6 py-2 text-sm font-semibold transition-all duration-300 tracking-wide">
                                                    LEARN MORE
                                                </button>
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
                                {courses.map((_, index) => (
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
                                    aria-label="Previous course"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="bg-white hover:bg-gray-100 text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
                                    aria-label="Next course"
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

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Find answers to common questions about our training programs and services
                        </p>
                    </div>

                    {/* FAQ Items */}
                    <div className="max-w-4xl mx-auto space-y-4">
                        {/* FAQ 1 */}
                        <details className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                                    What types of training programs do you offer?
                                </h3>
                                <svg className="w-6 h-6 text-[#c9a961] transform group-open:rotate-180 transition-transform duration-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                We offer a comprehensive range of professional training programs including ICT, Finance, Oil & Gas, Ethics & Compliance, Security Training, Digital Marketing & Social Selling, and Leadership & Management. Each program is designed to meet industry standards and enhance professional capabilities.
                            </div>
                        </details>

                        {/* FAQ 2 */}
                        <details className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                                    How long do the training programs typically last?
                                </h3>
                                <svg className="w-6 h-6 text-[#c9a961] transform group-open:rotate-180 transition-transform duration-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                Program duration varies depending on the course and level of certification. Most programs range from 2 days to 4 weeks. We offer both intensive short courses and comprehensive long-term training programs to suit different schedules and learning objectives.
                            </div>
                        </details>

                        {/* FAQ 3 */}
                        <details className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                                    Do you provide certification upon completion?
                                </h3>
                                <svg className="w-6 h-6 text-[#c9a961] transform group-open:rotate-180 transition-transform duration-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                Yes, all participants who successfully complete our training programs receive professional certificates recognized by industry bodies. Our certifications demonstrate your competency and commitment to professional development in your field.
                            </div>
                        </details>

                        {/* FAQ 4 */}
                        <details className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                                    Can training be customized for corporate teams?
                                </h3>
                                <svg className="w-6 h-6 text-[#c9a961] transform group-open:rotate-180 transition-transform duration-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                Absolutely! We specialize in creating customized training solutions tailored to your organization's specific needs. Our team works closely with you to develop programs that address your unique challenges and objectives, whether for small teams or large-scale corporate training initiatives.
                            </div>
                        </details>

                        {/* FAQ 5 */}
                        <details className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                                    What is your training delivery method?
                                </h3>
                                <svg className="w-6 h-6 text-[#c9a961] transform group-open:rotate-180 transition-transform duration-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                We offer flexible training delivery methods including in-person classroom sessions, virtual online training, and hybrid models. Our experienced instructors use interactive teaching methods, practical exercises, and real-world case studies to ensure effective learning outcomes.
                            </div>
                        </details>

                        {/* FAQ 6 */}
                        <details className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                                    How do I register for a training program?
                                </h3>
                                <svg className="w-6 h-6 text-[#c9a961] transform group-open:rotate-180 transition-transform duration-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                Registration is simple! You can contact us through our website's contact form, call our office directly, or send us an email. Our team will guide you through the enrollment process, provide detailed program information, and answer any questions you may have about schedules, fees, and requirements.
                            </div>
                        </details>
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
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Transform Your Career?
                    </h2>

                    {/* Description */}
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                        Join thousands of professionals who have elevated their skills with our world-class training programs. Start your journey to excellence today.
                    </p>

                    {/* CTA Button */}
                    <Link to="/contact">
                        <button className="bg-[#c9a961] hover:bg-[#b89851] text-white px-10 py-4 text-lg font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center gap-3">
                            GET STARTED NOW
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </Link>

                    {/* Additional Info */}
                    <p className="text-sm text-gray-400 mt-6">
                        No credit card required • Free consultation available
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Home
