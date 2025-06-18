import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import Container from '../../layer/Container';

const Details = () => {
  const { product } = useOutletContext();

  return (
    <Container>
        <div className="py-10 flex flex-col lg:flex-row items-center lg:items-start gap-10">
          <div className='w-full lg:w-1/2 space-y-4'>
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
            <div className="mt-6 text-sm">
              Have a Question? <Link to="/contact" className="text-blue-600 underline">Contact Us</Link>
            </div>
          </div>

          <div className='w-full lg:w-1/2 flex justify-center'>
            <img
              src={product.images}
              alt={product.title}
              className="w-1/2 h-auto object-cover border rounded shadow"
            />
          </div>
        </div>
    </Container>
  );
};

export default Details;
