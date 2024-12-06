import {React,useEffect,useState} from "react";
import axios from "axios";
import img from "../../../asserts/bcci.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import Tooltip from "components/elements/Tooltip"; 
export default function TeamItm(){
    const [data,setData] = useState([]);
    const [lodaing,setLoading] = useState(false);
    const [error, setError] = useState("");
    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          setError(""); // Reset error before making the request
    
          try {
            const response = await axios.get('http://localhost:5001/api/countries'); // Sends request to the proxy
            console.log(response.data); // Log full response for debugging
            setData(response.data.data); // Adjust based on actual response structure
          } catch (err) {
            console.error(err.message);
            setError("Failed to fetch data. Please try again."); // Display error to user
          }
    
          setLoading(false);
        };
    
        fetchData();
      }, []);
    
    // wctD0A8JAkOGidM2mhIr486nfNH8SeBAC3UOzSp9FAK10jiBdBrTCXlSyBxY
    //efdaa6ec-90eb-4532-a575-10c5a956f114
    return(
        <div className="w-full h-auto hover:bg-[#353535] rounded-[12px] p-3">
            <div className="w-full h-full flex flex-row justify-start items-center gap-x-3">
                <div className="w-[90px] h-full flex flex-row justify-center items-center">
                    <div className="w-[75px] h-[75px] flex justify-center items-center  rounded-round">
                        <img className="w-[52px] h-[52px]" src={img}/>
                    </div>
                </div>
                <div className="grow h-full flex flex-col justify-center  p-3">
                    <div className="grid grid-cols-4 gap-2">
                        {
                            data.map((itm)=>{
                                return(
                                    <div className="relative teamName flex flex-col justify-center items-center "> 
                                        <p className="text-xl font-bold text-[#F1F1F1] peer">{itm[1]}</p>
                                        <Tooltip content={itm[0]} className={"invisible peer-hover:visible"}/>
                                    </div>
                                );
                            })
                        }
                        <div className="complete-opt w-full h-full flex flex-col justify-center items-center">
                            <FontAwesomeIcon className="transition-transform ease-in delay-100 duration-300 text-[#716F6F] hover:text-[#f1f1f1] hover:translate-x-10 text-[32px]" icon={faAngleRight}  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}