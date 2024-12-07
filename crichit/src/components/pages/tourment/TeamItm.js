import {React} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import Tooltip from "components/elements/Tooltip"; 
export default function TeamItm({data}){
    //api-key: wctD0A8JAkOGidM2mhIr486nfNH8SeBAC3UOzSp9FAK10jiBdBrTCXlSyBxY
    return(
        <div className="w-full h-auto hover:bg-[#1c1c33] group rounded-[12px] p-3">
            <div className="w-full h-full flex flex-row justify-start items-center gap-x-3">
                <div className="w-[90px] h-full flex flex-row justify-center items-center">
                    <div className="w-[75px] h-[75px] flex justify-center items-center  rounded-round">
                        <img className="w-[52px] h-[52px] rounded-round" src={data["image_path"]}/>
                    </div>
                </div>
                <div className="grow h-full flex flex-col justify-center  p-3">
                    <div className="grid grid-cols-2 gap-2">
                        <div className="relative teamName flex flex-col justify-center items-center "> 
                            <p className="text-xl font-bold text-[#F1F1F1] text-nowrap overflow-hidden peer">{(data["name"].length>14)?data["code"]:data["name"]}</p>
                            <Tooltip content={"Country"} className={"invisible peer-hover:visible"}/>
                        </div>
                        <div className="complete-opt w-full h-full flex flex-col justify-center items-center">
                            <FontAwesomeIcon className="transition-transform ease-in delay-100 duration-300 text-[#716F6F] group-hover:text-[#f1f1f1] group-hover:translate-x-10 text-[32px]" icon={faAngleRight}  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}