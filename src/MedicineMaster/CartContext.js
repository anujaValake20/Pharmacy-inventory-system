// import React from 'react'
// import { createContext } from 'react';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
//  function CartContext() {
//     const CartContext = createContext();


  
// }
// const CartProvider = ({ children }) => {
//    const navigate=useNavigate()
//     const [cartItems, setCartItems] = useState([]);
  
//     const addToCart = (item) => {
//       setCartItems((prevCartItems) => [...prevCartItems, item]);
//      navigate('./ViewCart')
//     };
  
//     const removeFromCart = (itemId) => {
//       setCartItems((prevCartItems) =>
//         prevCartItems.filter((item) => item.id !== itemId)
//       );
//       const clearCart=()=>
//       {
//           setCartItems(cartItems)
//       }
//     };
//     return (
//       <div>
//         <CartContext.Provider   value={{
//           cartItems,
//           addToCart,
//           removeFromCart,
//          clearCart,
//         }}
//       >
//         {children}
//       </CartContext.Provider>
//       </div>
//     )
//   }
// export {CartContext,CartProvider};