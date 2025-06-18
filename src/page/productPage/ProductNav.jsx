import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Container from '../../layer/Container';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity, addToCart } from '../../redux/CartSlice'; // ✅ Make sure both are imported

const ProductNav = ({ product }) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const cartItems = useSelector(state => state.cart.cartItems);
  const currentItem = cartItems.find(item => item.id === Number(id));

  const [quantity, setQuantity] = useState(currentItem?.quantity || 1);

  const subtotal = product.price * quantity;

  const productMenu = [
    { id: 1, name: "About Product", path: "" },
    { id: 2, name: "Details", path: "details" },
    { id: 3, name: "Specs", path: "specs" }
  ];

  const activeStyle = " relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[3px] after:bg-blue-600 after:transition-all after:duration-300 ";
  const inactiveStyle = "text-gray-600 hover:text-blue-500";

  const handleQuantityChange = (e) => {
    let value = parseInt(e.target.value);
    if (isNaN(value) || value < 1) value = 1;
    setQuantity(value);

    if (currentItem) {
      dispatch(updateQuantity({ id: currentItem.id, quantity: value }));
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const newProduct = {
      id: Number(id),
      name: product.name,
      price: product.price,
      images: product.images,
      quantity: quantity,
    };

    dispatch(addToCart(newProduct));
  };

  return (
    <div className='border-b border-gray-200 py-5 mb-16'>
      <Container>
        <div className='flex justify-between items-center'>
          <ul className='flex gap-8'>
            {productMenu.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={`${item.path}`}
                  end
                  className={({ isActive }) => isActive ? activeStyle : inactiveStyle}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Product Info Section */}
          <div className='text-right flex items-center gap-5'>
            <div className='font-semibold flex gap-3 items-center'>
              <span>On sale from ${subtotal.toFixed(2)}</span>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
              />
            </div>

            <div
              onClick={handleAddToCart}
              className='bg-blue-600 py-5 px-12 rounded-full cursor-pointer text-white'
            >
              Add to Cart
            </div>

            <div className='bg-yellow-400 py-5 px-12 rounded-full cursor-pointer text-[#139AD6] font-bold'>
              <span className='text-[#263B80]'>Pay</span>Pal
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductNav;
