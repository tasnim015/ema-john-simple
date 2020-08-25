import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    //const price = cart.reduce((total,prd)=>total+prd.price,0)
    let price = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        price = price + product.price;
    }
    let shipping = 0;
    if (price > 35) {
        shipping = 0;
    }
    else if (price > 15) {
        shipping = 4.99;
    }
    else if (price > 0) {
        shipping = 12.99;
    }
    
    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    const tax = formatNumber(price/10);

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length} </p>
            <p>Product Price: {formatNumber(price)}</p>
            <p>Shipping cost: {shipping}</p>
            <p>tax+vat: {tax}</p>
            <p>Total Price: {formatNumber(price + shipping+tax)} </p>
        </div>
    );
};

export default Cart;