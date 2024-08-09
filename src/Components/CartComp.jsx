import React, { useEffect, useState } from 'react'
import { Billing } from './Billing';

import { CartItem } from './CartItem';

export const CartComp = () => {
    const [carts,setCarts]=useState([]);
    const [cartItems,setCartItems]=useState([]);


    const fetchCart = async () => {
        try {
            const cartResponse = await fetch("http://localhost:8080/cart/3");
            const cartData = await cartResponse.json();
            setCarts(cartData);
            
        } catch (error) {
          console.error('Error fetching carts:', error);
        }
      };

      const fetchCartItems = async (cartid) => {
        try {
            const cartitemResponse = await fetch(`http://localhost:8080/cart/cartitems/${cartid}`);
            const cartitemData = await cartitemResponse.json();
            setCartItems(cartitemData);
            console.log(cartitemData);
        } catch (error) {
          console.error('Error fetching cartItems:', error);
        }
      };
      
    useEffect(()=>{

        fetchCart();
        fetchCartItems(3);

    },[])


  return (
    <main className="py-12 max-w-7xl container mx-auto px-4">
        
    <div className="container mx-auto">
      <h2 className="mb-5 text-xl font-bold">Shopping Cart</h2>
      
      <div className="flex flex-col md:flex-row justify-between md:gap-8 gap-4">
        <div className="space-y-6 md:w-2/3">
          {cartItems.length ? (
            cartItems.map((p) =>  <CartItem product={p.product} cartitem={p} key={p.cartItemId} /> )
          ) : (
            <div>No Product In Your Cart !!!!!!!!!!</div>
          )}
        </div>
        <div className="md:w-1/3"><Billing /></div>
      </div>
    </div>
  </main>
  )
}
