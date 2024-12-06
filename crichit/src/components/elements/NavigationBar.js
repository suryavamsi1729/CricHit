import {React,useState,useRef} from "react";
import { useNavigate } from "react-router-dom";
import {useSelector  } from "react-redux";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
//components
import NavigationItem from "./NavigationItem";
//images imaporting
import logo from "asserts/circhitlogo.png";
import profile from "asserts/pimgTP4.jpg";
//hooks
import useOnClick from "hooks/useOnClick";
/*fontawesome-icons*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
//register gsap
gsap.registerPlugin(useGSAP);
export default function NavigationBar(){
    //onclick hook
    const {isclick,onclick} = useOnClick(false);
    const container = useRef();
    const { contextSafe } = useGSAP({ scope: container });
    gsap.set(".navigation-item-container", { height: 0 });
    useGSAP(()=>{
        gsap.from(".navbar-itm-box",{
            translateX:100,
            scaleX:0,
            opacity:0.3,
            duration:0.8,
            stagger:0.1
        });
    },{scope:container,dependencies:[isclick],revertOnUpdate: true})

    //navigation
    const navigate = useNavigate();
    //useSlector gettors
    const UsersInfo = useSelector((state)=>{
        let login_user = {islogin:false};
        for(let user of state.User){
            if(user.islogin){
                return user;
            }
        }
        return login_user;
    });
    //state to check user is login or not
    const [islogin,setLogin] = useState(UsersInfo.islogin);
    
    return(
        <>
            <div className="w-full fixed z-10 mt-0 top-3 left-0 right-0 px-3" >
                <div className="main-container w-full h-auto  lg:h-14 rounded-[16px] bg-slate-900 flex flex-col lg:flex-row justify-between items-center gap-3 lg:gap-0 px-8 py-3 lg:py-0 " ref={container}>
                    <div className="brand-logo w-full lg:w-auto h-full flex justify-between items-center" >
                        <div className="w-auto h-full flex justify-center items-center gap-3">
                            <div className="w-auto h-full flex justify-start items-center">
                                <img src={logo} alt="barand-log" className="w-9 h-9 rounded-round bg-[#ffffffe6] p-1"/>
                            </div>
                            <div className="w-auto h-auto font-serif text-xl/[24px] font-normal text-white">CricHit</div>
                        </div>
                        <FontAwesomeIcon icon={faBars} className="block lg:hidden hover:text-slate-300" style={{color:"white",fontSize:"24px"}} onClick={()=>onclick()}/>
                    </div>
                    <div className={`navigation-item-container  flex-1 cursor-pointer ${isclick?"block":"hidden"} lg:block`} >
                        <div className="w-full h-full flex flex-col lg:flex-row justify-center  items-center  gap-3 lg:gap-6 rounded-[14px]">
                            <NavigationItem>
                                <p className="font-mono text-base/[20px] font-normal text-white">Home</p>
                            </NavigationItem>
                            <NavigationItem>
                                <p className="font-mono text-base/[20px] font-normal text-white">Live Score</p>
                            </NavigationItem>
                            <NavigationItem onClick={()=>{navigate("/tourment")}}>
                                <p className="font-mono text-base/[20px] font-normal text-white">Tournaments</p>
                            </NavigationItem>
                            <NavigationItem>
                                <p className="font-mono text-base/[20px] font-normal text-white">Plan Match</p>
                            </NavigationItem>
                            <NavigationItem>
                                <p className="font-mono text-base/[20px] font-normal text-white">Connect</p>
                            </NavigationItem>
                        </div>
                    </div>
                    <div className={`${isclick?"block":"hidden"} lg:block`}>
                        <div className="sign-in_up-container  w-auto h-full flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-6">
                            <NavigationItem>
                                <p className="font-mono text-base/[20px] font-normal text-white">Contact US</p>
                            </NavigationItem>
                            {
                                islogin?
                                <div className="w-9 h-9 rounded-[12px]">
                                    <img src={profile} alt="profile-img" className="w-full h-full rounded-[12px]"/>
                                </div>:
                                <div onClick={()=>{navigate("/login")}} className="w-auto h-auto rounded-[8px] cursor-pointer bg-[#97969662] px-3 py-[6px]">
                                    <p className="font-mono text-base/[20px] font-normal text-white">Login</p>
                                </div>
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}