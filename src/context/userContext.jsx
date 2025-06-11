import React, { createContext, useState } from 'react';
import { food_items } from '../food.js';

export const dataContext = createContext();

function UserContextProvider({ children }) {
  const [input, setInput] = useState("");
  const [cate, setcate] = useState(food_items);
  const [showCart, setshowCart] = useState(false);
  const data = {
    input,
    setInput,
    cate,
    setcate,
    showCart,
    setshowCart,
  };

  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
}

export default UserContextProvider;

