import React from "react";
import { Link } from "react-router-dom";
import {useState} from 'react';

function Login() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="flex">
      <div className="flex flex-col w-1/2 h-screen justify-center items-center">
        {/* <h1 className='text-base text-gray-500 mb-2'>เข้าสู่ระบบ</h1> */}
        <div className="flex flex-row">
          <h1
            className="text-xl font-semibold px-2"
            style={{ color: "#2E4E73" }}
          >
            LUNAR
          </h1>
          <img
            src="https://cdn.discordapp.com/attachments/1205929906291089510/1209155580166410321/moon.png?ex=65e5e4e3&is=65d36fe3&hm=e0f900ef8c09349c2256c8d45e65a72d4b62de050f1322271cfbdce727c341c0&"
            alt="moon"
            width="30"
          ></img>
        </div>
        <h1 className="text-xl font-semibold mb-5" style={{ color: "#2E4E73" }}>
          DORMITORY
        </h1>

        <div className="relative mb-5 w-5/12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          <input
            placeholder="อีเมล"
            className="rounded-xl border-gray-200 border-2 p-2 pl-10 placeholder-gray-500 w-full shadow-xl"
          />
        </div>

        <div className="relative mb-5 w-5/12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
          <input
            placeholder="รหัสผ่าน"
            className="rounded-xl border-gray-200 border-2 p-2 pl-10 placeholder-gray-500 w-full shadow-xl"
          />
        </div>

        <Link to="/">
          <button
            className="rounded-xl p-2 mt-3 mb-3 w-72 text-white"
            style={{ backgroundColor: isHovering ? '#1A314C' : '#2E4E73' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            เข้าสู่ระบบ
          </button>
        </Link>

        {/* <div className="relative mb-3 w-5/12 flex items-center">
          <img
            className="absolute left-12"
            src="https://cdn.discordapp.com/attachments/1205929906291089510/1209158358968569866/google.png?ex=65e5e779&is=65d37279&hm=3dda04253b4beeb5af102e0041137f55e2dd5b99a1f3570f4de6d52b57478ead&"
            alt="google"
            width="20"
          ></img>
          <button className="bg-black rounded-xl p-2 w-full text-white ">
            เข้าสู่ระบบด้วย Google
          </button>
        </div> */}

        <Link to="Register">
          <button
            className="m-5 underline text-sm font-medium"
            style={{ color: "#2E4E73" }}
          >
            ยังไม่มีบัญชี?
          </button>
        </Link>
        
      </div>

      <div className="w-1/2 h-screen bg-gray-300">
        <img
          src="https://cdn.discordapp.com/attachments/1205929906291089510/1209176101910487090/image.png?ex=65e5f800&is=65d38300&hm=7c58a7b11344468579f001715a0b5fef21eab841114b8a91181d97448b7504a4&"
          alt="room"
          className="object-cover w-full h-full"
        ></img>
      </div>
    </div>
  );
}

export default Login;
