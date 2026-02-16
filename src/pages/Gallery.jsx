import React, { useState, useEffect } from 'react'

function Gallery() {
    const [currentHeroImage, setCurrentHeroImage] = useState(0)
    const [activeTab, setActiveTab] = useState('photos')
    const [selectedAlbum, setSelectedAlbum] = useState(null)

    const basePath = '/src/assets/DEVONGNOSIS EDUCATION LIMITED IN PARTNERSHIP WITH THE INTERNATIONAL NARCOTICS AND LAW ENFORCEMENT AFFAIRS SECTION, US EMBASSY ABUJA PROVIDES FORENSIC TRAINING FOR THE NIGERIA POLICE FORCE 2'

    // Album collections
    const albums = [
        {
            id: 1,
            title: 'Forensic Training for Nigeria Police Force',
            description: 'Partnership with US Embassy Abuja - International Narcotics and Law Enforcement Affairs Section',
            date: '2024',
            coverImage: `${basePath}/IMG_0057.JPG.jpeg`,
            images: [
                { id: 1, url: `${basePath}/IMG_0057.JPG.jpeg`, alt: 'Forensic Training Session' },
                { id: 2, url: `${basePath}/IMG_0253.JPG.jpeg`, alt: 'Forensic Training Session' },
                { id: 3, url: `${basePath}/IMG_0307.JPG.jpeg`, alt: 'Forensic Training Session' },
                { id: 4, url: `${basePath}/IMG_0467.JPG.jpeg`, alt: 'Forensic Training Session' },
                { id: 5, url: `${basePath}/IMG_1275.JPG.jpeg`, alt: 'Forensic Training Session' },
                { id: 6, url: `${basePath}/IMG_1276.JPG.jpeg`, alt: 'Forensic Training Session' },
                { id: 7, url: `${basePath}/IMG_1278.JPG.jpeg`, alt: 'Forensic Training Session' },
                { id: 8, url: `${basePath}/IMG_1366 - Copy.JPG.jpeg`, alt: 'Forensic Training Session' },
                { id: 9, url: `${basePath}/IMG_1539.JPG.jpeg`, alt: 'Forensic Training Session' },
                { id: 10, url: `${basePath}/IMG_1580.JPG.jpeg`, alt: 'Forensic Training Session' },
                { id: 11, url: `${basePath}/IMG_1599.JPG.jpeg`, alt: 'Forensic Training Session' },
                { id: 12, url: `${basePath}/IMG_1601.JPG.jpeg`, alt: 'Forensic Training Session' },
                { id: 13, url: `${basePath}/IMG_1616.JPG.jpeg`, alt: 'Forensic Training Session' },
                { id: 14, url: `${basePath}/IMG_1617.JPG.jpeg`, alt: 'Forensic Training Session' },
                { id: 15, url: `${basePath}/IMG_1636.JPG.jpeg`, alt: 'Forensic Training Session' },
                { id: 16, url: `${basePath}/IMG_1643.JPG.jpeg`, alt: 'Forensic Training Session' },
                { id: 17, url: `${basePath}/IMG_7218.JPG.jpeg`, alt: 'Forensic Training Session' }
            ]
        }
    ]

    // Hero images - use images from selected album or all albums
    const getHeroImages = () => {
        if (selectedAlbum) {
            const album = albums.find(a => a.id === selectedAlbum)
            return album.images.slice(0, 4).map(img => ({ url: img.url, alt: img.alt }))
        }
        // Use first 4 images from first album for main gallery view
        return albums[0].images.slice(0, 4).map(img => ({ url: img.url, alt: img.alt }))
    }

    const heroImages = getHeroImages()

    // Auto-switch hero images every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeroImage((prev) => (prev + 1) % heroImages.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [heroImages.length])

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Auto-Switching Images */}
            <section className="relative h-[400px] md:h-[500px] overflow-hidden">
                {/* Image Container */}
                <div className="relative w-full h-full">
                    {heroImages.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentHeroImage ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            <img
                                src={image.url}
                                alt={image.alt}
                                className="w-full h-full object-cover"
                            />
                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-black/50"></div>
                        </div>
                    ))}
                </div>

                {/* Hero Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-12 lg:px-20">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                        Gallery
                    </h1>
                    <p className="text-lg md:text-xl text-white mb-8">
                        Get updates about happenings around us!
                    </p>

                    {/* Tab Buttons */}
                    <div className="flex gap-4">
                        <button
                            onClick={() => setActiveTab('photos')}
                            className={`px-8 py-3 font-semibold transition-all ${activeTab === 'photos'
                                ? 'bg-white text-gray-900'
                                : 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-gray-900'
                                }`}
                        >
                            Photos
                        </button>
                        <button
                            onClick={() => setActiveTab('videos')}
                            className={`px-8 py-3 font-semibold transition-all ${activeTab === 'videos'
                                ? 'bg-white text-gray-900'
                                : 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-gray-900'
                                }`}
                        >
                            Videos
                        </button>
                    </div>
                </div>

                {/* Image Indicators */}
                <div className="absolute bottom-6 right-6 flex gap-2">
                    {heroImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentHeroImage(index)}
                            className={`w-3 h-3 rounded-full transition-all ${index === currentHeroImage
                                ? 'bg-white w-8'
                                : 'bg-white/50 hover:bg-white/75'
                                }`}
                        />
                    ))}
                </div>
            </section>

            {/* Photos Section - Album List or Album Detail */}
            {activeTab === 'photos' && (
                <section className="py-16 px-6 md:px-12 lg:px-20">
                    {/* Album List View */}
                    {!selectedAlbum && (
                        <>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Photo Albums</h2>

                            {/* Album Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {albums.map((album) => (
                                    <div
                                        key={album.id}
                                        onClick={() => setSelectedAlbum(album.id)}
                                        className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                                    >
                                        {/* Album Cover Image */}
                                        <div className="relative h-64 overflow-hidden bg-gray-100">
                                            <img
                                                src={album.coverImage}
                                                alt={album.title}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                            />

                                            {/* Folder Icon Overlay */}
                                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                                                <svg
                                                    className="w-6 h-6 text-[#c9a961]"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                                                    />
                                                </svg>
                                            </div>

                                            {/* Hover Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                                <p className="text-white text-sm mb-2">Click to view album</p>
                                            </div>
                                        </div>

                                        {/* Album Info */}
                                        <div className="bg-white p-6">
                                            <h3 className="text-gray-900 font-bold text-lg leading-tight mb-2 line-clamp-2">
                                                {album.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                                {album.description}
                                            </p>
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-[#c9a961] font-semibold">
                                                    {album.images.length} photos
                                                </span>
                                                <span className="text-gray-500">{album.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    {/* Album Detail View */}
                    {selectedAlbum && (
                        <>
                            {/* Back Button */}
                            <button
                                onClick={() => setSelectedAlbum(null)}
                                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors group"
                            >
                                <svg
                                    className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                                <span className="font-semibold">Back to Albums</span>
                            </button>

                            {/* Album Header */}
                            {(() => {
                                const album = albums.find(a => a.id === selectedAlbum)
                                return (
                                    <>
                                        <div className="mb-12">
                                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                                                {album.title}
                                            </h2>
                                            <p className="text-gray-600 text-lg mb-2">{album.description}</p>
                                            <p className="text-[#c9a961] font-semibold">
                                                {album.images.length} photos • {album.date}
                                            </p>
                                        </div>

                                        {/* Photo Grid */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {album.images.map((image) => (
                                                <div
                                                    key={image.id}
                                                    className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                                                >
                                                    <div className="relative h-64 overflow-hidden">
                                                        <img
                                                            src={image.url}
                                                            alt={image.alt}
                                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                                        />
                                                        {/* Hover Overlay */}
                                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                            <svg
                                                                className="w-12 h-12 text-white"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={2}
                                                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )
                            })()}
                        </>
                    )}
                </section>
            )}

            {/* Videos Section (Placeholder) */}
            {activeTab === 'videos' && (
                <section className="py-16 px-6 md:px-12 lg:px-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Videos</h2>
                    <div className="text-center py-20">
                        <p className="text-gray-600 text-lg">Video content coming soon...</p>
                    </div>
                </section>
            )}
        </div>
    )
}

export default Gallery
