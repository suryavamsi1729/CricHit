import {React} from "react";
import { useNavigate } from "react-router-dom";
import NavigationItem from "./NavigationItem";
export default  function BarElement(){
       //navigation
       const navigate = useNavigate();
       const menu = ["teams","matches","Live","Info","Contact","Help"];
    return(
        <div className="w-full h-auto flex flex-row justify-center items-center">
            <div className="w-[70%] h-full flex flex-row justify-around items-center  bg-[#1c1c33] px-4 pt-1 rounded-[24px]">
                {
                    menu.map((itm)=>{
                        return(
                            <NavigationItem className={"px-7 py-[10px] hover:bg-[#14111c] rounded-[16px]"} onClick={()=>{navigate(`/tourment/${itm}`)}}>
                                <p className="font-mono text-base/[20px] font-medium text-white">{itm}</p>
                            </NavigationItem>
                        );
                    })
                }
            </div>
            
        </div>
    );
}