import React from "react";
import ProductCard from "../../../component/ProductCard";
import ReusableSlider from "../../../component/ReusableSlider";
import Container from "../../../layer/Container";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductSlider = () => {
  const data = useSelector((state) => state.products.products);
  if (!data || data.length === 0) {
    return <p className="text-center">Loading Products...</p>;
  }
  const newProducts = data.filter(product => product.isNew);

  return (
    <Container className="py-10">
      <div className="flex justify-between items-end mb-5">
        <h1 className=" text-2xl font-semibold font-Poppins">New Products</h1>
        <Link to="/productList" className="underline text-3">
          See all Products
        </Link>
      </div>

      <ReusableSlider
        items={newProducts}
        slidesToShow={6}
        renderItem={(item) => {
          const {
            id,
            title,
            price,
            oldPrice,
            images,
            rating,
            reviews,
            availabilityStatus,
          } = item;

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
        }}
      />
    </Container>
  );
};

export default ProductSlider;
