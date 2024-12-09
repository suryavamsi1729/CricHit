import React from "react";
import Banner from "components/elements/Banner";
import BarElement from "components/elements/BarElement";
import { Outlet } from "react-router-dom";
export default function Home(){
    return (
        <div className="Tourment-Home-container w-[100%] h-auto bg-[#14111c] p-0 m-0">
            <div className="flex flex-col w-[100%] h-[100%] p-0 m-0">
                <Banner className={'bg-tourment-banner'}/>
                <div className="w-full h-full  flex flex-col justify-start items-center gap-8 p-0 md:p-4">
                    <BarElement/>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}