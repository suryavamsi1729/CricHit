import React from "react";
import IsoDateConvertor from "utils/IsoDateConvertor";
import flag from "../../../asserts/indian flag.png"
export default function MatchItm({data}){
    const full_date = IsoDateConvertor(data["starting_at"]);
    return(
        <>
            <div className="w-auto h-auto px-8 py-1 rounded-[24px] bg-[#1c1c33] flex flex-col justify-between items-center   divide-y  divide-[#14111c]">
                <div className="w-full h-auto flex justify-start items-center py-4 gap-4">
                    <div className="grow h-auto">
                        <div className="w-auto h-auto flex justify-start items-center gap-3">
                            <p className="text-base font-semibold text-[#f1f1f1]">{`${data["stage"]["code"]} ${data["season"]["code"]}`}</p>
                            <span className="w-2 h-2 rounded-round bg-[#DF0A87]"></span>
                            <p className="text-base font-semibold text-[#f1f1f1]">{`${data["round"]}`}</p>
                        </div>
                    </div>
                    <p className="text-base font-semibold text-[#f1f1f1] text-right">{`${full_date["time"]["hrs"]}:${full_date["time"]["min"]} ${full_date["time"]["ampm"]}`}</p>
                </div>
                <div className="w-full h-auto flex flex-row justify-between items-center py-[18px] gap-4">
                    <div className="grow h-auto">
                        <div className="w-auto h-auto flex flex-row justify-start items-center gap-4">
                            <img className="w-10 h-10 rounded-round" src={data["localteam"]["image_path"]}/>
                            <p className="text-lg font-semibold text-[#f1f1f1]">{data["localteam"]["code"]}</p>
                        </div>
                    </div>
                    <div className="w-5 h-5">
                        <p className="text-sm font-semibold text-[#DF0A87]">vs</p>
                    </div>
                    <div className="grow h-auto">
                        <div className="w-auto h-auto flex flex-row justify-end items-center gap-4">
                            <p className="text-lg font-semibold text-[#f1f1f1]">{data["visitorteam"]["code"]}</p>
                            <img className="w-10 h-10 rounded-round" src={data["visitorteam"]["image_path"]}/>
                        </div>
                    </div>
                </div>
                <div className="w-full h-auto py-4 grid grid-cols-2">
                    <div className="w-full h-auto">
                        <p className="text-base font-semibold text-[#f1f1f1]">{`${full_date["date"]["day"]} ${full_date["date"]["month"]},${full_date["date"]["year"]},${full_date["date"]["week"]}`}</p>
                    </div>
                    <div className="w-full h-auto">
                        <p className="text-base font-semibold text-[#f1f1f1] text-right">{`${data["venue"]["city"]}, ${data["localteam"]["name"]}`}</p>
                    </div>
                </div>
            </div>
        </>
    )
}