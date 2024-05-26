// import React from 'react'
import { CiHome } from "react-icons/ci";
import { LuMenuSquare } from "react-icons/lu";
import { FaBorderStyle } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { GrLineChart } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import { MdOutlineSettingsBrightness } from "react-icons/md";
import { GoGift } from "react-icons/go";

const SideBarMobile = () => {
  return (
    <div className="w-full flex flex-col justify-cente items-cente ml-[25px] gap-5">

        <h6 className="text-white text-[20px] leading-5 mb-[10px] mt-[10px]">eco <br/>Pay</h6>

        <div className="flex items-center gap-3 text-white font-bold">
            <div className="text-[17px] h-[30px] cursor-pointer text-white bg-[#06a60b] hover:bg-white hover:text-[#118115] p-1 w-[30px] rounded-md flex justify-center items-center"><CiHome /> </div>
            <h6 className="text-[14px]">Home</h6>
        </div>

        <div className="flex items-center gap-3 text-white font-bold">
            <div className="text-[17px] h-[30px] cursor-pointer text-white bg-[#06a60b] hover:bg-white hover:text-[#118115] p-1 w-[30px] rounded-md flex justify-center items-center"><LuMenuSquare /> </div>
            <h6 className="text-[14px]">Products</h6>
        </div>

        <div className="flex items-center gap-3 text-white font-bold">
            <div className="text-[17px] h-[30px] cursor-pointer text-white bg-[#06a60b] hover:bg-white hover:text-[#118115] p-1 w-[30px] rounded-md flex justify-center items-center"><FaBorderStyle /> </div>
            <h6 className="text-[14px]">Services</h6>
        </div>

        <div className="flex items-center gap-3 text-white font-bold">
            <div className="text-[17px] h-[30px] cursor-pointer text-white bg-[#06a60b] hover:bg-white hover:text-[#118115] p-1 w-[30px] rounded-md flex justify-center items-center"><FaRegUser /> </div>
            <h6 className="text-[14px]">Profile</h6>
        </div>

        <div className="flex items-center gap-3 text-white font-bold">
            <div className="text-[17px] h-[30px] cursor-pointer text-white bg-[#06a60b] hover:bg-white hover:text-[#118115] p-1 w-[30px] rounded-md flex justify-center items-center"><GrLineChart /> </div>
            <h6 className="text-[14px]">Charts / Statements</h6>
        </div>

        <div className="flex items-center gap-3 text-white font-bold">
            <div className="text-[17px] h-[30px] cursor-pointer text-white bg-[#06a60b] hover:bg-white hover:text-[#118115] p-1 w-[30px] rounded-md flex justify-center items-center"><FiSearch /> </div>
            <h6 className="text-[14px]">Search</h6>
        </div>

        <div className="flex items-center gap-3 text-white font-bold">
            <div className="text-[17px] h-[30px] cursor-pointer text-white bg-[#06a60b] hover:bg-white hover:text-[#118115] p-1 w-[30px] rounded-md flex justify-center items-center"><MdOutlineSettingsBrightness /> </div>
            <h6 className="text-[14px]">Settings</h6>
        </div>

        <div className="flex items-center gap-3 text-white font-bold">
            <div className="text-[17px] h-[30px] cursor-pointer text-white bg-[#06a60b] hover:bg-white hover:text-[#118115] p-1 w-[30px] rounded-md flex justify-center items-center"><GoGift /> </div>
            <h6 className="text-[14px]">Offers</h6>
        </div>

    </div>
  )
}

export default SideBarMobile;