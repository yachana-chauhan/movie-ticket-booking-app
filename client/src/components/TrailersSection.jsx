import React, { useState } from 'react'
import { dummyTrailers } from '../assets/assets'
import BlurCircle from './BlurCircle'
import { PlayCircleIcon } from 'lucide-react'

const TrailersSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0])

  return (
    <div className="px-6 md:px-16 lg:px-24 py-20 overflow-hidden">
      {/* Section Title */}
      <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto">
        Trailers
      </p>

      {/* Main Video */}
      <div className="relative mt-6 flex justify-center">
        <BlurCircle top="-120px" right="-120px" />

        <iframe
          width="960"
          height="540"
          src={currentTrailer.videoUrl} // Embed URL
          title="YouTube trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-xl max-w-full relative z-10"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto mt-8">
        {dummyTrailers.map((trailer) => (
          <div
            key={trailer.image}
            className="relative cursor-pointer transition-transform hover:-translate-y-1 duration-300"
            onClick={() => setCurrentTrailer(trailer)}
          >
            <img
              src={trailer.image}
              alt="trailer"
              className="rounded-lg w-full h-full object-cover brightness-75"
            />
            <PlayCircleIcon
              strokeWidth={1.6}
              className="absolute top-1/2 left-1/2 w-10 h-10 md:w-12 md:h-12
              -translate-x-1/2 -translate-y-1/2 text-white"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrailersSection