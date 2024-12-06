import React from "react";
import TeamItm from "./TeamItm";
export default function Team(){
    return(
        <div className="w-full h-auto grid grid-cols-2 gap-4 p-6 rounded-[16px] border-[1px] border-[#5d5c5c] border-solid">
            {/* <TeamItm/>
            <TeamItm/>
            <TeamItm/>
            <TeamItm/> */}
            {
                [1,2,3,4,5,6].map((_,i)=>{
                    return(
                        <TeamItm id={i}/>
                    );
                })
            }
        </div>
    )
}