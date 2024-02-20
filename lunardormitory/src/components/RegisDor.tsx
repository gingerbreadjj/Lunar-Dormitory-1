import React from 'react';
import Nav from './Nav';

function RegisDor() {
  return (
    <div style={{backgroundColor: '#E9E6E1'}}>
        <Nav></Nav>
        <h5 className='text-3xl font-medium tracking-wide mb-5 mt-10 mx-10'>ลงทะเบียนหอพัก</h5>
        <div className='flex flex-col mb-5 mt-5 mx-10'>
            <h1 className='font-medium text-xl'>ข้อมูลหอพักทั่วไป</h1>
            <div>
                <p className='mt-10 mb-3 font-normal text-lg'>ชื่อหอพัก :</p>
                <input className='border-2 border-gray rounded-lg p-2 w-1/4'></input>
            </div>
        </div>
        <div className='flex flex-col mb-5 mt-5 mx-10'>
            <h1 className='mt-5 mb-3 font-normal text-lg'>ที่อยู่ :</h1>
            <div className='grid grid-cols-2'>
                <div>
                    <p className='mt-3 mb-3'>เลขที่/ถนน/ซอย/อาคาร</p>
                    <input className='border-2 border-gray rounded-lg p-2 w-2/4'></input>
                </div>
                <div>
                    <p className='mt-3 mb-3'>จังหวัด</p>
                    <input className='border-2 border-gray rounded-lg p-2 w-2/4'></input>
                </div>
                <div>
                    <p className='mt-3 mb-3'>เขต/อำเภอ</p>
                    <input className='border-2 border-gray rounded-lg p-2 w-2/4'></input>
                </div>
                <div>
                    <p className='mt-3 mb-3'>แขวง/ตำบล</p>
                    <input className='border-2 border-gray rounded-lg p-2 w-2/4'></input>
                </div>
                <div>
                    <p className='mt-3 mb-3'>รหัสไปรษณีย์</p>
                    <input className='border-2 border-gray rounded-lg p-2 w-2/4'></input>
                </div>
                <div>
                    <p className='mt-3 mb-3'>เบอร์โทรศัพท์</p>
                    <input className='border-2 border-gray rounded-lg p-2 w-2/4'></input>
                </div>
            </div>
        </div>
        <div className='flex flex-col mb-5 mt-5 mx-10'>
            <h1 className='mt-5 mb-3 font-normal text-lg'>ตำแหน่งหอพัก :</h1>
            
        </div>
        <div className='flex flex-col mb-5 mt-5 mx-10'>
            <div className='grid grid-cols-2'>
                <div>
                    <h1 className='mt-3 mb-3'>วันที่ทำบิลค่าเช่า :</h1>
                    <input className='border-2 border-gray rounded-lg p-2 w-2/4'></input>
                </div>
                <div>
                    <h1 className='mt-3 mb-3'>วันสิ้นสุดการชำระเงิน :</h1>
                    <input className='border-2 border-gray rounded-lg p-2 w-2/4'></input>
                </div>
                <div>
                    <h1 className='mt-3 mb-3'>ประเภทห้อง :</h1>
                    <input className='border-2 border-gray rounded-lg p-2 w-2/4'></input>
                </div>
                <div>
                    <h1 className='mt-3 mb-3'>จำนวนห้อง :</h1>
                    <input className='border-2 border-gray rounded-lg p-2 w-2/4'></input>
                </div>
                <div>
                    <h1 className='mt-3 mb-3'>ค่าห้อง :</h1>
                    <input className='border-2 border-gray rounded-lg p-2 w-2/4'></input>
                </div>
                <div>
                    <h1 className='mt-3 mb-3'>ค่าน้ำ :</h1>
                    <input className='border-2 border-gray rounded-lg p-2 w-2/4'></input>
                </div>
                <div>
                    <h1 className='mt-3 mb-3'>ค่าไฟ :</h1>
                    <input className='border-2 border-gray rounded-lg p-2 w-2/4'></input>
                </div>
                <div>
                    <h1 className='mt-3 mb-3'>ค่าปรับ :</h1>
                    <input className='border-2 border-gray rounded-lg p-2 w-2/4'></input>
                </div>
            </div>
        </div>
        <div className='flex flex-row mb-5 mt-5 mx-10 '>
            <button className='w-1/12' style={{borderColor:'#2E4E73', color:'#2E4E73'}}>ยกเลิก</button>
            <button className='text-white w-1/12' style={{backgroundColor:"#2E4E73"}}>บันทึก</button>
        </div>
    </div>
  );
}

export default RegisDor;
