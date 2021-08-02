import React from 'react'
 import CartItem from './CartItem'
export default function CartList({value}) {
     const {cart} = value
     console.log(value, cart);
    return (
        <div className="container">
           {/* hello from cart list */}
             
             {cart.map(item =>{
                 return <CartItem key={item.id} item={item} value={value}/> // we pass item and value to cartItem comp
             })}
            
        </div>
    )
}
