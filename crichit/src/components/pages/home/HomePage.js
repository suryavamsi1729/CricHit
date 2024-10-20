import React from "react";
//css style
import './HomePage.css';
//components importing 
import NavigationBar from "components/elements/NavigationBar";
import Banner from "components/pages/home/Banner";
import TourmentSection from "components/pages/home/TourmentSection";
import NewsSection from "./NewsSection";
import Notification from "./Notification";
import Footer from "./Footer";
export default function HomePage(){
    return(
        <>
        <div className="w-[100%] flex flex-col justify-start items-center " style={{backgroundImage:'linear-gradient(100deg,#CB0164 0%,#00002E 80%)'}}>
            <NavigationBar/>
            <Banner/>
            <TourmentSection/>
            <NewsSection/>
            <Notification/>
            <Footer/>
        </div>
        </>
    )
}