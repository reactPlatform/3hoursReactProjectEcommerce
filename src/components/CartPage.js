import React from 'react'

import { useContext } from 'react';
import UserContext from '../context';
const CartPage = () => {
  const context = useContext(UserContext);
  return (
    <>
    <div>CartPage</div>
    {
      context.cartitems.map((item) => <li>{item.productName}</li>)
    }
    </>
  )
}

export default CartPage