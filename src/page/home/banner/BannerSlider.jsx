import React from "react";
import Slider from "react-slick";
import banner1 from "/banner1.png";
import banner2 from "/banner2.jpg";
import banner3 from "/banner3.jpg";
import { Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className= 'bg-[#252931] absolute left-0 top-1/2 -translate-y-1/2 w-9 h-12 flex items-center justify-center cursor-pointer rounded-r-[30px] hover:bg-[#517DD4] transition-all duration-500 z-40' onClick={onClick}>
        <FaAngleLeft className="mr-1 text-lg text-1" />
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className= 'bg-[#252931] absolute right-0 top-1/2 -translate-y-1/2 w-9 h-12 flex items-center justify-center cursor-pointer rounded-l-[30px] hover:bg-[#517DD4] transition-all duration-500 z-40' onClick={onClick}>
        <FaAngleRight  className="ml-1 text-lg text-1" />
      </div>
    );
  }

const BannerSlider = ({ className }) => {
  let bannerImage = [
    {
      id: 1,
      title: "heading",
      src: banner1,
      to: "/lalala",
    },
    {
      id: 2,
      title: "heading",
      src: banner2,
      to: "/lalala",
    },
    {
      id: 3,
      title: "heading",
      src: banner3,
      to: "/lalala",
    },
  ];

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className={`${className}`}>
      <Slider {...settings}>
        {bannerImage.map((item) => (
          <Link key={item.id}  className="w-full h-[328px] outline-none ">
            <img src={item.src} alt="image" className="w-full h-full object-cover " />
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
