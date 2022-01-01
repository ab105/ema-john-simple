import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import Rating from 'react-rating';
import './Product.css'

const Product = (props) => {
    // console.log(props.product);
    // console.log(props);
    const {name,img,seller,price,stock, star} = props.product;//it is called destructuring of object
    

    // const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />


    return (
        <div className="product">
            {/* <h2>This is Product</h2> */}
            <div>
                <img className="image" src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price: {price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                {/* star rating using fontawesome*/}
                <Rating 
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color " 
                    readonly>
                </Rating>
                <br />
                {/* <button 
                 onClick={()=>props.handleAddToCart(props.product)}
                 className="btn-regular">{cartIcon}add to cart</button> */}
                <button 
                 onClick={()=>props.handleAddToCart(props.product)}
                 className="btn-regular"><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
                 {/* parameter hishebe product ke patiye dicci then shop.js theke handleAddToCart er kaj gulo kore dicce */}
            </div>
        </div>
    );
};

export default Product;