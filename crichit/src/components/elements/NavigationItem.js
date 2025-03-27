import {React,useState,useEffect} from "react";
import { useLocation } from "react-router-dom";
export default function NavigationItem({onClick,children,className,path}){
    const location = useLocation();
    const [state,setState] = useState(false);
    useEffect(()=>{
        setState(path === location.pathname);
    },[location.pathname])
    return(
        <>
            <div onClick={()=>{onClick()}} className={`navbar-itm-box relative group w-auto h-auto flex flex-row  justify-center items-center  hover:cursor-pointer ${className} `}>
                {children}
            </div>
        </>
    )
}