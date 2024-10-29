import React from "react";
import './statesstyle.css';
//imaporting components 
import NavigationBar from "components/elements/NavigationBar";
import HeaderSection from "./HeaderSection";
import MainSection from "./MainSection";
import { ChartStates } from "./ChartsStates";
import { ChartBar } from "./ChartBar";
import image from '../../../asserts/image-2.jpg';
export default function States(){
    return(
        <>
            <div className="main-container">
                <div className="states-container w-full h-auto flex flex-col justify-start items-center gap-4 p-4">
                    <HeaderSection/>
                    <MainSection/>
                    <div className="w-full h-auto flex flex-row justify-center items-center gap-4 p-3">
                       <div className="w-1/2 h-[50vh] relative bg-[#2828287c] rounded-[16px] p-4">
                            <ChartStates/>
                       </div>
                       <div className="w-1/2 h-[50vh] relative bg-[#2828287c] rounded-[16px] p-4">
                            <ChartBar/>
                       </div>
                    </div>
                </div>
            </div>
        </>
    );
}