import React from "react";
import Banner from "components/elements/Banner";
import BarElement from "components/elements/BarElement";
import Team from "./Teams";
export default function Home(){
    return (
        <div className="Tourment-Home-container w-100 h-auto bg-[#1E1E1E] p-0 m-0">
            <div className="flex flex-col w-100 h-100 p-0 m-0">
                <Banner className={'bg-tourment-banner'}/>
                <div className="w-full h-auto flex flex-col justify-start items-center gap-4 p-6">
                    <BarElement/>
                    <Team/>
                </div>
            </div>
        </div>
    );
}