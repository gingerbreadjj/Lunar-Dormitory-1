import React from 'react'
import Nav from './Nav'
import { useState } from 'react';

const mockData = [
    {
      num_room: 'A101',
      water: '0',
      light: '0',
      status: true
    },
    {
        num_room: 'A101',
        water: '0',
        light: '0',
        status: true
    },
    {
        num_room: 'A101',
        water: '0',
        light: '0',
        status: true
    },
    {
        num_room: 'A101',
        water: '0',
        light: '0',
        status: true
    },
    {
        num_room: 'A101',
        water: '0',
        light: '0',
        status: true
    },
];

function NotiPayment() {
  return (
    <div>
        <Nav></Nav>
        <div className='flex flex-col h-full items-center font-sans'>
            <div className='w-9/12 flex flex-row m-5'>
                <div className='basis-4/6 text-3xl'>ชื่อหอพัก</div>
                <div className='basis-2/6'>
                    <select name="" id="">
                        <option value="">เดือน</option>
                        <option value="">มกราคม</option>
                        <option value="">กุมภาพันธ์</option>
                        <option value="">มีนาคม</option>
                    </select>
                </div>
            </div>
            <table className='w-9/12 rounded-xl'>
                <tr className='border-gray-300 border-2'>
                    <th className='border-gray-300 border-2'>เลขห้อง</th>
                    <th className='border-gray-300 border-2'>หน่วยน้ำ</th>
                    <th className='border-gray-300 border-2'>หน่วยไฟ</th>
                    <th className='border-gray-300 border-2 w-1/12'>แจ้งชำระ</th>
                    <th className='border-gray-300 border-2 w-1/12'>สถานะ</th>
                    <th className='border-gray-300 border-2 w-1/12'>หลักฐาน</th>
                    <th className='border-gray-300 border-2 w-1/12'>ยืนยันการชำระเงิน</th>
                </tr>
                {mockData.map((item, i) => {
                    return (
                        <tr>
                            <td className='border-gray-300 border-2 text-center'>{item.num_room}</td>
                            <td className='border-gray-300 border-2 text-center'>
                                <input type="text" value={item.water} className='text-center'/>
                            </td>
                            <td className='border-gray-300 border-2 text-center'>
                                <input type="text" value={item.light} className='text-center'/></td>
                            <td className='border-gray-300 border-2 text-center p-1'>
                                <input type="submit" className='w-9/12 rounded-xl bg-gray-300' value='แจ้ง'/>
                            </td>
                            <td className='border-gray-300 border-2 text-center'>{item.status? "ชำระ":"ยังไม่ชำระ"}</td>
                            <td className='border-gray-300 border-2 text-center'>
                                <input type="submit" className='w-9/12 rounded-xl bg-gray-300 text-xs p-1' value='รายละเอียด'/>
                            </td>
                            <td className='border-gray-300 border-2 text-center'>
                                <input type="submit" className='w-9/12 rounded-xl bg-gray-300' value='ยืนยัน'/>
                            </td>
                        </tr>
                    );
                })}
            </table>    
        </div>
    </div>
  )
}

export default NotiPayment