// import React from 'react'
import { CiHome } from "react-icons/ci";
import { LuMenuSquare } from "react-icons/lu";
import { FaBorderStyle } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { GrLineChart } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import { MdOutlineSettingsBrightness } from "react-icons/md";
import { GoGift } from "react-icons/go";

const Sidebar = () => {
  return (
    <div className="w-full flex flex-col justify-cente items-center gap-5">

      <h6 className="text-white text-[20px] leading-5 mb-[30px] mt-[10px]">eco <br/>Pay</h6>

      <div className="text-[17px] h-[30px] cursor-pointer text-white bg-[#06a60b] hover:bg-white hover:text-[#118115] p-1 w-[30px] rounded-md flex justify-center items-center"><CiHome /></div>

      <div className="text-[17px] h-[30px] cursor-pointer text-white bg-[#06a60b] hover:bg-white hover:text-[#118115] p-1 w-[30px] rounded-md flex justify-center items-center "><LuMenuSquare /></div>

      <div className="text-[17px] cursor-pointer text-white bg-[#06a60b] hover:bg-white hover:text-[#118115] p-1 w-[30px] h-[30px] rounded-md flex justify-center items-center"><FaBorderStyle /></div>

      <div className="text-[17px] h-[30px] cursor-pointer text-white bg-[#06a60b] hover:bg-white hover:text-[#118115] p-1 w-[30px] rounded-md flex justify-center items-center "><FaRegUser /></div>

      <div className="text-[17px] h-[30px] cursor-pointer text-white bg-[#06a60b] hover:bg-white hover:text-[#118115] p-1 w-[30px] rounded-md flex justify-center items-center"><GrLineChart /></div>

      <div className="text-[17px] h-[30px] cursor-pointer text-white bg-[#06a60b] hover:bg-white hover:text-[#118115] p-1 w-[30px] rounded-md flex justify-center items-center "><FiSearch /></div>

      <div className="text-[17px] h-[30px] cursor-pointer text-white bg-[#06a60b] hover:bg-white hover:text-[#118115] p-1 w-[30px] rounded-md flex justify-center items-center"><MdOutlineSettingsBrightness /></div>

      <div className="text-[17px] h-[30px] cursor-pointer text-white bg-[#06a60b] hover:bg-white hover:text-[#118115] p-1 w-[30px] rounded-md flex justify-center items-center "><GoGift /></div>
    </div>
  )
}

export default Sidebar