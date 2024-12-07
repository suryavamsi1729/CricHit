import React from "react";
import "./tooltip.css";
export default function Tooltip({content,className}){
    return(
        <div className={`Tooltip ${className}`}>
            <p className="text-lg/5 font-normal text-[#f1f1f1]">{content}</p>
        </div>
    );
}