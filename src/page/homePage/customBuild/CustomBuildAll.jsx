import React, { useState } from "react";
import dbData from "../../../../db.json";
import ProductCard from "../../../component/ProductCard";
import Container from "../../../layer/Container";

const CustomBuildAll = () => {
  const [data, setData] = useState(dbData.Products);
  const [visibleCount, setVisibleCount]= useState(18)
  const [loading, setLoading] = useState(false)

  const handleLoadMore= ()=>{
    setLoading(true)
    setTimeout(()=>{
        setVisibleCount(prev=>prev+6)
        setLoading(false)
    },1000)
  }

  return (
    <>
      
      <Container className="pt-10">
        
        <div className="flex flex-wrap gap-x-1 gap-y-10 mb-20">
            {data.slice(0, visibleCount).map((item) => {
            const { id, title, price, images, rating, reviews, availabilityStatus, } = item;
            return (
                <ProductCard
                key={id}
                id={id}
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
        
        {
            visibleCount<data.length && (<div className="text-center ">
                <button 
                    onClick={handleLoadMore}
                    disabled={loading}
                    className="bg-blue-400 px-6 py-3 cursour-pointer ">
                    {loading? 'Loading...': 'Load More'}
                </button>
            </div>)
        }

      </Container>
    </>
  );
};

export default CustomBuildAll;
