import {React,Children,cloneElement} from "react";
import bcci from "../../../src/asserts/bcci.png";
import "./global.css";
export default function Table({columns, data }) {
    const rawData  = data;
    const formattedData = rawData
        .filter(item => item.gender === 'men') // Filter for gender: "men"
        .flatMap(item =>
          item.team.map(team => ({
            position: team.ranking?.position || 'N/A',
            team_name: team.name || 'N/A',
            matches: team.ranking?.matches || 'N/A',
            points: team.ranking?.points || 'N/A',
            rating: team.ranking?.rating || 'N/A',
            url: team.image_path|| 'N/A',
          }))
        );

    console.log(formattedData);
    return (
        <div className="w-full h-auto grid grid-cols-12 p-2 md:p-0">
            <div className="col-span-12 md:col-span-6 lg:col-span-5 h-[600px] px-1  py-8 rounded-[8px] bg-slate-800">
                <div className="scrollable-contaent w-full h-full px-1 overflow-auto">
                    <table className="table w-full h-auto border-collapse table-auto">
                        <thead className=" sticky top-0 z-50">
                            <tr >
                                {
                                    columns.map((col_itm,col_ind)=>{
                                        return (
                                            <th key={col_ind} className="bg-slate-800 px-1 md:px-2 py-3  pt-0 text-xs font-normal md:font-semibold text-slate-200 ">
                                                <div className="w-full h-auto flex flex-row justify-start items-center">
                                                    {col_itm.header}
                                                </div>
                                            </th>
                                        );
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                formattedData.map((row_itm,row_ind)=>{
                                    return (
                                        <tr key={row_ind}  className="hover:bg-slate-950/40">
                                            {
                                                columns.map((col_itm,col_ind)=>(
                                                    <td className="px-1 md:px-2 py-3 first:rounded-s-[4px] last:rounded-e-[4px] text-xs text-slate-400 font-normal md:font-semibold">
                                                        <div className="w-full h-auto flex flex-row justify-start items-center gap-3">
                                                            {
                                                                col_itm.render ? col_itm.render(row_itm): row_itm[col_itm.accessor]
                                                            } 
                                                        </div>
                                                    </td>
                                                ))
                                            }
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
