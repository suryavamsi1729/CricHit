import React from "react";
import "./Navigationitem.css";
export default function NavigationItem({onClick,children,className}){
    return(
        <>
            <div onClick={()=>{onClick()}} className={`navbar-itm-box group relative  w-auto h-auto flex flex-row  justify-center items-center  hover:cursor-pointer ${className} rounded-t-[0px] md:rounded-t-[16px] md:rounded-b-[0px]`}>
                {children}
                <div className="absolute left-[-24px] top-0 md:top-auto md:bottom-0 group-hover:block hidden w-[24px] h-[24px] bg-[#1c1c33] group-hover:bg-[#14111c] ">
                    <div className="w-full h-full bg-[#1c1c33] rounded-tr-[16px] md:rounded-tr-[0px]   md:rounded-br-[16px]"></div>
                </div>
                <div className="absolute right-[-24px] top-0 md:top-auto md:bottom-0 hidden group-hover:block w-[24px] h-[24px] bg-[#1c1c33] group-hover:bg-[#14111c]">
                    <div className="w-full h-full bg-[#1c1c33] rounded-tl-[16px] md:rounded-tl-[0px] md:rounded-bl-[16px]"></div>
                </div>
            </div>
        </>
    )
}