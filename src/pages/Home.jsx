import React, { useContext, useEffect } from 'react';
import Nav from '../components/Nav.jsx';
import { categories } from '../Category.jsx';
import { food_items } from '../food.js';
import Card from '../components/Card.jsx';
import Card2 from '../components/Card2.jsx';
import { dataContext } from '../context/userContext.jsx';
import { RxCross2 } from "react-icons/rx";
import { useSelector } from 'react-redux';

function Home() {
  const { cate, setcate, input, showCart, setshowCart } = useContext(dataContext);
  const cartItems = useSelector((state) => state.cart.items);

  // Category filter
  function filter(category) {
    if (category === "All") {
      setcate(food_items);
    } else {
      const filteredItems = food_items.filter(
        (item) => item.food_category.toLowerCase() === category.toLowerCase()
      );
      setcate(filteredItems);
    }
  }

  // Input search filter effect
  useEffect(() => {
    if (input.trim() === "") {
      setcate(food_items);
    } else {
      const filteredItems = food_items.filter(
        (item) =>
          item.food_name.toLowerCase().includes(input.toLowerCase()) ||
          item.food_category.toLowerCase().includes(input.toLowerCase())
      );
      setcate(filteredItems);
    }
  }, [input]);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div className='w-full min-h-screen bg-slate-200'>
      <Nav />

      {/* Category Buttons */}
      {input.trim() === "" && (
        <div className='flex flex-wrap px-[20px] py-[20px] gap-[30px] justify-center items-center'>
          {categories.map((category) => (
            <div key={category.id}>
              <div
                onClick={() => filter(category.name)}
                className='w-[140px] h-[150px] bg-white flex flex-col items-center justify-center rounded-md shadow-md font-semibold text-gray-600 text-[20px] hover:scale-110 hover:bg-green-200 transition-all duration-200 ease-in-out'>
                {category.image}
                {category.name}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Food Cards */}
      <div className='flex justify-center items-center mt-[20px] flex-wrap gap-[30px]'>
        {cate.length > 0 ? (
          cate.map((item) => (
            <Card key={item.id} foodItem={item} />
          ))
        ) : (
          <p className='text-center text-gray-600 text-lg'>No items found.</p>
        )}
      </div>

      {/* Slide-in Cart Panel */}
      <div className={`w-full sm:w-[40vw] h-full bg-white fixed top-0 right-0 shadow-xl transition-transform duration-500 p-6 z-50 ${showCart ? 'translate-x-0' : 'translate-x-full'}`}>
        <header className='w-full h-[60px] flex items-center justify-between px-2'>
          <span className='font-semibold text-green-400 text-[18px]'>Your Cart</span>
          <RxCross2
            className='w-[30px] h-[30px] text-green-400 cursor-pointer hover:text-green-600'
            onClick={() => setshowCart(false)}
          />
        </header>

        {/* Cart Items List */}
        <div className='mt-4 overflow-y-auto max-h-[60vh] space-y-4'>
          {cartItems.length === 0 ? (
            <p className='text-gray-500 text-center mt-10'>No items in cart.</p>
          ) : (
            cartItems.map((item, index) => (
              <Card2
                key={index}
                name={item.name}
                price={item.price}
                image={item.image}
                id={item.id}
                quantity={item.quantity}
              />
            ))
          )}
        </div>

        {/* Price Summary */}
        {cartItems.length > 0 && (
          <div className='mt-4 pt-4 border-t'>
            <div className='flex justify-between items-center text-gray-700 text-lg font-semibold mb-2'>
              <span>Total Items</span>
              <span>{totalItems}</span>
            </div>
            <div className='flex justify-between items-center text-gray-700 text-lg font-semibold mb-4'>
              <span>Subtotal</span>
              <span>Rs {subtotal}/-</span>
            </div>
            <button className='bg-green-500 text-white w-full py-3 rounded-md font-bold hover:bg-green-600 transition-all'>
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
