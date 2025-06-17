import React from 'react';
import Container from '../../layer/Container';
import { useOutletContext } from 'react-router-dom';

const Specs = () => {
  const { product } = useOutletContext();

  return (
    <Container>
      <div className='py-6'>
        <h2 className="text-2xl font-bold mb-4">Specifications</h2>
        <div className="space-y-2 text-gray-700">
            
            {product.specs ? (
            Object.entries(product.specs).map(([key, value]) => (
                <p key={key}>
                <strong>{key}:</strong> {value}
                </p>
            ))
            ) : (
            <p>No specifications available.</p>
            )}
        </div>
      </div>
    </Container>
  );
};

export default Specs;
