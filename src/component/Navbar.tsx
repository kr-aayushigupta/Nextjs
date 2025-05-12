import React from 'react'
import Link from 'next/link'


function Navbar() {
  return (
    <div className="bg-blue-400 px-8 py-2 mt-4 sticky top-2">

        <ul className='flex  gap-10 justify-around'>
            <Link href="/"><li className='text-white font-semibold text-2xl hover:text-blue-800'> HOME</li></Link>
      
            <Link href="/clientside"><li className='text-white font-semibold text-2xl hover:text-blue-800'>Client side</li></Link>
      
            <Link href="/clientsidehoc"> <li className='text-white font-semibold text-2xl hover:text-blue-800'>Client side within HOC</li></Link>
        
            <Link href="/serverside"> <li className='text-white font-semibold text-2xl hover:text-blue-800'>Server Side</li></Link>
       
            <Link href="/middlewareside"> <li className='text-white font-semibold text-2xl hover:text-blue-800'>Middleware</li></Link>
        </ul>
    </div>
  )
}

export default Navbar