import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import { removeFromCart } from "../../redux/CartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-2/3">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <div className="flex">
              <div className="w-1/2">Item</div>
              <ul className="w-1/2 flex gap-10">
                <li className="w-20">Price</li>
                <li className="w-16">Qty</li>
                <li className="w-20">Subtotal</li>
              </ul>
            </div>
            <hr className="mt-5 text-gray-200" />
            {
              cartItems.map((item) => (
                <CartItem key={item.id} item={item} onRemove={handleRemove} />
              ))
            }
          </div>
        )}
      </div>

      <CartSummary subtotal={subtotal} />
    </div>
  );
};

export default Cart;
