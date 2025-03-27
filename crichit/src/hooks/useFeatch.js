import { useState,useEffect } from "react";
import axios from "axios";
export default function useFeatch(path){
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error, setError] = useState("");
    useEffect(() => {
        const fetchData = async (path) => {
          setLoading(true);
          setError(""); // Reset error before making the request
          try {
            const response = await axios.get(path); // Sends request to the proxy
            // console.log(response.data); // Log full response for debugging
            setData(response.data.data); // Adjust based on actual response structure
          } catch (err) {
            console.error(err.message);
            setError("Failed to fetch data. Please try again."); // Display error to user
          }
          setLoading(false);
        };
        async function fetchAndCustomCombine() {
          setLoading(true);
          setError(""); // Reset error before making the request
          try {
            const [api1Response, api2Response] = await Promise.all([
              axios.get(path[0]),
              axios.get(path[1])
            ]);

            const api1Data = api1Response.data.data;
            const api2Data = api2Response.data.data;
            // Combine based on a custom condition (e.g., matching names)
            const combinedData = api1Data.map(item => {
              const relatedItem = api2Data.find(data => data.id === item.team_id);
              return relatedItem ? { ...item, ...relatedItem } : item;
            });

            setData(combinedData); // Adjust based on actual response structure
          } catch (err) {
            console.error(err.message);
            setError("Failed to fetch data. Please try again."); // Display error to user
          }
          setLoading(false);
        }
        path.length>1?fetchAndCustomCombine(path):fetchData(path);
      }, []);
    const featchProps = [data,loading,error];
    return featchProps;
}