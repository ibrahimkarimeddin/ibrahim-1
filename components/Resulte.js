import React from 'react'
import Thumbnail from './Thubnail'

function Resulte({resulte}) {
 
  return (
    <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
      {resulte.map(req => (
          <Thumbnail key={req.id} req={req} /> 
      ))}
        
</div>
  )
}

export default Resulte