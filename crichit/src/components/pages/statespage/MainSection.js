import React from "react";
import './MainSection.css';
import useOnClick from "hooks/useOnClick";
import { useState } from "react";
import Modelchart from "./Modelchart";
import { ChartBar } from "./ChartBar";
import { ChartStates } from "./ChartsStates";
import { Dounent46 } from "./Dounent46";
import { PolarAreaChart } from "./PolarAreaChart";
import { StikeRate } from "./StikeRate";
export default function MainSection(){
    const {isclick,onclick}= useOnClick(false);
    const [element,setElement] = useState(null);
    return(
        <>
        <div className="MainSection w-full h-auto">
            <div className="w-full h-auto relative flex flex-row justify-center items-start p-3">
                <div className=" md:mt-[75px] lg:mt-0 w-1/2 h-40px  flex flex-row justify-evenly items-center">
                    <div className="hover:cursor-pointer w-auto h-full rounded-[16px]  font-rubik font-medium text-center text-white px-4 py-1 flex flex-col justify-center items-center gap-1 group">
                    <span className=" inline-block  text-base">Test</span>
                    <span className="inline-block w-[32px] h-[2.5px] rounded-[8px] overflow-hidden relative before:block before:absolute before:inset-0 before:translate-x-[-100%]  before:bg-white before:group-hover:translate-x-0 before:duration-300"></span>
                    </div>
                    <div className=" hover:cursor-pointer w-auto h-full rounded-[16px]  font-rubik font-medium text-center text-lg text-white px-4 py-1 flex flex-col justify-center items-center gap-1 group">
                        <span className=" inline-block  text-base">ODI</span>
                        <span className="inline-block w-[32px] h-[2.5px] rounded-[8px] overflow-hidden relative before:block before:absolute before:inset-0 before:translate-x-[-100%]  before:bg-white before:group-hover:translate-x-0 before:duration-300"></span>
                    </div>
                    <div className=" hover:cursor-pointer w-auto h-full rounded-[16px]  font-rubik font-medium text-center text-lg text-white px-4 py-1 flex flex-col justify-center items-center gap-1 group">
                        <span className=" inline-block  text-base">T20</span>
                        <span className="inline-block w-[32px] h-[2.5px] rounded-[8px] overflow-hidden relative before:block before:absolute before:inset-0 before:translate-x-[-100%]  before:bg-white before:group-hover:translate-x-0 before:duration-300"></span>
                    </div>
                </div>
            </div>
            <h1 className="text-lg text-white font-semibold text-center">Batting</h1>
            <div className="w-full h-auto px-8 py-8 flex flex-row justify-start flex-wrap items-center gap-y-4">
                <div className="w-full md:w-2/4 lg:w-1/4 h-auto rounded-[16px] flex flex-col justify-center items-center gap-4">
                    <p className="w-full h-auto flex flex-row justify-center items-center">
                        <span className="w-1/2 h-auto text-left text-base font-rubik font-medium text-zinc-700">Debut :</span>
                        <span className="w-1/2 h-auto text-left text-base font-rubik font-medium text-gray-700">June 20, 2011</span>
                    </p>
                    <p className="w-full h-auto flex flex-row justify-center items-center">
                        <span className="w-1/2 h-auto text-left text-base font-rubik font-medium text-zinc-700">Aganist :</span>
                        <span className="w-1/2 h-auto text-left text-base font-rubik font-medium text-gray-700">West indias</span>
                    </p>
                    <p className="w-full h-auto flex flex-row justify-center items-center">
                        <span className="w-1/2 h-auto text-left text-base font-rubik font-medium text-zinc-700"><a className="inline-block hover:cursor-pointer hover:text-cyan-400 active:text-gray-200" onClick={
                            ()=>{
                                onclick();
                                setElement(<PolarAreaChart/>)
                            }

                            }>50s :</a></span>
                        <span className="w-1/2 h-auto text-left text-base font-rubik font-medium text-gray-700">31</span>
                    </p>
                </div>
                <div className="w-full md:w-2/4 lg:w-1/4 h-auto rounded-[16px] flex flex-col justify-center items-center gap-4">
                    <p className="w-full h-auto flex flex-row justify-center items-center">
                        <span className="w-1/2 h-auto text-left text-base font-rubik font-medium text-zinc-700">Total Matches :</span>
                        <span className="w-1/2 h-auto text-left text-base font-rubik font-medium text-gray-700">117</span>
                    </p>
                    <p className="w-full h-auto flex flex-row justify-center items-center">
                        <span className="w-1/2 h-auto text-left text-base font-rubik font-medium text-zinc-700">Innigns :</span>
                        <span className="w-1/2 h-auto text-left text-base font-rubik font-medium text-gray-700">119</span>
                    </p>
                    <p className="w-full h-auto flex flex-row justify-center items-center">
                        <span className="w-1/2 h-auto text-left text-base font-rubik font-medium text-zinc-700"><a className="inline-block hover:cursor-pointer hover:text-cyan-400 active:text-gray-200" onClick={
                            ()=>{
                                onclick();
                                setElement(<PolarAreaChart/>);
                            }
                            }>100s :</a></span>
                        <span className="w-1/2 h-auto text-left text-base font-rubik font-medium text-gray-700">29</span>
                    </p>
                </div>
                <div className="w-full md:w-2/4 lg:w-1/4 h-auto rounded-[16px] flex flex-col justify-center items-center gap-4">
                    <p className="w-full h-auto flex flex-row justify-center items-center">
                        <span className="w-1/2 h-auto text-left text-base font-rubik font-medium text-zinc-700"><a className="inline-block hover:cursor-pointer hover:text-cyan-400 active:text-gray-200" onClick={()=>{
                            onclick();
                            setElement(<ChartBar/>);
                        }}>Total Score :</a></span>
                        <span className="w-1/2 h-auto text-left text-base font-rubik font-medium text-gray-700">9035</span>
                    </p>
                    <p className="w-full h-auto flex flex-row justify-center items-center">
                        <span className="w-1/2 h-auto text-left text-base font-rubik font-medium text-zinc-700">Hightst Score :</span>
                        <span className="w-1/2 h-auto text-left text-base font-rubik font-medium text-gray-700">254*</span>
                    </p>
                    <p className="w-full h-auto flex flex-row justify-center items-center">
                        <span className="w-1/2 h-auto text-left text-base font-rubik font-medium text-zinc-700"><a className="inline-block hover:cursor-pointer hover:text-cyan-400 active:text-gray-200" onClick={()=>{
                            onclick();
                            setElement(<PolarAreaChart/>);
                            }}>200s :</a></span>
                        <span className="w-1/2 h-auto text-left text-base font-rubik font-medium text-gray-700">7</span>
                    </p>
                </div>
                <div className="w-full md:w-2/4 lg:w-1/4 h-auto rounded-[16px] flex flex-col justify-center items-center gap-4">
                    <p className="w-full h-auto flex flex-row justify-center items-center">
                        <span className="w-1/2 h-auto text-left text-base font-rubik font-medium text-zinc-700"><a className="inline-block hover:cursor-pointer hover:text-cyan-400 active:text-gray-200" onClick={()=>{
                            onclick();
                            setElement(<StikeRate/>);
                            }}>Stike Rate :</a></span>
                        <span className="w-1/2 h-auto text-left text-base font-rubik font-medium text-gray-700">55.6</span>
                    </p>
                    <p className="w-full h-auto flex flex-row justify-center items-center">
                        <span className="w-1/2 h-auto text-left text-base font-rubik font-medium text-zinc-700"><a className="inline-block hover:cursor-pointer hover:text-cyan-400 active:text-gray-200" onClick={()=>{
                            onclick();
                            setElement(<ChartStates/>);
                            }}>Avarage :</a></span>
                        <span className="w-1/2 h-auto text-left text-base font-rubik font-medium text-gray-700">48.2</span>
                    </p>
                    <p className="w-full h-auto flex flex-row justify-center items-center">
                        <span className="w-1/2 h-auto text-left text-base font-rubik font-medium text-zinc-700">Ducks :</span>
                        <span className="w-1/2 h-auto text-left text-base font-rubik font-medium text-gray-700">15</span>
                    </p>
                </div>
            </div>
            <h1 className="text-lg text-white font-semibold text-center">Bowling</h1>
            <div className="w-full h-auto px-8 py-8 flex flex-row justify-start items-center flex-wrap  gap-y-4">
                <div className="w-full md:w-2/4 lg:w-1/4 h-auto rounded-[16px] flex flex-col justify-center items-center gap-4">
                    <p className="w-full h-auto flex flex-row justify-center items-center">
                        <span className="w-1/2 h-auto text-left text-base font-rubik font-medium text-zinc-700">Balls :</span>
                        <span className="w-1/2 h-auto text-left text-base font-rubik font-medium text-gray-700">175</span>
                    </p>
                </div>
                <div className="w-full md:w-2/4 lg:w-1/4 h-auto rounded-[16px] flex flex-col justify-center items-center gap-4">
                    <p className="w-full h-auto flex flex-row justify-center items-center">
                        <span className="w-1/2 h-auto text-left text-base font-rubik font-medium text-zinc-700">Maidens: :</span>
                        <span className="w-1/2 h-auto text-left text-base font-rubik font-medium text-gray-700">2</span>
                    </p>
                </div>
                <div className="w-full md:w-2/4 lg:w-1/4 h-auto rounded-[16px] flex flex-col justify-center items-center gap-4">
                    <p className="w-full h-auto flex flex-row justify-center items-center">
                        <span className="w-1/2 h-auto text-left text-base font-rubik font-medium text-zinc-700">Wickets: :</span>
                        <span className="w-1/2 h-auto text-left text-base font-rubik font-medium text-gray-700">0</span>
                    </p>
                </div>
                <div className="w-full md:w-2/4 lg:w-1/4 h-auto rounded-[16px] flex flex-col justify-center items-center gap-4">
                    <p className="w-full h-auto flex flex-row justify-center items-center">
                        <span className="w-1/2 h-auto text-left text-base font-rubik font-medium text-zinc-700">Economy Rate: :</span>
                        <span className="w-1/2 h-auto text-left text-base font-rubik font-medium text-gray-700">2.88</span>
                    </p>
                </div>
            </div>
            <h1 className="text-lg text-white font-semibold text-center">Feilding</h1>
            <div className="w-full h-auto px-8 py-8 flex flex-row justify-start items-center flex-wrap  gap-y-4">
                <div className="w-full md:w-2/4 lg:w-1/4 h-auto rounded-[16px] flex flex-col justify-center items-center gap-4">
                    <p className="w-full h-auto flex flex-row justify-center items-center">
                        <span className="w-1/2 h-auto text-left text-base font-rubik font-medium text-zinc-700">Catches :</span>
                        <span className="w-1/2 h-auto text-left text-base font-rubik font-medium text-gray-700">113</span>
                    </p>
                </div>
                <div className="w-full md:w-2/4 lg:w-1/4 h-auto rounded-[16px] flex flex-col justify-center items-center gap-4">
                    <p className="w-full h-auto flex flex-row justify-center items-center">
                        <span className="w-1/2 h-auto text-left text-base font-rubik font-medium text-zinc-700">Most Catches in Innings :</span>
                        <span className="w-1/2 h-auto text-left text-base font-rubik font-medium text-gray-700">3</span>
                    </p>
                </div>
                <div className="w-full md:w-2/4 lg:w-1/4 h-auto rounded-[16px] flex flex-col justify-center items-center gap-4">
                    <p className="w-full h-auto flex flex-row justify-center items-center">
                        <span className="w-1/2 h-auto text-left text-base font-rubik font-medium text-zinc-700">Most Catches in Innings :</span>
                        <span className="w-1/2 h-auto text-left text-base font-rubik font-medium text-gray-700">4</span>
                    </p>
                </div>
                <div className="w-full md:w-2/4 lg:w-1/4 h-auto rounded-[16px] flex flex-col justify-center items-center gap-4">
                    <p className="w-full h-auto flex flex-row justify-center items-center">
                        <span className="w-1/2 h-auto text-left text-base font-rubik font-medium text-zinc-700">Economy Rate: :</span>
                        <span className="w-1/2 h-auto text-left text-base font-rubik font-medium text-gray-700">2.88</span>
                    </p>
                </div>
            </div>
        </div>
        <Modelchart isopen={isclick} handelOpen={onclick}>
            {
                element
            }
        </Modelchart>
        </>
    );
}