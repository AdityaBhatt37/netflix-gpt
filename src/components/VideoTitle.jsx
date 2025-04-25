import React from 'react'

function VideoTitle({title,overview}) {
  return (
    <div className="w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className='flex gap-4'>
        <button className='bg-white text-black font-bold p-4 px-16 text-xl rounded-lg hover:bg-opacity-95'>▶Play</button>
        <button className='bg-gray-500 text-white p-4 px-16 text-xl bg-opacity-90 rounded-lg '>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle