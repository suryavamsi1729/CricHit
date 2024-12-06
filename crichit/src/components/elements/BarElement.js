import React from "react";
import NavigationItem from "./NavigationItem";
export default  function BarElement(){
    return(
        <div className="w-full h-auto flex flex-row justify-center items-center">
            <div className="w-[75%] h-full flex flex-row justify-between items-center px-4 py-2">
                <NavigationItem>
                    <p className="font-mono text-base/[20px] font-medium text-white">Teams</p>
                </NavigationItem>
                <NavigationItem>
                    <p className="font-mono text-base/[20px] font-medium text-white">Matches</p>
                </NavigationItem>
                <NavigationItem>
                    <p className="font-mono text-base/[20px] font-medium text-white">Live</p>
                </NavigationItem>
                <NavigationItem>
                    <p className="font-mono text-base/[20px] font-medium text-white">Info</p>
                </NavigationItem>
                <NavigationItem>
                    <p className="font-mono text-base/[20px] font-medium text-white">Contact</p>
                </NavigationItem>
                <NavigationItem>
                    <p className="font-mono text-base/[20px] font-medium text-white">Help</p>
                </NavigationItem>
            </div>
            
        </div>
    );
}