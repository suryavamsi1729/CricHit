import React from "react";
import IsoDateConvertor from "utils/IsoDateConvertor";
import flag from "../../../asserts/indian flag.png"
export default function LiveMatchItm({data}){
    const full_date = IsoDateConvertor(data["starting_at"]);
    return(
        <>
            <div className="w-auto h-auto px-8 py-1 rounded-[24px] bg-[#1c1c33] flex flex-col justify-between items-center   divide-y  divide-[#14111c]">
                <div className="w-full h-auto flex justify-start items-center py-4 gap-4">
                    <div className="grow h-auto">
                        <div className="w-auto h-auto flex justify-start items-center gap-3">
                            <p className="sm:text-xs md:text-sm lg:text-base font-semibold text-[#f1f1f1]">{`${data["stage"]["code"]} ${data["season"]["code"]}`}</p>
                            <span className="w-2 h-2 rounded-round bg-[#DF0A87]"></span>
                            <p className="sm:text-xs md:text-sm lg:text-base font-semibold text-[#f1f1f1]">{`${data["round"]}`}</p>
                        </div>
                    </div>
                    <div className="w-auto h-auto flex flex-row justify-between items-center gap-2">
                    <span class="relative flex justify-center items-center h-[10px] w-[10px]">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-round bg-green-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-round h-2 w-2 bg-green-500"></span>
                    </span>
                        <p className="sm:text-xs md:text-sm lg:text-base font-semibold text-[#f1f1f1] text-right">{`Live`}</p>
                    </div>
                </div>
                <div className="w-full h-auto flex flex-row flex-wrap justify-between items-center py-[10px] gap-1">
                    <div className="w-full h-auto flex flex-row justify-between items-center">
                        <div className="w-auto h-auto flex flex-row justify-start items-center gap-4">
                            <img className="w-8 h-8 rounded-round" src={data["localteam"]["image_path"]}/>
                            <p className="sm:text-xs md:text-sm lg:text-base font-semibold text-[#f1f1f1]">{data["localteam"]["code"]}</p>
                        </div>
                       {

                        true && (
                            <div className="w-auto h-auto grid grid-cols-2 justify-end items-center gap-0">
                            <p className="sm:text-xs md:text-sm lg:text-base font-semibold text-neutral-100">152-2</p>
                            <sapn className="sm:text-xs md:text-sm lg:text-base font-semibold text-neutral-400">{`(12.3)`}</sapn>
                            <p className="col-span-2 text-right sm:text-xs md:text-sm lg:text-base font-semibold text-neutral-400">CRR-5.3</p>
                            </div>
                        )
                       }
                       {
                        false && (
                            <div className="w-auto h-auto">
                                <p className="sm:text-xs md:text-sm lg:text-base font-semibold text-neutral-100">Yet to bat</p>
                            </div>
                        )
                       }
                    </div>
                    <div className="w-full h-auto py-2 px-[9px]">
                        <p className="text-sm font-semibold text-[#DF0A87]">vs</p>
                    </div>
                    <div className="w-full h-auto flex flex-row justify-between items-center">
                        <div className="w-auto h-auto flex flex-row justify-start items-center gap-4">
                            <img className="w-8 h-8 rounded-round" src={data["visitorteam"]["image_path"]}/>
                            <p className="sm:text-xs md:text-sm lg:text-base font-semibold text-[#f1f1f1]">{data["visitorteam"]["code"]}</p>
                        </div>
                        {

                            false && (
                                <div className="w-auto h-auto grid grid-cols-2 justify-end items-center gap-0">
                                <p className="sm:text-xs md:text-sm lg:text-base font-semibold text-neutral-100">152-2</p>
                                <sapn className="sm:text-xs md:text-sm lg:text-base font-semibold text-neutral-400">{`(12.3)`}</sapn>
                                <p className="col-span-2 text-right sm:text-xs md:text-sm lg:text-base font-semibold text-neutral-400">CRR-5.3</p>
                                </div>
                            )
                            }
                            {
                            true && (
                                <div className="w-auto h-auto">
                                    <p className="sm:text-xs md:text-sm lg:text-base font-semibold text-neutral-100">Yet to bat</p>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="w-full h-auto py-4 grid grid-cols-2">
                    <div className="col-span-2 w-full h-auto">
                        <p className="sm:text-xs md:text-sm lg:text-base font-semibold text-[#DF0A87]">{`DC need 30 run in 14 balls`}</p>
                    </div>
                </div>
            </div>
        </>
    )
}