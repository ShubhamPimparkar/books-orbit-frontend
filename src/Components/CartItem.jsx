import axios from 'axios';
import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";

export const CartItem = ({ product, cartitem, onUpdateCart,onUpdateCartItems }) => {
  const [quantity, setQuantity] = useState(cartitem.quantity);

  const handleDecreaseQuantity = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/cart/updateItems/cartitemid/${cartitem.cartItemId}/bookid/${product.bookId}/quantity/-1`);
      console.log(response);
      setQuantity(prev => prev - 1); // Update local state
      if (onUpdateCart) onUpdateCart(); // Notify parent to update cart
    } catch (error) {
      console.error('Error decreasing quantity:', error);
    }
  };

  const handleIncreaseQuantity = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/cart/updateItems/cartitemid/${cartitem.cartItemId}/bookid/${product.bookId}/quantity/1`);
      console.log(response);
      setQuantity(prev => prev + 1); // Update local state
      if (onUpdateCart) onUpdateCart(); // Notify parent to update cart
    } catch (error) {
      console.error('Error increasing quantity:', error);
    }
  };

  const handleRemoveFromCart = async () => {
    try {
      const response = await axios.delete(`http://localhost:8080/cart/cartId/5/bookId/${product.bookId}`);
      console.log(response);
      if (onUpdateCart) onUpdateCart(); // Notify parent to update cart
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  return (
    <div>
      <div className="rounded-lg">
        <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
          <img
            src={product.imgUrl}
            alt="product-image"
            className="w-full h-28 rounded-lg sm:w-40"
          />
          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div className="mt-5 sm:mt-0">
              <h2 className="text-lg font-bold text-gray-900">
                {product.bookName}
              </h2>
              <p className="mt-1 text-sm text-gray-700">Price: ${product.price}</p>
              <p className="mt-1 text-sm text-gray-700">Author: </p>
            </div>
            <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div className="flex items-center border-gray-100">
                <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={handleDecreaseQuantity}>
                  {" "}
                  -{" "}
                </span>
                <input
                  className="h-8 w-8 border bg-white text-center text-xs outline-none"
                  type="number"
                  value={quantity}
                  min="1"
                  readOnly
                />
                <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={handleIncreaseQuantity}>
                  +
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-sm">${product.price * quantity}</p>
                <button className="lws-removeFromCart" onClick={handleRemoveFromCart}>
                  <IoMdClose />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
