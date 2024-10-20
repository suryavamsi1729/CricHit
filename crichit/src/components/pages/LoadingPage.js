import {React,useRef} from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import { TextPlugin } from "gsap/TextPlugin";
import { SlowMo } from "gsap/EasePack";
import CenterContainer from "components/elements/CenterContainer";
gsap.registerPlugin(useGSAP,TextPlugin,SlowMo,CustomEase);
export default function LoadingPage(){
    // const navigate = useNavigate();
    const container = useRef();
    const tl = useRef();
    const t2 = useRef();
    const t3 = useRef();
    useGSAP(
        () => {
          tl.current = gsap
            .timeline({
                onComplete: () => {
                    // navigate('/login');
                    console.log("finished")
                },
            })
            .to('.ball ', {
                duration:1.2,
                repeat: -1,
                yoyo:true,
                keyframes: {
                    y:[-100,0],
                    rotation:[0,360],
                    ease: CustomEase.create("custom", "M0,0 C0.375,0.384 0.512,1 0.512,1 0.512,1 0.676,0.287 1,0.007 "),
                  },
            })
            .to(".ball-shadow",{
                duration:1.2,
                repeat: -1,
                yoyo:true,
                keyframes: {
                    scaleX:[1.3,0.8],
                    ease: CustomEase.create("custom", "M0,0 C0.375,0.384 0.512,1 0.512,1 0.512,1 0.676,0.287 1,0.007 "),
                  },
            })
            t2.current = gsap
            .timeline({repeat: -1, repeatDelay: 0.5})
            .to(".box",{
                duration: 1.2,
                yoyo: true,
                scale:[0.2,1,1,0.2],
                opacity: [0.3,1,1,0.3],
                ease: "sine.inOut",
                stagger:{
                    each:0.1,
                    from: 'center',
                    yoyo:true,
                    repeat:-1,
                }
            })

        },
        { scope: container }
    );
    return(
        <>
            <div className="w-screen h-screen overflow-hidden bg-[#e0dbdbb4] fixed" ref={container}>
                <CenterContainer>
                    <div className="ball rounded-round w-14 h-14 bg-red-600 flex flex-row justify-center items-center gap-2 overflow-hidden">
                        <div className="w-0 h-full border-r-2 border-dashed border-white"></div>
                        <div className="w-0 h-full border-r-2 border-dashed border-white"></div>
                    </div>
                    <div className="ball-shadow rounded-round w-14 h-3 bg-gray-400 opacity-75"></div>

                    <div className="mt-10 w-auto h-auto flex flex-row justify-center items-center gap-2 overflow-hidden p-4">
                        <div className="box box-1 w-[6px] h-12 rounded-[20px] bg-rose-300"></div>
                        <div className="box box-2 w-[6px] h-12 rounded-[20px] bg-rose-400"></div>
                        <div className="box box-3 w-[6px] h-12 rounded-[20px] bg-rose-500"></div>
                        <div className="box box-0 w-[6px] h-12 rounded-[20px] bg-rose-600"></div>
                        <div className="box box-3 w-[6px] h-12 rounded-[20px] bg-rose-500"></div>
                        <div className="box box-2 w-[6px] h-12 rounded-[20px] bg-rose-400"></div>
                        <div className="box box-1 w-[6px] h-12 rounded-[20px] bg-rose-300"></div>
                    </div>
                </CenterContainer>
            </div>
        </>
    );

}