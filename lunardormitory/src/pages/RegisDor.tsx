import React from "react";
import Nav from "../components/Nav";

function RegisDor() {
  return (
    <div>
      <Nav></Nav>
      <div>
        <h5 className="text-3xl font-medium tracking-wide mb-5 mt-10 mx-10">
          ลงทะเบียนหอพัก
        </h5>
        <div className="flex flex-col mb-5 mt-5 mx-10">
          <h1 className="font-medium text-xl">ข้อมูลหอพักทั่วไป</h1>
          <div>
            <p className="mt-10 mb-3 font-medium text-lg">ชื่อหอพัก :</p>
            <input className="border-2 border-gray rounded-lg p-2 w-1/4 shadow-xl"></input>
          </div>
        </div>
        <div className="flex flex-col mb-5 mt-5 mx-10">
          <h1 className="mt-5 mb-3 font-medium text-lg">ที่อยู่ :</h1>
          <div className="grid grid-cols-2">
            <div>
              <p className="mt-3 mb-3">เลขที่/ถนน/ซอย/อาคาร</p>
              <input className="border-2 border-gray rounded-lg p-2 w-2/4 shadow-xl"></input>
            </div>
            <div>
              <p className="mt-3 mb-3">จังหวัด</p>
              <input className="border-2 border-gray rounded-lg p-2 w-2/4 shadow-xl"></input>
            </div>
            <div>
              <p className="mt-3 mb-3">เขต/อำเภอ</p>
              <input className="border-2 border-gray rounded-lg p-2 w-2/4 shadow-xl"></input>
            </div>
            <div>
              <p className="mt-3 mb-3">แขวง/ตำบล</p>
              <input className="border-2 border-gray rounded-lg p-2 w-2/4 shadow-xl"></input>
            </div>
            <div>
              <p className="mt-3 mb-3">รหัสไปรษณีย์</p>
              <input className="border-2 border-gray rounded-lg p-2 w-2/4 shadow-xl"></input>
            </div>
            <div>
              <p className="mt-3 mb-3">เบอร์โทรศัพท์</p>
              <input className="border-2 border-gray rounded-lg p-2 w-2/4 shadow-xl"></input>
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-5 mt-5 mx-10">
          <div className="grid grid-cols-2">
            <div>
              <h1 className="mt-3 mb-3 font-medium">วันที่ทำบิลค่าเช่า :</h1>
              <input className="border-2 border-gray rounded-lg p-2 w-2/4 shadow-xl"></input>
            </div>
            <div>
              <h1 className="mt-3 mb-3 font-medium">วันสิ้นสุดการชำระเงิน :</h1>
              <input className="border-2 border-gray rounded-lg p-2 w-2/4 shadow-xl"></input>
            </div>
            <div>
              <h1 className="mt-3 mb-3 font-medium">ประเภทห้อง :</h1>
              <input className="border-2 border-gray rounded-lg p-2 w-2/4 shadow-xl"></input>
            </div>
            <div>
              <h1 className="mt-3 mb-3 font-medium">จำนวนห้อง :</h1>
              <input className="border-2 border-gray rounded-lg p-2 w-2/4 shadow-xl"></input>
            </div>
            <div>
              <h1 className="mt-3 mb-3 font-medium">ค่าห้อง :</h1>
              <input className="border-2 border-gray rounded-lg p-2 w-2/4 shadow-xl"></input>
            </div>
            <div>
              <h1 className="mt-3 mb-3 font-medium">ค่าน้ำ :</h1>
              <input className="border-2 border-gray rounded-lg p-2 w-2/4 shadow-xl"></input>
            </div>
            <div>
              <h1 className="mt-3 mb-3 font-medium">ค่าไฟ :</h1>
              <input className="border-2 border-gray rounded-lg p-2 w-2/4 shadow-xl"></input>
            </div>
            <div>
              <h1 className="mt-3 mb-3 font-medium">ค่าปรับ :</h1>
              <input className="border-2 border-gray rounded-lg p-2 w-2/4 shadow-xl"></input>
            </div>
          </div>
          
        </div>
        <div className="flex flex-row mt-24 mx-10 gap-10 mb-10 justify-end">
          <button
            className="w-1/12 border-2 font-medium p-2 rounded-xl"
            style={{ borderColor: "#2E4E73", color: "#2E4E73" }}
          >
            ยกเลิก
          </button>
          <button
            className="text-white w-1/12 font-medium p-3 rounded-xl"
            style={{ backgroundColor: "#2E4E73" }}
          >
            บันทึก
          </button>
        </div>

      </div>
    </div>
  );
}

export default RegisDor;
