import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Static/Sidebar";
import SideBarMobile from "../Components/Static/SideBarMobile";
// import Header from "../Components/Static/Header";
// import Footer from "../Components/Static/Footer";
import { RiMenu2Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";

const DashLayout = () => {

    const [show, setShow] = React.useState(false);

    const showSideBar = () => {
        setShow(!show)
    }

  return (
    <div className="flex font-pop relative w-full justify-center bg-[#f8f8f8] ">

        {/* mobile */}
        {/* { show ? 
            null 
        :
        <div className="md:hidden text-[18px] bg-[#118115] text-white w-[30px] h-[30px] flex justify-center items-center rounded-md mt-[20px] ml-[20px]" onClick={showSideBar}>
            <RiMenu2Line />
        </div>
        } */}

        {/* desktop and tab sidebar */}
        <div className="hidden md:block md:w-[80px] lg:w-[100px] bg-[#118115] h-screen fixed left-0">
            <Sidebar />
        </div>

        {/* mobile */}
        <div className={`${show ? 'transform translate-x-0' : 'transform -translate-x-full' } absolute w-[260px] top-0 left-0 md:hidden  bg-[#118115] h-screen backdrop-blr-m bg-opacity-8 transition-all ease-in-out z-30 duration-300`} onClick={showSideBar}>

            <div className="bg-white w-[30px] h-[30px] rounded-md text-[20px] flex justify-center items-center absolute top-[15px] right-[15px] text-[#118115]" 
            onClick={showSideBar}>
                <MdClose />
            </div>

            <SideBarMobile />
        </div>

        <div className="w-[90%] md:w-[calc(100%-80px)] lg:w-[calc(100%-100px)] flex flex-col gap-4 mt-[20px] md:ml-[80px] lg:ml-[100px]">
            
            {/* mobile */}
            { show ? 
                <div className="md:hidden text-[18px] bg-[#118115] text-white w-[30px] h-[30px] flex justify-center items-center rounded-md mt-[20px ml-[20px" onClick={showSideBar}>
                    <RiMenu2Line />
                </div> 
            :
                <div className="md:hidden text-[18px] bg-[#118115] text-white w-[30px] h-[30px] flex justify-center items-center rounded-md ml-[20px" onClick={showSideBar}>
                    <RiMenu2Line />
                </div>
            }


            <Outlet />
        </div>


    </div>
  );
};

export default DashLayout;
