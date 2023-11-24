import { IMG_URL } from "../utils/config"
import useHomeData from "../utils/useHomeData"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#DFCCFB" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#B4B4B3" ,hover:{color:"white"}}}
      onClick={onClick}
    />
  );
}


const Cusines=()=>{

  var settings = {
    dots: true,
    infinite: true,
    speed: 250,
    slidesToShow: 7,
    slidesToScroll: 2,
       nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
  }
const data = useHomeData()

// console.log("data",data)

return(<div className="flex flex-col w-3/4 m-auto my-8">
{/* //update login name */}
<span className="text-2xl font-bold">what's on your mind ??</span>
  <Slider {...settings}>

{data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info?.map((i) => (<div><img  className="w-11/12 " src={IMG_URL+i?.imageId}></img></div>))}

</Slider>

</div>)


}


export default Cusines