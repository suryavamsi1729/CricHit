import React from "react";
export default function ScoreCard({data}){
    return(
        <>
            <div className="w-auto h-auto lg:h-[48vh] bg-white rounded-[16px]">
                <div className="w-full h-full p-[4px] hover:bg-gradient-to-r from-purple-500 to-pink-500 rounded-[16px]">
                    <div className="w-full h-full bg-white flex flex-col justify-center items-center  rounded-[12px] px-2 py-2">
                        <div className="w-full  h-[35%] hidden lg:flex flex-row justify-center items-center">
                                <img className="w-full h-full rounded-[12px]" src={data.image} alt={data.tourmenrt_name}/>
                        </div>
                        <div className="w-full h-full  lg:h-[65%] flex flex-col justify-center items-center pt-2 gap-4">
                            <div className="w-full h-auto flex flex-row justify-between items-center">
                                <p className="w-full h-auto font-rubik text-[17px] font-medium text-left text-slate-700">{data.tourmenrt_name}</p>
                                <div className="w-auto h-auto flex flex-row justify-center items-center gap-2">
                                    <div className="w-[7px] h-[7px] relative flex flex-col justify-center items-center rounded-round bg-red-500">
                                        <span class="animate-ping absolute inline-flex h-[10px] w-[10px] rounded-round bg-red-400 opacity-75"></span>
                                    </div>
                                    <h1 className="font-rubik text-base font-medium text-black">Live</h1>
                                </div>
                            </div>
                            <div className="w-full h-auto flex flex-col justify-center items-start gap-4">
                                <div className="w-full h-auto flex flex-row justify-between items-center">
                                    <div className="w-auto h-auto flex flex-row justify-start items-center gap-3">
                                        <div className="w-2 h-2 relative flex flex-col justify-center items-center rounded-round bg-slate-700">
                                            <span class="animate-ping absolute inline-flex h-[10px] w-[10px] rounded-round bg-slate-500 opacity-75"></span>
                                        </div>
                                        <img className="w-5 h-3" src={"https://i.ytimg.com/vi/iXQDikwaDL8/maxresdefault.jpg"} alt={"country_flag"}/>
                                        <p className="font-rubik font-medium text-base text-black">IND</p>
                                    </div>
                                    <div className="w-auto h-auto flex flex-row justify-end items-center">
                                        <p className="font-rubik font-normal text-base text-slate-500">221/9 (50)</p>
                                    </div>
                                </div>
                                <div className="w-full h-auto flex flex-row justify-between items-center">
                                    <div className="w-auto h-auto flex flex-row justify-start items-center gap-3">
                                        <div className="w-2 h-2 rounded-round bg-black invisible">
                                            <span class="animate-ping absolute inline-flex h-[10px] w-[10px] rounded-round bg-red-400 opacity-75"></span>
                                        </div>
                                        <img className="w-5 h-3" src={"https://i.ytimg.com/vi/iXQDikwaDL8/maxresdefault.jpg"} alt={"country_flag"}/>
                                        <p className="font-rubik font-medium text-base text-black">IND</p>
                                    </div>
                                    <div className="w-auto h-auto flex flex-row justify-end items-center">
                                        <p className="font-rubik font-normal text-base text-slate-500">221/9 (50)</p>
                                    </div>
                                </div>
                                <div className="w-full h-auto text-center font-rubik font-medium text-base text-black"> IND won by 20 runs</div>
                            </div>
                            <button className="w-[120px] h-[40px] bg-gradient-to-r from-[#CB0164]  to-[#00002E] rounded-[12px] outline-none px-4 py-2 font-rubik text-white font-normal ">
                                View
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}