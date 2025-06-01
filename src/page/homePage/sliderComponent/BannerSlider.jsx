import React from "react";
import { Link } from "react-router-dom";
import banner1 from "/banner1.png";
import banner2 from "/banner2.jpg";
import banner3 from "/banner3.jpg";
import ReusableSlider from "../../../component/ReusableSlider/ReusableSlider";

const bannerItems = [
  { id: 1, src: banner1, to: "/lalala" },
  { id: 2, src: banner2, to: "/lalala" },
  { id: 3, src: banner3, to: "/lalala" },
];

const BannerSlider = () => {
  return (
    <ReusableSlider
      items={bannerItems}
      slidesToShow={1}
      renderItem={(item) => (
        <Link className="w-full h-[328px] block">
          <img
            src={item.src}
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </Link>
      )}
    />
  );
};

export default BannerSlider;
