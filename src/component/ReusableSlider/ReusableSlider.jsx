import React from "react";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="bg-[#252931] absolute left-0 top-1/2 -translate-y-1/2 w-9 h-12 flex items-center justify-center cursor-pointer rounded-r-[30px] hover:bg-[#517DD4] transition-all duration-500 z-40"
      onClick={onClick}
    >
      <FaAngleLeft className="mr-1 text-lg text-white" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="bg-[#252931] absolute right-0 top-1/2 -translate-y-1/2 w-9 h-12 flex items-center justify-center cursor-pointer rounded-l-[30px] hover:bg-[#517DD4] transition-all duration-500 z-40"
      onClick={onClick}
    >
      <FaAngleRight className="ml-1 text-lg text-white" />
    </div>
  );
}

const ReusableSlider = ({ items = [], renderItem, slidesToShow=1, className = "" }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: slidesToShow,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SampleNextArrow />,
  };

  return (
    <div className={className}>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={item.id || index} className="outline-none">
            {renderItem(item)}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReusableSlider;
