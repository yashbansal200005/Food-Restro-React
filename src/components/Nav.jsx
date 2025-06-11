import React, { useContext, useEffect } from 'react';
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from '../context/userContext.jsx';
import { food_items } from '../food.js';
import { useSelector } from 'react-redux';

function Nav() {
  const { input, setInput, cate, setcate, showCart, setshowCart } = useContext(dataContext);
  
  // Get all cart items from Redux
  const items = useSelector((state) => state.cart.items);

  // ✅ Compute total quantity of items
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const filteredItems = food_items.filter((item) =>
      item.food_name.toLowerCase().includes(input.toLowerCase())
    );
    setcate(filteredItems);
  }, [input, setcate]);

  return (
    <div className='w-full h-[100px] flex justify-between items-center px-8'>
      <div className='w-[60px] h-[60px] bg-white flex items-center justify-center rounded-md shadow-md'>
        <MdFastfood className='w-[30px] h-[30px] text-green-500' />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[45%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md md:w-[70%]"
      >
        <IoSearch className="w-[20px] h-[20px] text-green-500" />
        <input
          type="text"
          placeholder="Search Items.."
          className="w-full outline-none text-[16px] md:text-[20px]"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>

      <div
        className='w-[60px] h-[60px] bg-white flex items-center justify-center rounded-md shadow-md relative cursor-pointer'
        onClick={() => setshowCart(!showCart)}
      >
        {/* ✅ Badge showing total quantity */}
        <span className='text-[14px] font-bold text-white bg-green-500 px-[6px] py-[2px] rounded-full absolute -top-1 -right-1'>
          {totalQuantity}
        </span>
        <LuShoppingBag className='w-[30px] h-[30px] text-green-500' />
      </div>
    </div>
  );
}

export default Nav;
