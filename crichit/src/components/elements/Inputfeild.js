import React from "react";
/*hooks*/
export default function Inputfeild({val,change,type,className,placeholder,error,children}){
    return(
        <div className={`${className} flex flex-row justify-evenly items-center border-[1px] border-red-300 px-3 py-2 rounded-[16px] gap-3 has-[:focus]:outline has-[:focus]:outline-2 has-[:focus]:outline-red-300 ${error?"outline outline-2 outline-red-600":null}`}>
            {children}
            <input value={val} onChange={(e)=>change(e)} type={`${type}`} placeholder={`${placeholder}`} className="grow h-auto bg-transparent inline-block align-middle font-mono text-lg font-medium text-neutral-900 border-0 outline-0"/>
        </div>
    );
}