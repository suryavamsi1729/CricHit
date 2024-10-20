import React from "react";
export default function NavigationItem({children}){
    return(
        <>
            <div className="navbar-itm-box py-[6px] px-4 w-auto h-auto flex flex-row  justify-center items-center rounded-[16px] hover:bg-[#97969662]">
                {children}
            </div>
        </>
    )
}