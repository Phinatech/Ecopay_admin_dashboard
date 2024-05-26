// import React from 'react'
import { IoAnalyticsOutline } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";


const Revenue = () => {
  return (
    <div className="w-full md:w-[95%] flex flex-col gap-4 md:ml-[20px]">

        <div className="w-full flex flex-col md:flex-row md:justify-between gap-2">
            <h6 className="font-bold">Dashboard</h6>

            <div className="w-[150px] flex justify-between items-center">
                <input className="w-[80%] h-[37px] p-1 border-[1px] border-[#bec2ce] text-[13px] rounded-md" type="date" />

                <div className="text-[#bec2ce]">
                    <HiOutlineDotsHorizontal />
                </div>
            </div>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center gap-3 md:justify-between">

            <div className="w-full md:w-[23%] bg-white rounded-md h-[80px] shadow-md p-4 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                    <h6 className="text-[13px] text-[#bec2ce] ">Revenue</h6>
                    <h6 className="text-[13px] text-[#2a8e2e] font-bold ">+22%</h6>
                </div>

                <div className="flex justify-between items-center">
                    <h5 className="text-[20px] lg:text-[25px] font-bold">$7,825</h5>
                    <div className="text-[40px] text-[#2a8e2e]">
                        <IoAnalyticsOutline />
                    </div>
                </div>
            </div>

            <div className="w-full md:w-[23%] bg-white rounded-md h-[80px] shadow-md p-4 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                    <h6 className="text-[13px] text-[#bec2ce] ">Requests</h6>
                    <h6 className="text-[13px] text-[#ff392b] font-bold ">-25%</h6>
                </div>

                <div className="flex justify-between items-center">
                    <h5 className="text-[20px] lg:text-[25px] font-bold">920</h5>
                    <div className="text-[40px] text-[#ff392b]">
                        <IoAnalyticsOutline />
                    </div>
                </div>
            </div>

            <div className="w-full md:w-[23%] bg-white rounded-md h-[80px] shadow-md p-4 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                    <h6 className="text-[13px] text-[#bec2ce] ">Visitors</h6>
                    <h6 className="text-[13px] text-[#279f51] font-bold ">+49%</h6>
                </div>

                <div className="flex justify-between items-center">
                    <h5 className="text-[20px] lg:text-[25px] font-bold">15.5k</h5>
                    <div className="text-[40px] text-[#279f51]">
                        <IoAnalyticsOutline />
                    </div>
                </div>
            </div>

            <div className="w-full md:w-[23%] bg-white rounded-md h-[80px] shadow-md p-4 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                    <h6 className="text-[13px] text-[#bec2ce] ">Conversion</h6>
                    <h6 className="text-[13px] text-[#ffa000] font-bold ">+1.9%</h6>
                </div>

                <div className="flex justify-between items-center">
                    <h5 className="text-[20px] lg:text-[25px] font-bold">28%</h5>
                    <div className="text-[40px] text-[#ffa000]">
                        <IoAnalyticsOutline />
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Revenue;