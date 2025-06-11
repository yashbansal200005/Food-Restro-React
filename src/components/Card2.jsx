import React from "react";
import { useDispatch } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { addItem, removeItem } from "../redux/cartSlice";

function Card2({ name, id, price, image, quantity }) {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(addItem({ id, name, price, image, quantity: 1 }));
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      dispatch(addItem({ id, name, price, image, quantity: -1 }));
    } else {
      dispatch(removeItem({ id }));
    }
  };

  return (
    <div className="w-full h-[120px] p-2 shadow-lg bg-white rounded-lg flex items-center justify-between mb-4">
      <div className="flex gap-4 items-center w-3/4">
        <img src={image} alt={name} className="w-20 h-20 object-cover rounded" />
        <div>
          <div className="font-semibold text-gray-700">{name}</div>
          <div className="flex items-center mt-1 bg-gray-200 rounded w-[100px] overflow-hidden">
            <button className="w-1/3 bg-white" onClick={handleDecrement}>-</button>
            <span className="w-1/3 text-center">{quantity}</span>
            <button className="w-1/3 bg-white" onClick={handleIncrement}>+</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between h-full">
        <span className="text-gray-700 font-semibold">Rs {price}/-</span>
        <RiDeleteBin6Line className="text-red-500 text-xl cursor-pointer" onClick={() => dispatch(removeItem({ id }))} />
      </div>
    </div>
  );
}

export default Card2;