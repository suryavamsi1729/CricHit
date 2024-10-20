import React from "react";
export default function CarouselItm({data}){
    return(
        <>
            <div className="w-full h-[48vh] bg-[rgba(255,255,255,0.23)] shadow-[0_4px_30px_rgba(0, 0, 0, 0.1)] backdrop-blur-[20spx] rounded-[16px]">
                <div className="w-full h-full p-[6px] border-[1px] border-solid border-[#ffffff9d] rounded-[16px]">
                    <div className="w-full h-full bg-transparent flex flex-col justify-center items-center  rounded-[10px] px-3 py-4">
                        <div className="w-full h-[35%] flex flex-row justify-center items-center">
                                <img className="w-20 h-20 rounded-round" src={data.image} alt={data.tourmenrt_name}/>
                        </div>
                        <div className="w-full h-[65%] flex flex-col justify-center items-center gap-4">
                            <p className="w-full h-auto font-rubik text-[18px] font-medium text-center text-slate-200">{data.tourmenrt_name}</p>
                            <p className="w-full h-auto font-rubik text-sm font-normal text-left text-slate-100">
                            The ICC World Cup 2024 will feature top cricket nations competing in a global tournament. It includes group stages, knockouts, and culminates in the finals. Teams like India, Australia, and England will play for the championship
                            </p>
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