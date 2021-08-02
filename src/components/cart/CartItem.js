import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function CartItems({item,value}) {
    const{id,name,img,price,total,count} = item;
     const {increment,decrement,removeItem} = value;

    return (
    <div className="row my-1 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
            <img
                src={img}
                style={{ width: "5rem", heigth: "5rem" }}
                className="img-fluid"
                alt="plant"
            />
            </div>
            <div className="col-10 mx-auto col-lg-2 ">
                <span className="d-lg-none">plant :</span> {name}
            </div>
            <div className="col-10 mx-auto col-lg-2 ">
                <strong>
                    <span className="d-lg-none">price :</span> {price}
                </strong>
            </div>
          {/* Quantity buttons */}  
          <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 ">
            <div className="d-flex justify-content-center">
            <div>
              <span
                className="btn btn-black mx-1"
                onClick={() => {
                  return decrement(id);
                }}
              >
                -
              </span>
                   <span className="btn btn-black mx-1">{count}</span>
              <span
                className="btn btn-black mx-1"
                onClick={() => {
                  return increment(id);
                }}
              >
                +
                    </span>
                    </div>
               </div>
          </div>
          {/* button close */}

            <div className="col-10 mx-auto col-lg-2 ">
                <div className="cart-icon" onClick={() => removeItem(id)}>
                    {/* <i className="fas fa-trash" /> */}
                    <FontAwesomeIcon icon={faTrash} />
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2 ">
                 <strong>item total : ${total} </strong>
            </div>
     </div>
    )
}
