import React from 'react'
import Headeritem from './Headeritem'
import { HomeIcon ,
        UserIcon,
        SearchIcon,
        LightningBoltIcon,
        CollectionIcon,
        BadgeCheckIcon
} from '@heroicons/react/outline'
function Header() {
  return (
    <header className='flex flex-col items-center sm:flex-row m-5 justify-between h-auto'>
        <div className='flex flex-grow justify-center max-w-2xl'>
            <Headeritem  title='Home' Icon={HomeIcon}/>
            {/* <Headeritem  title='Light' Icon={LightningBoltIcon}/>
            <Headeritem  title='User' Icon={UserIcon}/>
            <Headeritem  title='Collection' Icon={CollectionIcon}/>
            <Headeritem  title='Check' Icon={BadgeCheckIcon}/> */}
            <Headeritem  title='Search' Icon={SearchIcon}/>
        </div>
        <h1 className='text-3xl font-bold sm:mb-5 sm:mr-3'>Ibrahim</h1>
      
    </header>
  )
}

export default Header