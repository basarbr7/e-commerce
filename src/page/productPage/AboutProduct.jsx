import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Container from '../../layer/Container';

const AboutProduct = () => {
  const { product } = useOutletContext();

  return (
    <Container>
        <div className="">
        <img src={product.images} alt={product.title} className="w-64 h-auto object-cover mb-4" />
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <p className="text-gray-600 mt-2">${product.price}</p>
        <p className="text-yellow-500 mt-2">Rating: {product.rating}</p>
        <p className="mt-4 text-sm text-gray-500">{product.availabilityStatus}</p>
        <p className="mt-4">{product.reviews} reviews</p>
        </div>
    </Container>
  );
};

export default AboutProduct;
