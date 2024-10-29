import React from "react";
import './statesstyle.css';
//imaporting components 
import NavigationBar from "components/elements/NavigationBar";
import HeaderSection from "./HeaderSection";
import image from '../../../asserts/image-2.jpg';
export default function States(){
    return(
        <>
            <div className="main-container">
                <div className="states-container w-screen h-screen flex flex-col justify-start items-center gap-4 p-4">
                    <HeaderSection/>
                </div>
            </div>
        </>
    );
}