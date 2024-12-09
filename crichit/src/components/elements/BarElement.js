import {React} from "react";
import { useNavigate } from "react-router-dom";
import NavigationItem from "./NavigationItem";
import "./global.css";
export default  function BarElement(){
       //navigation
       const navigate = useNavigate();
       const menu = ["teams","matches","Live","Stats","Info","Help"];
    return(
        <div className="z-50  w-full h-auto">
            <div className="w-auto h-auto flex flex-row justify-start md:justify-center items-center ">
                <div className="navigator_BarElement w-full lg:w-[90%] xl:w-[75%] h-full flex flex-row justify-start md:justify-around items-center bg-[#1c1c33] px-4 sm:pb-1 sm:pt-0 md:pb-0 md:pt-1 rounded-[14px] lg:rounded-[24px] overflow-x-auto overflow-y-hidden md:mx-[22px]">
                    {
                        menu.map((itm)=>{
                            return(
                                <NavigationItem className={" px-3 lg:px-7 py-[10px] hover:bg-[#14111c] rounded-[16px]"} onClick={()=>{navigate(`/tourment/${itm}`)}}>
                                    <p className="font-mono text-base/[20px] z-40  font-medium text-white">{itm}</p>
                                </NavigationItem>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}