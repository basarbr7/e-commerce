import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { updateQuantity } from "../../redux/CartSlice";


const CartItem = ({ item, onRemove }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      dispatch(updateQuantity({ id: item.id, quantity: value }));
    }
  };

  return (
    <div>
      
      <div className="flex items-center border-b border-gray-200 py-2">
        <div className="w-1/2 flex gap-7 items-center">
          <img src={item.images} alt={item.title} className="w-28 h-28 object-contain"/>
          <h4 className="font-medium text-base">{item.title}</h4>
        </div>
        <div className="w-1/2 flex gap-10 items-center">
          <p className="w-20 text-sm text-gray-600">${item.price.toFixed(2)}</p>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={handleQuantityChange}
            className="w-16 text-center border rounded "
          />
          <p className="w-20 font-semibold ">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
          <button onClick={() => onRemove(item.id)} className="text-red-500 cursor-pointer">
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
