import React from 'react'
import requestst from '../utils/requestst'
import {useRouter} from 'next/router'

function Nav() {
  const router =useRouter()
  return (
 <nav>
       <div className='flex px-10 sm:px-20  whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>{Object.entries(requestst).map(([key , {title,url}]) => (
            <h2 className=' courser-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500
              ' onClick={() => router.push(`/?genre=${key}`)} key={key}>
                {title}</h2>
            ))}
      </div>
 </nav>
  )
}

export default Nav