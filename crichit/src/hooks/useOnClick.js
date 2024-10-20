import { useState } from "react";
export default function useOnClick(init){
    const [value,setvalue] = useState(init);
    function handelclick(){
        setvalue(!value)
    }
    const clickprops = {
        isclick:value,
        onclick: handelclick
    }
    return clickprops;
}