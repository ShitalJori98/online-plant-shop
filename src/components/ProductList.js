import React, { Component } from 'react'
import Product from './Product';
import {storeProducts} from '../PlantData';
import {ProductConsumer} from '../context';

export default class ProductList extends Component {
    /* state = {
        products:storeProducts

} */
    render() {
       // console.log(this.state.products);
        return (
             <React.Fragment>
                <div className="py-5">
            <div className="container">
            

                <div className="row">
                    <ProductConsumer >
                          {value => {
                            return value.products.map(product => {
                           return <Product key={product.id} product=
                           {product} />;
                        });
                        }}   
                       {/*  {
                            value => {
                                console.log(value);
                            }
                        } */}
                    </ProductConsumer>
                </div>
                 </div>
                 </div>
            </React.Fragment>
               // <Product/>
           
        )
    }
}
