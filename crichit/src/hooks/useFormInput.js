import { useState } from "react";
export default function useFormInput(init){
    const [value,setvalue] = useState(init);
    function handelchange(e){
        setvalue(e.target.value.trim());
    }
    const forminputprops = {
        value:value,
        onchange: handelchange
    }
    return forminputprops;
}