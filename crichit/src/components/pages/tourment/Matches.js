import React from "react";
import MatchItm from "./MatchItm";
import useFeatch from "hooks/useFeatch";
export default function Matches(){
    const [data,loading,error] = useFeatch('http://localhost:5001/api/matches');
    return(
        <>
            <div className="w-full h-auto p-4 grid grid-cols-3 gap-5">
                {
                    data.slice(0,12).map((itm)=>{
                        return (
                            <MatchItm data={itm}/>
                        );
                    })
                }
            </div>
        </>
    )
}