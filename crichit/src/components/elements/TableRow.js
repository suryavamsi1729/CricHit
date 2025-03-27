import {React } from "react";
export default function TableRow({data,key}){
    console.log(data[0])
    return (
        <>
            <tr key={key}  className="table-row  hover:bg-slate-500/15 ">
                <td className="table-cell  px-5 py-3 text-sm text-slate-400 font-semibold">
                    <div className="w-full h-auto flex flex-row justify-start items-center gap-3">
                        {data["position"]} 
                    </div>
                </td>
                <td className="table-cell  px-5 py-3 text-sm text-slate-300 font-medium">
                    <div className="w-full h-auto flex flex-row justify-start items-center gap-5">
                        <img src={data["image_path"]} className="w-6 h-6 rounded-round border-none"/>
                        <p>{data["name"]}</p>
                    </div>
                </td>
                <td className="table-cell  px-5 py-3 text-sm text-slate-400 font-normal">
                    <div className="w-full h-auto flex flex-row justify-start items-center">
                        {data["ranking"]["matches"]} 
                    </div>
                </td>
                <td className="table-cell  px-5 py-3 text-sm text-slate-400 font-normal">
                    <div className="w-full h-auto flex flex-row justify-start items-center">
                        {data["ranking"]["points"]} 
                    </div>
                </td><td className="table-cell  px-5 py-3 text-sm text-slate-400 font-normal">
                    <div className="w-full h-auto flex flex-row justify-start items-center">
                        {data["ranking"]["rating"]} 
                    </div>
                </td>
            </tr>
            
        </>
    )
}
