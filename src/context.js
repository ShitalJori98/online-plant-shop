import React, { Component } from 'react'
import {storeProducts, detailProduct} from './PlantData';

const ProductContext = React.createContext();


class ProductProvider extends Component {
    state = {
        products:[],                     
        detailProduct:detailProduct,
        cart:[],
        cartSubTotal : 0,
        cartTax : 0,
        cartTotal : 0,

}
componentDidMount(){
    this.setProducts();
    this.setState({
        unified : !localStorage.getItem('myObject') 
                ? []
                : JSON.parse(localStorage.getItem('myObject'))
        })
};
setProducts = ()=>{
    let tempProducts =[];
    storeProducts.forEach(item =>{
        const singleItem ={...item};
        tempProducts =[...tempProducts, singleItem]
    })
    this.setState(()=>{
        return{products:tempProducts}
    })
};
getItem=(id)=>{
  const product= this.state.products.find(item =>item.id===id)
  return product;
};
handleDetail = (id) => {
   //console.log('from detail handler');
   const product = this.getItem(id);
   this.setState(()=>{
       return{detailProduct:product}  //copy product array into details
   })
};

addToCart =(id) =>{
    alert("Plant added to cart successfully");
    //console.log(`from add to cart. id is ${id}`)
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

this.setState(()=>{
    return {products:tempProducts, cart:[...this.state.cart, product]};
    
    },
    () => {
     // console.log(this.state);
     this.addTotals();
    //save cart at local storage
   // localStorage.setItem('products', JSON.stringify(this.state.cart));
   const unified = Object.assign({}, {cart: this.state.cart}, {subTotal: this.state.cartSubTotal})
                 localStorage.setItem('myObject', JSON.stringify(unified))
    }
    );

};

increment = (id)=>{
  console.log('increment');

};
decrement = (id)=>{
    console.log('decrement');
    
  };
removeItem = (id)=>{
    console.log('remove item method');
    
  };
 clearCart = () =>{
   console.log('clear cart method');
 };
 addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    console.log(`subtotal is ${subTotal}`);
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubTotal:subTotal,
        cartTax:tax,
        cartTotal:total
      }
    }) 
   
  };
    render() {
        return (
           <ProductContext.Provider  value={{
                 ...this.state,
                 handleDetail:this.handleDetail,
                 addToCart:this.addToCart,
                 increment:this.increment,
                 decrement:this.decrement,
                 removeItem:this.removeItem,
                 clearCart:this.clearCart
                
           }} >
               {this.props.children}
           </ProductContext.Provider>
        )
    }
}
const ProductConsumer = ProductContext.Consumer;

export{ ProductProvider, ProductConsumer};