import React from "react";
import './TourmentSection.css'
//import components
import Carousel from "components/elements/Carousel";
import CarouselItm from "components/elements/CarouselItm";
import ScoreCard from "components/elements/ScoreCard";
export default function TourmentSection(){
    //images array
    const tour_data = [
        {
            tourmenrt_name:"ICC Cricket World Cup",
            image:"https://www.en.etemaaddaily.com/pages/sports/cricket/7900icc.jpg"
        },
        {
            tourmenrt_name:"T20 World Cup",
            image:"https://png.pngtree.com/png-vector/20240108/ourmid/pngtree-icc-mens-t20-world-cup-2024-logo-vector-png-image_11201318.png"
        },
        {
            tourmenrt_name:"The Ashes Series",
            image:"https://addictofsports.files.wordpress.com/2023/07/ashes-cup.jpg"
        },
        {
            tourmenrt_name:"Indian Premier League",
            image:"https://www.bing.com/ck/a?!&&p=a484549121a5b9b1JmltdHM9MTcyODYwNDgwMCZpZ3VpZD0zODgwMjlkMS1kM2UzLTYzMWYtMjAzYy0zYTRhZDI1MTYyM2YmaW5zaWQ9NTc0Mw&ptn=3&ver=2&hsh=3&fclid=388029d1-d3e3-631f-203c-3a4ad251623f&u=a1L2ltYWdlcy9zZWFyY2g_cT1pcGwlMjBsb2dvJkZPUk09SVFGUkJBJmlkPTlGMjg2QUZGNzQ1REVDQzdGMjRBN0IwOTRDQkE5QjJFOTI5Q0Q4QzA&ntb=1"
        },
        {
            tourmenrt_name:"ICC Champion Trophy",
            image:"https://th.bing.com/th/id/OIP.-tFK7inC96AdfGW8ylhK8AHaFO?rs=1&pid=ImgDetMain"
        },
        {
            tourmenrt_name:"Indian Premier League",
            image:"https://www.bing.com/ck/a?!&&p=a484549121a5b9b1JmltdHM9MTcyODYwNDgwMCZpZ3VpZD0zODgwMjlkMS1kM2UzLTYzMWYtMjAzYy0zYTRhZDI1MTYyM2YmaW5zaWQ9NTc0Mw&ptn=3&ver=2&hsh=3&fclid=388029d1-d3e3-631f-203c-3a4ad251623f&u=a1L2ltYWdlcy9zZWFyY2g_cT1pcGwlMjBsb2dvJkZPUk09SVFGUkJBJmlkPTlGMjg2QUZGNzQ1REVDQzdGMjRBN0IwOTRDQkE5QjJFOTI5Q0Q4QzA&ntb=1"
        },
        {
            tourmenrt_name:"ICC Champion Trophy",
            image:"https://th.bing.com/th/id/OIP.-tFK7inC96AdfGW8ylhK8AHaFO?rs=1&pid=ImgDetMain"
        },
        
    ];
    return(
        <>
        
        <div className="w-full h-auto bg-transparent flex flex-col justify-center items-center relative pt-5 ">
            <h1 className="font-rubik font-semibold text-3xl text-white text-center">Upcoming Tourments</h1>
            <div className="w-full h-auto flex flex-row justify-center items-center py-10">
                <Carousel data_array={tour_data} childComp={CarouselItm}/>
            </div>
        </div>
        <div className="w-full h-auto bg-transparent flex flex-col justify-center items-center relative pt-5 ">
            <h1 className="font-rubik font-semibold text-3xl text-white text-center">Live Matches</h1>
            <div className="w-full h-auto flex flex-row justify-center items-center py-10">
                <Carousel data_array={tour_data} childComp={ScoreCard}/>
            </div>
        </div>
        </>
    );
}