import {React,useRef} from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import { TextPlugin } from "gsap/TextPlugin";
import { SlowMo } from "gsap/EasePack";
import CenterContainer from "components/elements/CenterContainer";
import logo from "asserts/circhitlogo.png";
gsap.registerPlugin(useGSAP,TextPlugin,SlowMo,CustomEase);
export default function Landingpage(){
    const navigate = useNavigate();
    const container = useRef();
    const tl = useRef();
    useGSAP(
        () => {
          tl.current = gsap
            .timeline({
                onComplete: () => {
                    navigate('/login');
                },
            })
            .to('.text-cricket , .logo', {
                duration:5,
                repeat: 0,
                keyframes: {
                    scale:[0,1.2],
                    opacity:[0,1],
                    ease: "slow(0.5,0.7,true)",
                  },
                })

        },
        { scope: container }
    );
    return(
        <>
            <div className="w-screen h-screen overflow-hidden" ref={container}>
                <CenterContainer>
                    <div className="rounded-round w-64 h-64 mb-4">
                        <img src={logo} alt="logo" className=" logo w60 h-60 "/>
                    </div>
                    <h1 className="text-cricket font-display font-extrabold text-xl text-neutral-600">Where Every Swing Sparks a New Story in the World of Cricket!"</h1>
                </CenterContainer>
            </div>
        </>
    );

}