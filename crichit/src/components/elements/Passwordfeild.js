import React from "react";
/*hooks*/
import useOnClick from "hooks/useOnClick";
import useTogglepsw from "hooks/useTogglepsw";
/*fontawesome*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye ,faEyeSlash} from "@fortawesome/free-solid-svg-icons";
export default function Passwordfeild({val,change,type,error,className,placeholder,children}){
    const {isclick,onclick} = useOnClick(false);
    const {pswstate,setpswstate,pswtype} =useTogglepsw(false);
    return(
        <div onClick={()=>{onclick()}} className={` ${className} flex flex-row justify-evenly items-center border-[1px] border-red-300 px-3 py-2 rounded-[16px] gap-3 has-[:focus]:outline has-[:focus]:outline-2 has-[:focus]:outline-red-300 ${error?"outline outline-2 outline-red-600":null}`}>
            {children}
            <input value={val} onChange={(e)=>change(e)} type={`${pswtype}`} placeholder={`${placeholder}`} className="grow h-auto inline-block align-middle font-mono text-lg font-medium tracking-wide text-gray-500 border-0 outline-0 bg-transparent"/>
            {
                pswstate?
                <FontAwesomeIcon icon={faEye} style={{color: "#df7272",}}
                    onClick={(e)=>{
                        setpswstate();
                    }
                } />
                :
                <FontAwesomeIcon icon={faEyeSlash} style={{color: "#df7272",}}
                    onClick={()=>{
                        setpswstate();
                    }
                } />
            }
        </div>
    );
}