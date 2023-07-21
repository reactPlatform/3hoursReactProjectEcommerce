import React from 'react'
import '../index.css';
import { useContext } from 'react';
import UserContext from '../context';
const StorePage = () => {
  const {addToCart} = useContext(UserContext);
  const handleCart = (item) => {
    addToCart(item);
  }
  const productsarr = [
    {
      id:1,
      imageUrl: 'https://m.media-amazon.com/images/I/61H7zb6SCIL._AC_UF1000,1000_QL80_.jpg',
      productName: 'Laddu'
    },
    {
      id:2,
      imageUrl: 'https://m.media-amazon.com/images/I/81NGNTggslL._AC_UF1000,1000_QL80_.jpg',
      productName: 'Kheer'
    },
    {
      id:3,
      imageUrl: 'https://m.media-amazon.com/images/I/61yRXFLLfFL.jpg',
      productName: 'Gulab Jamun'
    },
    {
      id:4,
      imageUrl: 'https://m.media-amazon.com/images/I/61rkWORU1FL.jpg',
      productName: 'Gajar ka halwa'
    },
    {
      id:5,
      imageUrl: 'https://m.media-amazon.com/images/I/71vC6O+SMZL._AC_UF894,1000_QL80_.jpg',
      productName: 'Sandesh'
    },
    {
      id:6,
      imageUrl: 'https://m.media-amazon.com/images/I/71VzhPkP4uL._AC_UF1000,1000_QL80_.jpg',
      productName: 'Rasgulla'
    }
  ]
  return (
    <>
    <div className='storeContainer'>
    {
      productsarr.map((item) => (
        <div key={item.id}>
        <img className='imageContainer' src={item.imageUrl} alt={item.productName}/>
        <div>{item.productName}</div>
        <button onClick={() => handleCart(item)}>Add to Cart</button>
        </div>
      ))
    }
    </div>
    </>
  )
}

export default StorePage