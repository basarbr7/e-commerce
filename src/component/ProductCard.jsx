import React from 'react'
import { FcApproval } from "react-icons/fc";
import { IoIosCall } from "react-icons/io";

const ProductCard = ({ title, price, images, rating, oldPrice, reviews, availabilityStatus}) => {
  return (
     <div className="rounded-md shadow-sm p-6 w-[230px] hover:scale-105 transition-transform duration-500 will-change-transform pointer ">
      <p className='mb-3 flex items-center gap-2'>
        {availabilityStatus.toLowerCase() === 'in stock' && <FcApproval />}
        {availabilityStatus.toLowerCase() === 'low stock' && <IoIosCall className='bg-red-500 p-1 rounded-full text-white'/> }
        {availabilityStatus}
      </p>
      <img src={images} alt={title} className="w-full h-40 object-contain mb-4" />
      
      {/* Rating & Reviews */}
      <div className="flex items-center text-sm text-gray-600 mb-1">
          <div className="text-yellow-400 mr-2">
            {'★'.repeat(Math.floor(rating)) + (rating % 1 ? '½' : '')}
          </div>
          <span className="text-gray-400">Reviews({ reviews?.length || 0 })</span>
      </div>
      
      
      {/* Title */}
      <h3 className="text-sm font-medium text-gray-800 mb-2">
        {title.length > 50 ? title.slice(0, 50) + '...' : title}
      </h3>

      {/* Price */}
      <div>
        {oldPrice && (
          <p className="text-sm line-through text-gray-400">${oldPrice}</p>
        )}
        <p className="text-lg font-bold text-gray-900">${price}</p>
      </div>
    </div>
  )
}

export default ProductCard