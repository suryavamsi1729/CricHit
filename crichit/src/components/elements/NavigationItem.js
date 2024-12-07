import React from "react";
import "./Navigationitem.css";
export default function NavigationItem({onClick,children,className}){
    return(
        <>
            <div onClick={()=>{onClick()}} className={`navbar-itm-box group relative w-auto h-auto flex flex-row  justify-center items-center  hover:cursor-pointer ${className} rounded-b-[0px]`}>
                {children}
                <div className="absolute left-[-24px] bottom-0 w-[24px] h-[24px] bg-[#1c1c33] group-hover:bg-[#14111c] ">
                    <div className="w-full h-full bg-[#1c1c33]   rounded-br-[16px]"></div>
                </div>
                <div className="absolute right-[-24px] bottom-0 w-[24px] h-[24px] bg-[#1c1c33] group-hover:bg-[#14111c]">
                    <div className="w-full h-full bg-[#1c1c33] rounded-bl-[16px]"></div>
                </div>
            </div>
        </>
    )
}