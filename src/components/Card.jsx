import React from 'react';
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice.js";

function Card({ foodItem }) {
  const dispatch = useDispatch();
  const isVeg = foodItem.food_type.toLowerCase() === "veg";

  return (
    <div className='w-[300px] h-[400px] bg-white rounded-md shadow-md flex flex-col items-center justify-between p-4 hover:scale-105 border border-transparent hover:border-green-600 transition-all'>
      <img
        className='w-full h-[260px] object-cover rounded-md'
        src={foodItem.food_image}
        alt={foodItem.food_name}
      />

      <div className='w-full mt-2 text-gray-700 font-bold text-lg'>{foodItem.food_name}</div>

      <div className='flex justify-between items-center w-full text-green-500 font-bold'>
        <p>Rs {foodItem.price}/-</p>
        <div className='flex items-center gap-2'>
          {isVeg ? (
            <LuLeafyGreen className='text-green-600 w-5 h-5' />
          ) : (
            <GiChickenOven className='text-red-600 w-5 h-5' />
          )}
          <p>{foodItem.food_type}</p>
        </div>
      </div>

      <button
        className='bg-green-500 text-white hover:bg-green-400 px-4 py-2 rounded w-full mt-2'
        onClick={() =>
          dispatch(addItem({
            id: foodItem.id,
            name: foodItem.food_name,
            price: foodItem.price,
            image: foodItem.food_image,
            quantity: 1,
          }))
        }
      >
        Add to Dish
      </button>
    </div>
  );
}

export default Card;