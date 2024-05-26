// import React from 'react'

import chart1 from "../../assets/images/chart1.svg";
import { FaArrowRightLong } from "react-icons/fa6";


const Report = () => {
  return (
    <div className="w-full md:w-[95%] flex flex-col md:flex-row gap-4 md:ml-[20px] mt-[20px] md:justify-between md:h-[220px mb-[20px]">

        <div className="w-full md:w-[70%] lg:w-[54%] md:h-[100%] bg-white rounded-md p-2">
            <div className="flex justify-between items-center">
                <h6 className="text-[11px] md:text-[13px]">Dashboard</h6>

                <h6 className="flex gap-2 items-center text-[11px] md:text-[13px]">Advanced Report <span><FaArrowRightLong /></span></h6>
            </div>
            <img w-full src={chart1} alt="" />
        </div>

        <div className="w-full md:w-[28%] lg:w-[22%] md:h-[100% bg-white rounded-md p-2 md:h-[300px] lg:h-[380px]">
            <div className="h-full flex flex-col justify-between items-cente">
                <h6 className="flex text-[13px]">Cart</h6>
                <div className="flex items-center justify-center w-full">
                    <div className="h-[120px] w-[120px] md:w-[170px] md:h-[170px] rounded-full bg-white shadow-md flex justify-center items-center">38%</div>
                </div>
                <div>
                    <div className="flex justify-between items-center">
                        <h6 className="text-[11px]">Abandoned Cart</h6>
                        <h6 className="text-[11px]">720</h6>
                    </div>
                    <div className="flex justify-between items-center mt-[6px] lg:hidden">
                        <h6 className="text-[#b8bcc9] text-[11px]">Abandoned Revenue</h6>
                        <h6 className="text-[#b8bcc9] text-[11px]">$5,900</h6>
                    </div>
                </div>
            </div>
        </div>

        <div className="hidden lg:block w-full md:w-[28%] lg:w-[22%] md:h-[100% bg-white rounded-md p-2 md:h-[300px] lg:h-[380px]">
            <div className="h-full flex flex-col justify-between items-cente">
                <h6 className="flex text-[13px]">Revenue</h6>
                <div className="flex items-center justify-center w-full">
                    <div className="w-[170px] h-[170px] rounded-full bg-white shadow-md flex justify-center items-center">38%</div>
                </div>
                <div>
                    <div className="flex justify-between items-center lg:hidden">
                        <h6 className="text-[11px] ">Abandoned Cart</h6>
                        <h6 className="text-[11px]">720</h6>
                    </div>
                    <div className="flex justify-between items-center mt-[6px]">
                        <h6 className="text-[#b8bcc9] text-[11px]">Abandoned Revenue</h6>
                        <h6 className="text-[#b8bcc9] text-[11px]">$5,900</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Report