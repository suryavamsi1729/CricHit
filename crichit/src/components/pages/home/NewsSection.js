import {React,useState,useEffect} from "react";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
//css
import "./NewsSection.css";
gsap.registerPlugin(useGSAP);

export default function NewsSection(){
    const container = useRef();
    let news = 
         [
          {
            "id": 1,
            "title": "India Defeats Pakistan in Thrilling World Cup Match",
            "description": "India clinched a spectacular win against Pakistan in the 2024 World Cup with a chase led by Virat Kohli.",
            "imageUrl": "https://staticg.sportskeeda.com/editor/2022/10/e417f-16663322688247-1920.jpg?w=1200",
            "publishedDate": "2024-10-13",
            "author": "John Doe",
            "source": "ESPN",
            "category": "World Cup",
            "url": "https://example.com/india-vs-pakistan-highlights"
          },
          {
            "id": 2,
            "title": "Australia Announces Squad for T20 Series Against South Africa",
            "description": "Australia has named a young and dynamic squad for the upcoming T20 series against South Africa.",
            "imageUrl": "https://th.bing.com/th/id/OIP.t3UKLaapprMgHXIHsARLvgHaD4?rs=1&pid=ImgDetMain",
            "publishedDate": "2024-10-12",
            "author": "Jane Smith",
            "source": "Cricbuzz",
            "category": "T20",
            "url": "https://example.com/australia-squad-t20"
          },
          {
            "id": 3,
            "title": "Ben Stokes Returns from Injury for England's World Cup Campaign",
            "description": "England received a massive boost as Ben Stokes returns from injury to strengthen their World Cup squad.",
            "imageUrl": "https://im.rediff.com/cricket/2021/jun/29worldcup.jpg",
            "publishedDate": "2024-10-10",
            "author": "Michael Clark",
            "source": "BBC Sport",
            "category": "World Cup",
            "url": "https://example.com/ben-stokes-returns"
          },
          {
            "id": 4,
            "title": "India Defeats Pakistan in Thrilling World Cup Match",
            "description": "India clinched a spectacular win against Pakistan in the 2024 World Cup with a chase led by Virat Kohli.",
            "imageUrl": "https://staticg.sportskeeda.com/editor/2022/10/e417f-16663322688247-1920.jpg?w=1200",
            "publishedDate": "2024-10-13",
            "author": "John Doe",
            "source": "ESPN",
            "category": "World Cup",
            "url": "https://example.com/india-vs-pakistan-highlights"
          },
          {
            "id": 5,
            "title": "Australia Announces Squad for T20 Series Against South Africa",
            "description": "Australia has named a young and dynamic squad for the upcoming T20 series against South Africa.",
            "imageUrl": "https://th.bing.com/th/id/OIP.t3UKLaapprMgHXIHsARLvgHaD4?rs=1&pid=ImgDetMain",
            "publishedDate": "2024-10-12",
            "author": "Jane Smith",
            "source": "Cricbuzz",
            "category": "T20",
            "url": "https://example.com/australia-squad-t20"
          },
          {
            "id": 6,
            "title": "Ben Stokes Returns from Injury for England's World Cup Campaign",
            "description": "England received a massive boost as Ben Stokes returns from injury to strengthen their World Cup squad.",
            "imageUrl": "https://im.rediff.com/cricket/2021/jun/29worldcup.jpg",
            "publishedDate": "2024-10-10",
            "author": "Michael Clark",
            "source": "BBC Sport",
            "category": "World Cup",
            "url": "https://example.com/ben-stokes-returns"
          }
        ];
    const [count,setcount] = useState(0);
    function next(){
        if(count === news.length-1){
            setcount(0);
        }
        else{
            setcount(count+1);
        }
        console.log(count);
    }
    function prev(){
        if(count === 0){
            setcount(news.length-1);
        }
        else{
            setcount(count-1);
        }
    }
    useGSAP(
        () => {
            // gsap code here...
            gsap.to('#image_ele', { scale: 1,duration:2.5 }); // <-- automatically reverted
        },
        {dependencies: [count], scope: container , revertOnUpdate: true}
    );
    useEffect(() => {
        const interval = setInterval(next, 2500); // Automatically move to next news every 2.5 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
      }, [count]);
    return (
        <>
            <div className="w-full h-auto relative flex flex-col justify-center items-center">
                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 149">
                    <path fill="#ffffff" fill-opacity="1" d="M0,32L60,48C120,64,240,96,360,101.3C480,107,600,85,720,90.7C840,96,960,128,1080,122.7C1200,117,1320,75,1380,53.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
                    </path>
                </svg>
                <div className="w-full h-[70vh] bg-white">
                    <div className="w-full h-full flex flex-col justify-center items-center gap-3 px-3">
                        <h1 className="font-rubik font-semibold text-2xl text-slate-700 ">Latest News </h1>
                        <div className="w-full md:w-6/12 lg:w-4/12 h-[90%] relative overflow-hidden bg-[#00000043] shadow-[0_4px_30px_rgba(0, 0, 0, 0.1)] backdrop-blur-[20spx] rounded-[16px]">
                            <div className="w-full relative h-full  flex flex-col  items-center rounded-[16px]  bg-cover bg-center " ref={container} >
                                <img id="image_ele" className="w-full h-full rounded-[16px] scale-[1.75] origin-center" src={news[count].imageUrl} alt={"new_img"}/>
                            </div>
                            <div className="absolute w-full h-full top-0 left-0 bg-transparent flex fle-row justify-center items-center">
                                <div className="absolute top-2  px-2 cursor-pointer w-full h-auto flex flex-row justify-center items-center gap-2">
                                    {
                                        news.map((i,ind)=>{
                                            return <div key={i.id} className={`grow h-[2.5px] rounded-[50px] ${ind<count?"bg-white":"bg-[#ffffff58]"} ${ind===count?"indicators":""}`} onClick={()=>{setcount(ind)}} ></div>
                                        })
                                    }
                                </div>
                                <button className="w-1/2 h-full outline-none border-0 cursor-default" onClick={()=>{prev()}}></button>
                                <button className="w-1/2 h-full outline-none border-0 cursor-default" onClick={()=>{next()}}></button>
                                <div className="w-[95%] h-auto absolute bottom-3 p-3 rounded-[16px] flex flex-col justify-center items-center gap-3 bg-[rgba(0,0,0,0.23)] backdrop-blur-sm">
                                    <h1 className="font-rubik text-sm text-white font-normal" >{news[count].title}</h1>
                                    <p className="font-rubik text-xs text-white font-normal">{news[count].description} <a className="font-rubik text-sm text-blue-600 font-medium" href={`${news[count].source}`}>Read More..</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 149">
                <path fill="#ffffff" fill-opacity="1" d="M0,32L60,48C120,64,240,96,360,101.3C480,107,600,85,720,90.7C840,96,960,128,1080,122.7C1200,117,1320,75,1380,53.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z">
                </path>
            </svg>
        </>
    )
}