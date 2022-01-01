import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props.cart)
    //destructuring
    const {cart } = props;

    /* const totalReducer = (previous, product) => previous + product.price;
    
    const total = cart.reduce(totalReducer , 0);
    //aivabe initial value zero diye dite hoy reduce use korar shomoy
    //product = current item
 */


   //reduce sara total price aivabe count kora jay
    let total = 0;//zero initial disi cz shob gulor price jug korbo
    for(const product of cart){
        total = total + product.price;
    }
   

    //tax, shipping , grand Total; etc dekhate parbo
    const shipping = total > 0 ? 15 : 0;//this line means if(total >0){const shipping = 15;} else{const shipping = 0;}
    
    const tax = (total + shipping) *0.10;
    const grandTotal = total + tax + shipping;

    return (
        <div>
            <h3>Order Summary: </h3>
            <h5>Items Ordered: {props.cart.length}</h5>
            <p>Total: {total.toFixed(2)} </p>
            <p>Shipping: {shipping} </p>
            <p>Tax: {tax.toFixed(2)} </p>
            <p>Grand Total : {grandTotal.toFixed(2)} </p>
        </div>
    );
};

export default Cart;