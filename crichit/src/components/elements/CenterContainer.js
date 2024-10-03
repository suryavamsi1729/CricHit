import React from "react";
export default function CenterContainer({pad,mar,children}) {
    return (
        <div className={`flex flex-col justify-center items-center w-full h-full ${pad} ${mar}`}>
            {children}
        </div>
    );
}