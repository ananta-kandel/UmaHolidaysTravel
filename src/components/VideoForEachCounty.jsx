import React from 'react'

const VideoForEachCounty = ({src , name}) => {
  return (
    <>
   <div className="relative h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={src} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-green-400">
           Visit Thailand
          </h1>
          </div>
          </div>
    </>
  )
}

export default VideoForEachCounty