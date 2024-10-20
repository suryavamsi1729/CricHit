import {React,useRef,useState} from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import { TextPlugin } from "gsap/TextPlugin";
import { SlowMo } from "gsap/EasePack";
//css
import "./Notification.css";
//images
import image from "asserts/image-2.jpg"
/*fontawesome-icons*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell,faComment } from "@fortawesome/free-solid-svg-icons";
gsap.registerPlugin(useGSAP,TextPlugin,SlowMo,CustomEase);
export default function Notification(){
    const [comani,setani] =useState(0);
    const container = useRef();
    const tl = useRef();
    const containerRef = useRef(null);
    const paraRef = useRef(null);
    useGSAP(
        () => {
            const container = containerRef.current;
            const paragraph = paraRef.current;
            gsap.set(container, { width: 34, height: 34 });
            // Step 2: Set initial width of the paragraph to 0
            gsap.set(paragraph, { width: 0, opacity: 0 });
            tl.current = gsap
            .timeline({
                onComplete:()=>{
                    setani(1);
                }
            })
            .to('.profile-img',{
                duration: 0.8,
                keyframes:{
                    scale:[2,1]
                },
                ease:"power2.out"
            })
            
            .to(container, {
              width: '100%',  // Expand container width
              height: 'auto', // Expand container height
              duration: 0.6,
              ease:"none"
            },
            "<" // Start this animation at the same time as the previous one
            )
            .to(
                paragraph,
                {
                width: "auto", // Grow paragraph to fit content
                padding: 4,
                opacity: 1, // Fade in the paragraph text
                duration: 0.6,
                ease:"none"
                }
            )
            
            .to(
                paragraph,
                {
                width: 0, // Grow paragraph to fit content
                padding: 0,
                opacity: 0, // Fade in the paragraph text
                duration: 0.4,
                ease:"none",
                delay:1,
                }
            )
            .to(container, {
                width: '34px',  // Expand container width
                height: 'auto', // Expand container height
                duration: 0.4,
                ease:"none"
              },"<"
              )
            .to('.profile-img',{
              duration: 0.4,
              keyframes:{
                  scale:[1,0]
              },
              ease:"power2.out"
            },"<")
            window.addEventListener("resize", () => tl.current.invalidate());
        },
        { scope: container }
        
    );
    return(
        <>
            <div className="fixed  bottom-3 right-4 p-1 w-auto h-auto flex flex-col justify-center items-center bg-[#922554]  border-0 rounded-tl-[28px] rounded-tr-[28px] rounded-bl-[28px]" ref={container}>
                <div className={`w-auto h-auto relative ${comani===1?"block":"hidden"}`}  >
                    <div className="absolute z-50 bg-blue-500 rounded-round top-[10px] right-[10px] w-[6px] h-[6px] flex flex-col justify-center items-center">
                        <span class="animate-ping absolute inline-flex h-[10px] w-[10px] rounded-round bg-blue-500 opacity-[0.8]"></span>
                    </div>
                    <FontAwesomeIcon icon={faComment} className={`${comani===1?"block p-2 z-40":"hidden"}`} style={{color:"white",fontSize:"28px"}} />
                </div>
                
                <div className={`bg-[#000000b6] msg-text  shadow-[0_4px_30px_rgba(0, 0, 0, 0.1)] backdrop-blur-[20spx] rounded-[28px] p-[5px] flex flex-row justify-center items-center ${comani===1?"hidden":"block"}`} ref={containerRef}>
                    <img src={ image} alt={"profile-img"} className="profile-img w-[24px] h-[24px] rounded-round border-0"/>
                    <p className="p-0 inline-block font-rubik font-light text-xs text-white  whitespace-nowrap overflow-hidden" ref={paraRef}>Hello Surya goo dhjdjiiu Hello Surya goo dhjdjiiu Hello Surya goo dhjdjiiu Hello Surya goo dhjdjiiu Hello Surya goo dhjdjiiuHello Surya goo dhjdjiiu Hello Surya goo dhjdjiiu Hello Surya goo dhjdjiiu!</p>
                </div>
            </div>
        </>
    );
}