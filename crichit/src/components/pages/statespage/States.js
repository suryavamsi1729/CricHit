import React from "react";
import './statesstyle.css';
//imaporting components 
import NavigationBar from "components/elements/NavigationBar";
import HeaderSection from "./HeaderSection";
import MainSection from "./MainSection";
import { ChartStates } from "./ChartsStates";
import { ChartBar } from "./ChartBar";
import { PolarAreaChart } from "./PolarAreaChart";
import image from '../../../asserts/image-2.jpg';
import { Dounent46 } from "./Dounent46";
import { Boundry } from "./Boundry";
import { StikeRate } from "./StikeRate";
export default function States(){
    return(
        <>
            <div className="main-container">
                <div className="states-container w-full h-auto flex flex-col justify-start items-center gap-4 p-4">
                    <HeaderSection/>
                    <MainSection/>
                    <div className="w-full h-auto flex flex-row justify-center items-center flex-wrap gap-y-4 p-3">
                       <div className="w-full md:w-1/2 h-[30vh] lg:h-[50vh] relative  p-2 py-0">
                            <div className="w-full h-full bg-[#2828287c] rounded-[16px] p-3 ">
                                <ChartStates/>
                            </div>
                       </div>
                       <div className="w-full md:w-1/2 h-[30vh] lg:h-[50vh] relative p-2 py-0">
                            <div className="w-full h-full bg-[#2828287c] rounded-[16px] p-3">
                                <ChartBar/>
                            </div>
                       </div>
                       <div className="w-full md:w-1/2 h-[30vh] lg:h-[50vh] relative  p-2 py-0">
                            <div className="w-full h-full bg-[#2828287c] rounded-[16px] p-3">
                                <PolarAreaChart/>
                            </div>
                       </div>
                       <div className="w-full md:w-1/2 h-[30vh] lg:h-[50vh] relative  p-2 py-0">
                            <div className="w-full h-full bg-[#2828287c] rounded-[16px] p-3">
                                <Dounent46/>
                            </div>
                       </div>
                       <div className="w-full md:w-1/2 h-[20vh] lg:h-[50vh] relative  p-2 py-0">
                            <div className="w-full h-full bg-[#2828287c] rounded-[16px] p-3">
                                <Boundry/>
                            </div>
                       </div>
                       <div className="w-full md:w-1/2 h-[30vh] lg:h-[50vh] relative  p-2 py-0">
                            <div className="w-full h-full bg-[#2828287c] rounded-[16px] p-3">
                                <StikeRate/>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </>
    );
}