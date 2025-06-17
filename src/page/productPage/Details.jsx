import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Container from '../../layer/Container';

const Details = () => {
  const { product } = useOutletContext();

  return (
    <Container>
        <div className="py-6 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Product Details</h2>

        <ul className="list-disc pl-5 text-gray-700">
            <li><strong>Title:</strong> {product.title}</li>
            <li><strong>Brand:</strong> {product.brand}</li>
            <li><strong>Price:</strong> ${product.price}</li>
            <li><strong>Old Price:</strong> ${product.oldPrice}</li>
            <li><strong>Rating:</strong> {product.rating} ⭐</li>
            <li><strong>Availability:</strong> {product.availabilityStatus}</li>
            <li><strong>Reviews:</strong> {product.reviews} reviews</li>
            <li><strong>Is New:</strong> {product.isNew ? 'Yes' : 'No'}</li>
        </ul>

        <img
            src={product.images}
            alt={product.title}
            className="w-64 h-64 object-contain border rounded shadow"
        />
        </div>
    </Container>
  );
};

export default Details;
