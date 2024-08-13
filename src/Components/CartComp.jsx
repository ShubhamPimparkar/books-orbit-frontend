import React, { useEffect, useState, useCallback } from 'react';
import { Billing } from './Billing';
import { CartItem } from './CartItem';

export const CartComp = () => {
  const [carts, setCarts] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userId = localStorage.getItem("userid");

  const fetchCart = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:8080/cart/${userId}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setCarts(data);
    } catch (error) {
      console.error('Error fetching cart:', error);
      setError('Failed to fetch cart data');
    }
  }, []);

  const fetchCartItems = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:8080/cart/cartitems/${userId}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setCartItems(data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
      setError('Failed to fetch cart items');
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await fetchCart();
      await fetchCartItems();
      setLoading(false);
    };

    fetchData();
  }, [fetchCart, fetchCartItems]);

  const handleQuantityChange = async (cartItemId, bookId, change) => {
    try {
      const response = await fetch(`http://localhost:8080/cart/updateItems/cartitemid/${cartItemId}/bookid/${bookId}/quantity/${change}`, { method: 'PUT' });
      if (!response.ok) throw new Error('Network response was not ok');
      await fetchCartItems(); // Refresh cart items
      await fetchCart(); // Refresh cart
    } catch (error) {
      console.error('Error updating quantity:', error);
      setError('Failed to update quantity');
    }
  };

  const handleRemoveFromCart = async (cartItemId, bookId) => {
    try {
      const response = await fetch(`http://localhost:8080/cart/cartId/${userId}/bookId/${bookId}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Network response was not ok');
      await fetchCartItems(); // Refresh cart items
      await fetchCart(); // Refresh cart
    } catch (error) {
      console.error('Error removing from cart:', error);
      setError('Failed to remove item from cart');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <main className="py-12 max-w-7xl container mx-auto px-4">
      <div className="container mx-auto">
        <h2 className="mb-5 ml-7 mt-11 text-3xl text-blue-700 font-bold">Shopping Cart</h2>
        <div className="flex flex-col md:flex-row justify-between md:gap-8 gap-4">
          <div className="space-y-6 md:w-2/3">
            {cartItems.length ? (
              cartItems.map((item) => (
                <CartItem
                  product={item.product}
                  cartitem={item}
                  key={item.cartItemId}
                  onQuantityChange={handleQuantityChange}
                  onRemoveFromCart={handleRemoveFromCart}
                />
              ))
            ) : (
              <div className='text-xl ml-3 mt-5 bg-slate-300 rounded p-3  font-bold'>No Products In Your Cart</div>
            )}
          </div>
          <div className="md:w-1/3">
            <Billing cart={carts} />
          </div>
        </div>
      </div>
    </main>
  );
};
