import React from 'react';
import Nav from './Nav';

function RegisDor() {
  return (
    <div style={{backgroundColor: '#E9E6E1'}}>
        <Nav></Nav>
        <h5 className='text-3xl font-medium tracking-wide mb-5 mt-20 mx-20'>ลงทะเบียนหอพัก</h5>
        <div className='flex flex-col'>
            <h1>ข้อมูลหอพักทั่วไป</h1>
            <div>
                <p>ชื่อหอพัก :</p>
                <input className='border-2 border-gray'></input>
            </div>
        </div>
        <div>
            <h1>ที่อยู่ :</h1>
            <div className='grid grid-cols-2'>
                <div>
                    <p>เลขที่/ถนน/ซอย/อาคาร</p>
                    <input className='border-2 border-gray'></input>
                </div>
                <div>
                    <p>จังหวัด</p>
                    <input className='border-2 border-gray'></input>
                </div>
                <div>
                    <p>เขต/อำเภอ</p>
                    <input className='border-2 border-gray'></input>
                </div>
                <div>
                    <p>แขวง/ตำบล</p>
                    <input className='border-2 border-gray'></input>
                </div>
                <div>
                    <p>รหัสไปรษณีย์</p>
                    <input className='border-2 border-gray'></input>
                </div>
            </div>
        </div>
        <div>
            <h1>ตำแหน่งหอพัก :</h1>
            
        </div>
        <div></div>
    </div>
  );
}

export default RegisDor;
