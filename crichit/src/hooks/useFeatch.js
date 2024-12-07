import { useState,useEffect } from "react";
import axios from "axios";
export default function useFeatch(path){
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error, setError] = useState("");
    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          setError(""); // Reset error before making the request
          try {
            const response = await axios.get(path); // Sends request to the proxy
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
    const featchProps = [data,loading,error];
    return featchProps;
}