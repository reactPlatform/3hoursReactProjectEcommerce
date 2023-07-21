import { createContext, useEffect, useState } from "react";

const UserContext = createContext({});

export const UserContextProvider = (props) => {
    useEffect(() => {
        
       details.cartitems = cartitems;
        
    })
    const [cartitems,setCartItems] = useState([]);
    const addToCart = (item) => {
        setCartItems([...cartitems,item]);
        
    }
    const removeFromCart = (item) => {
        const updatedCart = cartitems.filter((pro) => pro.id !== item.id )
        setCartItems(updatedCart);
    }
    let details = {
        addToCart,
        removeFromCart,
        
        message:'hii'
    }
    return <UserContext.Provider value={details}>
        {props.children}
    </UserContext.Provider>
}
export default UserContext;