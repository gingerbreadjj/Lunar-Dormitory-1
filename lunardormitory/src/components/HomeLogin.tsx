import React from 'react'
import Nav from './Nav'

function HomeLogin() {
  return (
    <div style={{backgroundColor: '#E9E6E1'}}>
        <Nav></Nav>
        <div className='mt-20 mx-20'>
            <h1 className='text-3xl font-medium tracking-wide mb-5'>สวัสดีคุณ อนัญพร</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec</p>
        </div>
        <div className='flex flex-col items-center'>
            <div className='mx-20 mt-10'>
                <h1 className='text-3xl font-medium tracking-wide'>หอพัก</h1>
                <p className='mt-5 mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec</p>
            </div>
            <div className='grid grid-cols-2 gap-10 mb-10'>
                <button className="flex flex-col items-center text-left bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://cdn.discordapp.com/attachments/1205929906291089510/1209175961237594183/image.png?ex=65e5f7de&is=65d382de&hm=c852e426640fb5208ba3e20333f78810d211597ba885009ada4f23a0aa71d4bb&" alt=""></img>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <p className='text-white'>14/02/2564</p>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">AJ Park</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">701 ซอย ฉลองกรุง 1 แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร 10520</p>
                    </div>
                </button>
                <button className="flex flex-col items-center text-left bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://cdn.discordapp.com/attachments/1205929906291089510/1209175961237594183/image.png?ex=65e5f7de&is=65d382de&hm=c852e426640fb5208ba3e20333f78810d211597ba885009ada4f23a0aa71d4bb&" alt=""></img>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <p className='text-white'>15/03/2564</p>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">กัลยรัตน์</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">539/1 ซ. ถาวรพฤกษ์ (เกกีงาม3) ซ. ฉลองกรุง1, ลาดกระบัง, กรุงเทพมหานคร 10520</p>
                    </div>
                </button>
                <button className="flex flex-col items-center text-left bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://cdn.discordapp.com/attachments/1205929906291089510/1209175961237594183/image.png?ex=65e5f7de&is=65d382de&hm=c852e426640fb5208ba3e20333f78810d211597ba885009ada4f23a0aa71d4bb&" alt=""></img>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <p className='text-white'>14/02/2564</p>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Room52</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">132/1,132/2,132/3. 132/4 ซอย ลาดกระบัง 52 เขต ลาดกระบัง. กรุงเทพมหานคร 10520</p>
                    </div>
                </button>
                <button className="flex flex-col items-center text-left bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://cdn.discordapp.com/attachments/1205929906291089510/1209175961237594183/image.png?ex=65e5f7de&is=65d382de&hm=c852e426640fb5208ba3e20333f78810d211597ba885009ada4f23a0aa71d4bb&" alt=""></img>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <p className='text-white'>14/02/2564</p>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">AP House</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">แขวงลาดกระบัง เขตลาดกระบัง, กรุงเทพมหานคร 10520</p>
                    </div>
                </button>
            </div>
    

        </div>
    </div>
  )
}

export default HomeLogin