import React from "react";

const CartSummary = ({ subtotal, location }) => {
  const shipping = 0;
  const tax = (subtotal * 0.01).toFixed(2);
  const total = (subtotal + shipping + parseFloat(tax)).toFixed(2);

  return (
    <div className="p-6 bg-white shadow rounded-lg w-full md:w-1/3">
      <h2 className="text-lg font-semibold mb-4">Summary</h2>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>${shipping}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>${tax}</span>
        </div>
        <hr />
        <div className="flex justify-between font-bold text-base mt-2">
          <span>Order Total</span>
          <span>${total}</span>
        </div>
      </div>
      <button className="bg-blue-600 text-white w-full py-2 rounded mt-6">
        Proceed to Checkout
      </button>
      <button className="bg-yellow-400 text-black w-full py-2 rounded mt-2">
        Checkout with PayPal
      </button>
    </div>
  );
};

export default CartSummary;
