import React from 'react'
import ThumbUpIcon from './ThumbUpIcon'
import Image from 'next/image'
function Thumbnail({req}) {
    const BASE_URL='https://image.tmdb.org/t/p/original/'
  return (
    <div className='group cursor-pointer p-2 transition-all ease-in transform sm:hover:scale-105 hover:z-50'>
        <Image layout='responsive' width={1900} height={1080}  alt='' src={
            `${BASE_URL}${req.backdrop_path}` ||  `${req.poster_path}` || `${BASE_URL}${req.poster_path}`
        }/>
        <div className='p-1'>
          <h1 className='mb-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'>{req.original_title || req.name}</h1>
          <p className='truncate max-w-md'>{req.overview}</p>
          <p className=' flex items-center opacity-0 group-hover:opacity-100'>
           
            <span>{req.media_type ? req.media_type :' '}</span>
             {req.release_date }{<span className='opacity-0'>dddd</span>}
           <ThumbUpIcon className='mx-2 h-5 ' />
           {req.vote_count}
          </p>

        </div>
    </div>
  )
}

export default Thumbnail