import React, { Component } from 'react'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import {ProductConsumer} from '../../context';
import CartTitle from './CartTitle';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default class Cart extends Component {
    render() {
        return (
            <div className="container">
           <section>
               <ProductConsumer>
                   {value =>{
                       const {cart} = value;
                       if(cart.length>0){
                           return( 
                               <React.Fragment>
                                   <CartTitle/>
                                    <CartColumns/>
                                    <CartList value={value}/>
                                    <CartTotals value={value}/>
                               </React.Fragment>
                             );
                       }else{
                          return <EmptyCart/>
                       }
                   }}
               </ProductConsumer>
               
              
           </section>
           
           </div>
        )
    }
}
