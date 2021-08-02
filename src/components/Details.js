import React, { Component } from 'react'
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

export default class Details extends Component {
    render() {
        return (
           <ProductConsumer>
               {value=>{
                   // console.log(value.detailProduct);
                  const {id, img, price, name, about, inCart} =
                  value.detailProduct;
                    return(
                        <div className="container py-5">
                            {/* title */}
                               <div className="row">
                                     <div className="col-10 mx-auto text-center text-slanted  my-5">
                                        <h1>{name}</h1>
                                     </div>
                               </div>
                            {/* title end */}
                       {/* plant img */} 
                            <div className="row">
                              <div className="col-8 mx-auto col-lg-4 my-2 ">
                                 <img src={img} className="img-fluid" alt="" />
                                </div>
                         {/* plant details */}       
                               <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                   <h3>Plant Name : {name}</h3>
                                   <h4>
                                        <stong> Price : <span>$</span>{price}
                                        </stong>
                                   </h4>
                                   <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        some info about product :
                                   </p>
                                  <p className="text-muted lead">{about}</p>
                         {/* Buttons */}
                               <div>
                                   <Link to="/">
                                       <button>Back to Shop</button>
                                   </Link>

                                     <button style={{marginLeft:'30px'}} 
                                        disabled={inCart ? true : false}
                                        onClick={() => {
                                        value.addToCart(id);
                                      
                                        }}>
                                            {inCart ? "inCart" : "add to cart"}
                                    </button>
                               </div>


                                </div>
                            </div>
                     
                        </div>
                    )
               }}
           </ProductConsumer>
        )
    }
}
