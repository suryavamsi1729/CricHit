import React from "react";
import './HeaderSection.css';
import image from '../../../asserts/virat-kohli-11.png';
import flag from '../../../asserts/indian flag.png';
import bcci from "../../../asserts/bcci.png";
import vkp from "../../../asserts/vkp.jpg"
export default function HeaderSection(){
    return(
        <>
            <div className="header-section w-full h-auto">
                <div className="block">
                <div className="details-section w-full h-[500px] md:h-[250px] lg:h-[200px] flex flex-row justify-center items-center p-3 px-6">
                    <div className="w-full h-full block lg:hidden">
                        <div className="w-full h-full flex flex-col justify-center items-center gap-4 ">
                            <div className="w-full h-full flex flex-row justify-center items-center flex-wrap">
                                <div className="w-full md:w-3/5 h-auto flex flex-row justify-evenly items-center">
                                    <div className="w-full h-full flex flex-row justify-between md:justify-evenly items-center">
                                        <img className="profileimg w-[65px] h-[65px] rounded-round block md:hidden border-2 border-solid border-gray-50" src={vkp} alt={"profile-image"}/>
                                        <h1 className="font-rubik font-medium text-xl text-slate-50"><span className="text-xl text-neutral-700">virat</span><span className="block text-3xl">kohli</span></h1>
                                        <img className="flag w-5 h-3" src={flag} alt={flag} />
                                        <p className="font-rubik font-semibold text-4xl text-neutral-800">#18</p>
                                    </div>
                                </div>
                                <div className="w-full md:w-2/5 h-auto flex flex-row justify-evenly items-center gap-4">
                                        <img className="w-[50px] h-[50px]" src={bcci} alt={"bcci"}/>
                                        <p className="font-rubik flex flex-row justify-evenly items-center flex-grow "><span className="inline-block font-medium text-center text-base text-zinc-700">Icc Ranking:</span><span className="inline-block font-medium text-right text-4xl text-slate-300">#8</span></p>
                                    </div>
                            </div>
                            <div className="w-full h-full block">
                                <div className="w-full h-full flex flex-col md:flex-row justify-center items-center gap-5">
                                    <div className="w-full md:w-1/3 h-auto md:h-full flex flex-col justify-center items-center gap-4">
                                        <p className="w-full h-auto flex flex-row justify-center items-center font-rubik font-medium"><span className="inline-block w-1/2 text-left text-sm text-zinc-700">Team Name:</span><span className="inline-block w-1/2 text-base  text-slate-50  text-left">India</span></p>
                                        <p className="w-full h-auto flex flex-row justify-center items-center font-rubik font-medium"><span className="inline-block w-1/2 text-left text-sm text-zinc-700">Date of Birth:</span><span className="inline-block w-1/2 text-base text-slate-50  text-left">14 Nov 1987</span></p>
                                        <p className="w-full h-auto flex flex-row justify-center items-center font-rubik font-medium"><span className="inline-block w-1/2 text-left text-sm text-zinc-700">Age:</span><span className="inline-block w-1/2 text-base text-slate-50  text-left">35</span></p>
                                    </div>
                                    <div className="w-1/3 h-full hidden md:block relative">
                                        <div className="profile-img-bg absolute bottom-[-100px] self-end w-[200px] h-[200px] rounded-round">
                                            <div className="absolute bottom-0 overflow-hidden rounded-b-[100%] w-full h-[250px] ">
                                                <img className="profileimg" src={image} alt={"profile-image"}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/3 h-auto md:h-full flex flex-col justify-center items-center gap-4 ">
                                        <p className="w-full h-auto flex flex-row justify-center items-center font-rubik font-medium"><span className="inline-block w-1/2 text-left text-sm text-zinc-700">Batting Style:</span><span className="inline-block w-1/2 text-base  text-slate-50 text-left">Right</span></p>
                                        <p className="w-full h-auto flex flex-row justify-center items-center font-rubik font-medium"><span className="inline-block w-1/2 text-left text-sm text-zinc-700">Bowling style: </span><span className="inline-block w-1/2 text-base text-slate-50 text-left">Right arm medium</span></p>
                                        <p className="w-full h-auto flex flex-row justify-center items-center font-rubik font-medium"><span className="inline-block w-1/2 text-left text-sm text-zinc-700">Role:</span><span className="inline-block w-1/2  text-base text-slate-50 text-left">Top-Order BatsMen</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/6 h-full relative hidden lg:block">
                        <div className="w-full h-full flex flex-col justify-center items-center">
                            <div className="profile-img-bg absolute bottom-[-100px] self-end w-[200px] h-[200px] rounded-round">
                                <div className="absolute bottom-0 overflow-hidden rounded-b-[100%] w-full h-[250px] ">
                                    <img className="profileimg" src={image} alt={"profile-image"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-5/6 h-full hidden lg:block">
                        <div className="w-full h-full flex flex-row justify-start items-center">
                            <div className="w-1/4 h-full flex flex-col justify-evenly items-center">
                                <h1 className="font-rubik font-medium text-xl text-slate-50"><span className="text-xl text-neutral-700">virat</span><span className="block text-3xl">kohli</span></h1>
                                <img className="flag w-5 h-3" src={flag} alt={flag} />
                                <p className="font-rubik font-semibold text-4xl text-neutral-800">#18</p>
                            </div>
                            <div className="w-[70%] h-full flex flex-col justify-start items-center gap-5">
                                <div className="w-full h-full flex flex-row justify-center items-center gap-2">
                                    <p className="w-full h-auto flex flex-col justify-evenly items-center font-rubik font-medium"><span className="text-sm text-zinc-700">Team Name:</span><span className="text-base  text-slate-50 block text-right">India</span></p>
                                    <p className="w-full h-auto flex flex-col justify-evenly items-center font-rubik font-medium"><span className="text-sm text-zinc-700">Date of Birth:</span><span className="text-base text-slate-50 block text-right">14 Nov 1987</span></p>
                                    <p className="w-full h-auto flex flex-col justify-evenly items-center font-rubik font-medium"><span className="text-sm text-zinc-700">Age:</span><span className="text-base text-slate-50 block text-right">35</span></p>
                                </div>
                                <div className="w-full h-full flex flex-row justify-center items-center gap-2">
                                    <p className="w-full h-auto flex flex-col justify-evenly items-center font-rubik font-medium"><span className="text-sm text-zinc-700">Batting Style:</span><span className="text-base  text-slate-50 block text-right">Right</span></p>
                                    <p className="w-full h-auto flex flex-col justify-evenly items-center font-rubik font-medium"><span className="text-sm text-zinc-700">Bowling style: </span><span className="text-base text-slate-50 block text-right">Right arm <span className="block font-normal text-base">medium</span></span></p>
                                    <p className="w-full h-auto flex flex-col justify-evenly items-center font-rubik font-medium"><span className="text-sm text-zinc-700">Role:</span><span className="text-base text-slate-50 block text-right">Top-Order <span className="block font-normal text-base">Batsmen</span></span></p>
                                </div>
                            </div>
                            <div className="w-[10%] h-full flex flex-col justify-center items-center gap-4">
                                <img className="w-[50px] h-[50px]" src={bcci} alt={"bcci"}/>
                                <p className="font-rubik flex flex-col justify-center items-center gap-2"><span className="inline-block font-medium text-center text-base text-zinc-700">Icc Ranking:</span><span className="inline-block font-medium text-center text-4xl text-slate-300">#8</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}