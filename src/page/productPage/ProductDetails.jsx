import React from 'react';
import { useParams } from 'react-router-dom';
import dbData from '../../../db.json';
import Container from '../../layer/Container';

const ProductDetails = () => {
const { id } = useParams();

const product = dbData.Products.find(item => item.id.toString() === id);

  if (!product) return <p>Product not found</p>;

  return (
    <Container>
        <div className="p-6">
            <img src={product.images} alt={product.title} className="w-64 h-64 object-contain mb-4" />
            <h2 className="text-2xl font-bold">{product.title}</h2>
            <p className="text-gray-600 mt-2">${product.price}</p>
            <p className="text-yellow-500 mt-2">Rating: {product.rating}</p>
            <p className="mt-4 text-sm text-gray-500">{product.availabilityStatus}</p>
            <p className="mt-4">{product.reviews} reviews</p>
            </div>
    </Container>
  );
};

export default ProductDetails;
