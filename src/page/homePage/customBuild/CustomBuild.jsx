import React from "react";
import customBuildImage from "/dbimage/customBuild/customBuilds.png";
import ProductCard from "../../../component/ProductCard";
import { Link } from "react-router-dom";
import Zip from "../../../assets/primary 1.png"
import { useSelector } from "react-redux";

const CustomBuild = () => {
  const data = useSelector(state=>state.products.products)
  if (!data || data.length === 0) {
      return <p className="text-center">Loading Products...</p>;
  }
  const find = data.filter(item=>item.catagory==="custom")
  
  return (
    <>
      <div className="bg-1 text-center text-lg font-Poppins py-5 mb-4 flex justify-center items-center gap-5 ">
        <img src={Zip} alt="image" /> own it now, up to 6 months interest free learn more
      </div>

      <div className="flex gap-x-1 mb-20">
        <div className="h-[346px] w-[234px] relative">
          <img src={customBuildImage} alt="image" className="w-full h-full" />
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 text-white text-center">
            <h2 className="text-2xl">Custom Builds</h2>
            <Link to="/customProduct" className="underline">
              <p className="mt-24">See all Products</p>
            </Link>
          </div>
        </div>

        {find.slice(0, 5).map((item) => {
          const {id, title, price, oldPrice, images, rating, reviews,
            availabilityStatus,} = item;
          return (
            <ProductCard
              key={id}
              id={id}
              title={title}
              price={price}
              oldPrice={oldPrice}
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
