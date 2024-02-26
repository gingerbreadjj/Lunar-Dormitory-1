import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
      <nav className="p-3" style={{ backgroundColor: "#2E4E73" }}>
        <div className=" flex flex-row">

            <div className="flex flex-col">
                <div className="flex flex-row mx-5">
                    <h1 className="text-white text-lg tracking-wider">LUNAR</h1>
                    <img
                        src="https://cdn.discordapp.com/attachments/1205929906291089510/1206851986201382912/moon.png?ex=65dd837f&is=65cb0e7f&hm=e863ab6145a32aed8b165bdbbc1e688e657bb3f8cfa80a8759dfb75fcd837160&"
                        alt="moon"
                        width="30"
                        className="mx-2"
                    ></img>
                </div>
                <h1 className="text-white text-lg tracking-wider mx-5">DORMITORY</h1>
            </div>
            <div className="flex flex-row gap-20 justify-center content-center items-center w-full">
                <Link to="/" className="text-white text-base">หน้าแรก</Link>
                <Link to="#" className="text-white text-base">ลงทะเบียนหอพัก</Link>
                <Link to="#" className="text-white text-base">ข้อมูลผู้เช่า</Link>
                <Link to="#" className="text-white text-base">แจ้งชำระ</Link>
            </div>

            <div className="flex justify-center content-center items-center w-32">
                <button className="text-white text-base rounded-full border-2 px-3 py-2" style={{borderColor: '#9ABDE3'}}>เข้าสู่ระบบ</button>
            </div>
    
        </div>
      </nav>
  );
}

export default Nav;
