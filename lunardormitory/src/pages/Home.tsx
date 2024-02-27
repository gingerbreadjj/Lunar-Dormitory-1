import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [isRoomHovering, setIsRoomHovering] = useState(false);
  const [isBillHovering, setIsBillHovering] = useState(false);
  const [isDashHovering, setIsDashHovering] = useState(false);
  const [isReportHovering, setIsReportHovering] = useState(false);

  const [isClickRoom, setIsClickRoom] = useState(false);
  const [isClickBill, setIsClickBill] = useState(false);
  const [isClickDash, setIsClickDash] = useState(false);
  const [isClickReport, setIsClickReport] = useState(false);

  const [isRoomVisible, setIsRoomVisible] = useState(false);
  const [isBillVisible, setIsBillVisible] = useState(false);
  const [isDashVisible, setIsDashVisible] = useState(false);
  const [isReportVisible, setIsReportVisible] = useState(false);

  const handleMouseRoomEnter = () => {
    setIsRoomHovering(true);
  };
  const handleMouseRoomLeave = () => {
    setIsRoomHovering(false);
  };
  const handleMouseBillEnter = () => {
    setIsBillHovering(true);
  };
  const handleMouseBillLeave = () => {
    setIsBillHovering(false);
  };
  const handleMouseDashEnter = () => {
    setIsDashHovering(true);
  };
  const handleMouseDashLeave = () => {
    setIsDashHovering(false);
  };
  const handleMouseReportEnter = () => {
    setIsReportHovering(true);
  };
  const handleMouseReportLeave = () => {
    setIsReportHovering(false);
  };

  const handleClickRoom = () => {
    setIsClickRoom(!isClickRoom);
  };
  const handleClickBill = () => {
    setIsClickBill(!isClickBill);
  };
  const handleClickDash = () => {
    setIsClickDash(!isClickDash);
  };
  const handleClickReport = () => {
    setIsClickReport(!isClickReport);
  };

  const handleToggleRoom = () => {
    setIsRoomVisible(!isRoomVisible);
  };
  const handleToggleBill = () => {
    setIsBillVisible(!isBillVisible);
  };
  const handleToggleDash = () => {
    setIsDashVisible(!isDashVisible);
  };
  const handleToggleReport = () => {
    setIsReportVisible(!isReportVisible);
  };

  return (
    <div>
      <Nav></Nav>
      <div className="h-full">
        <div
          className="relative overflow-hidden max-w-full"
          style={{ maxHeight: "65vh" }}
        >
          <img
            className="w-full"
            src="https://cdn.discordapp.com/attachments/1205929906291089510/1211029572141850654/6e716d1046575431_1.png?ex=65ecb62d&is=65da412d&hm=2b333879d5160daa0bac429145697ffc2e526a62862b82f262498342478caafd&"
            alt="bg"
          ></img>
          <p className="flex flex-col items-center absolute text-base text-white top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-20">
            THE BEST <br />
            <p className="flex flex-col items-center text-6xl tracking-widest mt-3">
              Dormitory <br />
              <p className="flex flex-col items-center text-base tracking-normal mt-10 indent-20">
                ระบบจัดการหอพัก สำหรับเจ้าของหอพัก
                <br /> ตัวช่วยบริหารหอพักอย่างมืออาชีพ สะดวกสบาย ครบจบในที่เดียว
                <br />
                <Link to="Login" className="flex items-center">
                  <button className="mt-10 border-2 p-3 hover:bg-gray-500">
                    เริ่มใช้งานกันเลย!
                  </button>
                </Link>
              </p>
            </p>
          </p>
        </div>

        <div className="flex flex-col justify-center items-center tracking-widest ">
          <h1
            className="text-3xl font-medium pt-14"
            style={{ color: "#2E4E73" }}
          >
            LUNAR DORMITORY ทำอะไรได้บ้าง?
          </h1>
          <p className="mt-10">
            ให้การใช้ชีวิตในหอพักสะดวกสบายยิ่งขึ้น เมื่อผู้เช่ามีแอป LUNAR
            DORMITORY
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center mb-16 mt-10">
        <div className="flex flex-row gap-14">
          <div>
            <button
              className="rounded-md p-3 w-32"
              style={{
                backgroundColor: isRoomHovering ? "#5C80A7" : "#9ABDE3",
                color: isRoomHovering ? "white" : "white",
              }}
              onMouseEnter={handleMouseRoomEnter}
              onMouseLeave={handleMouseRoomLeave}
              onClick={() => {
                handleClickRoom();
                handleToggleRoom();
              }}
            >
              ผังห้อง
            </button>
          </div>
          <div>
            <button
              className="rounded-md p-3 w-32"
              style={{
                backgroundColor: isBillHovering ? "#5C80A7" : "#9ABDE3",
                color: isBillHovering ? "white" : "white",
              }}
              onMouseEnter={handleMouseBillEnter}
              onMouseLeave={handleMouseBillLeave}
              onClick={() => {
                handleClickBill();
                handleToggleBill();
              }}
            >
              บิลค่าเช่า
            </button>
          </div>
          <div>
            <button
              className="rounded-md p-3 w-32"
              style={{
                backgroundColor: isDashHovering ? "#5C80A7" : "#9ABDE3",
                color: isDashHovering ? "white" : "white",
              }}
              onMouseEnter={handleMouseDashEnter}
              onMouseLeave={handleMouseDashLeave}
              onClick={() => {
                handleClickDash();
                handleToggleDash();
              }}
            >
              DashBoard
            </button>
          </div>
          <div>
            <button
              className="rounded-md p-3 w-32"
              style={{
                backgroundColor: isReportHovering ? "#5C80A7" : "#9ABDE3",
                color: isReportHovering ? "white" : "white",
              }}
              onMouseEnter={handleMouseReportEnter}
              onMouseLeave={handleMouseReportLeave}
              onClick={() => {
                handleClickReport();
                handleToggleReport();
              }}
            >
              รายงานสรุป
            </button>
          </div>
        </div>
      </div>

        <div className="flex justify-center items-center my-10" id="room">
          <img
            src="https://cdn.discordapp.com/attachments/1205929906291089510/1211610899517808640/sofa.png?ex=65eed395&is=65dc5e95&hm=fc4e029fdd094c6fb242164dfb5d7428e7a4749271c527deb3f991deff528685&"
            alt="room"
            className="object-contain"
            style={{ width: "15%" }}
          />
          <div
            className="flex flex-col pt-5 pb-5 ml-20"
            style={{ width: "40%" }}
          >
            <div className="w-full">
              <h1 className="font-medium text-2xl">ผังห้อง</h1>
              <p className="pt-3">
                ดูสถานะห้องพักได้อย่างครอบคลุม ระบบแสดงทั้งจำนวนชั้น จำนวนห้อง
                นอกจากนี้ยังสามารถดูสถานะทุกห้องในหอพัก อพาร์ทเม้นท์ของคุณได้
                ไม่ว่าจะเป็น ห้องที่ใกล้หมดสัญญา ห้องว่าง–ไม่ว่าง ฯลฯ
                เห็นภาพรวมของธุรกิจ ช่วยลดความผิดพลาดในการปล่อยห้องพัก
                และการต่อสัญญา
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center my-10" id="bill">
          <img
            src="https://cdn.discordapp.com/attachments/1205929906291089510/1211612303238107146/bill.png?ex=65eed4e3&is=65dc5fe3&hm=52bf6eec6400a2b8f735372f356fc35a2263cf9784bd93e65814e88701cd6151&"
            alt="bill"
            className="object-contain"
            style={{ width: "15%" }}
          />
          <div
            className="flex flex-col pt-5 pb-5 ml-20"
            style={{ width: "40%" }}
          >
            <div className="w-full">
              <h1 className="font-medium text-2xl">บิลค่าเช่า</h1>
              <p className="pt-3">
                ออกใบแจ้งค่าเช่า และส่งบิลไปยังผู้เช่าทุกคนได้ง่ายๆ
                ในรูปแบบออนไลน์ ลดเวลาในการส่งบิลแบบเดิมๆ
                ผู้เช่าสะดวกสบายรับบิลได้ทุกที่ผ่าน App Horganice
                พร้อมออกใบเสร็จค่าห้องพักอัตโนมัติทันที หลังผู้เช่าชำระเรียบร้อย
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center my-10" id="dashboard">
          <img
            src="https://cdn.discordapp.com/attachments/1205929906291089510/1211612496029294622/dashboard.png?ex=65eed511&is=65dc6011&hm=45beecf3a516d9bb938b4180e7d72ba5b61fd9a723b4ba14f59793606e8dabf9&"
            alt="dashboard"
            className="object-contain"
            style={{ width: "15%" }}
          />
          <div
            className="flex flex-col pt-5 pb-5 ml-20"
            style={{ width: "40%" }}
          >
            <div className="w-full">
              <h1 className="font-medium text-2xl">DashBoard</h1>
              <p className="pt-3">
                วิเคราะห์ผลประกอบการธุรกิจ ทั้งรายรับ-รายจ่าย,
                รายรับค่าเช่ารายเดือน, การเข้า-ออกของผู้เช่า
                นำข้อมูลไปวางแผนการตลาดได้อย่างมีประสิทธิภาพ
                บริหารหอพักให้เติบโตอย่างมั่นคง
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center my-10" id="report">
          <img
            src="https://cdn.discordapp.com/attachments/1205929906291089510/1211612418015236096/report.png?ex=65eed4ff&is=65dc5fff&hm=d8e7ee55a1e40d8898c57871d119f15edb102bb9f7c10c3c874fb5abfe242e8d&"
            alt="room"
            className="object-contain"
            style={{ width: "15%" }}
          />
          <div
            className="flex flex-col pt-5 pb-5 ml-20"
            style={{ width: "40%" }}
          >
            <div className="w-full">
              <h1 className="font-medium text-2xl">รายงานสรุป</h1>
              <p className="pt-3">
              ดูภาพรวมรายงานสรุปเรื่องต่างๆ ในแต่ละเดือน เช่น รายงานบิลค่าเช่า, การจองรายเดือน-วัน, ย้ายเข้า-ออก สามารถ export ข้อมูลเป็นไฟล์ excel ได้
              </p>
            </div>
          </div>
        </div>

      <Footer></Footer>
    </div>
  );
}

export default Home;
