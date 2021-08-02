import React, { Component } from 'react'
import ProductList from './ProductList'
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';



export default class Product extends Component {
    
    render() {
        const { id, name, img, price, inCart} = this.props.product;
        return (
           
           <ProductWrapper className="col-xl-4 col-lg-4 col-md-4 col-sm-4 my-3" >
                {/* <div className="container"> */}
                   <div className="card" style={{borderRadius:'30px'}}>
                 
                   <div style={{textAlign:'right', marginRight:'30px', marginTop:'20px'}}>
                     <span > <FavoriteBorderIcon/> {' '}</span>  
                 </div>
                 <ProductConsumer>
                  {value => {
                      return(
                   
                 <div className="img-container p-5" 
                           onClick={()=> 
                              value.handleDetail(id)
                           }> 
                            <Link to="/details">
                            <img src={img} alt="product" className="card-img-top"/>
                            </Link>
                               <div style={{textAlign:'center',marginTop:'20px'}}>
                                    <b> 
                                        <h5 className="align-self-center mb-0">{name}</h5>
                                    </b>
                               </div>

                                    {/* <button className="cart-btn"
                                    onClick={()=>{ console.log("added to cart")}}>
                                    Add to cart 
                                    </button> */}
                   
                  
                                    <div className="d-flex justify-content-between" style={{marginTop:'30px'}}>
                                    {/*  <p className="align-self-center mb-0">{name}</p> */}
                                        <h5 className="text-blue font-italic mb-0">
                                            <span className="mr-1">$</span>{price}
                                        </h5>
                                        <button className="cart-btn"
                                            onClick={()=> { 
                                                value.addToCart(id);
                                            }} style={{borderRadius:'8px'}}>
                                            Add to Cart 
                                        </button>
                                    </div>
                </div>
                      );
                  }}
                 
                </ProductConsumer>      
                </div>
               {/*  </div> */}
           </ProductWrapper>
        )
    }
}
const ProductWrapper = styled.div`
 .img-container{
     position: relative;
     overfow: hidden;
     border-radius: 15px
 }
`