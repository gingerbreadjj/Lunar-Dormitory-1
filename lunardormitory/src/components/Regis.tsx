import React from 'react'

function Regis() {
  return (
    <div className="flex" style={{backgroundColor:'#E9E6E1'}}>
        <div className="w-1/2 h-screen bg-gray-300">
        <img src='https://cdn.discordapp.com/attachments/1205929906291089510/1209176101910487090/image.png?ex=65e5f800&is=65d38300&hm=7c58a7b11344468579f001715a0b5fef21eab841114b8a91181d97448b7504a4&' alt='room' className="object-cover w-full h-full"></img>
      </div>

      <div className="flex flex-col w-1/2 h-screen justify-center items-center">
        {/* <h1 className='text-base text-gray-500 mb-2'>เข้าสู่ระบบ</h1> */}
        <div className='flex flex-row'>
            <h1 className='text-xl font-semibold px-2' style={{color: '#2E4E73'}}>LUNAR</h1>
            <img src='https://cdn.discordapp.com/attachments/1205929906291089510/1209155580166410321/moon.png?ex=65e5e4e3&is=65d36fe3&hm=e0f900ef8c09349c2256c8d45e65a72d4b62de050f1322271cfbdce727c341c0&' alt='moon' width="30"></img>
        </div>
        <h1 className='text-xl font-semibold mb-5' style={{color: '#2E4E73'}}>DORMITORY</h1>

        <div className="relative mb-3 w-5/12">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            <input placeholder='ชื่อจริง-นามสกุล' className='rounded-xl border-gray-300 border-2 p-2 pl-10 placeholder-gray-500 w-full' />
        </div>

        <div className="relative mb-3 w-5/12">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
            <input placeholder='เพศ' className='rounded-xl border-gray-300 border-2 p-2 pl-10 placeholder-gray-500 w-full' />
        </div>
        <div className="relative mb-3 w-5/12">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <input placeholder='อีเมล' className='rounded-xl border-gray-300 border-2 p-2 pl-10 placeholder-gray-500 w-full' />
        </div>
        <div className="relative mb-3 w-5/12">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            <input placeholder='รหัสผ่าน' className='rounded-xl border-gray-300 border-2 p-2 pl-10 placeholder-gray-500 w-full' />
        </div>
        <div className="relative mb-3 w-5/12">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            <input placeholder='เบอร์โทร' className='rounded-xl border-gray-300 border-2 p-2 pl-10 placeholder-gray-500 w-full' />
        </div>

        <button className='rounded-xl p-2 mt-3 mb-3 w-5/12 text-white' style={{backgroundColor:'#2E4E73'}}>เข้าสู่ระบบ</button>
        <button className='rounded-xl p-2 mb-3 w-5/12 text-white bg-gray-400'>ยกเลิก</button>

      </div>

    </div>
  )
}

export default Regis