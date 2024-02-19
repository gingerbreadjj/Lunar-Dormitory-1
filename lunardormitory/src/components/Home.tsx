import React from 'react'
import Nav from './Nav'

function Home() {
  return (
    <div>
        <Nav></Nav>
        <div className='relative'>
          <img className='w-full' src='https://cdn.discordapp.com/attachments/1205929906291089510/1205941611595309147/6e716d1046575431_1.png?ex=65e36e25&is=65d0f925&hm=922a61598a1cfad1e264bbefed19ec55373a37cff60ab4365edf0da255cc6a81&' alt='bg'></img>
          <p className='absolute text-xl text-white top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2'>THE BEST</p>
          <hr className='absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700'></hr>
        </div>
        <div>
          <h1 className='text-3xl font-medium m-5 p-10 flex justify-center items-center tracking-widest' style={{color: '#2E4E73'}}>LUNAR DORMITORY ทำอะไรได้บ้าง?</h1>
        </div>
    </div>
  )
}

export default Home