import {React, Children, cloneElement} from "react";
import useFeatch from "hooks/useFeatch";
import Spinner from "components/elements/Spinner";
export default  function LoadingComp({children,url,size}){
    const [data,loading,error] = useFeatch(url);
    return(
        <>
            <div className="w-full h-full">
                {loading && 
                <div className="w-full h-[20vh] flex flex-col justify-center items-center p-6 rounded-[16px] border-[1px] border-[#5d5c5c] border-solid text-[#f1f1f1] text-2xl font-bold">
                    <button className="w-auto h-auto px-4 py-2 rounded-[8px] bg-[#1c1c33] flex flex-row gap-3 justify-center items-center">
                        <Spinner/>
                        <p className="text-lg font-semibold text-white">Loading...</p>
                    </button>
                </div>}
                {!loading && (
                    Children.map(children, (child, index) =>
                        cloneElement(child, {
                            data:data,size:size
                        })
                      )
                )}
            </div>
        </>
    );
}