import React from 'react'
import { FcApproval } from "react-icons/fc";
import { IoIosCall } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/CartSlice';
import { useDispatch } from 'react-redux';


const ProductCard = ({id, title, price, images, rating, oldPrice, availabilityStatus}) => {
  const navigate = useNavigate();
  const dispatch= useDispatch()

  const handleAddToCart= (e)=>{
     e.stopPropagation();
     e.preventDefault() 
    const product = {
      id,
      title,
      price,
      images,
      quantity: 1,
    };
    dispatch(addToCart(product));
  }

  const handleClick = () => {
    navigate(`/productdetails/${id}`);
  };

  const renderStarString = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;

    return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
  };

  return (
     <div onClick={handleClick} className="rounded-md shadow-sm px-6 py-2 w-[230px] h-[346px] overflow-x-hidden pointer ">
      <div className='hover:scale-105 transition-transform duration-500 will-change-transform relative'>
        <p className='mb-3 flex items-center gap-2'>
          {availabilityStatus.toLowerCase() === 'in stock' && <FcApproval />}
          {availabilityStatus.toLowerCase() === 'low stock' && <IoIosCall className='bg-red-500 p-1 rounded-full text-white'/> }
          {availabilityStatus}
        </p>
        <img src={images} alt={title} className="w-full h-40 object-contain mb-4" />
        
        {/* Rating & Reviews */}
        <p className="text-yellow-500">{renderStarString(rating)}</p>
        
        
        {/* Title */}
        <div>
          <h3 className="text-sm font-medium text-gray-800 mb-2 ">
            {title.length > 50 ? title.slice(0, 50) + '...' : title}
          </h3>
        </div>

        {/* Price */}
        <div>
          {oldPrice && (
            <p className="text-sm line-through text-gray-400">${oldPrice}</p>
          )}
          <p className="text-lg font-bold text-gray-900">${price}</p>
        </div>

        <div onClick={(e)=> handleAddToCart(e)} className='group absolute right-0 bottom-0 bg-red-500 w-8 h-8 rounded-full flex items-center justify-center text-center hover:w-32 cursor-pointer transition-all duration-300 overflow-hidden text-sm text-white' >
            <span className='transition-opacity duration-300 group-hover:opacity-0 absolute'>+</span>
            <span className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Add to Cart</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard