import {React} from "react";
import Slider from "react-slick";
//css file
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Carousel({data_array,children,childComp:ChildComp}){
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "none", background: "red" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "none", background: "green" }}
            onClick={onClick}
          />
        );
      }
    // setTimeout(next,5000);
    var settings = {
        dots: false,
        infinite: true,
        swipeToSlide: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                nextArrow: <SampleNextArrow />,
                prevArrow: <SamplePrevArrow />
              }
            }
          ]
        // appendDots: dots => (
        //     <div
        //       style={{
        //         backgroundColor: "trnasparent",
        //         borderRadius: "10px",
        //         padding: "10px"
        //       }}
        //     >
        //       <ul style={{ margin: "20px" }}> {dots} </ul>
        //     </div>
        //   ),
        //   customPaging: i => (
        //     <div
        //       style={{
        //         margin: "2.5px",
        //         width: "15px",
        //         height: "15px",
        //         backgroundColor: "black",
        //         opacity: "0.6",
        //         borderRadius: "50%"
        //       }}
        //     >
        //     </div>
        //   )
        };
      
    return(
        <>
            <div className="w-auto h-auto flex flex-col justify-center items-center ">
                <div className={`w-[90vw] h-auto rounded-[24px] ${data_array.length>=2?"block":" sm:hidden"}  ${data_array.length>=3?"block":" md:hidden"}  ${data_array.length>=4?"block":"lg:hidden"} `}>
                    <Slider {...settings}>
                        {
                            data_array.map((data_itm,i)=>{
                                return <ChildComp key={i} data={data_itm}/>;
                            })
                        }
                    </Slider>
                </div>
                <div className={`w-[90vw] h-auto flex flex-row justify-start items-center gap-5 rounded-[24px] ${data_array.length>=2?"hidden":" sm:flex"}  ${data_array.length>=3?"hidden":" md:flex"}  ${data_array.length>=4?"hidden":"lg:flex"} `}>
                    {
                        data_array.map((data_itm,i)=>{
                            return <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-full"><ChildComp key={i} data={data_itm}/></div>;
                        })
                    }
                    
                </div>
            </div>
        </>
    );
}