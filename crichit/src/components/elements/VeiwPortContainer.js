import React from "react";
export default function VeiwPortContainer({pad,mar,children}) {
    return (
        <div className={`w-screen h-screen ${pad} ${mar}`}>
            {children}
        </div>
    );
}