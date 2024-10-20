import { useState } from "react";
export default function useTogglepsw(init){
    const [value,setvalue] = useState(init);
    const [psw,setpsw] = useState("password");
    function handelclick(){
        setvalue(!value)
        if(value){
            
            setpsw("password");
        }
        else{
            setpsw("text");
        }
    }
    const pswprops = {
        pswstate:value,
        setpswstate: handelclick,
        pswtype: psw
    }
    return pswprops;
}