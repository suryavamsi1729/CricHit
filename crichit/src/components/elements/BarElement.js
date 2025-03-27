import {React} from "react";
import { useNavigate,useLocation } from "react-router-dom";
import NavigationItem from "./NavigationItem";
import "./global.css";
export default  function BarElement(){
       //navigation
       const location = useLocation();
       const navigate = useNavigate();
       const menu = [
            {name : "teams",path: "/tourment/teams"},
            {name : "matches",path: "/tourment/matches"},
            {name : "Live",path: "/tourment/Live"},
            {name : "Stats",path: "/tourment/Stats"},
            {name : "Info",path: "/tourment/Info"},
            {name : "Help",path: "/tourment/Help"}
       ];   
    return(
        <div className="z-50  w-full h-auto">
            <div className="w-auto h-auto flex flex-row justify-start md:justify-center items-center ">
                <div className="navigator_BarElement w-full lg:w-[90%] xl:w-[75%] h-full flex flex-row justify-start md:justify-around items-center bg-[#1c1c33] px-4 sm:pb-1 sm:pt-0 md:pb-0 md:pt-1 rounded-[14px] lg:rounded-[24px] overflow-x-auto overflow-y-hidden md:mx-[22px]">
                    {
                        menu.map((itm,ind)=>{
                            return(
                                <NavigationItem key={ind} path={itm.path} className={` px-3 lg:px-7 py-[10px] hover:bg-[#14111c] ${location.pathname === itm.path?"bg-[#14111c]":""} rounded-[16px] rounded-t-[0px] md:rounded-t-[16px] md:rounded-b-[0px]`} onClick={()=>{navigate(itm.path)}}>
                                    <p className="font-mono text-base/[20px] z-40  font-medium text-white">{itm.name}</p>
                                    <div className={`absolute left-[-24px] top-0 md:top-auto md:bottom-0 w-[24px] h-[24px] group-hover:block group-hover:bg-[#14111c]  ${location.pathname === itm.path?"block bg-[#14111c]":"hidden bg-[#1c1c33]"}`}>
                                        <div className="w-full h-full bg-[#1c1c33] rounded-tr-[16px] md:rounded-tr-[0px] md:rounded-br-[16px]"></div>
                                    </div>
                                    <div className={`absolute right-[-24px] top-0 md:top-auto md:bottom-0 w-[24px] h-[24px] group-hover:block group-hover:bg-[#14111c] ${location.pathname === itm.path?"block bg-[#14111c]":"hidden bg-[#1c1c33]"}`}>
                                        <div className="w-full h-full bg-[#1c1c33] rounded-tl-[16px] md:rounded-tl-[0px] md:rounded-bl-[16px]"></div>
                                    </div>
                                </NavigationItem>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}