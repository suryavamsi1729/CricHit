import React from "react";
/*fontawesome*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
export default function Banner({className}){
    return (
        <div className={`w-full h-screen aspect-auto ${className} bg-cover bg-no-repeat bg-top`}>
            <div className="w-full h-full flex flex-col justify-end items-center">
                <div className="w-auto h-auto mb-2">
                    <FontAwesomeIcon icon={faAngleDown} onClick={()=>{
                        let pageHeight = window.innerHeight;
                        window.scrollTo(0, pageHeight);}} beatFade style={{color: "#ffffff",fontSize:"48px"}} />
                </div>
            </div>
        </div>
    );
}