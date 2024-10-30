import React from "react";
import { ChartStates } from "./ChartsStates";
import "./Modelchart.css";
export default function Modelchart({children,isopen,handelOpen}){
    return(
        <>
            <div className={`w-screen h-screen fixed top-0 bottom-0 z-[100] ${isopen?"block":"hidden"}`}>
                <div className="modelback-main-container  w-full h-full  flex flex-col justify-center items-center"  onClick={()=>{handelOpen()}}>
                    <div className="graph-container w-[55%] h-[65%] rounded-[16px] bg-zinc-800 border-0  p-8" onClick={(e)=>{e.stopPropagation()}}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}