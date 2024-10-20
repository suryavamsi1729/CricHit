import {React,useRef} from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {  } from "gsap/EasePack";
//css file
import "./Banner.css";
//images
import virat from "asserts/images-1.png";
gsap.registerPlugin(useGSAP);
export default function Banner(){
    const container = useRef();
    useGSAP(()=>{
        gsap.from(".animatintaing_text",{
            opacity: 0,
            x: -100, 
            duration: 1.5 ,
            ease:"back.inOut"
        })
    },{scope:container});
    return(
        <>
            <div className="w-full h-[60vh] lg:h-[85vh] z-0 relative overflow-hidden bg-transparent">
                <div className="arrow-box flex flex-row gap-3 absolute top-[15%] left-[5%] ">
                    <div className="flex flex-col ">
                        <div className="w-[12.5px] h-[22.5px] bg-[#FCAB3194] " style={{transform:"skew(-30deg)"}}></div>
                        <div className="w-[12.5px] h-[22.5px] bg-[#FCAB3194] " style={{transform:"skew(30deg)"}}></div>
                    </div>
                    <div className="flex flex-col ">
                        <div className="w-[12.5px] h-[22.5px] bg-transparent border-[3px] border-b-0 border-[#FCAB3194] " style={{transform:"skew(-30deg)"}}></div>
                        <div className="w-[12.5px] h-[22.5px] bg-transparent border-[3px] border-t-0 border-[#FCAB3194]" style={{transform:"skew(30deg)"}}></div>
                    </div>
                    <div className="flex flex-col ">
                        <div className="w-[12.5px] h-[22.5px] bg-[#FCAB3194] " style={{transform:"skew(-30deg)"}}></div>
                        <div className="w-[12.5px] h-[22.5px] bg-[#FCAB3194] " style={{transform:"skew(30deg)"}}></div>
                    </div>
                    <div className="flex flex-col ">
                        <div className="w-[12.5px] h-[22.5px] bg-[#FCAB3194] " style={{transform:"skew(-30deg)"}}></div>
                        <div className="w-[12.5px] h-[22.5px] bg-[#FCAB3194] " style={{transform:"skew(30deg)"}}></div>
                    </div>
                    <div className="flex flex-col ">
                        <div className="w-[12.5px] h-[22.5px] bg-transparent border-[3px] border-b-0 border-[#FCAB3194] " style={{transform:"skew(-30deg)"}}></div>
                        <div className="w-[12.5px] h-[22.5px] bg-transparent border-[3px] border-t-0 border-[#FCAB3194]" style={{transform:"skew(30deg)"}}></div>
                    </div>
                </div>
                <div className="w-[12.5px] h-[12.5px] hidden md:block bg-[#FCAB3194] absolute top-[25%] left-[25%]"></div>
                <div className="w-[225px] h-[225px] rounded-round absolute top-[20%] left-[40%]" style={{backgroundImage:"radial-gradient(transparent 40%,#FD122D)"}}></div>
                <div className="w-auto h-auto absolute top-[27.5%] right-[30%] flex justify-center items-center">
                    <div className="w-[350px] h-[350px] border-[1px] rounded-round border-[#FD122D] flex justify-center items-center">
                        <div className="w-[325px] h-[325px] border-[1px] rounded-round border-[#FD122D] flex justify-center items-center">
                            <div className="w-[300px] h-[300px] border-[1px] rounded-round border-[#FD122D] flex justify-center items-center">
                                <div className="w-[275px] h-[275px] border-[1px] rounded-round border-[#FD122D] flex justify-center items-center">
                                    <div className="w-[250px] h-[250px] border-[1px] rounded-round border-[#FD122D] flex justify-center items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={virat} className="fade-img hidden lg:block z-30 w-[45%] h-[90%] absolute bottom-[0%] right-[10%]" alt={"virat-img"}/>
                <div className="w-[225px] h-[225px] rounded-round absolute top-[42.5%] left-[67.5%]" style={{backgroundImage:"radial-gradient(transparent 45%,#FD122D)"}}></div>
                <div className="w-[17.5px] h-[17.5px] hidden md:block bg-[#FCAB3194] absolute top-[45%] right-[7.5%]"></div>
                <div className="arrow-box-bown flex flex-row gap-3 absolute bottom-[15%] right-[2.5%] rotate-90">
                    <div className="flex flex-col ">
                        <div className="w-[12.5px] h-[22.5px] bg-[#FCAB3194] " style={{transform:"skew(-30deg)"}}></div>
                        <div className="w-[12.5px] h-[22.5px] bg-[#FCAB3194] " style={{transform:"skew(30deg)"}}></div>
                    </div>
                    <div className="flex flex-col ">
                        <div className="w-[12.5px] h-[22.5px] bg-transparent border-[3px] border-b-0 border-[#FCAB3194] " style={{transform:"skew(-30deg)"}}></div>
                        <div className="w-[12.5px] h-[22.5px] bg-transparent border-[3px] border-t-0 border-[#FCAB3194]" style={{transform:"skew(30deg)"}}></div>
                    </div>
                    <div className="flex flex-col ">
                        <div className="w-[12.5px] h-[22.5px] bg-[#FCAB3194] " style={{transform:"skew(-30deg)"}}></div>
                        <div className="w-[12.5px] h-[22.5px] bg-[#FCAB3194] " style={{transform:"skew(30deg)"}}></div>
                    </div>
                    <div className="flex flex-col ">
                        <div className="w-[12.5px] h-[22.5px] bg-[#FCAB3194] " style={{transform:"skew(-30deg)"}}></div>
                        <div className="w-[12.5px] h-[22.5px] bg-[#FCAB3194] " style={{transform:"skew(30deg)"}}></div>
                    </div>
                    <div className="flex flex-col ">
                        <div className="w-[12.5px] h-[22.5px] bg-transparent border-[3px] border-b-0 border-[#FCAB3194] " style={{transform:"skew(-30deg)"}}></div>
                        <div className="w-[12.5px] h-[22.5px] bg-transparent border-[3px] border-t-0 border-[#FCAB3194]" style={{transform:"skew(30deg)"}}></div>
                    </div>
                </div>
                <div className="w-auto h-auto flex flex-col justify-center items-center gap-6 absolute  top-[45%] md:left-[10%]" ref={container}>
                    <h1 className="brand-name font-rubik text-7xl font-semibold text-white">CricHit</h1>
                    <p className=" animatintaing_text font-rubik text-xl font-normal text-center text-white "> "Where Every Swing Sparks a New Story in the World of Cricket! "</p>
                </div>
                
                
            </div>
        </>
    )
}