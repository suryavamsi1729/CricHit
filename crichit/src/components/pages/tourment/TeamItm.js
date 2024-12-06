import React from "react";
import img from "../../../asserts/bcci.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
export default function TeamItm(){
    return(
        <div className="w-full h-auto hover:bg-[#353535] rounded-[12px] p-3">
            <div className="w-full h-full flex flex-row justify-start items-center gap-x-3">
                <div className="w-[90px] h-full flex flex-row justify-center items-center">
                    <img className="w-[75px] h-[75px]" src={img}/>
                </div>
                <div className="grow h-full flex flex-col justify-center  p-3">
                    <div className="grid grid-cols-4 gap-2">
                        <div className="teamName flex flex-col justify-center items-center text-xl font-bold text-[#F1F1F1]">India</div>
                        <div className="teamName flex flex-col justify-center items-center text-xl font-bold text-[#F1F1F1]">Rohit</div>
                        <div className="teamName flex flex-col justify-center items-center text-xl font-bold text-[#F1F1F1]">Gambir</div>
                        <div className="complete-opt w-full h-full flex flex-col justify-center items-center">
                        <FontAwesomeIcon icon={faAngleRight} style={{color: "#716F6F",fontSize:"32px"}} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}