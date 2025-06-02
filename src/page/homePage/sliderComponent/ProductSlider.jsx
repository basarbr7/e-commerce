import React from "react";
import useFetch from "../../../FeatchApi/useFetch";
import ProductCard from "../../../component/ProductCard";
import ReusableSlider from "../../../component/ReusableSlider/ReusableSlider";
import Container from "../../../layer/Container";
import { Link } from "react-router-dom";

const ProductSlider = () => {
  const { data, isLoading, error } = useFetch("https://dummyjson.com/products");

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <Container className="py-10">
      <div className="flex justify-between items-end mb-5">
        <h1 className=" text-2xl font-semibold font-Poppins">New Products</h1>
        <Link to="/productList" className="underline text-3">
          See all Products
        </Link>
      </div>

      <ReusableSlider
        items={data}
        slidesToShow={6}
        renderItem={(item) => {
          const {id, title, price, images, rating, reviews, availabilityStatus } = item;
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
        }}
      />
    </Container>
  );
};

export default ProductSlider;
