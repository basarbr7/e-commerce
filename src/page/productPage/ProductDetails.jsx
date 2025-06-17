import React from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductNav from './ProductNav';

const ProductDetails = () => {
  const data = useSelector(state => state.products.products);
  const { id } = useParams();

  const product = data.find(item => item.id.toString() === id);
  if (!product) return <p>Product not found</p>;

  return (
  
    <>
      <ProductNav id={id} />
      <Outlet context={{product}}/>
    </>
  );
};

export default ProductDetails;
