import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import Container from '../../layer/Container';

const AboutProduct = () => {
  const { product } = useOutletContext();

  return (
    <div className="py-10 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
          
          {/* Left Side - Product Info */}
          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">{product.title}</h2>
            <p className="text-gray-700 text-lg">${product.price}</p>
            <p className="text-yellow-500 text-sm font-medium">Rating: {product.rating} / 5</p>
            <p className="text-sm text-green-600">{product.availabilityStatus}</p>
            <p className="text-sm text-gray-500">{product.reviews} reviews</p>

            {/* Color Swatches (if needed) */}
            <div className="flex items-center gap-2 mt-3">
              <span className="block w-5 h-5 bg-gray-300 rounded-full border" />
              <span className="block w-5 h-5 bg-blue-500 rounded-full border" />
              <span className="block w-5 h-5 bg-yellow-400 rounded-full border" />
            </div>

            {/* Questions */}
            <div className="mt-6 text-sm">
              Have a Question? <Link to="/contact" className="text-blue-600 underline">Contact Us</Link>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={product.images}
              alt={product.title}
              className="max-w-xs w-full object-contain"
            />
          </div>

        </div>
      </Container>
    </div>
  );
};

export default AboutProduct;
