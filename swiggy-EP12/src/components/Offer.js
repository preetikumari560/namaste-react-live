import Slider from "react-slick"
import { IMG_URL } from "../utils/config"
import useHomeData from "../utils/useHomeData"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#ADC4CE" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#D0BFFF",hover:{color:"white"} }}
      onClick={onClick}
    />
  );
}

const Offer=()=>{
  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
       nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
  }


const data = useHomeData()

// console.log("data",data)

return(<div className="flex flex-col w-3/4 m-auto my-8">
<span className="text-2xl font-bold">Best Offers for you !</span>
  <Slider {...settings}>
{data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info.map((i) => (<div className="m-5"><img  className="w-11/12 " src={IMG_URL+i?.imageId}></img></div>))}
</Slider>
</div>)


}


export default Offer