import React from "react";
import Nav from "./Nav";

const roomData = {
    num: 101,
    name1: 'BAm',
    name2: 'top',
    water: 20,
    fire: 15,
    price: 4500,
  };

  const handleSave = () => {
    console.log('Room data saved!');
  };

function Infochange(){
    return (
    <div>
    <Nav></Nav>
    <div className="container mx-auto my-auto p-6 flex flex-col h-full w-full items-center">
        <div className="w-3/5 bg-slate-200 rounded-xl mt-5 p-5">
        <h1 className="text-2xl font-bold mb-6">Room 101</h1>
        <div className="grid grid-cols-2 gap-4 mb-4 ml-10">
            <div>
            <p className="mb-2">
                <span className="font-bold">เลขห้อง:</span> {roomData.num}
            </p>
            <p className="mb-2">
                <span className="font-bold">ชื่อผู้เช่า1:</span> {roomData.name1}
            </p>
            <p className="mb-2">
                <span className="font-bold">ชื่อผู้เช่า2:</span> {roomData.name2}
            </p>
            </div>
            <div>
            <p className="mb-2">
                <span className="font-bold">ค่าน้ำ:</span> {roomData.water} หน่วย
            </p>
            <p className="mb-2">
                <span className="font-bold">ค่าไฟ:</span> {roomData.fire} หน่วย
            </p>
            <p className="mb-2">
                <span className="font-bold">ราคาห้อง:</span> {roomData.price} บาท
            </p>
            </div>
        </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleSave}
      >
        Save
      </button>
      </div>
        <br/>
        <br/>
      <div className="w-3/5 bg-slate-200 rounded-xl p-5">
        <h1 className="text-2xl font-bold mb-6">Room 101</h1>
        <div className="grid grid-cols-2 gap-4 mb-4 ml-10">
            <div>
            <p className="mb-2">
                <span className="font-bold">เลขห้อง:</span> {roomData.num}
            </p>
            <p className="mb-2">
                <span className="font-bold">ชื่อผู้เช่า1:</span> {roomData.name1}
            </p>
            <p className="mb-2">
                <span className="font-bold">ชื่อผู้เช่า2:</span> {roomData.name2}
            </p>
            </div>
            <div>
            <p className="mb-2">
                <span className="font-bold">ค่าน้ำ:</span> {roomData.water} หน่วย
            </p>
            <p className="mb-2">
                <span className="font-bold">ค่าไฟ:</span> {roomData.fire} หน่วย
            </p>
            <p className="mb-2">
                <span className="font-bold">ราคาห้อง:</span> {roomData.price} บาท
            </p>
            </div>
        </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleSave}
      >
        Save
      </button>
      </div>
    </div>

    
    </div>
    )
}
export default Infochange