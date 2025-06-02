import React, { useState } from "react";
import dbData from "../../../db.json";
import customBuildImage from "../../../dbimage/customBuild/customBuilds.png";
import ProductCard from "../../component/ProductCard";
import { Link } from "react-router-dom";

const CustomBuild = () => {
  const [data, setData] = useState(dbData.customAllProducts);

  return (
    <>
      <p className="text-center">
        own it now, up to 6 months interest free learn more
      </p>

      <div className="flex mb-20">
        <div className="h-[346px] w-[234px] relative">
          <img src={customBuildImage} alt="image" className="w-full h-full" />
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 text-white text-center">
            <h2 className="text-2xl">Custom Builds</h2>
            <Link to='/' className="underline">
              <p className="mt-24">See all Products</p>
            </Link>
          </div>
        </div>

        {data.slice(0, 5).map((item) => {
          const { id, title,  price, images,  rating, reviews, availabilityStatus, } = item;
          return (
            <ProductCard
              key={id}
              title={title}
              price={price}
              images={images}
              rating={rating}
              reviews={reviews}
              availabilityStatus={availabilityStatus}
            />
          );
        })}
      </div>
    </>
  );
};

export default CustomBuild;
