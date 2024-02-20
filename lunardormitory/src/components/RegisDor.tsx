import React from 'react';
import Nav from './Nav';

function RegisDor() {
  return (
    <div style={{backgroundColor: '#E9E6E1'}}>
        <Nav></Nav>
        <h5 className='text-3xl font-medium tracking-wide mb-5 mt-20 mx-20'>ลงทะเบียนหอพัก</h5>
        <div className='flex flex-col mb-5 mt-5 mx-20'>
            <h1 className='font-medium text-xl'>ข้อมูลหอพักทั่วไป</h1>
            <div>
                <p>ชื่อหอพัก :</p>
                <input className='border-2 border-gray rounded-lg p-2 w-2/3'></input>
            </div>
        </div>
        <div>
            <h1>ที่อยู่</h1>
            <div className='grid grid-cols-2'>
                <div>
                    <p>เลขที่/ถนน/ซอย/อาคาร :</p>
                    <input className='border-2 border-gray'></input>
                </div>
                <div>
                    <p>จังหวัด :</p>
                    <input className='border-2 border-gray'></input>
                </div>
                <div>
                    <p>เขต/อำเภอ :</p>
                    <input className='border-2 border-gray'></input>
                </div>
                <div>
                    <p>แขวง/ตำบล :</p>
                    <input className='border-2 border-gray'></input>
                </div>
                <div>
                    <p>รหัสไปรษณีย์ :</p>
                    <input className='border-2 border-gray'></input>
                </div>
            </div>
        </div>
        <div>
            <h1>ตำแหน่งหอพัก :</h1>
            
        </div>
        <div>
            <h1>เบอร์โทรศัพท์</h1>
            <input className='border-2 border-gray'></input>
        </div>
        <div>
            <div className='grid grid-cols-2'>
                <div>
                    <h1>วันทีี่ทำบิลค่าเช่า :</h1>
                    <input className='border-2 border-gray'></input>
                </div>
                <div>
                    <h1>วันสิ้นสุดการชำระเงิน :</h1>
                    <input className='border-2 border-gray'></input>
                </div>
                <div>
                    <h1>ประเภทห้อง :</h1>
                    <input className='border-2 border-gray'></input>
                </div>
                <div>
                    <h1>จำนวนห้อง :</h1>
                    <input className='border-2 border-gray'></input>
                </div>
                <div>
                    <h1>ค่าห้อง :</h1>
                    <input className='border-2 border-gray'></input>
                </div>
                <div>
                    <h1>ค่าน้ำ :</h1>
                    <input className='border-2 border-gray'></input>
                </div>
                <div>
                    <h1>ค่าไฟ :</h1>
                    <input className='border-2 border-gray'></input>
                </div>
                <div>
                    <h1>ค่าปรับ :</h1>
                    <input className='border-2 border-gray'></input>
                </div>
            </div>
        </div>
        <div className='flex flex-row'>
            <button className='w-1/12' style={{borderColor:'#2E4E73', color:'#2E4E73'}}>ยกเลิก</button>
            <button className='text-white w-1/12' style={{backgroundColor:"#2E4E73"}}>บันทึก</button>
        </div>
    </div>
  );
}

export default RegisDor;
