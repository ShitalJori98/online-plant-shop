import React from 'react'

export default function CartColumns() {
    return (
        <div className="container text-center mt-5">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase"><b>Plant</b></p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase"><b>Name of Plant</b></p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase"><b>Price</b></p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase"><b>Quantity</b></p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase"><b>Remove</b></p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase"><b>Total</b></p>
                </div>
            </div>
        </div>
    )
}
