import {React, Children, cloneElement,useState} from "react";
import PagenationUp from "utils/PagenationUp";
import PagenationDown from "utils/PagenationDown";
/*fontawesome-icons*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight,faAngleLeft } from "@fortawesome/free-solid-svg-icons";
export default function TeamContainer({children,pagenation,data,size}){
    const [page,setPage] = useState(0);
    return (
        <>
            <div className="w-full h-auto grid grid-cols-3 gap-5 p-6 ">
                {
                    data.slice((page*size),((page + 1)*size)).map((itm)=>{
                        return(
                            Children.map(children, (child, index) =>
                                cloneElement(child, {
                                    id:itm["id"],data:itm
                                })
                              )
                        );
                    })
                }
                {
                    pagenation && (
                        <div className="col-span-3">
                            <div className="w-auto h-auto flex flex-row justify-end items-center gap-4 p-4">
                                <div onClick={()=>{setPage(PagenationDown(page))}} className="w-12 h-12 flex flex-col justify-center items-center rounded-[12px] p-3 hover:bg-[#1c1c33] hover:cursor-pointer">
                                    <FontAwesomeIcon className="text-3xl text-[#f1f1f1f1]" icon={faAngleLeft} />
                                </div>
                                <div onClick={()=>{setPage(PagenationUp(page,size,data.length))}} className="w-12 h-12 flex flex-col justify-center items-center rounded-[12px] p-3 hover:bg-[#1c1c33] hover:cursor-pointer">
                                    <FontAwesomeIcon className="text-3xl text-[#f1f1f1f1]" icon={faAngleRight} />
                                </div>
                            </div>
                        </div>
                    )

                }
                
            </div>
        </>
    );
}