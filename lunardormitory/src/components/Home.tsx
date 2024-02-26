import React from 'react'
import Nav from './Nav'

function Home() {
  return (
    <div>
        <Nav></Nav>
        <div className='relative overflow-hidden max-w-full' style={{maxHeight: '65vh'}}>
          <img className='w-full' src='https://cdn.discordapp.com/attachments/1205929906291089510/1211029572141850654/6e716d1046575431_1.png?ex=65ecb62d&is=65da412d&hm=2b333879d5160daa0bac429145697ffc2e526a62862b82f262498342478caafd&' alt='bg'></img>
          <p className='absolute text-xl text-white top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2'>THE BEST</p>
          <hr className='absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700'></hr>
        </div>

        <div className='flex flex-col justify-center items-center tracking-widest'>
          <h1 className='text-3xl font-medium pt-10' style={{color: '#2E4E73'}}>LUNAR DORMITORY ทำอะไรได้บ้าง?</h1>
          <p className='pt-5'>ให้การใช้ชีวิตในหอพักสะดวกสบายยิ่งขึ้น เมื่อผู้เช่ามีแอป LUNAR DORMITORY</p>
        </div>

        <div className='flex justify-center items-center'>
          <ul className='flex flex-row gap-14 pt-10'>
            <li>ผังห้อง</li>
            <li>จดมิเตอร์</li>
            <li>ทำบิล</li>
            <li>สัญญาเช่า</li>
            <li>วิเคราะห์ข้อมูล</li>
            <li>สื่อสารกับผู้เช่า</li>
          </ul>
        </div>
    </div>
  )
}

export default Home